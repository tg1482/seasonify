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
  DefaultShopProductProfileSelection: () => DefaultShopProductProfileSelection,
  ShopProductProfileManager: () => ShopProductProfileManager
});
var import_api_client_core = __toModule(require("@gadgetinc/api-client-core"));
const DefaultShopProductProfileSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "profileName": true,
  "active": true,
  "startDate": true,
  "endDate": true
};
;
;
;
;
;
;
;
;
async function deleteShopProductProfile(id, options) {
  return await (0, import_api_client_core.actionRunner)(this, "deleteShopProductProfile", null, "shopProductProfile", "shopProductProfile", false, {
    id: {
      value: id,
      required: true,
      type: "GadgetID"
    }
  }, options, null);
}
async function createShopProductProfile(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "shopProductProfile";
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
  return await (0, import_api_client_core.actionRunner)(this, "createShopProductProfile", DefaultShopProductProfileSelection, "shopProductProfile", "shopProductProfile", false, {
    "shopProductProfile": {
      value: newVariables.shopProductProfile,
      required: false,
      type: "CreateShopProductProfileInput"
    }
  }, options, null);
}
async function updateShopProductProfile(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "shopProductProfile";
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
  return await (0, import_api_client_core.actionRunner)(this, "updateShopProductProfile", DefaultShopProductProfileSelection, "shopProductProfile", "shopProductProfile", false, {
    id: {
      value: id,
      required: true,
      type: "GadgetID"
    },
    "shopProductProfile": {
      value: newVariables.shopProductProfile,
      required: false,
      type: "UpdateShopProductProfileInput"
    }
  }, options, null);
}
class ShopProductProfileManager {
  constructor(connection) {
    this.connection = connection;
    this.findOne = Object.assign(async (id, options) => {
      return await (0, import_api_client_core.findOneRunner)(this, "shopProductProfile", id, DefaultShopProductProfileSelection, "shopProductProfile", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopProductProfile",
      modelApiIdentifier: "shopProductProfile",
      defaultSelection: DefaultShopProductProfileSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindOne = Object.assign(async (id, options) => {
      const record = await (0, import_api_client_core.findOneRunner)(this, "shopProductProfile", id, DefaultShopProductProfileSelection, "shopProductProfile", options, false);
      return record.isEmpty() ? null : record;
    }, {
      type: "maybeFindOne",
      findByVariableName: "id",
      operationName: "shopProductProfile",
      modelApiIdentifier: "shopProductProfile",
      defaultSelection: DefaultShopProductProfileSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findMany = Object.assign(async (options) => {
      return await (0, import_api_client_core.findManyRunner)(this, "shopProductProfiles", DefaultShopProductProfileSelection, "shopProductProfile", options);
    }, {
      type: "findMany",
      operationName: "shopProductProfiles",
      modelApiIdentifier: "shopProductProfile",
      defaultSelection: DefaultShopProductProfileSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findFirst = Object.assign(async (options) => {
      const list = await (0, import_api_client_core.findManyRunner)(this, "shopProductProfiles", DefaultShopProductProfileSelection, "shopProductProfile", __spreadProps(__spreadValues({}, options), { first: 1, last: void 0, before: void 0, after: void 0 }), true);
      return list[0];
    }, {
      type: "findFirst",
      operationName: "shopProductProfiles",
      modelApiIdentifier: "shopProductProfile",
      defaultSelection: DefaultShopProductProfileSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindFirst = Object.assign(async (options) => {
      const list = await (0, import_api_client_core.findManyRunner)(this, "shopProductProfiles", DefaultShopProductProfileSelection, "shopProductProfile", __spreadProps(__spreadValues({}, options), { first: 1, last: void 0, before: void 0, after: void 0 }), false);
      return (list == null ? void 0 : list[0]) ?? null;
    }, {
      type: "maybeFindFirst",
      operationName: "shopProductProfiles",
      modelApiIdentifier: "shopProductProfile",
      defaultSelection: DefaultShopProductProfileSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findById = Object.assign(async (value, options) => {
      return await (0, import_api_client_core.findOneByFieldRunner)(this, "shopProductProfiles", "id", value, DefaultShopProductProfileSelection, "shopProductProfile", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopProductProfiles",
      modelApiIdentifier: "shopProductProfile",
      defaultSelection: DefaultShopProductProfileSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.delete = Object.assign(deleteShopProductProfile, {
      type: "action",
      operationName: "deleteShopProductProfile",
      namespace: null,
      modelApiIdentifier: "shopProductProfile",
      modelSelectionField: "shopProductProfile",
      isBulk: false,
      defaultSelection: null,
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        id: {
          required: true,
          type: "GadgetID"
        }
      }
    });
    this.bulkDelete = Object.assign(async (ids, options) => {
      return await (0, import_api_client_core.actionRunner)(this, "bulkDeleteShopProductProfiles", null, "shopProductProfile", "shopProductProfiles", true, {
        ids: {
          value: ids,
          required: true,
          type: "[GadgetID!]"
        }
      }, options, null);
    }, {
      type: "action",
      operationName: "bulkDeleteShopProductProfiles",
      namespace: null,
      modelApiIdentifier: "shopProductProfile",
      modelSelectionField: "shopProductProfiles",
      isBulk: true,
      defaultSelection: null,
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        ids: {
          required: true,
          type: "[GadgetID!]"
        }
      }
    });
    this.create = Object.assign(createShopProductProfile, {
      type: "action",
      operationName: "createShopProductProfile",
      namespace: null,
      modelApiIdentifier: "shopProductProfile",
      modelSelectionField: "shopProductProfile",
      isBulk: false,
      defaultSelection: DefaultShopProductProfileSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        "shopProductProfile": {
          required: false,
          type: "CreateShopProductProfileInput"
        }
      }
    });
    this.update = Object.assign(updateShopProductProfile, {
      type: "action",
      operationName: "updateShopProductProfile",
      namespace: null,
      modelApiIdentifier: "shopProductProfile",
      modelSelectionField: "shopProductProfile",
      isBulk: false,
      defaultSelection: DefaultShopProductProfileSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        id: {
          required: true,
          type: "GadgetID"
        },
        "shopProductProfile": {
          required: false,
          type: "UpdateShopProductProfileInput"
        }
      }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopProductProfileSelection,
  ShopProductProfileManager
});
//# sourceMappingURL=ShopProductProfile.js.map
