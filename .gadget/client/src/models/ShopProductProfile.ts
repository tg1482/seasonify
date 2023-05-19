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
      ShopProductProfile,
      ShopProductProfileSort,
      ShopProductProfileFilter,
      AvailableShopProductProfileSelection,
      BulkDeleteShopProductProfilesResult,
      CreateShopProductProfileInput,
      UpdateShopProductProfileInput,
  
} from "../types.js";

export const DefaultShopProductProfileSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "profileName": true,
  "active": true,
  "startDate": true,
  "endDate": true,
  "profileBody": true,
  "live": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "Shop Product Profile". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedShopProductProfileOrDefault<Options extends Selectable<AvailableShopProductProfileSelection>> = DeepFilterNever<
  Select<
    ShopProductProfile, 
    DefaultSelection<
      AvailableShopProductProfileSelection,
      Options,
      typeof DefaultShopProductProfileSelection
    >
  >>;

/** Options that can be passed to the `ShopProductProfileManager#findOne` method */
export interface FindOneShopProductProfileOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopProductProfileSelection;
};


/** Options that can be passed to the `ShopProductProfileManager#maybeFindOne` method */
export interface MaybeFindOneShopProductProfileOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopProductProfileSelection;
};


/** Options that can be passed to the `ShopProductProfileManager#findMany` method */
export interface FindManyShopProductProfilesOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopProductProfileSelection;

  /** Return records sorted by these sorts */
  sort?: ShopProductProfileSort | ShopProductProfileSort[] | null;

  /** Only return records matching these filters. */
  filter?: ShopProductProfileFilter | ShopProductProfileFilter[] | null;

  /** Only return records matching this freeform search string */
  search?: string | null;

  first?: number | null;

  last?: number | null;

  after?: string | null;

  before?: string | null;
};


/** Options that can be passed to the `ShopProductProfileManager#findFirst` method */
export interface FindFirstShopProductProfileOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopProductProfileSelection;

  /** Return records sorted by these sorts */
  sort?: ShopProductProfileSort | ShopProductProfileSort[] | null;

  /** Only return records matching these filters. */
  filter?: ShopProductProfileFilter | ShopProductProfileFilter[] | null;

  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `ShopProductProfileManager#maybeFindFirst` method */
export interface MaybeFindFirstShopProductProfileOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopProductProfileSelection;

  /** Return records sorted by these sorts */
  sort?: ShopProductProfileSort | ShopProductProfileSort[] | null;

  /** Only return records matching these filters. */
  filter?: ShopProductProfileFilter | ShopProductProfileFilter[] | null;

  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface DeleteShopProductProfileOptions {
};



export interface CreateShopProductProfileOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopProductProfileSelection;
};



export interface UpdateShopProductProfileOptions {

  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopProductProfileSelection;
};




    

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Default nested api identifier overload
async function deleteShopProductProfile<Options extends DeleteShopProductProfileOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopProductProfileOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;

