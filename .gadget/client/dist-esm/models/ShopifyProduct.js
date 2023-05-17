import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyProductSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "productCategory": true,
  "body": true,
  "shopifyCreatedAt": true,
  "handle": true,
  "productType": true,
  "publishedAt": true,
  "publishedScope": true,
  "status": true,
  "tags": true,
  "templateSuffix": true,
  "title": true,
  "shopifyUpdatedAt": true,
  "vendor": true
};
;
;
;
;
;
class ShopifyProductManager {
  constructor(connection) {
    this.connection = connection;
    this.findOne = Object.assign(async (id, options) => {
      return await findOneRunner(this, "shopifyProduct", id, DefaultShopifyProductSelection, "shopifyProduct", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopifyProduct",
      modelApiIdentifier: "shopifyProduct",
      defaultSelection: DefaultShopifyProductSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindOne = Object.assign(async (id, options) => {
      const record = await findOneRunner(this, "shopifyProduct", id, DefaultShopifyProductSelection, "shopifyProduct", options, false);
      return record.isEmpty() ? null : record;
    }, {
      type: "maybeFindOne",
      findByVariableName: "id",
      operationName: "shopifyProduct",
      modelApiIdentifier: "shopifyProduct",
      defaultSelection: DefaultShopifyProductSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findMany = Object.assign(async (options) => {
      return await findManyRunner(this, "shopifyProducts", DefaultShopifyProductSelection, "shopifyProduct", options);
    }, {
      type: "findMany",
      operationName: "shopifyProducts",
      modelApiIdentifier: "shopifyProduct",
      defaultSelection: DefaultShopifyProductSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "shopifyProducts", DefaultShopifyProductSelection, "shopifyProduct", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, true);
      return list[0];
    }, {
      type: "findFirst",
      operationName: "shopifyProducts",
      modelApiIdentifier: "shopifyProduct",
      defaultSelection: DefaultShopifyProductSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "shopifyProducts", DefaultShopifyProductSelection, "shopifyProduct", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, false);
      return list?.[0] ?? null;
    }, {
      type: "maybeFindFirst",
      operationName: "shopifyProducts",
      modelApiIdentifier: "shopifyProduct",
      defaultSelection: DefaultShopifyProductSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
  }
}
export {
  DefaultShopifyProductSelection,
  ShopifyProductManager
};
//# sourceMappingURL=ShopifyProduct.js.map
