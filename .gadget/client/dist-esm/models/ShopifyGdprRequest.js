import {
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyGdprRequestSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "payload": true,
  "topic": true
};
;
;
;
;
;
class ShopifyGdprRequestManager {
  constructor(connection) {
    this.connection = connection;
    this.findOne = Object.assign(async (id, options) => {
      return await findOneRunner(this, "shopifyGdprRequest", id, DefaultShopifyGdprRequestSelection, "shopifyGdprRequest", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopifyGdprRequest",
      modelApiIdentifier: "shopifyGdprRequest",
      defaultSelection: DefaultShopifyGdprRequestSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindOne = Object.assign(async (id, options) => {
      const record = await findOneRunner(this, "shopifyGdprRequest", id, DefaultShopifyGdprRequestSelection, "shopifyGdprRequest", options, false);
      return record.isEmpty() ? null : record;
    }, {
      type: "maybeFindOne",
      findByVariableName: "id",
      operationName: "shopifyGdprRequest",
      modelApiIdentifier: "shopifyGdprRequest",
      defaultSelection: DefaultShopifyGdprRequestSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findMany = Object.assign(async (options) => {
      return await findManyRunner(this, "shopifyGdprRequests", DefaultShopifyGdprRequestSelection, "shopifyGdprRequest", options);
    }, {
      type: "findMany",
      operationName: "shopifyGdprRequests",
      modelApiIdentifier: "shopifyGdprRequest",
      defaultSelection: DefaultShopifyGdprRequestSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "shopifyGdprRequests", DefaultShopifyGdprRequestSelection, "shopifyGdprRequest", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, true);
      return list[0];
    }, {
      type: "findFirst",
      operationName: "shopifyGdprRequests",
      modelApiIdentifier: "shopifyGdprRequest",
      defaultSelection: DefaultShopifyGdprRequestSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "shopifyGdprRequests", DefaultShopifyGdprRequestSelection, "shopifyGdprRequest", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, false);
      return list?.[0] ?? null;
    }, {
      type: "maybeFindFirst",
      operationName: "shopifyGdprRequests",
      modelApiIdentifier: "shopifyGdprRequest",
      defaultSelection: DefaultShopifyGdprRequestSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findById = Object.assign(async (value, options) => {
      return await findOneByFieldRunner(this, "shopifyGdprRequests", "id", value, DefaultShopifyGdprRequestSelection, "shopifyGdprRequest", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopifyGdprRequests",
      modelApiIdentifier: "shopifyGdprRequest",
      defaultSelection: DefaultShopifyGdprRequestSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
  }
}
export {
  DefaultShopifyGdprRequestSelection,
  ShopifyGdprRequestManager
};
//# sourceMappingURL=ShopifyGdprRequest.js.map
