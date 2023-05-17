import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyProductImageSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "shopifyCreatedAt": true,
  "height": true,
  "position": true,
  "source": true,
  "shopifyUpdatedAt": true,
  "width": true
};
;
;
;
;
;
class ShopifyProductImageManager {
  constructor(connection) {
    this.connection = connection;
    this.findOne = Object.assign(async (id, options) => {
      return await findOneRunner(this, "shopifyProductImage", id, DefaultShopifyProductImageSelection, "shopifyProductImage", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopifyProductImage",
      modelApiIdentifier: "shopifyProductImage",
      defaultSelection: DefaultShopifyProductImageSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindOne = Object.assign(async (id, options) => {
      const record = await findOneRunner(this, "shopifyProductImage", id, DefaultShopifyProductImageSelection, "shopifyProductImage", options, false);
      return record.isEmpty() ? null : record;
    }, {
      type: "maybeFindOne",
      findByVariableName: "id",
      operationName: "shopifyProductImage",
      modelApiIdentifier: "shopifyProductImage",
      defaultSelection: DefaultShopifyProductImageSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findMany = Object.assign(async (options) => {
      return await findManyRunner(this, "shopifyProductImages", DefaultShopifyProductImageSelection, "shopifyProductImage", options);
    }, {
      type: "findMany",
      operationName: "shopifyProductImages",
      modelApiIdentifier: "shopifyProductImage",
      defaultSelection: DefaultShopifyProductImageSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "shopifyProductImages", DefaultShopifyProductImageSelection, "shopifyProductImage", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, true);
      return list[0];
    }, {
      type: "findFirst",
      operationName: "shopifyProductImages",
      modelApiIdentifier: "shopifyProductImage",
      defaultSelection: DefaultShopifyProductImageSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "shopifyProductImages", DefaultShopifyProductImageSelection, "shopifyProductImage", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, false);
      return list?.[0] ?? null;
    }, {
      type: "maybeFindFirst",
      operationName: "shopifyProductImages",
      modelApiIdentifier: "shopifyProductImage",
      defaultSelection: DefaultShopifyProductImageSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
  }
}
export {
  DefaultShopifyProductImageSelection,
  ShopifyProductImageManager
};
//# sourceMappingURL=ShopifyProductImage.js.map
