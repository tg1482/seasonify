import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
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
  return await actionRunner(this, "deleteShopSeasonDimension", null, "shopSeasonDimension", "shopSeasonDimension", false, {
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
  return await actionRunner(this, "createShopSeasonDimension", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", "shopSeasonDimension", false, {
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
  return await actionRunner(this, "updateShopSeasonDimension", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", "shopSeasonDimension", false, {
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
      return await findOneRunner(this, "shopSeasonDimension", id, DefaultShopSeasonDimensionSelection, "shopSeasonDimension", options);
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
      const record = await findOneRunner(this, "shopSeasonDimension", id, DefaultShopSeasonDimensionSelection, "shopSeasonDimension", options, false);
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
      return await findManyRunner(this, "shopSeasonDimensions", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", options);
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
      const list = await findManyRunner(this, "shopSeasonDimensions", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, true);
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
      const list = await findManyRunner(this, "shopSeasonDimensions", DefaultShopSeasonDimensionSelection, "shopSeasonDimension", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, false);
      return list?.[0] ?? null;
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
      return await findOneByFieldRunner(this, "shopSeasonDimensions", "id", value, DefaultShopSeasonDimensionSelection, "shopSeasonDimension", options);
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
      return await actionRunner(this, "bulkDeleteShopSeasonDimensions", null, "shopSeasonDimension", "shopSeasonDimensions", true, {
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
export {
  DefaultShopSeasonDimensionSelection,
  ShopSeasonDimensionManager
};
//# sourceMappingURL=ShopSeasonDimension.js.map
