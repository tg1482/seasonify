import React, { useState } from "react";
import { useQuery } from "@gadgetinc/react";
import { Layout, Page, Spinner, Text } from "@shopify/polaris";
import { api } from "./api";
import { DataView } from "primereact/dataview";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { ProductProfileManager } from "../src/productProfileManager";

const gadgetMetaQuery = `
  query {
    gadgetMeta {
      slug
      editURL
    }
  }
`;

const combinedProductQuery = `
  query {
    shopProductProfiles(first: 250){
      edges {
        node {
          id
          profileName
          active
          profileBody
          updatedAt
          live
          shop {
            id
          }
          product {
            id
            title
            images {
              edges {
                node {
                  id
                  source
                }
              }
            }
          }
          season {
            name
            startDate
            endDate
          }
        }
      }
    }
  }
`;

const ProductPage = () => {
  const [{ data: metaData, fetching: fetchingGadgetMeta }] = useQuery({
    query: gadgetMetaQuery,
  });

  const [{ data: combinedData, fetching: fetchingCombinedData, error: combinedError }] = useQuery({
    query: combinedProductQuery,
  });

  if (combinedError) {
    return (
      <Page title="Error">
        <Text variant="bodyMd" as="p">
          Error: {combinedError.message}
        </Text>
      </Page>
    );
  }

  if (fetchingCombinedData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Spinner accessibilityLabel="Spinner example" size="large" />
      </div>
    );
  }

  if (!combinedData) return null;

  const { edges: profileEdges } = combinedData.shopProductProfiles;

  // Create a manager to help us manage the product profiles
  const profileManager = new ProductProfileManager(profileEdges, api);

  // Format the product data for the view
  const products = profileManager.formatProductDataForView();

  // Function to render the content of tab panel
  const Tab = ({ children, currentTab, setTab, index }) => {
    return (
      <div
        onClick={() => setTab(index)}
        className={`px-2 py-2 cursor-pointer w-min rounded text-sm ${
          currentTab === index ? "bg-teal-500 text-white" : "bg-white text-teal-500 hover:bg-teal-100"
        }`}
      >
        {children}
      </div>
    );
  };

  const itemTemplate = (product) => {
    const liveProfileIndex = product.profiles.findIndex((profile) => profile.live);
    const [currentTab, setTab] = useState(liveProfileIndex !== -1 ? liveProfileIndex : 0);
    const [seasonifying, setSeasonifying] = useState(false);

    const tabs = product.profiles.map((profile, index) => ({
      title: profile.season.name,
      content: profile.profileBody,
      id: profile.id,
    }));
    const [profiles, setProfiles] = useState(product.profiles);

    // Update the profile body when the tab content changes
    const updateTabContent = async (index, newContent) => {
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile, profileIndex) => {
          if (profileIndex === index) {
            return { ...profile, profileBody: newContent };
          } else {
            return profile;
          }
        })
      );
    };

    // Save the profile body when button is clicked
    const saveTabContent = async (index) => {
      const updatedProfile = profiles[index];
      try {
        await api.shopProductProfile.update(updatedProfile.id, {
          profileBody: updatedProfile.profileBody,
        });
        console.log("Updated successfully");
      } catch (error) {
        console.error("Failed to update:", error);
      }
    };

    // Seasonify the product by passing profile season, product title, and current profileBody
    // Wait for the response and then update the profile body
    // Perform a get call to useFetch("/update/seasonify-product") to refresh the data
    const seasonifyProduct = async (index) => {
      const profile = profiles[index];
      console.log(profile);
      const seasonName = profile.season.name;
      const { title } = product;
      const { profileBody } = profile;

      try {
        console.log("Seasonifying product...");
        setSeasonifying(true);
        const response = await fetch("/update/seasonify-product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            seasonName,
            productName: title,
            productBody: profileBody,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let responseBody = await response.text();
        responseBody = responseBody.trim().replace(/^\n/, "");

        await updateTabContent(index, responseBody);
        setSeasonifying(false);
        await saveTabContent(index);
      } catch (error) {
        console.error("Failed to update:", error);
      }
    };

    return (
      <div className="grid grid-cols-10 gap-2 overflow-x-auto p-4 rounded-xl border-2 border-gray-200 bg-white shadow-lg">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src={product.imageURL} alt={product.title} className="w-32 h-32 object-cover border-2 border-dashed border-gray-300" />
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center gap-2">
          <div className="text-md font-bold pl-4">{product.title}</div>
          <div className="flex flex-col rounded-sm bg-red-50 w-max p-2">
            <div className="text-sm text-900">
              {" "}
              <span className="font-bold text-xs">Live Profile:</span> {product.seasonName}
            </div>
            <div className="text-sm text-900">
              {" "}
              <span className="font-bold text-xs">From:</span> {product.seasonStartDate}
            </div>
            <div className="text-sm text-900">
              {" "}
              <span className="font-bold text-xs">To:</span> {product.seasonEndDate}
            </div>
            <div className="text-sm text-900">
              {" "}
              <span className="font-bold text-xs">Updated:</span> {product.daysSinceLastUpdate} days ago
            </div>
          </div>
        </div>
        <div className="col-span-6 flex flex-col items-center justify-center gap-1">
          <div className="flex flex-row w-full gap-3">
            {tabs.map((tab, index) => (
              <Tab key={tab.title} currentTab={currentTab} setTab={setTab} index={index}>
                {tab.title}
              </Tab>
            ))}
          </div>
          <div className="flex flex-col w-full bg-slate-50 p-2 rounded-md">
            <InputTextarea
              value={profiles[currentTab].profileBody}
              onChange={(e) => updateTabContent(currentTab, e.target.value)}
              // disabled={currentTab === 0}
              autoResize
            />
            <div className="flex justify-end gap-2 mt-2">
              <button onClick={() => saveTabContent(currentTab)} className="px-3 py-2 text-white bg-blue-500 rounded text-sm">
                Save
              </button>
              <button
                disabled={seasonifying}
                onClick={() => seasonifyProduct(currentTab)}
                className={`px-3 py-2 text-white bg-green-500 rounded text-sm` + (seasonifying ? " bg-transparent border-solid" : "")}
              >
                {seasonifying ? <Spinner accessibilityLabel="Spinner" size="small" /> : "Seasonify"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const header = (
    <div className="p-d-flex p-ai-center p-jc-between">
      <h3 className="p-m-0">Product List</h3>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
      </span>
    </div>
  );

  return (
    <Page title="Products">
      <Layout>
        <Layout.Section>
          <DataView
            value={products}
            layout="list"
            header={header}
            itemTemplate={itemTemplate}
            paginator
            rows={10}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default ProductPage;
