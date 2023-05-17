import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
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
  return await actionRunner(this, "runShopifySync", DefaultShopifySyncSelection, "shopifySync", "shopifySync", false, {
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
  return await actionRunner(this, "errorShopifySync", DefaultShopifySyncSelection, "shopifySync", "shopifySync", false, {
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
  return await actionRunner(this, "completeShopifySync", DefaultShopifySyncSelection, "shopifySync", "shopifySync", false, {
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
      return await findOneRunner(this, "shopifySync", id, DefaultShopifySyncSelection, "shopifySync", options);
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
      const record = await findOneRunner(this, "shopifySync", id, DefaultShopifySyncSelection, "shopifySync", options, false);
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
      return await findManyRunner(this, "shopifySyncs", DefaultShopifySyncSelection, "shopifySync", options);
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
      const list = await findManyRunner(this, "shopifySyncs", DefaultShopifySyncSelection, "shopifySync", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, true);
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
      const list = await findManyRunner(this, "shopifySyncs", DefaultShopifySyncSelection, "shopifySync", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, false);
      return list?.[0] ?? null;
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
      return await findOneByFieldRunner(this, "shopifySyncs", "id", value, DefaultShopifySyncSelection, "shopifySync", options);
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
export {
  DefaultShopifySyncSelection,
  ShopifySyncManager
};
//# sourceMappingURL=ShopifySync.js.map
