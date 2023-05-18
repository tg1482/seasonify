import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
      ShopSeasonDimension,
      ShopSeasonDimensionSort,
      ShopSeasonDimensionFilter,
      AvailableShopSeasonDimensionSelection,
      BulkDeleteShopSeasonDimensionsResult,
      CreateShopSeasonDimensionInput,
      UpdateShopSeasonDimensionInput,
  
} from "../types.js";

export const DefaultShopSeasonDimensionSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "startDate": true,
  "endDate": true,
  "active": true,
  "name": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "Shop Season Dimension". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedShopSeasonDimensionOrDefault<Options extends Selectable<AvailableShopSeasonDimensionSelection>> = DeepFilterNever<
  Select<
    ShopSeasonDimension, 
    DefaultSelection<
      AvailableShopSeasonDimensionSelection,
      Options,
      typeof DefaultShopSeasonDimensionSelection
    >
  >>;

/** Options that can be passed to the `ShopSeasonDimensionManager#findOne` method */
export interface FindOneShopSeasonDimensionOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopSeasonDimensionSelection;
};


/** Options that can be passed to the `ShopSeasonDimensionManager#maybeFindOne` method */
export interface MaybeFindOneShopSeasonDimensionOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopSeasonDimensionSelection;
};


/** Options that can be passed to the `ShopSeasonDimensionManager#findMany` method */
export interface FindManyShopSeasonDimensionsOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopSeasonDimensionSelection;

  /** Return records sorted by these sorts */
  sort?: ShopSeasonDimensionSort | ShopSeasonDimensionSort[] | null;

  /** Only return records matching these filters. */
  filter?: ShopSeasonDimensionFilter | ShopSeasonDimensionFilter[] | null;

  /** Only return records matching this freeform search string */
  search?: string | null;

  first?: number | null;

  last?: number | null;

  after?: string | null;

  before?: string | null;
};


/** Options that can be passed to the `ShopSeasonDimensionManager#findFirst` method */
export interface FindFirstShopSeasonDimensionOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopSeasonDimensionSelection;

  /** Return records sorted by these sorts */
  sort?: ShopSeasonDimensionSort | ShopSeasonDimensionSort[] | null;

  /** Only return records matching these filters. */
  filter?: ShopSeasonDimensionFilter | ShopSeasonDimensionFilter[] | null;

  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `ShopSeasonDimensionManager#maybeFindFirst` method */
export interface MaybeFindFirstShopSeasonDimensionOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopSeasonDimensionSelection;

  /** Return records sorted by these sorts */
  sort?: ShopSeasonDimensionSort | ShopSeasonDimensionSort[] | null;

  /** Only return records matching these filters. */
  filter?: ShopSeasonDimensionFilter | ShopSeasonDimensionFilter[] | null;

  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface DeleteShopSeasonDimensionOptions {
};



export interface CreateShopSeasonDimensionOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopSeasonDimensionSelection;
};



export interface UpdateShopSeasonDimensionOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopSeasonDimensionSelection;
};




    

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Default nested api identifier overload
async function deleteShopSeasonDimension<Options extends DeleteShopSeasonDimensionOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopSeasonDimensionOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;

// Function implementation
async function deleteShopSeasonDimension<Options extends DeleteShopSeasonDimensionOptions>(
  this: ShopSeasonDimensionManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopSeasonDimensionOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteShopSeasonDimension",
      null,
      "shopSeasonDimension",
      "shopSeasonDimension",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
      },
      options,
      null
    ));
  }
  
    
  type createShopSeasonDimensionVariables =
      CreateShopSeasonDimensionInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopSeasonDimension<Options extends CreateShopSeasonDimensionOptions>(
  
    variables: createShopSeasonDimensionVariables,

  options?: LimitToKnownKeys<Options, CreateShopSeasonDimensionOptions>
): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>

