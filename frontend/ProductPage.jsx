import React, { useState } from "react";
import { useFindFirst, useQuery } from "@gadgetinc/react";
import {
  AlphaCard,
  Banner,
  FooterHelp,
  HorizontalStack,
  Icon,
  Image,
  Layout,
  Link,
  Page,
  Spinner,
  Text,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import { StoreMajor } from "@shopify/polaris-icons";
import { api } from "./api";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataView } from "primereact/dataview";
import { TabView, TabPanel } from "primereact/tabview";
import { Panel } from "primereact/panel";
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
          live
          shop {
            id
          }
          product {
            id
            title
            updatedAt
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

  // Get the product profiles view by compressing the profiles (product-season) into a product-[season] object
  const productProfiles = profileEdges.reduce((acc, edge) => {
    // Create a new profile without the product information
    const { product, ...profile } = edge.node;

    // Use the first image for the product
    const imageURL = product.images.edges.length > 0 ? product.images.edges[0].node.source : null;

    // Live season info
    let liveSeason = null;
    if (profile.live) {
      liveSeason = {
        name: profile.season.name,
        startDate: profile.season.startDate,
        endDate: profile.season.endDate,
      };
    }

    // If the product already exists in the accumulator, just append the profile
    if (acc[product.id]) {
      acc[product.id].profiles.push(profile);
      // If the profile is live, update the live season info
      if (liveSeason) {
        acc[product.id].liveSeason = liveSeason;
      }
    } else {
      // Otherwise, create a new entry in the accumulator for the product
      acc[product.id] = {
        ...product,
        imageURL,
        profiles: [profile],
        liveSeason,
      };
    }

    return acc;
  }, {});

  // Massage the data into a format that the data view can use
  const products = Object.values(productProfiles).map((productData, index) => {
    const { id, title, updatedAt, profiles, imageURL } = productData;

    // calculate days since last update
    const daysSinceLastUpdate = Math.floor((new Date() - new Date(updatedAt)) / (1000 * 60 * 60 * 24));

    // live season info
    const seasonName = productData.liveSeason.name;
    const seasonStartDate = new Date(productData.liveSeason.startDate).toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const seasonEndDate = new Date(productData.liveSeason.endDate).toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return {
      imageURL,
      id,
      title,
      daysSinceLastUpdate,
      seasonName,
      seasonStartDate,
      seasonEndDate,
      profiles,
    };
  });

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

    const tabs = product.profiles.map((profile, index) => ({
      title: profile.season.name,
      content: profile.profileBody,
      id: profile.id,
    }));
    const [profiles, setProfiles] = useState(product.profiles);

    // Update the profile body when the tab content changes
    const updateTabContent = (index, newContent) => {
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

    return (
      <div className="grid grid-cols-10 gap-2 overflow-x-auto p-4 rounded-xl border-2 border-gray-200 bg-white shadow-lg">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src={product.imageURL} alt={product.title} className="w-32 h-32 object-cover border-2 border-dashed border-gray-300" />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-center gap-2">
          <div className="text-md font-bold pl-2">{product.title}</div>
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
              <button className="px-3 py-2 text-white bg-green-500 rounded text-sm">Seasonify</button>
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
