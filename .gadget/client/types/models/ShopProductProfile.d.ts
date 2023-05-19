import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopProductProfile, ShopProductProfileSort, ShopProductProfileFilter, AvailableShopProductProfileSelection, CreateShopProductProfileInput, UpdateShopProductProfileInput } from "../types.js";
export declare const DefaultShopProductProfileSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly profileName: true;
    readonly active: true;
    readonly startDate: true;
    readonly endDate: true;
    readonly profileBody: true;
    readonly live: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "Shop Product Profile". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export declare type SelectedShopProductProfileOrDefault<Options extends Selectable<AvailableShopProductProfileSelection>> = DeepFilterNever<Select<ShopProductProfile, DefaultSelection<AvailableShopProductProfileSelection, Options, typeof DefaultShopProductProfileSelection>>>;
/** Options that can be passed to the `ShopProductProfileManager#findOne` method */
export interface FindOneShopProductProfileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopProductProfileSelection;
}
/** Options that can be passed to the `ShopProductProfileManager#maybeFindOne` method */
export interface MaybeFindOneShopProductProfileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopProductProfileSelection;
}
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
}
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
}
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
}
export interface DeleteShopProductProfileOptions {
}
export interface CreateShopProductProfileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopProductProfileSelection;
}
export interface UpdateShopProductProfileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopProductProfileSelection;
}
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopProductProfile<Options extends DeleteShopProductProfileOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopProductProfileOptions>): Promise<void extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;
declare type createShopProductProfileVariables = CreateShopProductProfileInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopProductProfile<Options extends CreateShopProductProfileOptions>(variables: createShopProductProfileVariables, options?: LimitToKnownKeys<Options, CreateShopProductProfileOptions>): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;
declare function createShopProductProfile<Options extends CreateShopProductProfileOptions>(variables: {
    shopProductProfile?: CreateShopProductProfileInput;
}, options?: LimitToKnownKeys<Options, CreateShopProductProfileOptions>): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;
declare type updateShopProductProfileVariables = UpdateShopProductProfileInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopProductProfile<Options extends UpdateShopProductProfileOptions>(id: string, variables: updateShopProductProfileVariables, options?: LimitToKnownKeys<Options, UpdateShopProductProfileOptions>): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;
declare function updateShopProductProfile<Options extends UpdateShopProductProfileOptions>(id: string, variables: {
    shopProductProfile?: UpdateShopProductProfileInput;
}, options?: LimitToKnownKeys<Options, UpdateShopProductProfileOptions>): Promise<SelectedShopProductProfileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "Shop Product Profile" */
export declare class ShopProductProfileManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one Shop Product Profile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopProductProfileOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopProductProfileOptions>): Promise<GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopProductProfile";
        modelApiIdentifier: "shopProductProfile";
        defaultSelection: typeof DefaultShopProductProfileSelection;
        selectionType: AvailableShopProductProfileSelection;
        optionsType: FindOneShopProductProfileOptions;
        schemaType: Query["shopProductProfile"];
    };
    /**
 * Finds one Shop Product Profile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopProductProfileOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopProductProfileOptions>): Promise<GadgetRecord<SelectedShopProductProfileOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopProductProfile";
        modelApiIdentifier: "shopProductProfile";
        defaultSelection: typeof DefaultShopProductProfileSelection;
        selectionType: AvailableShopProductProfileSelection;
        optionsType: MaybeFindOneShopProductProfileOptions;
        schemaType: Query["shopProductProfile"];
    };
    /**
 * Finds many Shop Product Profile. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopProductProfilesOptions>(options?: LimitToKnownKeys<Options, FindManyShopProductProfilesOptions>): Promise<GadgetRecordList<SelectedShopProductProfileOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopProductProfiles";
        modelApiIdentifier: "shopProductProfile";
        defaultSelection: typeof DefaultShopProductProfileSelection;
        selectionType: AvailableShopProductProfileSelection;
        optionsType: FindManyShopProductProfilesOptions;
        schemaType: Query["shopProductProfile"];
    };
    /**
 * Finds the first matching Shop Product Profile. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopProductProfileOptions>(options?: LimitToKnownKeys<Options, FindFirstShopProductProfileOptions>): Promise<GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopProductProfiles";
        modelApiIdentifier: "shopProductProfile";
        defaultSelection: typeof DefaultShopProductProfileSelection;
        selectionType: AvailableShopProductProfileSelection;
        optionsType: FindFirstShopProductProfileOptions;
        schemaType: Query["shopProductProfile"];
    };
    /**
 * Finds the first matching Shop Product Profile. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopProductProfileOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopProductProfileOptions>): Promise<GadgetRecord<SelectedShopProductProfileOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopProductProfiles";
        modelApiIdentifier: "shopProductProfile";
        defaultSelection: typeof DefaultShopProductProfileSelection;
        selectionType: AvailableShopProductProfileSelection;
        optionsType: MaybeFindFirstShopProductProfileOptions;
        schemaType: Query["shopProductProfile"];
    };
    /**
  * Finds one Shop Product Profile by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopProductProfileOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopProductProfileOptions>): Promise<GadgetRecord<SelectedShopProductProfileOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopProductProfiles";
        modelApiIdentifier: "shopProductProfile";
        defaultSelection: typeof DefaultShopProductProfileSelection;
        selectionType: AvailableShopProductProfileSelection;
        optionsType: FindOneShopProductProfileOptions;
        schemaType: Query["shopProductProfile"];
    };
    delete: typeof deleteShopProductProfile & {
        readonly type: "action";
        readonly operationName: "deleteShopProductProfile";
        readonly namespace: null;
        readonly modelApiIdentifier: "shopProductProfile";
        readonly modelSelectionField: "shopProductProfile";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteShopProductProfileOptions;
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
        <Options extends DeleteShopProductProfileOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopProductProfileOptions>): Promise<void>;
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
    };
    create: typeof createShopProductProfile & {
        readonly type: "action";
        readonly operationName: "createShopProductProfile";
        readonly namespace: null;
        readonly modelApiIdentifier: "shopProductProfile";
        readonly modelSelectionField: "shopProductProfile";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly profileName: true;
            readonly active: true;
            readonly startDate: true;
            readonly endDate: true;
            readonly profileBody: true;
            readonly live: true;
        };
        readonly selectionType: AvailableShopProductProfileSelection;
        readonly optionsType: CreateShopProductProfileOptions;
        readonly schemaType: ShopProductProfile | null;
        readonly variablesType: {
            shopProductProfile?: CreateShopProductProfileInput | undefined;
        } | undefined;
        readonly variables: {
            readonly shopProductProfile: {
                readonly required: false;
                readonly type: "CreateShopProductProfileInput";
            };
        };
    };
    update: typeof updateShopProductProfile & {
        readonly type: "action";
        readonly operationName: "updateShopProductProfile";
        readonly namespace: null;
        readonly modelApiIdentifier: "shopProductProfile";
        readonly modelSelectionField: "shopProductProfile";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly profileName: true;
            readonly active: true;
            readonly startDate: true;
            readonly endDate: true;
            readonly profileBody: true;
            readonly live: true;
        };
        readonly selectionType: AvailableShopProductProfileSelection;
        readonly optionsType: UpdateShopProductProfileOptions;
        readonly schemaType: ShopProductProfile | null;
        readonly variablesType: {
            id: string;
            shopProductProfile?: UpdateShopProductProfileInput | undefined;
        } | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly shopProductProfile: {
                readonly required: false;
                readonly type: "UpdateShopProductProfileInput";
            };
        };
    };
}
export {};