// Default nested api identifier overload
async function createShopSeasonDimension<Options extends CreateShopSeasonDimensionOptions>(
  
      variables: {
          shopSeasonDimension?: CreateShopSeasonDimensionInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateShopSeasonDimensionOptions>
): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;

// Function implementation
async function createShopSeasonDimension<Options extends CreateShopSeasonDimensionOptions>(
  this: ShopSeasonDimensionManager,
  
      variables: {
          shopSeasonDimension?: CreateShopSeasonDimensionInput,
        }
    
      | createShopSeasonDimensionVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateShopSeasonDimensionOptions>
): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>
 {
    let newVariables: {
      shopSeasonDimension?: CreateShopSeasonDimensionInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "shopSeasonDimension";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateShopSeasonDimensionInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateShopSeasonDimensionInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedShopSeasonDimensionOrDefault<Options>>(
      this,
      "createShopSeasonDimension",
      DefaultShopSeasonDimensionSelection,
      "shopSeasonDimension",
      "shopSeasonDimension",
      false,
      {
        "shopSeasonDimension": {
          value: newVariables.shopSeasonDimension,
          required: false,
          type: "CreateShopSeasonDimensionInput",
        },
      },
      options,
      null
    ));
  }
  
    
  type updateShopSeasonDimensionVariables =
      UpdateShopSeasonDimensionInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopSeasonDimension<Options extends UpdateShopSeasonDimensionOptions>(
  id: string,
    variables: updateShopSeasonDimensionVariables,

  options?: LimitToKnownKeys<Options, UpdateShopSeasonDimensionOptions>
): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>

// Default nested api identifier overload
async function updateShopSeasonDimension<Options extends UpdateShopSeasonDimensionOptions>(
  id: string,
      variables: {
          shopSeasonDimension?: UpdateShopSeasonDimensionInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateShopSeasonDimensionOptions>
): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;

// Function implementation
async function updateShopSeasonDimension<Options extends UpdateShopSeasonDimensionOptions>(
  this: ShopSeasonDimensionManager,
  id: string,
      variables: {
          shopSeasonDimension?: UpdateShopSeasonDimensionInput,
        }
    
      | updateShopSeasonDimensionVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateShopSeasonDimensionOptions>
): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>
 {
    let newVariables: {
      shopSeasonDimension?: UpdateShopSeasonDimensionInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "shopSeasonDimension";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateShopSeasonDimensionInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateShopSeasonDimensionInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedShopSeasonDimensionOrDefault<Options>>(
      this,
      "updateShopSeasonDimension",
      DefaultShopSeasonDimensionSelection,
      "shopSeasonDimension",
      "shopSeasonDimension",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "shopSeasonDimension": {
          value: newVariables.shopSeasonDimension,
          required: false,
          type: "UpdateShopSeasonDimensionInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "Shop Season Dimension" */
export class ShopSeasonDimensionManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one Shop Season Dimension by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopSeasonDimensionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopSeasonDimensionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopSeasonDimensionOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopSeasonDimension";
  modelApiIdentifier: "shopSeasonDimension";
  defaultSelection: typeof DefaultShopSeasonDimensionSelection;
  selectionType: AvailableShopSeasonDimensionSelection;
  optionsType: FindOneShopSeasonDimensionOptions;
  schemaType: Query["shopSeasonDimension"];
} = Object.assign(
  async <Options extends FindOneShopSeasonDimensionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopSeasonDimensionOptions>) => {
    return await findOneRunner<SelectedShopSeasonDimensionOrDefault<Options>>(
      this,
      "shopSeasonDimension",
      id,
      DefaultShopSeasonDimensionSelection,
      "shopSeasonDimension",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopSeasonDimension",
    modelApiIdentifier: "shopSeasonDimension",
    defaultSelection: DefaultShopSeasonDimensionSelection,
    selectionType: {} as AvailableShopSeasonDimensionSelection,
    optionsType: {} as FindOneShopSeasonDimensionOptions,
    schemaType: null as Query["shopSeasonDimension"],
  } as const
)

  
    /**
 * Finds one Shop Season Dimension by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopSeasonDimensionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopSeasonDimensionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopSeasonDimensionOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopSeasonDimension";
  modelApiIdentifier: "shopSeasonDimension";
  defaultSelection: typeof DefaultShopSeasonDimensionSelection;
  selectionType: AvailableShopSeasonDimensionSelection;
  optionsType: MaybeFindOneShopSeasonDimensionOptions;
  schemaType: Query["shopSeasonDimension"];
} = Object.assign(
  async <Options extends MaybeFindOneShopSeasonDimensionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopSeasonDimensionOptions>) => {
    const record = await findOneRunner<SelectedShopSeasonDimensionOrDefault<Options>>(
      this,
      "shopSeasonDimension",
      id,
      DefaultShopSeasonDimensionSelection,
      "shopSeasonDimension",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopSeasonDimension",
    modelApiIdentifier: "shopSeasonDimension",
    defaultSelection: DefaultShopSeasonDimensionSelection,
    selectionType: {} as AvailableShopSeasonDimensionSelection,
    optionsType: {} as MaybeFindOneShopSeasonDimensionOptions,
    schemaType: null as Query["shopSeasonDimension"],
  } as const
)

  
    /**
 * Finds many Shop Season Dimension. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopSeasonDimensionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopSeasonDimensionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopSeasonDimensionOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopSeasonDimensions";
  modelApiIdentifier: "shopSeasonDimension";
  defaultSelection: typeof DefaultShopSeasonDimensionSelection;
  selectionType: AvailableShopSeasonDimensionSelection;
  optionsType: FindManyShopSeasonDimensionsOptions;
  schemaType: Query["shopSeasonDimension"];
} = Object.assign(
  async <Options extends FindManyShopSeasonDimensionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopSeasonDimensionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopSeasonDimensionOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopSeasonDimensionOrDefault<Options>>(
      this,
      "shopSeasonDimensions",
      DefaultShopSeasonDimensionSelection,
      "shopSeasonDimension",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopSeasonDimensions",
    modelApiIdentifier: "shopSeasonDimension",
    defaultSelection: DefaultShopSeasonDimensionSelection,
    selectionType: {} as AvailableShopSeasonDimensionSelection,
    optionsType: {} as FindManyShopSeasonDimensionsOptions,
    schemaType: null as Query["shopSeasonDimension"],
  } as const
);
  
    /**
 * Finds the first matching Shop Season Dimension. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopSeasonDimensionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopSeasonDimensionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopSeasonDimensionOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopSeasonDimensions";
  modelApiIdentifier: "shopSeasonDimension";
  defaultSelection: typeof DefaultShopSeasonDimensionSelection;
  selectionType: AvailableShopSeasonDimensionSelection;
  optionsType: FindFirstShopSeasonDimensionOptions;
  schemaType: Query["shopSeasonDimension"];
} = Object.assign(
  async <Options extends FindFirstShopSeasonDimensionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopSeasonDimensionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopSeasonDimensionOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopSeasonDimensionOrDefault<Options>>(
      this,
      "shopSeasonDimensions",
      DefaultShopSeasonDimensionSelection,
      "shopSeasonDimension",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopSeasonDimensions",
    modelApiIdentifier: "shopSeasonDimension",
    defaultSelection: DefaultShopSeasonDimensionSelection,
    selectionType: {} as AvailableShopSeasonDimensionSelection,
    optionsType: {} as FindFirstShopSeasonDimensionOptions,
    schemaType: null as Query["shopSeasonDimension"],
  } as const
);
  
    /**
 * Finds the first matching Shop Season Dimension. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopSeasonDimensionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopSeasonDimensionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopSeasonDimensionOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopSeasonDimensions";
  modelApiIdentifier: "shopSeasonDimension";
  defaultSelection: typeof DefaultShopSeasonDimensionSelection;
  selectionType: AvailableShopSeasonDimensionSelection;
  optionsType: MaybeFindFirstShopSeasonDimensionOptions;
  schemaType: Query["shopSeasonDimension"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopSeasonDimensionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopSeasonDimensionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopSeasonDimensionOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopSeasonDimensionOrDefault<Options>>(
      this,
      "shopSeasonDimensions",
      DefaultShopSeasonDimensionSelection,
      "shopSeasonDimension",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopSeasonDimensions",
    modelApiIdentifier: "shopSeasonDimension",
    defaultSelection: DefaultShopSeasonDimensionSelection,
    selectionType: {} as AvailableShopSeasonDimensionSelection,
    optionsType: {} as MaybeFindFirstShopSeasonDimensionOptions,
    schemaType: null as Query["shopSeasonDimension"],
  } as const
);
  
    /**
  * Finds one Shop Season Dimension by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopSeasonDimensionOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopSeasonDimensionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopSeasonDimensionOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopSeasonDimensions";
  modelApiIdentifier: "shopSeasonDimension";
  defaultSelection: typeof DefaultShopSeasonDimensionSelection;
  selectionType: AvailableShopSeasonDimensionSelection;
  optionsType: FindOneShopSeasonDimensionOptions;
  schemaType: Query["shopSeasonDimension"];
} = Object.assign(
  async <Options extends FindOneShopSeasonDimensionOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopSeasonDimensionOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopSeasonDimensionOrDefault<Options>
      > & SelectedShopSeasonDimensionOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopSeasonDimensionOrDefault<Options>>(
      this,
      "shopSeasonDimensions",
      "id",
      value,
      DefaultShopSeasonDimensionSelection,
      "shopSeasonDimension",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopSeasonDimensions",
    modelApiIdentifier: "shopSeasonDimension",
    defaultSelection: DefaultShopSeasonDimensionSelection,
    selectionType: {} as AvailableShopSeasonDimensionSelection,
    optionsType: {} as FindOneShopSeasonDimensionOptions,
    schemaType: null as Query["shopSeasonDimension"],
  } as const
)
  
    delete = Object.assign(deleteShopSeasonDimension,
  {
    type: "action",
    operationName: "deleteShopSeasonDimension",
    namespace: null,
    modelApiIdentifier: "shopSeasonDimension",
    modelSelectionField: "shopSeasonDimension",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteShopSeasonDimensionOptions,
    schemaType: null,

    variablesType: undefined as {
      id: string,
          } | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
    },
  } as const
)
  
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
bulkDelete: {
  <Options extends DeleteShopSeasonDimensionOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteShopSeasonDimensionOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeleteShopSeasonDimensions";
  namespace: null;
  modelApiIdentifier: "shopSeasonDimension";
  modelSelectionField: "shopSeasonDimensions";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeleteShopSeasonDimensionOptions;
  schemaType: null;
  variablesType: {
    ids: string[];
  } | undefined;
  variables: {
    ids: {
      required: true;
      type: "[GadgetID!]";
    };
  };
} = Object.assign(
  async <Options extends DeleteShopSeasonDimensionOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteShopSeasonDimensionOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteShopSeasonDimensions",
      null,
      "shopSeasonDimension",
      "shopSeasonDimensions",
      true,
      {
        ids: {
          value: ids,
          required: true,
          type: "[GadgetID!]",
        },
      },
      options,
      null
    ));
  },
  {
    type: "action",
    operationName: "bulkDeleteShopSeasonDimensions",
    namespace: null,
    modelApiIdentifier: "shopSeasonDimension",
    modelSelectionField: "shopSeasonDimensions",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteShopSeasonDimensionOptions,
    schemaType: null,

    variablesType: undefined as {
      ids: string[]
    } | undefined,

    variables: {
      ids: {
        required: true,
        type: "[GadgetID!]",
      },
    },
  } as const
)
  
    create = Object.assign(createShopSeasonDimension,
  {
    type: "action",
    operationName: "createShopSeasonDimension",
    namespace: null,
    modelApiIdentifier: "shopSeasonDimension",
    modelSelectionField: "shopSeasonDimension",
    isBulk: false,
    defaultSelection: DefaultShopSeasonDimensionSelection,
    selectionType: {} as AvailableShopSeasonDimensionSelection,
    optionsType: {} as CreateShopSeasonDimensionOptions,
    schemaType: null as Query["shopSeasonDimension"],

    variablesType: undefined as {
      
              shopSeasonDimension?: CreateShopSeasonDimensionInput,
          } | undefined,

    variables: {
      "shopSeasonDimension": {
        required: false,
        type: "CreateShopSeasonDimensionInput",
      },
    },
  } as const
)
  
    update = Object.assign(updateShopSeasonDimension,
  {
    type: "action",
    operationName: "updateShopSeasonDimension",
    namespace: null,
    modelApiIdentifier: "shopSeasonDimension",
    modelSelectionField: "shopSeasonDimension",
    isBulk: false,
    defaultSelection: DefaultShopSeasonDimensionSelection,
    selectionType: {} as AvailableShopSeasonDimensionSelection,
    optionsType: {} as UpdateShopSeasonDimensionOptions,
    schemaType: null as Query["shopSeasonDimension"],

    variablesType: undefined as {
      id: string,
              shopSeasonDimension?: UpdateShopSeasonDimensionInput,
          } | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopSeasonDimension": {
        required: false,
        type: "UpdateShopSeasonDimensionInput",
      },
    },
  } as const
)
  
}
