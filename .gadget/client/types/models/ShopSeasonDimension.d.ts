import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopSeasonDimension, ShopSeasonDimensionSort, ShopSeasonDimensionFilter, AvailableShopSeasonDimensionSelection, CreateShopSeasonDimensionInput, UpdateShopSeasonDimensionInput } from "../types.js";
export declare const DefaultShopSeasonDimensionSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly startDate: true;
    readonly endDate: true;
    readonly active: true;
    readonly name: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "Shop Season Dimension". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export declare type SelectedShopSeasonDimensionOrDefault<Options extends Selectable<AvailableShopSeasonDimensionSelection>> = DeepFilterNever<Select<ShopSeasonDimension, DefaultSelection<AvailableShopSeasonDimensionSelection, Options, typeof DefaultShopSeasonDimensionSelection>>>;
/** Options that can be passed to the `ShopSeasonDimensionManager#findOne` method */
export interface FindOneShopSeasonDimensionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopSeasonDimensionSelection;
}
/** Options that can be passed to the `ShopSeasonDimensionManager#maybeFindOne` method */
export interface MaybeFindOneShopSeasonDimensionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopSeasonDimensionSelection;
}
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
}
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
}
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
}
export interface DeleteShopSeasonDimensionOptions {
}
export interface CreateShopSeasonDimensionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopSeasonDimensionSelection;
}
export interface UpdateShopSeasonDimensionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopSeasonDimensionSelection;
}
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopSeasonDimension<Options extends DeleteShopSeasonDimensionOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopSeasonDimensionOptions>): Promise<void extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;
declare type createShopSeasonDimensionVariables = CreateShopSeasonDimensionInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopSeasonDimension<Options extends CreateShopSeasonDimensionOptions>(variables: createShopSeasonDimensionVariables, options?: LimitToKnownKeys<Options, CreateShopSeasonDimensionOptions>): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;
declare function createShopSeasonDimension<Options extends CreateShopSeasonDimensionOptions>(variables: {
    shopSeasonDimension?: CreateShopSeasonDimensionInput;
}, options?: LimitToKnownKeys<Options, CreateShopSeasonDimensionOptions>): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;
declare type updateShopSeasonDimensionVariables = UpdateShopSeasonDimensionInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopSeasonDimension<Options extends UpdateShopSeasonDimensionOptions>(id: string, variables: updateShopSeasonDimensionVariables, options?: LimitToKnownKeys<Options, UpdateShopSeasonDimensionOptions>): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;
declare function updateShopSeasonDimension<Options extends UpdateShopSeasonDimensionOptions>(id: string, variables: {
    shopSeasonDimension?: UpdateShopSeasonDimensionInput;
}, options?: LimitToKnownKeys<Options, UpdateShopSeasonDimensionOptions>): Promise<SelectedShopSeasonDimensionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "Shop Season Dimension" */
export declare class ShopSeasonDimensionManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one Shop Season Dimension by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopSeasonDimensionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopSeasonDimensionOptions>): Promise<GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopSeasonDimension";
        modelApiIdentifier: "shopSeasonDimension";
        defaultSelection: typeof DefaultShopSeasonDimensionSelection;
        selectionType: AvailableShopSeasonDimensionSelection;
        optionsType: FindOneShopSeasonDimensionOptions;
        schemaType: Query["shopSeasonDimension"];
    };
    /**
 * Finds one Shop Season Dimension by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopSeasonDimensionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopSeasonDimensionOptions>): Promise<GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopSeasonDimension";
        modelApiIdentifier: "shopSeasonDimension";
        defaultSelection: typeof DefaultShopSeasonDimensionSelection;
        selectionType: AvailableShopSeasonDimensionSelection;
        optionsType: MaybeFindOneShopSeasonDimensionOptions;
        schemaType: Query["shopSeasonDimension"];
    };
    /**
 * Finds many Shop Season Dimension. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopSeasonDimensionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopSeasonDimensionsOptions>): Promise<GadgetRecordList<SelectedShopSeasonDimensionOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopSeasonDimensions";
        modelApiIdentifier: "shopSeasonDimension";
        defaultSelection: typeof DefaultShopSeasonDimensionSelection;
        selectionType: AvailableShopSeasonDimensionSelection;
        optionsType: FindManyShopSeasonDimensionsOptions;
        schemaType: Query["shopSeasonDimension"];
    };
    /**
 * Finds the first matching Shop Season Dimension. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopSeasonDimensionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopSeasonDimensionOptions>): Promise<GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopSeasonDimensions";
        modelApiIdentifier: "shopSeasonDimension";
        defaultSelection: typeof DefaultShopSeasonDimensionSelection;
        selectionType: AvailableShopSeasonDimensionSelection;
        optionsType: FindFirstShopSeasonDimensionOptions;
        schemaType: Query["shopSeasonDimension"];
    };
    /**
 * Finds the first matching Shop Season Dimension. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopSeasonDimensionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopSeasonDimensionOptions>): Promise<GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopSeasonDimensions";
        modelApiIdentifier: "shopSeasonDimension";
        defaultSelection: typeof DefaultShopSeasonDimensionSelection;
        selectionType: AvailableShopSeasonDimensionSelection;
        optionsType: MaybeFindFirstShopSeasonDimensionOptions;
        schemaType: Query["shopSeasonDimension"];
    };
    /**
  * Finds one Shop Season Dimension by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopSeasonDimensionOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopSeasonDimensionOptions>): Promise<GadgetRecord<SelectedShopSeasonDimensionOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopSeasonDimensions";
        modelApiIdentifier: "shopSeasonDimension";
        defaultSelection: typeof DefaultShopSeasonDimensionSelection;
        selectionType: AvailableShopSeasonDimensionSelection;
        optionsType: FindOneShopSeasonDimensionOptions;
        schemaType: Query["shopSeasonDimension"];
    };
    delete: typeof deleteShopSeasonDimension & {
        readonly type: "action";
        readonly operationName: "deleteShopSeasonDimension";
        readonly namespace: null;
        readonly modelApiIdentifier: "shopSeasonDimension";
        readonly modelSelectionField: "shopSeasonDimension";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteShopSeasonDimensionOptions;
        readonly schemaType: null;
        readonly variablesType: {
            id: string;
        } | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
        };
    };
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
    bulkDelete: {
        <Options extends DeleteShopSeasonDimensionOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopSeasonDimensionOptions>): Promise<void>;
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
    };
    create: typeof createShopSeasonDimension & {
        readonly type: "action";
        readonly operationName: "createShopSeasonDimension";
        readonly namespace: null;
        readonly modelApiIdentifier: "shopSeasonDimension";
        readonly modelSelectionField: "shopSeasonDimension";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly startDate: true;
            readonly endDate: true;
            readonly active: true;
            readonly name: true;
        };
        readonly selectionType: AvailableShopSeasonDimensionSelection;
        readonly optionsType: CreateShopSeasonDimensionOptions;
        readonly schemaType: ShopSeasonDimension | null;
        readonly variablesType: {
            shopSeasonDimension?: CreateShopSeasonDimensionInput | undefined;
        } | undefined;
        readonly variables: {
            readonly shopSeasonDimension: {
                readonly required: false;
                readonly type: "CreateShopSeasonDimensionInput";
            };
        };
    };
    update: typeof updateShopSeasonDimension & {
        readonly type: "action";
        readonly operationName: "updateShopSeasonDimension";
        readonly namespace: null;
        readonly modelApiIdentifier: "shopSeasonDimension";
        readonly modelSelectionField: "shopSeasonDimension";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly startDate: true;
            readonly endDate: true;
            readonly active: true;
            readonly name: true;
        };
        readonly selectionType: AvailableShopSeasonDimensionSelection;
        readonly optionsType: UpdateShopSeasonDimensionOptions;
        readonly schemaType: ShopSeasonDimension | null;
        readonly variablesType: {
            id: string;
            shopSeasonDimension?: UpdateShopSeasonDimensionInput | undefined;
        } | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly shopSeasonDimension: {
                readonly required: false;
                readonly type: "UpdateShopSeasonDimensionInput";
            };
        };
    };
}
export {};