// Function implementation
async function deleteShopProductProfile<Options extends DeleteShopProductProfileOptions>(
  this: ShopProductProfileManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopProductProfileOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteShopProductProfile",
      null,
      "shopProductProfile",
      "shopProductProfile",
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
  
    
  type createShopProductProfileVariables =
      CreateShopProductProfileInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopProductProfile<Options extends CreateShopProductProfileOptions>(
  
    variables: createShopProductProfileVariables,

  options?: LimitToKnownKeys<Options, CreateShopProductProfileOptions>
): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>

// Default nested api identifier overload
async function createShopProductProfile<Options extends CreateShopProductProfileOptions>(
  
      variables: {
          shopProductProfile?: CreateShopProductProfileInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateShopProductProfileOptions>
): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;

// Function implementation
async function createShopProductProfile<Options extends CreateShopProductProfileOptions>(
  this: ShopProductProfileManager,
  
      variables: {
          shopProductProfile?: CreateShopProductProfileInput,
        }
    
      | createShopProductProfileVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateShopProductProfileOptions>
): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>
 {
    let newVariables: {
      shopProductProfile?: CreateShopProductProfileInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "shopProductProfile";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateShopProductProfileInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateShopProductProfileInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedShopProductProfileOrDefault<Options>>(
      this,
      "createShopProductProfile",
      DefaultShopProductProfileSelection,
      "shopProductProfile",
      "shopProductProfile",
      false,
      {
        "shopProductProfile": {
          value: newVariables.shopProductProfile,
          required: false,
          type: "CreateShopProductProfileInput",
        },
      },
      options,
      null
    ));
  }
  
    
  type updateShopProductProfileVariables =
      UpdateShopProductProfileInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopProductProfile<Options extends UpdateShopProductProfileOptions>(
  id: string,
    variables: updateShopProductProfileVariables,

  options?: LimitToKnownKeys<Options, UpdateShopProductProfileOptions>
): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>

// Default nested api identifier overload
async function updateShopProductProfile<Options extends UpdateShopProductProfileOptions>(
  id: string,
      variables: {
          shopProductProfile?: UpdateShopProductProfileInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateShopProductProfileOptions>
): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;

// Function implementation
async function updateShopProductProfile<Options extends UpdateShopProductProfileOptions>(
  this: ShopProductProfileManager,
  id: string,
      variables: {
          shopProductProfile?: UpdateShopProductProfileInput,
        }
    
      | updateShopProductProfileVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateShopProductProfileOptions>
): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>
 {
    let newVariables: {
      shopProductProfile?: UpdateShopProductProfileInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "shopProductProfile";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateShopProductProfileInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateShopProductProfileInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedShopProductProfileOrDefault<Options>>(
      this,
      "updateShopProductProfile",
      DefaultShopProductProfileSelection,
      "shopProductProfile",
      "shopProductProfile",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "shopProductProfile": {
          value: newVariables.shopProductProfile,
          required: false,
          type: "UpdateShopProductProfileInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "Shop Product Profile" */
export class ShopProductProfileManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one Shop Product Profile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopProductProfileOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopProductProfileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopProductProfileOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopProductProfile";
  modelApiIdentifier: "shopProductProfile";
  defaultSelection: typeof DefaultShopProductProfileSelection;
  selectionType: AvailableShopProductProfileSelection;
  optionsType: FindOneShopProductProfileOptions;
  schemaType: Query["shopProductProfile"];
} = Object.assign(
  async <Options extends FindOneShopProductProfileOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopProductProfileOptions>) => {
    return await findOneRunner<SelectedShopProductProfileOrDefault<Options>>(
      this,
      "shopProductProfile",
      id,
      DefaultShopProductProfileSelection,
      "shopProductProfile",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopProductProfile",
    modelApiIdentifier: "shopProductProfile",
    defaultSelection: DefaultShopProductProfileSelection,
    selectionType: {} as AvailableShopProductProfileSelection,
    optionsType: {} as FindOneShopProductProfileOptions,
    schemaType: null as Query["shopProductProfile"],
  } as const
)

  
    /**
 * Finds one Shop Product Profile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopProductProfileOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopProductProfileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopProductProfileOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopProductProfile";
  modelApiIdentifier: "shopProductProfile";
  defaultSelection: typeof DefaultShopProductProfileSelection;
  selectionType: AvailableShopProductProfileSelection;
  optionsType: MaybeFindOneShopProductProfileOptions;
  schemaType: Query["shopProductProfile"];
} = Object.assign(
  async <Options extends MaybeFindOneShopProductProfileOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopProductProfileOptions>) => {
    const record = await findOneRunner<SelectedShopProductProfileOrDefault<Options>>(
      this,
      "shopProductProfile",
      id,
      DefaultShopProductProfileSelection,
      "shopProductProfile",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopProductProfile",
    modelApiIdentifier: "shopProductProfile",
    defaultSelection: DefaultShopProductProfileSelection,
    selectionType: {} as AvailableShopProductProfileSelection,
    optionsType: {} as MaybeFindOneShopProductProfileOptions,
    schemaType: null as Query["shopProductProfile"],
  } as const
)

  
    /**
 * Finds many Shop Product Profile. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopProductProfilesOptions>(options?: LimitToKnownKeys<Options, FindManyShopProductProfilesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopProductProfileOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopProductProfiles";
  modelApiIdentifier: "shopProductProfile";
  defaultSelection: typeof DefaultShopProductProfileSelection;
  selectionType: AvailableShopProductProfileSelection;
  optionsType: FindManyShopProductProfilesOptions;
  schemaType: Query["shopProductProfile"];
} = Object.assign(
  async <Options extends FindManyShopProductProfilesOptions>(options?: LimitToKnownKeys<Options, FindManyShopProductProfilesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopProductProfileOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopProductProfileOrDefault<Options>>(
      this,
      "shopProductProfiles",
      DefaultShopProductProfileSelection,
      "shopProductProfile",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopProductProfiles",
    modelApiIdentifier: "shopProductProfile",
    defaultSelection: DefaultShopProductProfileSelection,
    selectionType: {} as AvailableShopProductProfileSelection,
    optionsType: {} as FindManyShopProductProfilesOptions,
    schemaType: null as Query["shopProductProfile"],
  } as const
);
  
    /**
 * Finds the first matching Shop Product Profile. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopProductProfileOptions>(options?: LimitToKnownKeys<Options, FindFirstShopProductProfileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopProductProfileOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopProductProfiles";
  modelApiIdentifier: "shopProductProfile";
  defaultSelection: typeof DefaultShopProductProfileSelection;
  selectionType: AvailableShopProductProfileSelection;
  optionsType: FindFirstShopProductProfileOptions;
  schemaType: Query["shopProductProfile"];
} = Object.assign(
  async <Options extends FindFirstShopProductProfileOptions>(options?: LimitToKnownKeys<Options, FindFirstShopProductProfileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopProductProfileOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopProductProfileOrDefault<Options>>(
      this,
      "shopProductProfiles",
      DefaultShopProductProfileSelection,
      "shopProductProfile",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopProductProfiles",
    modelApiIdentifier: "shopProductProfile",
    defaultSelection: DefaultShopProductProfileSelection,
    selectionType: {} as AvailableShopProductProfileSelection,
    optionsType: {} as FindFirstShopProductProfileOptions,
    schemaType: null as Query["shopProductProfile"],
  } as const
);
  
    /**
 * Finds the first matching Shop Product Profile. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopProductProfileOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopProductProfileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopProductProfileOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopProductProfiles";
  modelApiIdentifier: "shopProductProfile";
  defaultSelection: typeof DefaultShopProductProfileSelection;
  selectionType: AvailableShopProductProfileSelection;
  optionsType: MaybeFindFirstShopProductProfileOptions;
  schemaType: Query["shopProductProfile"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopProductProfileOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopProductProfileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopProductProfileOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopProductProfileOrDefault<Options>>(
      this,
      "shopProductProfiles",
      DefaultShopProductProfileSelection,
      "shopProductProfile",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopProductProfiles",
    modelApiIdentifier: "shopProductProfile",
    defaultSelection: DefaultShopProductProfileSelection,
    selectionType: {} as AvailableShopProductProfileSelection,
    optionsType: {} as MaybeFindFirstShopProductProfileOptions,
    schemaType: null as Query["shopProductProfile"],
  } as const
);
  
    /**
  * Finds one Shop Product Profile by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopProductProfileOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopProductProfileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopProductProfileOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopProductProfiles";
  modelApiIdentifier: "shopProductProfile";
  defaultSelection: typeof DefaultShopProductProfileSelection;
  selectionType: AvailableShopProductProfileSelection;
  optionsType: FindOneShopProductProfileOptions;
  schemaType: Query["shopProductProfile"];
} = Object.assign(
  async <Options extends FindOneShopProductProfileOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopProductProfileOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopProductProfileOrDefault<Options>
      > & SelectedShopProductProfileOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopProductProfileOrDefault<Options>>(
      this,
      "shopProductProfiles",
      "id",
      value,
      DefaultShopProductProfileSelection,
      "shopProductProfile",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopProductProfiles",
    modelApiIdentifier: "shopProductProfile",
    defaultSelection: DefaultShopProductProfileSelection,
    selectionType: {} as AvailableShopProductProfileSelection,
    optionsType: {} as FindOneShopProductProfileOptions,
    schemaType: null as Query["shopProductProfile"],
  } as const
)
  
    delete = Object.assign(deleteShopProductProfile,
  {
    type: "action",
    operationName: "deleteShopProductProfile",
    namespace: null,
    modelApiIdentifier: "shopProductProfile",
    modelSelectionField: "shopProductProfile",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteShopProductProfileOptions,
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
  <Options extends DeleteShopProductProfileOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteShopProductProfileOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeleteShopProductProfiles";
  namespace: null;
  modelApiIdentifier: "shopProductProfile";
  modelSelectionField: "shopProductProfiles";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeleteShopProductProfileOptions;
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
  async <Options extends DeleteShopProductProfileOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteShopProductProfileOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteShopProductProfiles",
      null,
      "shopProductProfile",
      "shopProductProfiles",
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
    operationName: "bulkDeleteShopProductProfiles",
    namespace: null,
    modelApiIdentifier: "shopProductProfile",
    modelSelectionField: "shopProductProfiles",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteShopProductProfileOptions,
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
  
    create = Object.assign(createShopProductProfile,
  {
    type: "action",
    operationName: "createShopProductProfile",
    namespace: null,
    modelApiIdentifier: "shopProductProfile",
    modelSelectionField: "shopProductProfile",
    isBulk: false,
    defaultSelection: DefaultShopProductProfileSelection,
    selectionType: {} as AvailableShopProductProfileSelection,
    optionsType: {} as CreateShopProductProfileOptions,
    schemaType: null as Query["shopProductProfile"],

    variablesType: undefined as {
      
              shopProductProfile?: CreateShopProductProfileInput,
          } | undefined,

    variables: {
      "shopProductProfile": {
        required: false,
        type: "CreateShopProductProfileInput",
      },
    },
  } as const
)
  
    update = Object.assign(updateShopProductProfile,
  {
    type: "action",
    operationName: "updateShopProductProfile",
    namespace: null,
    modelApiIdentifier: "shopProductProfile",
    modelSelectionField: "shopProductProfile",
    isBulk: false,
    defaultSelection: DefaultShopProductProfileSelection,
    selectionType: {} as AvailableShopProductProfileSelection,
    optionsType: {} as UpdateShopProductProfileOptions,
    schemaType: null as Query["shopProductProfile"],

    variablesType: undefined as {
      id: string,
              shopProductProfile?: UpdateShopProductProfileInput,
          } | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopProductProfile": {
        required: false,
        type: "UpdateShopProductProfileInput",
      },
    },
  } as const
)
  
}
