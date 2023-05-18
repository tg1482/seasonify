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
    shopProductProfiles(first: 200){
      edges {
        node {
          id
          profileName
          active
          body
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

  const [currentTab, setTab] = useState(0);

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

  const productProfiles = profileEdges.reduce((acc, edge) => {
    // Create a new profile without the product information
    const { product, ...profile } = edge.node;

    // Use the first image for the product
    const imageURL = product.images.edges.length > 0 ? product.images.edges[0].node.source : null;

    // If the product already exists in the accumulator, just append the profile
    if (acc[product.id]) {
      acc[product.id].profiles.push(profile);
    } else {
      // Otherwise, create a new entry in the accumulator for the product
      acc[product.id] = {
        ...product,
        imageURL,
        profiles: [profile],
      };
    }

    return acc;
  }, {});

  const products = Object.values(productProfiles).map((productData, index) => {
    const { id, title, updatedAt, profiles, imageURL } = productData;

    // calculate days since last update
    const daysSinceLastUpdate = Math.floor((new Date() - new Date(updatedAt)) / (1000 * 60 * 60 * 24));

    return {
      image: <Image source={imageURL} alt={id} style={{ width: "100px", height: "100px" }} />,
      id,
      title,
      daysSinceLastUpdate,
      profiles,
    };
  });

  const Tab = ({ children, currentTab, setTab, index }) => {
    return (
      <div
        onClick={() => setTab(index)}
        className={`px-4 py-2 cursor-pointer rounded ${currentTab === index ? "bg-blue-400 text-white" : "bg-white text-blue-500"}`}
      >
        {children}
      </div>
    );
  };

  const itemTemplate = (product) => {
    const [currentTab, setTab] = useState(0);
    const tabs = product.profiles.map((profile, index) => ({
      title: profile.season.name,
      content: profile.body,
      id: profile.id,
    }));
    const [profiles, setProfiles] = useState(product.profiles);

    const updateTabContent = (index, newContent) => {
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile, profileIndex) => {
          if (profileIndex === index) {
            return { ...profile, body: newContent };
          } else {
            return profile;
          }
        })
      );
    };

    const saveTabContent = async (index) => {
      const updatedProfile = profiles[index];
      try {
        await api.shopProductProfile.update(updatedProfile.id, {
          body: updatedProfile.body,
        });
        console.log("Updated successfully");
      } catch (error) {
        console.error("Failed to update:", error);
      }
    };

    return (
      <div className="grid grid-cols-10 gap-2 overflow-x-auto p-4 rounded-xl border-2 border-gray-200 bg-white shadow-lg">
        <div className="col-span-1 flex flex-col items-center justify-center">{product.image}</div>
        <div className="col-span-2 flex flex-col items-start justify-center gap-2">
          <div className="text-md font-bold text-900">{product.title}</div>
          <div>Updated {product.daysSinceLastUpdate} day(s) ago</div>
        </div>
        <div className="col-span-6 flex flex-col items-center justify-center gap-2">
          <div className="flex">
            {tabs.map((tab, index) => (
              <Tab key={tab.title} currentTab={currentTab} setTab={setTab} index={index}>
                {tab.title}
              </Tab>
            ))}
          </div>
          <div className="flex flex-col w-full">
            <InputTextarea
              value={profiles[currentTab].body}
              onChange={(e) => updateTabContent(currentTab, e.target.value)}
              disabled={currentTab === 0}
              autoResize
            />
            <div className="flex justify-end gap-2 mt-2">
              <button onClick={() => saveTabContent(currentTab)} className="px-4 py-2 text-white bg-blue-500 rounded">
                Save
              </button>
              <button className="px-4 py-2 text-white bg-green-500 rounded">Generate</button>
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
