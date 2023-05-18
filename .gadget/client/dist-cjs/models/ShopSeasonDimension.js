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
  DefaultShopSeasonDimensionSelection: () => DefaultShopSeasonDimensionSelection,
  ShopSeasonDimensionManager: () => ShopSeasonDimensionManager
});
var import_api_client_core = __toModule(require("@gadgetinc/api-client-core"));
const DefaultShopSeasonDimensionSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "startDate": true,
  "endDate": true,
  "active": true,
  "name": true
};
;
;
;
;
;
;
;
;
async function deleteShopSeasonDimension(id, options) {
  return await (0, import_api_client_core.actionRunner)(this, "deleteShopSeasonDimension", null, "shopSeasonDimension", "shopSeasonDimension", false, {
    id: {
      value: id,
      required: true,
      type: "GadgetID"
    }
  }, options, null);
}
async function createShopSeasonDimension(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "shopSeasonDimension";
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
  return await (0, import_api_client_core.actionRunner)(this, "createShopSeasonDimension", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", "shopSeasonDimension", false, {
    "shopSeasonDimension": {
      value: newVariables.shopSeasonDimension,
      required: false,
      type: "CreateShopSeasonDimensionInput"
    }
  }, options, null);
}
async function updateShopSeasonDimension(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "shopSeasonDimension";
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
  return await (0, import_api_client_core.actionRunner)(this, "updateShopSeasonDimension", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", "shopSeasonDimension", false, {
    id: {
      value: id,
      required: true,
      type: "GadgetID"
    },
    "shopSeasonDimension": {
      value: newVariables.shopSeasonDimension,
      required: false,
      type: "UpdateShopSeasonDimensionInput"
    }
  }, options, null);
}
class ShopSeasonDimensionManager {
  constructor(connection) {
    this.connection = connection;
    this.findOne = Object.assign(async (id, options) => {
      return await (0, import_api_client_core.findOneRunner)(this, "shopSeasonDimension", id, DefaultShopSeasonDimensionSelection, "shopSeasonDimension", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopSeasonDimension",
      modelApiIdentifier: "shopSeasonDimension",
      defaultSelection: DefaultShopSeasonDimensionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindOne = Object.assign(async (id, options) => {
      const record = await (0, import_api_client_core.findOneRunner)(this, "shopSeasonDimension", id, DefaultShopSeasonDimensionSelection, "shopSeasonDimension", options, false);
      return record.isEmpty() ? null : record;
    }, {
      type: "maybeFindOne",
      findByVariableName: "id",
      operationName: "shopSeasonDimension",
      modelApiIdentifier: "shopSeasonDimension",
      defaultSelection: DefaultShopSeasonDimensionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findMany = Object.assign(async (options) => {
      return await (0, import_api_client_core.findManyRunner)(this, "shopSeasonDimensions", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", options);
    }, {
      type: "findMany",
      operationName: "shopSeasonDimensions",
      modelApiIdentifier: "shopSeasonDimension",
      defaultSelection: DefaultShopSeasonDimensionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findFirst = Object.assign(async (options) => {
      const list = await (0, import_api_client_core.findManyRunner)(this, "shopSeasonDimensions", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", __spreadProps(__spreadValues({}, options), { first: 1, last: void 0, before: void 0, after: void 0 }), true);
      return list[0];
    }, {
      type: "findFirst",
      operationName: "shopSeasonDimensions",
      modelApiIdentifier: "shopSeasonDimension",
      defaultSelection: DefaultShopSeasonDimensionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindFirst = Object.assign(async (options) => {
      const list = await (0, import_api_client_core.findManyRunner)(this, "shopSeasonDimensions", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", __spreadProps(__spreadValues({}, options), { first: 1, last: void 0, before: void 0, after: void 0 }), false);
      return (list == null ? void 0 : list[0]) ?? null;
    }, {
      type: "maybeFindFirst",
      operationName: "shopSeasonDimensions",
      modelApiIdentifier: "shopSeasonDimension",
      defaultSelection: DefaultShopSeasonDimensionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findById = Object.assign(async (value, options) => {
      return await (0, import_api_client_core.findOneByFieldRunner)(this, "shopSeasonDimensions", "id", value, DefaultShopSeasonDimensionSelection, "shopSeasonDimension", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopSeasonDimensions",
      modelApiIdentifier: "shopSeasonDimension",
      defaultSelection: DefaultShopSeasonDimensionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.delete = Object.assign(deleteShopSeasonDimension, {
      type: "action",
      operationName: "deleteShopSeasonDimension",
      namespace: null,
      modelApiIdentifier: "shopSeasonDimension",
      modelSelectionField: "shopSeasonDimension",
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
      return await (0, import_api_client_core.actionRunner)(this, "bulkDeleteShopSeasonDimensions", null, "shopSeasonDimension", "shopSeasonDimensions", true, {
        ids: {
          value: ids,
          required: true,
          type: "[GadgetID!]"
        }
      }, options, null);
    }, {
      type: "action",
      operationName: "bulkDeleteShopSeasonDimensions",
      namespace: null,
      modelApiIdentifier: "shopSeasonDimension",
      modelSelectionField: "shopSeasonDimensions",
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
    this.create = Object.assign(createShopSeasonDimension, {
      type: "action",
      operationName: "createShopSeasonDimension",
      namespace: null,
      modelApiIdentifier: "shopSeasonDimension",
      modelSelectionField: "shopSeasonDimension",
      isBulk: false,
      defaultSelection: DefaultShopSeasonDimensionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        "shopSeasonDimension": {
          required: false,
          type: "CreateShopSeasonDimensionInput"
        }
      }
    });
    this.update = Object.assign(updateShopSeasonDimension, {
      type: "action",
      operationName: "updateShopSeasonDimension",
      namespace: null,
      modelApiIdentifier: "shopSeasonDimension",
      modelSelectionField: "shopSeasonDimension",
      isBulk: false,
      defaultSelection: DefaultShopSeasonDimensionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        id: {
          required: true,
          type: "GadgetID"
        },
        "shopSeasonDimension": {
          required: false,
          type: "UpdateShopSeasonDimensionInput"
        }
      }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopSeasonDimensionSelection,
  ShopSeasonDimensionManager
});
//# sourceMappingURL=ShopSeasonDimension.js.map
