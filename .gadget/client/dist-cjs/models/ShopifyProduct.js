var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  DefaultShopifyProductSelection: () => DefaultShopifyProductSelection,
  ShopifyProductManager: () => ShopifyProductManager
});
var import_api_client_core = __toModule(require("@gadgetinc/api-client-core"));
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
      return await (0, import_api_client_core.findOneRunner)(this, "shopifyProduct", id, DefaultShopifyProductSelection, "shopifyProduct", options);
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
      const record = await (0, import_api_client_core.findOneRunner)(this, "shopifyProduct", id, DefaultShopifyProductSelection, "shopifyProduct", options, false);
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
      return await (0, import_api_client_core.findManyRunner)(this, "shopifyProducts", DefaultShopifyProductSelection, "shopifyProduct", options);
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
      const list = await (0, import_api_client_core.findManyRunner)(this, "shopifyProducts", DefaultShopifyProductSelection, "shopifyProduct", __spreadProps(__spreadValues({}, options), { first: 1, last: void 0, before: void 0, after: void 0 }), true);
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
      const list = await (0, import_api_client_core.findManyRunner)(this, "shopifyProducts", DefaultShopifyProductSelection, "shopifyProduct", __spreadProps(__spreadValues({}, options), { first: 1, last: void 0, before: void 0, after: void 0 }), false);
      return (list == null ? void 0 : list[0]) ?? null;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyProductSelection,
  ShopifyProductManager
});
//# sourceMappingURL=ShopifyProduct.js.map
