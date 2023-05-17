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
  DefaultShopifySyncSelection: () => DefaultShopifySyncSelection,
  ShopifySyncManager: () => ShopifySyncManager
});
var import_api_client_core = __toModule(require("@gadgetinc/api-client-core"));
const DefaultShopifySyncSelection = {
  "id": true,
  "__typename": true,
  "state": true,
  "createdAt": true,
  "updatedAt": true,
  "errorMessage": true,
  "errorDetails": true,
  "syncSince": true,
  "domain": true,
  "force": true,
  "models": true
};
;
;
;
;
;
;
;
;
async function runShopifySync(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "shopifySync";
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await (0, import_api_client_core.actionRunner)(this, "runShopifySync", DefaultShopifySyncSelection, "shopifySync", "shopifySync", false, {
    "shopifySync": {
      value: newVariables.shopifySync,
      required: false,
      type: "RunShopifySyncInput"
    },
    "startReason": {
      value: newVariables.startReason,
      required: false,
      type: "String"
    }
  }, options, null);
}
async function errorShopifySync(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "shopifySync";
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await (0, import_api_client_core.actionRunner)(this, "errorShopifySync", DefaultShopifySyncSelection, "shopifySync", "shopifySync", false, {
    id: {
      value: id,
      required: true,
      type: "GadgetID"
    },
    "shopifySync": {
      value: newVariables.shopifySync,
      required: false,
      type: "ErrorShopifySyncInput"
    }
  }, options, null);
}
async function completeShopifySync(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "shopifySync";
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await (0, import_api_client_core.actionRunner)(this, "completeShopifySync", DefaultShopifySyncSelection, "shopifySync", "shopifySync", false, {
    id: {
      value: id,
      required: true,
      type: "GadgetID"
    },
    "shopifySync": {
      value: newVariables.shopifySync,
      required: false,
      type: "CompleteShopifySyncInput"
    }
  }, options, null);
}
class ShopifySyncManager {
  constructor(connection) {
    this.connection = connection;
    this.findOne = Object.assign(async (id, options) => {
      return await (0, import_api_client_core.findOneRunner)(this, "shopifySync", id, DefaultShopifySyncSelection, "shopifySync", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopifySync",
      modelApiIdentifier: "shopifySync",
      defaultSelection: DefaultShopifySyncSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindOne = Object.assign(async (id, options) => {
      const record = await (0, import_api_client_core.findOneRunner)(this, "shopifySync", id, DefaultShopifySyncSelection, "shopifySync", options, false);
      return record.isEmpty() ? null : record;
    }, {
      type: "maybeFindOne",
      findByVariableName: "id",
      operationName: "shopifySync",
      modelApiIdentifier: "shopifySync",
      defaultSelection: DefaultShopifySyncSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findMany = Object.assign(async (options) => {
      return await (0, import_api_client_core.findManyRunner)(this, "shopifySyncs", DefaultShopifySyncSelection, "shopifySync", options);
    }, {
      type: "findMany",
      operationName: "shopifySyncs",
      modelApiIdentifier: "shopifySync",
      defaultSelection: DefaultShopifySyncSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findFirst = Object.assign(async (options) => {
      const list = await (0, import_api_client_core.findManyRunner)(this, "shopifySyncs", DefaultShopifySyncSelection, "shopifySync", __spreadProps(__spreadValues({}, options), { first: 1, last: void 0, before: void 0, after: void 0 }), true);
      return list[0];
    }, {
      type: "findFirst",
      operationName: "shopifySyncs",
      modelApiIdentifier: "shopifySync",
      defaultSelection: DefaultShopifySyncSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindFirst = Object.assign(async (options) => {
      const list = await (0, import_api_client_core.findManyRunner)(this, "shopifySyncs", DefaultShopifySyncSelection, "shopifySync", __spreadProps(__spreadValues({}, options), { first: 1, last: void 0, before: void 0, after: void 0 }), false);
      return (list == null ? void 0 : list[0]) ?? null;
    }, {
      type: "maybeFindFirst",
      operationName: "shopifySyncs",
      modelApiIdentifier: "shopifySync",
      defaultSelection: DefaultShopifySyncSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findById = Object.assign(async (value, options) => {
      return await (0, import_api_client_core.findOneByFieldRunner)(this, "shopifySyncs", "id", value, DefaultShopifySyncSelection, "shopifySync", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopifySyncs",
      modelApiIdentifier: "shopifySync",
      defaultSelection: DefaultShopifySyncSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.run = Object.assign(runShopifySync, {
      type: "action",
      operationName: "runShopifySync",
      namespace: null,
      modelApiIdentifier: "shopifySync",
      modelSelectionField: "shopifySync",
      isBulk: false,
      defaultSelection: DefaultShopifySyncSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        "shopifySync": {
          required: false,
          type: "RunShopifySyncInput"
        },
        "startReason": {
          required: false,
          type: "String"
        }
      }
    });
    this.error = Object.assign(errorShopifySync, {
      type: "action",
      operationName: "errorShopifySync",
      namespace: null,
      modelApiIdentifier: "shopifySync",
      modelSelectionField: "shopifySync",
      isBulk: false,
      defaultSelection: DefaultShopifySyncSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        id: {
          required: true,
          type: "GadgetID"
        },
        "shopifySync": {
          required: false,
          type: "ErrorShopifySyncInput"
        }
      }
    });
    this.complete = Object.assign(completeShopifySync, {
      type: "action",
      operationName: "completeShopifySync",
      namespace: null,
      modelApiIdentifier: "shopifySync",
      modelSelectionField: "shopifySync",
      isBulk: false,
      defaultSelection: DefaultShopifySyncSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        id: {
          required: true,
          type: "GadgetID"
        },
        "shopifySync": {
          required: false,
          type: "CompleteShopifySyncInput"
        }
      }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifySyncSelection,
  ShopifySyncManager
});
//# sourceMappingURL=ShopifySync.js.map
