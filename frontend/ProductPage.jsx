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

const productsQuery = `
  query {
    shopifyProducts {
      edges {
        node {
          id
          title
          body
          updatedAt
        }
      }
    }
  }
`;

const productImagesQuery = `
  query {
    shopifyProductImages {
      edges {
        node {
          id
          source
          updatedAt
        }
      }
    }
  }
`;

const ProductPage = () => {
  const [{ data, fetching, error }] = useFindFirst(api.shopifyShop);
  const [{ data: metaData, fetching: fetchingGadgetMeta }] = useQuery({
    query: gadgetMetaQuery,
  });
  const [{ data: productsData, fetching: fetchingProducts, error: productsError }] = useQuery({
    query: productsQuery,
  });
  const [{ data: productImagesData, fetching: fetchingProductImages, error: productImagesError }] = useQuery({
    query: productImagesQuery,
  });

  const renderProductList = () => {
    if (fetchingProducts || fetchingProductImages) return <Spinner accessibilityLabel="Loading products" size="large" />;

    if (productsError || productImagesError)
      return (
        <Text variant="bodyMd" as="p">
          Error loading products or images
        </Text>
      );

    const { edges: productEdges } = productsData.shopifyProducts;
    const { edges: imageEdges } = productImagesData.shopifyProductImages;

    const products = productEdges.map((product, index) => {
      const {
        node: { id, title, body, updatedAt },
      } = product;
      const {
        node: { source: imageURL },
      } = imageEdges[index];

      // calculate days since last update
      const daysSinceLastUpdate = Math.floor((new Date() - new Date(updatedAt)) / (1000 * 60 * 60 * 24));

      return {
        image: <Image source={imageURL} alt={id} style={{ width: "100px", height: "100px" }} />,
        id,
        title,
        body,
        daysSinceLastUpdate,
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
      const [tabs, setTabs] = useState([
        { title: "Current Body", content: product.body },
        { title: "Tab 2", content: "" },
        { title: "Tab 3", content: "" },
        { title: "Tab 4", content: "" },
      ]);

      const [currentTab, setTab] = useState(0);

      const updateTabContent = (index, newContent) => {
        setTabs((prevTabs) => prevTabs.map((tab, tabIndex) => (tabIndex === index ? { ...tab, content: newContent } : tab)));
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
                value={tabs[currentTab].content}
                onChange={(e) => updateTabContent(currentTab, e.target.value)}
                disabled={currentTab === 0}
                autoResize
              />
              <div className="flex justify-end gap-2 mt-2">
                <button className="px-4 py-2 text-white bg-blue-500 rounded">Save</button>
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
      <DataView
        value={products}
        layout="list"
        header={header}
        itemTemplate={itemTemplate}
        paginator
        rows={10}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        // rowsPerPageOptions={[10, 20, 50]}
      />
    );
  };

  if (error) {
    return (
      <Page title="Error">
        <Text variant="bodyMd" as="p">
          Error: {error.toString()}
        </Text>
      </Page>
    );
  }

  if (fetching || fetchingGadgetMeta) {
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

  return (
    <Page title="Products">
      <Layout>
        <Layout.Section>{renderProductList()}</Layout.Section>
      </Layout>
    </Page>
  );
};

export default ProductPage;
