import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultShopProductProfileSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "profileName": true,
  "active": true,
  "startDate": true,
  "endDate": true,
  "body": true
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
  return await actionRunner(this, "deleteShopProductProfile", null, "shopProductProfile", "shopProductProfile", false, {
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
  return await actionRunner(this, "createShopProductProfile", DefaultShopProductProfileSelection, "shopProductProfile", "shopProductProfile", false, {
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
  return await actionRunner(this, "updateShopProductProfile", DefaultShopProductProfileSelection, "shopProductProfile", "shopProductProfile", false, {
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
      return await findOneRunner(this, "shopProductProfile", id, DefaultShopProductProfileSelection, "shopProductProfile", options);
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
      const record = await findOneRunner(this, "shopProductProfile", id, DefaultShopProductProfileSelection, "shopProductProfile", options, false);
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
      return await findManyRunner(this, "shopProductProfiles", DefaultShopProductProfileSelection, "shopProductProfile", options);
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
      const list = await findManyRunner(this, "shopProductProfiles", DefaultShopProductProfileSelection, "shopProductProfile", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, true);
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
      const list = await findManyRunner(this, "shopProductProfiles", DefaultShopProductProfileSelection, "shopProductProfile", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, false);
      return list?.[0] ?? null;
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
      return await findOneByFieldRunner(this, "shopProductProfiles", "id", value, DefaultShopProductProfileSelection, "shopProductProfile", options);
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
      return await actionRunner(this, "bulkDeleteShopProductProfiles", null, "shopProductProfile", "shopProductProfiles", true, {
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
export {
  DefaultShopProductProfileSelection,
  ShopProductProfileManager
};
//# sourceMappingURL=ShopProductProfile.js.map
