import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";

type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }


/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending"|"Descending";

/** Represents the possible values of the Topic enum. */
export type ShopifyGdprRequestTopicEnum = "customers/data_request" | "customers/redact" | "shop/redact";

/** Represents the possible values of the Status enum. */
export type ShopifyProductStatusEnum = "active" | "archived" | "draft";

/** Represents one Session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];

/** Represents one Shopify GDPR Request result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyGdprRequestRecord = Scalars["JSONObject"];

/** Represents one Shopify Product result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductRecord = Scalars["JSONObject"];

/** Represents one Shopify Shop result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShopRecord = Scalars["JSONObject"];

/** Represents one Shopify Sync result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySyncRecord = Scalars["JSONObject"];

/** Represents one Shopify Product Image result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductImageRecord = Scalars["JSONObject"];

/** Represents one Shop Season Dimension result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopSeasonDimensionRecord = Scalars["JSONObject"];

/** Represents one Shop Product Profile result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopProductProfileRecord = Scalars["JSONObject"];



export interface ShopifySyncSort {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the errorMessage field. Defaults to ascending (smallest value first). */
  errorMessage?: SortOrder | null;

  /** Sort the results by the errorDetails field. Defaults to ascending (smallest value first). */
  errorDetails?: SortOrder | null;

  /** Sort the results by the syncSince field. Defaults to ascending (smallest value first). */
  syncSince?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the force field. Defaults to ascending (smallest value first). */
  force?: SortOrder | null;

  /** Sort the results by the models field. Defaults to ascending (smallest value first). */
  models?: SortOrder | null;
};



export interface ShopifySyncFilter {

  AND?: (ShopifySyncFilter | null)[];

  OR?: (ShopifySyncFilter | null)[];

  NOT?: (ShopifySyncFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  errorMessage?: StringFilter | null;

  errorDetails?: StringFilter | null;

  syncSince?: DateTimeFilter | null;

  domain?: StringFilter | null;

  force?: BooleanFilter | null;

  models?: JSONFilter | null;

  shop?: IDFilter | null;
};



export interface IDFilter {

  equals?: (Scalars['GadgetID'] | null) | null;

  notEquals?: (Scalars['GadgetID'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['GadgetID'] | null) | null)[];

  notIn?: ((Scalars['GadgetID'] | null) | null)[];

  lessThan?: (Scalars['GadgetID'] | null) | null;

  lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;

  greaterThan?: (Scalars['GadgetID'] | null) | null;

  greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};



export interface DateTimeFilter {

  equals?: Date | Scalars['ISO8601DateString'] | null;

  notEquals?: Date | Scalars['ISO8601DateString'] | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: (Date | Scalars['ISO8601DateString'] | null)[];

  notIn?: (Date | Scalars['ISO8601DateString'] | null)[];

  lessThan?: Date | Scalars['ISO8601DateString'] | null;

  lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  greaterThan?: Date | Scalars['ISO8601DateString'] | null;

  greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  before?: Date | Scalars['ISO8601DateString'] | null;

  after?: Date | Scalars['ISO8601DateString'] | null;
};



export interface StateFilter {

  isSet?: (Scalars['Boolean'] | null) | null;

  inState?: (Scalars['String'] | null) | null;
};



export interface StringFilter {

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];

  notIn?: ((Scalars['String'] | null) | null)[];

  lessThan?: (Scalars['String'] | null) | null;

  lessThanOrEqual?: (Scalars['String'] | null) | null;

  greaterThan?: (Scalars['String'] | null) | null;

  greaterThanOrEqual?: (Scalars['String'] | null) | null;

  startsWith?: (Scalars['String'] | null) | null;
};



export interface BooleanFilter {

  equals?: (Scalars['Boolean'] | null) | null;

  notEquals?: (Scalars['Boolean'] | null) | null;
};



export interface JSONFilter {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['JSON'] | null) | null;

  in?: ((Scalars['JSON'] | null) | null)[];

  notIn?: ((Scalars['JSON'] | null) | null)[];

  notEquals?: (Scalars['JSON'] | null) | null;

  matches?: (Scalars['JSON'] | null) | null;
};



export interface ShopifyGdprRequestSort {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the payload field. Defaults to ascending (smallest value first). */
  payload?: SortOrder | null;

  /** Sort the results by the topic field. Defaults to ascending (smallest value first). */
  topic?: SortOrder | null;
};



export interface ShopifyGdprRequestFilter {

  AND?: (ShopifyGdprRequestFilter | null)[];

  OR?: (ShopifyGdprRequestFilter | null)[];

  NOT?: (ShopifyGdprRequestFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  payload?: JSONFilter | null;

  topic?: SingleEnumFilter | null;

  shop?: IDFilter | null;
};



export interface SingleEnumFilter {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];
};



export interface ShopifyProductImageSort {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the height field. Defaults to ascending (smallest value first). */
  height?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the width field. Defaults to ascending (smallest value first). */
  width?: SortOrder | null;
};



export interface ShopifyProductImageFilter {

  AND?: (ShopifyProductImageFilter | null)[];

  OR?: (ShopifyProductImageFilter | null)[];

  NOT?: (ShopifyProductImageFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  height?: FloatFilter | null;

  position?: FloatFilter | null;

  source?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  width?: FloatFilter | null;

  product?: IDFilter | null;

  shop?: IDFilter | null;
};



export interface FloatFilter {

  equals?: (Scalars['Float'] | null) | null;

  notEquals?: (Scalars['Float'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['Float'] | null) | null)[];

  notIn?: ((Scalars['Float'] | null) | null)[];

  lessThan?: (Scalars['Float'] | null) | null;

  lessThanOrEqual?: (Scalars['Float'] | null) | null;

  greaterThan?: (Scalars['Float'] | null) | null;

  greaterThanOrEqual?: (Scalars['Float'] | null) | null;
};



export interface ShopProductProfileSort {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the profileName field. Defaults to ascending (smallest value first). */
  profileName?: SortOrder | null;

  /** Sort the results by the active field. Defaults to ascending (smallest value first). */
  active?: SortOrder | null;

  /** Sort the results by the startDate field. Defaults to ascending (smallest value first). */
  startDate?: SortOrder | null;

  /** Sort the results by the endDate field. Defaults to ascending (smallest value first). */
  endDate?: SortOrder | null;

  /** Sort the results by the profileBody field. Defaults to ascending (smallest value first). */
  profileBody?: SortOrder | null;

  /** Sort the results by the live field. Defaults to ascending (smallest value first). */
  live?: SortOrder | null;
};



export interface ShopProductProfileFilter {

  AND?: (ShopProductProfileFilter | null)[];

  OR?: (ShopProductProfileFilter | null)[];

  NOT?: (ShopProductProfileFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  product?: IDFilter | null;

  shop?: IDFilter | null;

  season?: IDFilter | null;

  profileName?: StringFilter | null;

  active?: BooleanFilter | null;

  startDate?: DateFilter | null;

  endDate?: DateFilter | null;

  profileBody?: StringFilter | null;

  live?: BooleanFilter | null;
};



export interface DateFilter {

  equals?: Date | Scalars['ISO8601DateString'] | null;

  notEquals?: Date | Scalars['ISO8601DateString'] | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: (Date | Scalars['ISO8601DateString'] | null)[];

  notIn?: (Date | Scalars['ISO8601DateString'] | null)[];

  lessThan?: Date | Scalars['ISO8601DateString'] | null;

  lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  greaterThan?: Date | Scalars['ISO8601DateString'] | null;

  greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  before?: Date | Scalars['ISO8601DateString'] | null;

  beforeOrOn?: Date | Scalars['ISO8601DateString'] | null;

  after?: Date | Scalars['ISO8601DateString'] | null;

  afterOrOn?: Date | Scalars['ISO8601DateString'] | null;
};



export interface ShopifyProductSort {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the productCategory field. Defaults to ascending (smallest value first). */
  productCategory?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the productType field. Defaults to ascending (smallest value first). */
  productType?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the publishedScope field. Defaults to ascending (smallest value first). */
  publishedScope?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;
};



export interface ShopifyProductFilter {

  AND?: (ShopifyProductFilter | null)[];

  OR?: (ShopifyProductFilter | null)[];

  NOT?: (ShopifyProductFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  productCategory?: JSONFilter | null;

  body?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  handle?: StringFilter | null;

  productType?: StringFilter | null;

  publishedAt?: DateTimeFilter | null;

  publishedScope?: StringFilter | null;

  status?: SingleEnumFilter | null;

  tags?: JSONFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  vendor?: StringFilter | null;

  shop?: IDFilter | null;
};



export interface ShopSeasonDimensionSort {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the startDate field. Defaults to ascending (smallest value first). */
  startDate?: SortOrder | null;

  /** Sort the results by the endDate field. Defaults to ascending (smallest value first). */
  endDate?: SortOrder | null;

  /** Sort the results by the active field. Defaults to ascending (smallest value first). */
  active?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;
};



export interface ShopSeasonDimensionFilter {

  AND?: (ShopSeasonDimensionFilter | null)[];

  OR?: (ShopSeasonDimensionFilter | null)[];

  NOT?: (ShopSeasonDimensionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  startDate?: DateTimeFilter | null;

  endDate?: DateTimeFilter | null;

  active?: BooleanFilter | null;

  name?: StringFilter | null;

  shop?: IDFilter | null;
};



export interface ShopifyShopSort {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the accessToken field. Defaults to ascending (smallest value first). */
  accessToken?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the checkoutApiSupported field. Defaults to ascending (smallest value first). */
  checkoutApiSupported?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the cookieConsentLevel field. Defaults to ascending (smallest value first). */
  cookieConsentLevel?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
  countryName?: SortOrder | null;

  /** Sort the results by the countyTaxes field. Defaults to ascending (smallest value first). */
  countyTaxes?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the customerEmail field. Defaults to ascending (smallest value first). */
  customerEmail?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the eligibleForCardReaderGiveaway field. Defaults to ascending (smallest value first). */
  eligibleForCardReaderGiveaway?: SortOrder | null;

  /** Sort the results by the eligibleForPayments field. Defaults to ascending (smallest value first). */
  eligibleForPayments?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the enabledPresentmentCurrencies field. Defaults to ascending (smallest value first). */
  enabledPresentmentCurrencies?: SortOrder | null;

  /** Sort the results by the finances field. Defaults to ascending (smallest value first). */
  finances?: SortOrder | null;

  /** Sort the results by the forceSsl field. Defaults to ascending (smallest value first). */
  forceSsl?: SortOrder | null;

  /** Sort the results by the googleAppsDomain field. Defaults to ascending (smallest value first). */
  googleAppsDomain?: SortOrder | null;

  /** Sort the results by the googleAppsLoginEnabled field. Defaults to ascending (smallest value first). */
  googleAppsLoginEnabled?: SortOrder | null;

  /** Sort the results by the grantedScopes field. Defaults to ascending (smallest value first). */
  grantedScopes?: SortOrder | null;

  /** Sort the results by the hasDiscounts field. Defaults to ascending (smallest value first). */
  hasDiscounts?: SortOrder | null;

  /** Sort the results by the hasGiftCards field. Defaults to ascending (smallest value first). */
  hasGiftCards?: SortOrder | null;

  /** Sort the results by the hasStorefront field. Defaults to ascending (smallest value first). */
  hasStorefront?: SortOrder | null;

  /** Sort the results by the ianaTimezone field. Defaults to ascending (smallest value first). */
  ianaTimezone?: SortOrder | null;

  /** Sort the results by the installedViaApiKey field. Defaults to ascending (smallest value first). */
  installedViaApiKey?: SortOrder | null;

  /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
  latitude?: SortOrder | null;

  /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
  longitude?: SortOrder | null;

  /** Sort the results by the marketingSmsContentEnabledAtCheckout field. Defaults to ascending (smallest value first). */
  marketingSmsContentEnabledAtCheckout?: SortOrder | null;

  /** Sort the results by the moneyFormat field. Defaults to ascending (smallest value first). */
  moneyFormat?: SortOrder | null;

  /** Sort the results by the moneyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the multiLocationEnabled field. Defaults to ascending (smallest value first). */
  multiLocationEnabled?: SortOrder | null;

  /** Sort the results by the myshopifyDomain field. Defaults to ascending (smallest value first). */
  myshopifyDomain?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the passwordEnabled field. Defaults to ascending (smallest value first). */
  passwordEnabled?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the planDisplayName field. Defaults to ascending (smallest value first). */
  planDisplayName?: SortOrder | null;

  /** Sort the results by the planName field. Defaults to ascending (smallest value first). */
  planName?: SortOrder | null;

  /** Sort the results by the preLaunchEnabled field. Defaults to ascending (smallest value first). */
  preLaunchEnabled?: SortOrder | null;

  /** Sort the results by the primaryLocale field. Defaults to ascending (smallest value first). */
  primaryLocale?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the registeredWebhooks field. Defaults to ascending (smallest value first). */
  registeredWebhooks?: SortOrder | null;

  /** Sort the results by the requiresExtraPaymentsAgreement field. Defaults to ascending (smallest value first). */
  requiresExtraPaymentsAgreement?: SortOrder | null;

  /** Sort the results by the setupRequired field. Defaults to ascending (smallest value first). */
  setupRequired?: SortOrder | null;

  /** Sort the results by the shopOwner field. Defaults to ascending (smallest value first). */
  shopOwner?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the taxShipping field. Defaults to ascending (smallest value first). */
  taxShipping?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the timezone field. Defaults to ascending (smallest value first). */
  timezone?: SortOrder | null;

  /** Sort the results by the transactionalSmsDisabled field. Defaults to ascending (smallest value first). */
  transactionalSmsDisabled?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
  weightUnit?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;
};



export interface ShopifyShopFilter {

  AND?: (ShopifyShopFilter | null)[];

  OR?: (ShopifyShopFilter | null)[];

  NOT?: (ShopifyShopFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  accessToken?: StringFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  checkoutApiSupported?: BooleanFilter | null;

  city?: StringFilter | null;

  cookieConsentLevel?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  countryName?: StringFilter | null;

  countyTaxes?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  customerEmail?: StringFilter | null;

  domain?: StringFilter | null;

  eligibleForCardReaderGiveaway?: BooleanFilter | null;

  eligibleForPayments?: BooleanFilter | null;

  email?: StringFilter | null;

  enabledPresentmentCurrencies?: JSONFilter | null;

  finances?: BooleanFilter | null;

  forceSsl?: BooleanFilter | null;

  googleAppsDomain?: StringFilter | null;

  googleAppsLoginEnabled?: BooleanFilter | null;

  grantedScopes?: JSONFilter | null;

  hasDiscounts?: BooleanFilter | null;

  hasGiftCards?: BooleanFilter | null;

  hasStorefront?: BooleanFilter | null;

  ianaTimezone?: StringFilter | null;

  installedViaApiKey?: StringFilter | null;

  latitude?: FloatFilter | null;

  longitude?: FloatFilter | null;

  marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;

  moneyFormat?: StringFilter | null;

  moneyInEmailsFormat?: StringFilter | null;

  moneyWithCurrencyFormat?: StringFilter | null;

  moneyWithCurrencyInEmailsFormat?: StringFilter | null;

  multiLocationEnabled?: BooleanFilter | null;

  myshopifyDomain?: StringFilter | null;

  name?: StringFilter | null;

  passwordEnabled?: BooleanFilter | null;

  phone?: StringFilter | null;

  planDisplayName?: StringFilter | null;

  planName?: StringFilter | null;

  preLaunchEnabled?: BooleanFilter | null;

  primaryLocale?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  registeredWebhooks?: JSONFilter | null;

  requiresExtraPaymentsAgreement?: BooleanFilter | null;

  setupRequired?: BooleanFilter | null;

  shopOwner?: StringFilter | null;

  source?: StringFilter | null;

  taxShipping?: BooleanFilter | null;

  taxesIncluded?: BooleanFilter | null;

  timezone?: StringFilter | null;

  transactionalSmsDisabled?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  weightUnit?: StringFilter | null;

  zipCode?: StringFilter | null;
};



export interface RunShopifySyncInput {

  errorMessage?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export interface ShopifyShopBelongsToInput {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export interface CompleteShopifySyncInput {

  errorMessage?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export interface ErrorShopifySyncInput {

  errorMessage?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export interface CreateShopSeasonDimensionInput {

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  active?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  shopProductProfiles?: (ShopProductProfileHasManyInput | null)[];
};



export interface ShopProductProfileHasManyInput {

  create?: NestedShopProductProfileCreateInput | null;

  update?: NestedShopProductProfileUpdateInput | null;

  delete?: NestedShopProductProfileDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopProductProfileInput | null;
};



export interface NestedShopProductProfileCreateInput {

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;

  season?: ShopSeasonDimensionBelongsToInput | null;

  profileName?: (Scalars['String'] | null) | null;

  active?: (Scalars['Boolean'] | null) | null;

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  profileBody?: (Scalars['String'] | null) | null;

  live?: (Scalars['Boolean'] | null) | null;
};



export interface ShopifyProductBelongsToInput {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export interface ShopSeasonDimensionBelongsToInput {

  create?: NestedShopSeasonDimensionCreateInput | null;

  update?: NestedShopSeasonDimensionUpdateInput | null;

  delete?: NestedShopSeasonDimensionDeleteInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export interface NestedShopSeasonDimensionCreateInput {

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  active?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  shopProductProfiles?: (ShopProductProfileHasManyInput | null)[];
};



export interface NestedShopSeasonDimensionUpdateInput {

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  active?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  shopProductProfiles?: (ShopProductProfileHasManyInput | null)[];

  id: (Scalars['GadgetID'] | null);
};



export interface NestedShopSeasonDimensionDeleteInput {

  id: (Scalars['GadgetID'] | null);
};



export interface NestedShopProductProfileUpdateInput {

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;

  season?: ShopSeasonDimensionBelongsToInput | null;

  profileName?: (Scalars['String'] | null) | null;

  active?: (Scalars['Boolean'] | null) | null;

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  profileBody?: (Scalars['String'] | null) | null;

  live?: (Scalars['Boolean'] | null) | null;

  id: (Scalars['GadgetID'] | null);
};



export interface NestedShopProductProfileDeleteInput {

  id: (Scalars['GadgetID'] | null);
};



export interface ConvergeShopProductProfileInput {

  /** The new list of records to converge to */
  values: (ConvergeShopProductProfileValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export interface ConvergeShopProductProfileValues {

  id?: (Scalars['GadgetID'] | null) | null;

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;

  season?: ShopSeasonDimensionBelongsToInput | null;

  profileName?: (Scalars['String'] | null) | null;

  active?: (Scalars['Boolean'] | null) | null;

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  profileBody?: (Scalars['String'] | null) | null;

  live?: (Scalars['Boolean'] | null) | null;
};



export interface ConvergeActionMap {

  /** One of the model action's API identifiers. Specifies which action to use to create new records that are in the set of specified records but not yet in the database. Defaults to the action named `create` if it exists. */
  create?: (Scalars['String'] | null) | null;

  /** One of the model action's API identifiers. Specifies which action to use to update new records that are in the set of specified records and already in the database, but maybe have different field values. Defaults to the action named `update` if it exists. */
  update?: (Scalars['String'] | null) | null;

  /** One of the model action's API identifiers. Specifies which action to use to delete records that are not in the set of specified records but exist in the database. Defaults to the action named `delete` if it exists. */
  delete?: (Scalars['String'] | null) | null;
};



export interface UpdateShopSeasonDimensionInput {

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  active?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  shopProductProfiles?: (ShopProductProfileHasManyInput | null)[];
};



export interface CreateShopProductProfileInput {

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;

  season?: ShopSeasonDimensionBelongsToInput | null;

  profileName?: (Scalars['String'] | null) | null;

  active?: (Scalars['Boolean'] | null) | null;

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  profileBody?: (Scalars['String'] | null) | null;

  live?: (Scalars['Boolean'] | null) | null;
};



export interface UpdateShopProductProfileInput {

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;

  season?: ShopSeasonDimensionBelongsToInput | null;

  profileName?: (Scalars['String'] | null) | null;

  active?: (Scalars['Boolean'] | null) | null;

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  profileBody?: (Scalars['String'] | null) | null;

  live?: (Scalars['Boolean'] | null) | null;
};



export interface InternalSessionInput {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: ((Scalars['String'] | null))[];

  shop?: InternalBelongsToInput | null;

  shopifySID?: (Scalars['String'] | null) | null;
};



export interface InternalBelongsToInput {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export interface InternalShopifyGdprRequestInput {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  payload?: (Scalars['JSON'] | null) | null;

  topic?: ShopifyGdprRequestTopicEnum | null;

  shop?: InternalBelongsToInput | null;
};



export interface InternalShopifyProductInput {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  productCategory?: (Scalars['JSON'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  handle?: (Scalars['String'] | null) | null;

  productType?: (Scalars['String'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  status?: ShopifyProductStatusEnum | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  vendor?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export interface InternalShopifyShopInput {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  accessToken?: (Scalars['String'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  checkoutApiSupported?: (Scalars['Boolean'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  cookieConsentLevel?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  customerEmail?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;

  finances?: (Scalars['Boolean'] | null) | null;

  forceSsl?: (Scalars['Boolean'] | null) | null;

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  grantedScopes?: (Scalars['JSON'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  ianaTimezone?: (Scalars['String'] | null) | null;

  installedViaApiKey?: (Scalars['String'] | null) | null;

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  registeredWebhooks?: (Scalars['JSON'] | null) | null;

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weightUnit?: (Scalars['String'] | null) | null;

  zipCode?: (Scalars['String'] | null) | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyShopAtomicsInput | null;
};



export interface InternalShopifyShopAtomicsInput {

  /** Numeric atomic commands for operating on latitude. */
  latitude?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on longitude. */
  longitude?: (NumericAtomicFieldUpdateInput)[];
};



export interface NumericAtomicFieldUpdateInput {

  /** A number to atomically increment the field value by. Can only be used on numeric fields. */
  increment?: (Scalars['Float'] | null) | null;

  /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
  decrement?: (Scalars['Float'] | null) | null;
};



export interface InternalShopifySyncInput {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorMessage?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export interface InternalShopifyProductImageInput {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  height?: (Scalars['Float'] | null) | null;

  position?: (Scalars['Float'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  width?: (Scalars['Float'] | null) | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyProductImageAtomicsInput | null;
};



export interface InternalShopifyProductImageAtomicsInput {

  /** Numeric atomic commands for operating on height. */
  height?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on width. */
  width?: (NumericAtomicFieldUpdateInput)[];
};



export interface InternalShopSeasonDimensionInput {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  active?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export interface InternalShopProductProfileInput {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  season?: InternalBelongsToInput | null;

  profileName?: (Scalars['String'] | null) | null;

  active?: (Scalars['Boolean'] | null) | null;

  startDate?: Date | Scalars['ISO8601DateString'] | null;

  endDate?: Date | Scalars['ISO8601DateString'] | null;

  profileBody?: (Scalars['String'] | null) | null;

  live?: (Scalars['Boolean'] | null) | null;
};


/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {

  /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
  CurrencyAmount: string;

  /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
  ISO8601DateString: string;

  /** A file object produced by a browser for uploading to cloud storage */
  Upload: File;

  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;

  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: JSONObject;

  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;

  /** The ID of a record in Gadget */
  GadgetID: string;

  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;

  /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
  RecordState: (string | { [key: string]: Scalars['RecordState'] });

  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: JSONValue;

  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;

  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;

  /** A date-time or full-date string at UTC, such as 2007-12-03 or 2007-12-03T10:15:30Z, compliant with the `full-date` or `date-time` formats outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. If a full date-time is passed, timezone will be ignored and it will be truncated to just the date part. */
  DateOrDateTime: Date;

  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: Date;

  /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
  HydrationPlan: unknown;
};


/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {

  __typename: 'SimpleError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The Gadget platform error code for this error. */
  code: Scalars['String'];

  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
};



export type AvailableSimpleErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;
};



export interface ExecutionError {

  __typename: 'SimpleError'|'InvalidRecordError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The Gadget platform error code for this error. */
  code: Scalars['String'];

  /** The stack for any exception that caused the error. Only available for super users. */
  stack: (Scalars['String'] | null);
};



export type AvailableExecutionErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error. Only available for super users. */
  stack?: boolean | null | undefined;
};


/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {

  __typename: 'InvalidRecordError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The Gadget platform error code for this InvalidRecordError. */
  code: Scalars['String'];

  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);

  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField: (Scalars['JSONObject'] | null);

  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors: InvalidFieldError[];

  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record: (Scalars['JSONObject'] | null);

  /** The model of the record which failed validation */
  model: (GadgetModel | null);
};



export type AvailableInvalidRecordErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this InvalidRecordError. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;

  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField?: boolean | null | undefined;

  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors?: AvailableInvalidFieldErrorSelection;

  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record?: boolean | null | undefined;

  /** The model of the record which failed validation */
  model?: AvailableGadgetModelSelection;
};


/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export interface InvalidFieldError {

  __typename: 'InvalidFieldError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier: Scalars['String'];
};



export type AvailableInvalidFieldErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier?: boolean | null | undefined;
};



export interface GadgetModel {

  __typename: 'GadgetModel';

  key: Scalars['String'];

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  filterable: Scalars['Boolean'];

  sortable: Scalars['Boolean'];

  searchable: Scalars['Boolean'];

  fields: GadgetField[];

  actions: GadgetAction[];

  pluralName: Scalars['String'];

  pluralApiIdentifier: Scalars['String'];

  currentSingletonApiIdentifier: (Scalars['String'] | null);

  initialCreatedState: (Scalars['String'] | null);
};



export type AvailableGadgetModelSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  searchable?: boolean | null | undefined;

  fields?: AvailableGadgetFieldSelection;

  actions?: AvailableGadgetActionSelection;

  pluralName?: boolean | null | undefined;

  pluralApiIdentifier?: boolean | null | undefined;

  currentSingletonApiIdentifier?: boolean | null | undefined;

  initialCreatedState?: boolean | null | undefined;
};



export interface GadgetField {

  __typename: 'GadgetField';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  fieldType: Scalars['String'];

  configuration: (GadgetFieldConfiguration | null);

  isUniqueField: Scalars['Boolean'];

  sortable: Scalars['Boolean'];

  filterable: Scalars['Boolean'];
};



export type AvailableGadgetFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigurationSelection;

  isUniqueField?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  filterable?: boolean | null | undefined;
};



export interface GadgetFieldConfiguration {

  __typename: 'GadgetFieldConfiguration';

  relatedModelKey: (Scalars['String'] | null);
};



export type AvailableGadgetFieldConfigurationSelection = {

  __typename?: boolean | null | undefined;

  relatedModelKey?: boolean | null | undefined;
};



export interface GadgetAction {

  __typename: 'GadgetAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  requiresInput: Scalars['Boolean'];

  hasDeleteRecordEffect: Scalars['Boolean'];

  hasCreateOrUpdateEffect: Scalars['Boolean'];

  operatesWithRecordIdentity: Scalars['Boolean'];

  possibleTransitions: Scalars['JSONObject'];

  availableInBulk: Scalars['Boolean'];

  bulkApiIdentifier: (Scalars['String'] | null);

  triggers: GadgetTrigger[];

  examples: (GadgetActionGraphQLType | null);
};



export type AvailableGadgetActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  hasDeleteRecordEffect?: boolean | null | undefined;

  hasCreateOrUpdateEffect?: boolean | null | undefined;

  operatesWithRecordIdentity?: boolean | null | undefined;

  possibleTransitions?: boolean | null | undefined;

  availableInBulk?: boolean | null | undefined;

  bulkApiIdentifier?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetActionGraphQLTypeSelection;
};



export interface GadgetTrigger {

  __typename: 'GadgetTrigger';

  specID: Scalars['String'];
};



export type AvailableGadgetTriggerSelection = {

  __typename?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export interface GadgetActionGraphQLType {

  __typename: 'GadgetActionGraphQLType';

  exampleMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleBulkMutation: (Scalars['String'] | null);

  bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};



export type AvailableGadgetActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  exampleMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleBulkMutation?: boolean | null | undefined;

  bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};



export interface Query {

  __typename: 'Query';

  session: (Session | null);

  sessions: SessionConnection;

  shopifyGdprRequest: (ShopifyGdprRequest | null);

  shopifyGdprRequests: ShopifyGdprRequestConnection;

  shopifyProduct: (ShopifyProduct | null);

  shopifyProducts: ShopifyProductConnection;

  shopifyShop: (ShopifyShop | null);

  shopifyShops: ShopifyShopConnection;

  shopifySync: (ShopifySync | null);

  shopifySyncs: ShopifySyncConnection;

  shopifyProductImage: (ShopifyProductImage | null);

  shopifyProductImages: ShopifyProductImageConnection;

  shopSeasonDimension: (ShopSeasonDimension | null);

  shopSeasonDimensions: ShopSeasonDimensionConnection;

  shopProductProfile: (ShopProductProfile | null);

  shopProductProfiles: ShopProductProfileConnection;

  internal: (InternalQueries | null);

  currentSession: (Session | null);

  shopifyConnection: Shopify;
};



export type AvailableQuerySelection = {

  __typename?: boolean | null | undefined;

  session?: AvailableSessionSelection;

  sessions?: AvailableSessionConnectionSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;

  shopifyGdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  shopifyProduct?: AvailableShopifyProductSelection;

  shopifyProducts?: AvailableShopifyProductConnectionSelection;

  shopifyShop?: AvailableShopifyShopSelection;

  shopifyShops?: AvailableShopifyShopConnectionSelection;

  shopifySync?: AvailableShopifySyncSelection;

  shopifySyncs?: AvailableShopifySyncConnectionSelection;

  shopifyProductImage?: AvailableShopifyProductImageSelection;

  shopifyProductImages?: AvailableShopifyProductImageConnectionSelection;

  shopSeasonDimension?: AvailableShopSeasonDimensionSelection;

  shopSeasonDimensions?: AvailableShopSeasonDimensionConnectionSelection;

  shopProductProfile?: AvailableShopProductProfileSelection;

  shopProductProfiles?: AvailableShopProductProfileConnectionSelection;

  internal?: AvailableInternalQueriesSelection;

  currentSession?: AvailableSessionSelection;

  shopifyConnection?: AvailableShopifySelection;
};



export interface Session {

  __typename: 'Session';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  roles: Role[];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  shopifySID: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableSessionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  roles?: AvailableRoleSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  shopifySID?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export interface Role {

  __typename: 'Role';

  /** The stable identifier for this role. Never changes. */
  key: Scalars['String'];

  /** The human readable name for this role. Can be changed. */
  name: Scalars['String'];
};



export type AvailableRoleSelection = {

  __typename?: boolean | null | undefined;

  /** The stable identifier for this role. Never changes. */
  key?: boolean | null | undefined;

  /** The human readable name for this role. Can be changed. */
  name?: boolean | null | undefined;
};



export interface ShopifyShop {

  __typename: 'ShopifyShop';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  accessToken: (Scalars['String'] | null);

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  checkoutApiSupported: (Scalars['Boolean'] | null);

  city: (Scalars['String'] | null);

  cookieConsentLevel: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  countryName: (Scalars['String'] | null);

  countyTaxes: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  customerEmail: (Scalars['String'] | null);

  domain: (Scalars['String'] | null);

  eligibleForCardReaderGiveaway: (Scalars['Boolean'] | null);

  eligibleForPayments: (Scalars['Boolean'] | null);

  email: (Scalars['String'] | null);

  enabledPresentmentCurrencies: (Scalars['JSON'] | null);

  finances: (Scalars['Boolean'] | null);

  forceSsl: (Scalars['Boolean'] | null);

  googleAppsDomain: (Scalars['String'] | null);

  googleAppsLoginEnabled: (Scalars['Boolean'] | null);

  grantedScopes: (Scalars['JSON'] | null);

  syncs: ShopifySyncConnection;

  hasDiscounts: (Scalars['Boolean'] | null);

  hasGiftCards: (Scalars['Boolean'] | null);

  hasStorefront: (Scalars['Boolean'] | null);

  ianaTimezone: (Scalars['String'] | null);

  installedViaApiKey: (Scalars['String'] | null);

  latitude: (Scalars['Float'] | null);

  longitude: (Scalars['Float'] | null);

  marketingSmsContentEnabledAtCheckout: (Scalars['Boolean'] | null);

  moneyFormat: (Scalars['String'] | null);

  moneyInEmailsFormat: (Scalars['String'] | null);

  moneyWithCurrencyFormat: (Scalars['String'] | null);

  moneyWithCurrencyInEmailsFormat: (Scalars['String'] | null);

  multiLocationEnabled: (Scalars['Boolean'] | null);

  myshopifyDomain: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  passwordEnabled: (Scalars['Boolean'] | null);

  phone: (Scalars['String'] | null);

  planDisplayName: (Scalars['String'] | null);

  planName: (Scalars['String'] | null);

  preLaunchEnabled: (Scalars['Boolean'] | null);

  primaryLocale: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  provinceCode: (Scalars['String'] | null);

  registeredWebhooks: (Scalars['JSON'] | null);

  requiresExtraPaymentsAgreement: (Scalars['Boolean'] | null);

  setupRequired: (Scalars['Boolean'] | null);

  shopOwner: (Scalars['String'] | null);

  source: (Scalars['String'] | null);

  taxShipping: (Scalars['Boolean'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  timezone: (Scalars['String'] | null);

  transactionalSmsDisabled: (Scalars['Boolean'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  weightUnit: (Scalars['String'] | null);

  gdprRequests: ShopifyGdprRequestConnection;

  products: ShopifyProductConnection;

  zipCode: (Scalars['String'] | null);

  productImages: ShopifyProductImageConnection;

  shopSeasonDimensions: ShopSeasonDimensionConnection;

  shopProductProfiles: ShopProductProfileConnection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyShopSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  accessToken?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  checkoutApiSupported?: boolean | null | undefined;

  city?: boolean | null | undefined;

  cookieConsentLevel?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  countryName?: boolean | null | undefined;

  countyTaxes?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  customerEmail?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  eligibleForCardReaderGiveaway?: boolean | null | undefined;

  eligibleForPayments?: boolean | null | undefined;

  email?: boolean | null | undefined;

  enabledPresentmentCurrencies?: boolean | null | undefined;

  finances?: boolean | null | undefined;

  forceSsl?: boolean | null | undefined;

  googleAppsDomain?: boolean | null | undefined;

  googleAppsLoginEnabled?: boolean | null | undefined;

  grantedScopes?: boolean | null | undefined;

  syncs?: AvailableShopifySyncConnectionSelection;

  hasDiscounts?: boolean | null | undefined;

  hasGiftCards?: boolean | null | undefined;

  hasStorefront?: boolean | null | undefined;

  ianaTimezone?: boolean | null | undefined;

  installedViaApiKey?: boolean | null | undefined;

  latitude?: boolean | null | undefined;

  longitude?: boolean | null | undefined;

  marketingSmsContentEnabledAtCheckout?: boolean | null | undefined;

  moneyFormat?: boolean | null | undefined;

  moneyInEmailsFormat?: boolean | null | undefined;

  moneyWithCurrencyFormat?: boolean | null | undefined;

  moneyWithCurrencyInEmailsFormat?: boolean | null | undefined;

  multiLocationEnabled?: boolean | null | undefined;

  myshopifyDomain?: boolean | null | undefined;

  name?: boolean | null | undefined;

  passwordEnabled?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  planDisplayName?: boolean | null | undefined;

  planName?: boolean | null | undefined;

  preLaunchEnabled?: boolean | null | undefined;

  primaryLocale?: boolean | null | undefined;

  province?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  registeredWebhooks?: boolean | null | undefined;

  requiresExtraPaymentsAgreement?: boolean | null | undefined;

  setupRequired?: boolean | null | undefined;

  shopOwner?: boolean | null | undefined;

  source?: boolean | null | undefined;

  taxShipping?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  timezone?: boolean | null | undefined;

  transactionalSmsDisabled?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  weightUnit?: boolean | null | undefined;

  gdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  products?: AvailableShopifyProductConnectionSelection;

  zipCode?: boolean | null | undefined;

  productImages?: AvailableShopifyProductImageConnectionSelection;

  shopSeasonDimensions?: AvailableShopSeasonDimensionConnectionSelection;

  shopProductProfiles?: AvailableShopProductProfileConnectionSelection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifySync items. */
export interface ShopifySyncConnection {

  __typename: 'ShopifySyncConnection';

  /** A list of edges. */
  edges: ShopifySyncEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySyncConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySyncEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySync connection. */
export interface ShopifySyncEdge {

  __typename: 'ShopifySyncEdge';

  /** The item at the end of the edge */
  node: ShopifySync;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySyncEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySyncSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export interface ShopifySync {

  __typename: 'ShopifySync';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  errorMessage: (Scalars['String'] | null);

  errorDetails: (Scalars['String'] | null);

  /** DateTime that this sync was run from */
  syncSince: (Scalars['DateTime'] | null);

  domain: Scalars['String'];

  force: (Scalars['Boolean'] | null);

  models: (Scalars['JSON'] | null);

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySyncSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  errorMessage?: boolean | null | undefined;

  errorDetails?: boolean | null | undefined;

  /** DateTime that this sync was run from */
  syncSince?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  force?: boolean | null | undefined;

  models?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** Information about pagination in a connection. */
export interface PageInfo {

  __typename: 'PageInfo';

  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];

  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];

  /** When paginating backwards, the cursor to continue. */
  startCursor: (Scalars['String'] | null);

  /** When paginating forwards, the cursor to continue. */
  endCursor: (Scalars['String'] | null);
};



export type AvailablePageInfoSelection = {

  __typename?: boolean | null | undefined;

  /** When paginating forwards, are there more items? */
  hasNextPage?: boolean | null | undefined;

  /** When paginating backwards, are there more items? */
  hasPreviousPage?: boolean | null | undefined;

  /** When paginating backwards, the cursor to continue. */
  startCursor?: boolean | null | undefined;

  /** When paginating forwards, the cursor to continue. */
  endCursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyGdprRequest items. */
export interface ShopifyGdprRequestConnection {

  __typename: 'ShopifyGdprRequestConnection';

  /** A list of edges. */
  edges: ShopifyGdprRequestEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyGdprRequestConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyGdprRequestEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyGdprRequest connection. */
export interface ShopifyGdprRequestEdge {

  __typename: 'ShopifyGdprRequestEdge';

  /** The item at the end of the edge */
  node: ShopifyGdprRequest;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyGdprRequestEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyGdprRequestSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export interface ShopifyGdprRequest {

  __typename: 'ShopifyGdprRequest';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  payload: (Scalars['JSON'] | null);

  topic: ShopifyGdprRequestTopicEnum;

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyGdprRequestSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  payload?: boolean | null | undefined;

  topic?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProduct items. */
export interface ShopifyProductConnection {

  __typename: 'ShopifyProductConnection';

  /** A list of edges. */
  edges: ShopifyProductEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProduct connection. */
export interface ShopifyProductEdge {

  __typename: 'ShopifyProductEdge';

  /** The item at the end of the edge */
  node: ShopifyProduct;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export interface ShopifyProduct {

  __typename: 'ShopifyProduct';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  productCategory: (Scalars['JSON'] | null);

  body: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  handle: (Scalars['String'] | null);

  productType: (Scalars['String'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  publishedScope: (Scalars['String'] | null);

  status: ShopifyProductStatusEnum;

  tags: (Scalars['JSON'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  vendor: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  images: ShopifyProductImageConnection;

  shopProductProfiles: ShopProductProfileConnection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  productCategory?: boolean | null | undefined;

  body?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  productType?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  publishedScope?: boolean | null | undefined;

  status?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  vendor?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  images?: AvailableShopifyProductImageConnectionSelection;

  shopProductProfiles?: AvailableShopProductProfileConnectionSelection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProductImage items. */
export interface ShopifyProductImageConnection {

  __typename: 'ShopifyProductImageConnection';

  /** A list of edges. */
  edges: ShopifyProductImageEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductImageConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductImageEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProductImage connection. */
export interface ShopifyProductImageEdge {

  __typename: 'ShopifyProductImageEdge';

  /** The item at the end of the edge */
  node: ShopifyProductImage;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductImageEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductImageSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export interface ShopifyProductImage {

  __typename: 'ShopifyProductImage';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  height: (Scalars['Float'] | null);

  position: (Scalars['Float'] | null);

  source: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  width: (Scalars['Float'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductImageSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  height?: boolean | null | undefined;

  position?: boolean | null | undefined;

  source?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  width?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopProductProfile items. */
export interface ShopProductProfileConnection {

  __typename: 'ShopProductProfileConnection';

  /** A list of edges. */
  edges: ShopProductProfileEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopProductProfileConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopProductProfileEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopProductProfile connection. */
export interface ShopProductProfileEdge {

  __typename: 'ShopProductProfileEdge';

  /** The item at the end of the edge */
  node: ShopProductProfile;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopProductProfileEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopProductProfileSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export interface ShopProductProfile {

  __typename: 'ShopProductProfile';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  product: ShopifyProduct;

  productId: Scalars['GadgetID'];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  season: ShopSeasonDimension;

  seasonId: Scalars['GadgetID'];

  profileName: Scalars['String'];

  active: Scalars['Boolean'];

  startDate: (Scalars['Date'] | null);

  endDate: (Scalars['Date'] | null);

  profileBody: (Scalars['String'] | null);

  live: (Scalars['Boolean'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopProductProfileSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  season?: AvailableShopSeasonDimensionSelection;

  seasonId?: boolean | null | undefined;

  profileName?: boolean | null | undefined;

  active?: boolean | null | undefined;

  startDate?: boolean | null | undefined;

  endDate?: boolean | null | undefined;

  profileBody?: boolean | null | undefined;

  live?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export interface ShopSeasonDimension {

  __typename: 'ShopSeasonDimension';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  startDate: (Scalars['DateTime'] | null);

  endDate: (Scalars['DateTime'] | null);

  active: Scalars['Boolean'];

  name: Scalars['String'];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  shopProductProfiles: ShopProductProfileConnection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopSeasonDimensionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  startDate?: boolean | null | undefined;

  endDate?: boolean | null | undefined;

  active?: boolean | null | undefined;

  name?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  shopProductProfiles?: AvailableShopProductProfileConnectionSelection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopSeasonDimension items. */
export interface ShopSeasonDimensionConnection {

  __typename: 'ShopSeasonDimensionConnection';

  /** A list of edges. */
  edges: ShopSeasonDimensionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopSeasonDimensionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopSeasonDimensionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopSeasonDimension connection. */
export interface ShopSeasonDimensionEdge {

  __typename: 'ShopSeasonDimensionEdge';

  /** The item at the end of the edge */
  node: ShopSeasonDimension;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopSeasonDimensionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopSeasonDimensionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of Session items. */
export interface SessionConnection {

  __typename: 'SessionConnection';

  /** A list of edges. */
  edges: SessionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableSessionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableSessionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a Session connection. */
export interface SessionEdge {

  __typename: 'SessionEdge';

  /** The item at the end of the edge */
  node: Session;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableSessionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableSessionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyShop items. */
export interface ShopifyShopConnection {

  __typename: 'ShopifyShopConnection';

  /** A list of edges. */
  edges: ShopifyShopEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyShopConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyShopEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyShop connection. */
export interface ShopifyShopEdge {

  __typename: 'ShopifyShopEdge';

  /** The item at the end of the edge */
  node: ShopifyShop;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyShopEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyShopSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export interface InternalQueries {

  __typename: 'InternalQueries';

  session: (InternalSessionRecord | null);

  listSession: InternalSessionRecordConnection;

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);

  listShopifyGdprRequest: InternalShopifyGdprRequestRecordConnection;

  shopifyProduct: (InternalShopifyProductRecord | null);

  listShopifyProduct: InternalShopifyProductRecordConnection;

  shopifyShop: (InternalShopifyShopRecord | null);

  listShopifyShop: InternalShopifyShopRecordConnection;

  shopifySync: (InternalShopifySyncRecord | null);

  listShopifySync: InternalShopifySyncRecordConnection;

  shopifyProductImage: (InternalShopifyProductImageRecord | null);

  listShopifyProductImage: InternalShopifyProductImageRecordConnection;

  shopSeasonDimension: (InternalShopSeasonDimensionRecord | null);

  listShopSeasonDimension: InternalShopSeasonDimensionRecordConnection;

  shopProductProfile: (InternalShopProductProfileRecord | null);

  listShopProductProfile: InternalShopProductProfileRecordConnection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails: (Scalars['JSONObject'] | null);
};



export type AvailableInternalQueriesSelection = {

  __typename?: boolean | null | undefined;

  session?: boolean | null | undefined;

  listSession?: AvailableInternalSessionRecordConnectionSelection;

  shopifyGdprRequest?: boolean | null | undefined;

  listShopifyGdprRequest?: AvailableInternalShopifyGdprRequestRecordConnectionSelection;

  shopifyProduct?: boolean | null | undefined;

  listShopifyProduct?: AvailableInternalShopifyProductRecordConnectionSelection;

  shopifyShop?: boolean | null | undefined;

  listShopifyShop?: AvailableInternalShopifyShopRecordConnectionSelection;

  shopifySync?: boolean | null | undefined;

  listShopifySync?: AvailableInternalShopifySyncRecordConnectionSelection;

  shopifyProductImage?: boolean | null | undefined;

  listShopifyProductImage?: AvailableInternalShopifyProductImageRecordConnectionSelection;

  shopSeasonDimension?: boolean | null | undefined;

  listShopSeasonDimension?: AvailableInternalShopSeasonDimensionRecordConnectionSelection;

  shopProductProfile?: boolean | null | undefined;

  listShopProductProfile?: AvailableInternalShopProductProfileRecordConnectionSelection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: boolean | null | undefined;
};


/** A connection to a list of InternalSessionRecord items. */
export interface InternalSessionRecordConnection {

  __typename: 'InternalSessionRecordConnection';

  /** A list of edges. */
  edges: InternalSessionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalSessionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalSessionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalSessionRecord connection. */
export interface InternalSessionRecordEdge {

  __typename: 'InternalSessionRecordEdge';

  /** The item at the end of the edge */
  node: InternalSessionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalSessionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyGdprRequestRecord items. */
export interface InternalShopifyGdprRequestRecordConnection {

  __typename: 'InternalShopifyGdprRequestRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyGdprRequestRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyGdprRequestRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyGdprRequestRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyGdprRequestRecord connection. */
export interface InternalShopifyGdprRequestRecordEdge {

  __typename: 'InternalShopifyGdprRequestRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyGdprRequestRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyGdprRequestRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductRecord items. */
export interface InternalShopifyProductRecordConnection {

  __typename: 'InternalShopifyProductRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductRecord connection. */
export interface InternalShopifyProductRecordEdge {

  __typename: 'InternalShopifyProductRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyShopRecord items. */
export interface InternalShopifyShopRecordConnection {

  __typename: 'InternalShopifyShopRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyShopRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyShopRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyShopRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyShopRecord connection. */
export interface InternalShopifyShopRecordEdge {

  __typename: 'InternalShopifyShopRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyShopRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyShopRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySyncRecord items. */
export interface InternalShopifySyncRecordConnection {

  __typename: 'InternalShopifySyncRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySyncRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySyncRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySyncRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySyncRecord connection. */
export interface InternalShopifySyncRecordEdge {

  __typename: 'InternalShopifySyncRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySyncRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySyncRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductImageRecord items. */
export interface InternalShopifyProductImageRecordConnection {

  __typename: 'InternalShopifyProductImageRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductImageRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductImageRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductImageRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductImageRecord connection. */
export interface InternalShopifyProductImageRecordEdge {

  __typename: 'InternalShopifyProductImageRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductImageRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductImageRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopSeasonDimensionRecord items. */
export interface InternalShopSeasonDimensionRecordConnection {

  __typename: 'InternalShopSeasonDimensionRecordConnection';

  /** A list of edges. */
  edges: InternalShopSeasonDimensionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopSeasonDimensionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopSeasonDimensionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopSeasonDimensionRecord connection. */
export interface InternalShopSeasonDimensionRecordEdge {

  __typename: 'InternalShopSeasonDimensionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopSeasonDimensionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopSeasonDimensionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopProductProfileRecord items. */
export interface InternalShopProductProfileRecordConnection {

  __typename: 'InternalShopProductProfileRecordConnection';

  /** A list of edges. */
  edges: InternalShopProductProfileRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopProductProfileRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopProductProfileRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopProductProfileRecord connection. */
export interface InternalShopProductProfileRecordEdge {

  __typename: 'InternalShopProductProfileRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopProductProfileRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopProductProfileRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Represents one of the roles an identity in the system can be entitled to */
export interface GadgetRole {

  __typename: 'GadgetRole';

  key: Scalars['String'];

  name: Scalars['String'];

  selectable: Scalars['Boolean'];

  order: Scalars['Int'];
};



export type AvailableGadgetRoleSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  selectable?: boolean | null | undefined;

  order?: boolean | null | undefined;
};



export interface GadgetGlobalAction {

  __typename: 'GadgetGlobalAction';

  apiIdentifier: Scalars['String'];

  requiresInput: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  examples: (GadgetGlobalActionGraphQLType | null);
};



export type AvailableGadgetGlobalActionSelection = {

  __typename?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};



export interface GadgetGlobalActionGraphQLType {

  __typename: 'GadgetGlobalActionGraphQLType';

  exampleMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];
};



export type AvailableGadgetGlobalActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  exampleMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;
};


/** One upload target to use for the Direct Upload style of sending files to Gadget */
export interface DirectUploadToken {

  __typename: 'DirectUploadToken';

  /** The URL to upload a file to. */
  url: Scalars['String'];

  /** The token to pass to an action to reference the uploaded file. */
  token: Scalars['String'];
};



export type AvailableDirectUploadTokenSelection = {

  __typename?: boolean | null | undefined;

  /** The URL to upload a file to. */
  url?: boolean | null | undefined;

  /** The token to pass to an action to reference the uploaded file. */
  token?: boolean | null | undefined;
};


/** Information about the Shopify Connection */
export interface Shopify {

  __typename: 'Shopify';

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication: (Scalars['Boolean'] | null);

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes: Scalars['String'][];
};



export type AvailableShopifySelection = {

  __typename?: boolean | null | undefined;

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication?: boolean | null | undefined;

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes?: boolean | null | undefined;
};



export interface Mutation {

  __typename: 'Mutation';

  runShopifySync: (RunShopifySyncResult | null);

  completeShopifySync: (CompleteShopifySyncResult | null);

  errorShopifySync: (ErrorShopifySyncResult | null);

  createShopSeasonDimension: (CreateShopSeasonDimensionResult | null);

  updateShopSeasonDimension: (UpdateShopSeasonDimensionResult | null);

  deleteShopSeasonDimension: (DeleteShopSeasonDimensionResult | null);

  bulkDeleteShopSeasonDimensions: (BulkDeleteShopSeasonDimensionsResult | null);

  createShopProductProfile: (CreateShopProductProfileResult | null);

  updateShopProductProfile: (UpdateShopProductProfileResult | null);

  deleteShopProductProfile: (DeleteShopProductProfileResult | null);

  bulkDeleteShopProductProfiles: (BulkDeleteShopProductProfilesResult | null);

  globalShopifySync: (GlobalShopifySyncResult | null);

  dailyCronProfileUpdate: (DailyCronProfileUpdateResult | null);

  internal: (InternalMutations | null);
};



export type AvailableMutationSelection = {

  __typename?: boolean | null | undefined;

  runShopifySync?: AvailableRunShopifySyncResultSelection;

  completeShopifySync?: AvailableCompleteShopifySyncResultSelection;

  errorShopifySync?: AvailableErrorShopifySyncResultSelection;

  createShopSeasonDimension?: AvailableCreateShopSeasonDimensionResultSelection;

  updateShopSeasonDimension?: AvailableUpdateShopSeasonDimensionResultSelection;

  deleteShopSeasonDimension?: AvailableDeleteShopSeasonDimensionResultSelection;

  bulkDeleteShopSeasonDimensions?: AvailableBulkDeleteShopSeasonDimensionsResultSelection;

  createShopProductProfile?: AvailableCreateShopProductProfileResultSelection;

  updateShopProductProfile?: AvailableUpdateShopProductProfileResultSelection;

  deleteShopProductProfile?: AvailableDeleteShopProductProfileResultSelection;

  bulkDeleteShopProductProfiles?: AvailableBulkDeleteShopProductProfilesResultSelection;

  globalShopifySync?: AvailableGlobalShopifySyncResultSelection;

  dailyCronProfileUpdate?: AvailableDailyCronProfileUpdateResultSelection;

  internal?: AvailableInternalMutationsSelection;
};



export interface RunShopifySyncResult {

  __typename: 'RunShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableRunShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};



export interface CompleteShopifySyncResult {

  __typename: 'CompleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableCompleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};



export interface ErrorShopifySyncResult {

  __typename: 'ErrorShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableErrorShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};



export interface CreateShopSeasonDimensionResult {

  __typename: 'CreateShopSeasonDimensionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopSeasonDimension: (ShopSeasonDimension | null);
};



export type AvailableCreateShopSeasonDimensionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopSeasonDimension?: AvailableShopSeasonDimensionSelection;
};



export interface UpdateShopSeasonDimensionResult {

  __typename: 'UpdateShopSeasonDimensionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopSeasonDimension: (ShopSeasonDimension | null);
};



export type AvailableUpdateShopSeasonDimensionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopSeasonDimension?: AvailableShopSeasonDimensionSelection;
};



export interface DeleteShopSeasonDimensionResult {

  __typename: 'DeleteShopSeasonDimensionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopSeasonDimensionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface BulkDeleteShopSeasonDimensionsResult {

  __typename: 'BulkDeleteShopSeasonDimensionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopSeasonDimensionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface CreateShopProductProfileResult {

  __typename: 'CreateShopProductProfileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopProductProfile: (ShopProductProfile | null);
};



export type AvailableCreateShopProductProfileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopProductProfile?: AvailableShopProductProfileSelection;
};



export interface UpdateShopProductProfileResult {

  __typename: 'UpdateShopProductProfileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopProductProfile: (ShopProductProfile | null);
};



export type AvailableUpdateShopProductProfileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopProductProfile?: AvailableShopProductProfileSelection;
};



export interface DeleteShopProductProfileResult {

  __typename: 'DeleteShopProductProfileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopProductProfileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface BulkDeleteShopProductProfilesResult {

  __typename: 'BulkDeleteShopProductProfilesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopProductProfilesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface GlobalShopifySyncResult {

  __typename: 'GlobalShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableGlobalShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export interface DailyCronProfileUpdateResult {

  __typename: 'DailyCronProfileUpdateResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableDailyCronProfileUpdateResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export interface InternalMutations {

  __typename: 'InternalMutations';

  startTransaction: Scalars['String'];

  commitTransaction: Scalars['String'];

  rollbackTransaction: Scalars['String'];

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock: LockOperationResult;

  createSession: (InternalCreateSessionResult | null);

  updateSession: (InternalUpdateSessionResult | null);

  deleteSession: (InternalDeleteSessionResult | null);

  deleteManySession: (InternalDeleteManySessionResult | null);

  bulkCreateSessions: (InternalBulkCreateSessionsResult | null);

  createShopifyGdprRequest: (InternalCreateShopifyGdprRequestResult | null);

  updateShopifyGdprRequest: (InternalUpdateShopifyGdprRequestResult | null);

  deleteShopifyGdprRequest: (InternalDeleteShopifyGdprRequestResult | null);

  deleteManyShopifyGdprRequest: (InternalDeleteManyShopifyGdprRequestResult | null);

  bulkCreateShopifyGdprRequests: (InternalBulkCreateShopifyGdprRequestsResult | null);

  createShopifyProduct: (InternalCreateShopifyProductResult | null);

  updateShopifyProduct: (InternalUpdateShopifyProductResult | null);

  deleteShopifyProduct: (InternalDeleteShopifyProductResult | null);

  deleteManyShopifyProduct: (InternalDeleteManyShopifyProductResult | null);

  bulkCreateShopifyProducts: (InternalBulkCreateShopifyProductsResult | null);

  createShopifyShop: (InternalCreateShopifyShopResult | null);

  updateShopifyShop: (InternalUpdateShopifyShopResult | null);

  deleteShopifyShop: (InternalDeleteShopifyShopResult | null);

  deleteManyShopifyShop: (InternalDeleteManyShopifyShopResult | null);

  bulkCreateShopifyShops: (InternalBulkCreateShopifyShopsResult | null);

  createShopifySync: (InternalCreateShopifySyncResult | null);

  updateShopifySync: (InternalUpdateShopifySyncResult | null);

  deleteShopifySync: (InternalDeleteShopifySyncResult | null);

  deleteManyShopifySync: (InternalDeleteManyShopifySyncResult | null);

  bulkCreateShopifySyncs: (InternalBulkCreateShopifySyncsResult | null);

  createShopifyProductImage: (InternalCreateShopifyProductImageResult | null);

  updateShopifyProductImage: (InternalUpdateShopifyProductImageResult | null);

  deleteShopifyProductImage: (InternalDeleteShopifyProductImageResult | null);

  deleteManyShopifyProductImage: (InternalDeleteManyShopifyProductImageResult | null);

  bulkCreateShopifyProductImages: (InternalBulkCreateShopifyProductImagesResult | null);

  createShopSeasonDimension: (InternalCreateShopSeasonDimensionResult | null);

  updateShopSeasonDimension: (InternalUpdateShopSeasonDimensionResult | null);

  deleteShopSeasonDimension: (InternalDeleteShopSeasonDimensionResult | null);

  deleteManyShopSeasonDimension: (InternalDeleteManyShopSeasonDimensionResult | null);

  bulkCreateShopSeasonDimensions: (InternalBulkCreateShopSeasonDimensionsResult | null);

  createShopProductProfile: (InternalCreateShopProductProfileResult | null);

  updateShopProductProfile: (InternalUpdateShopProductProfileResult | null);

  deleteShopProductProfile: (InternalDeleteShopProductProfileResult | null);

  deleteManyShopProductProfile: (InternalDeleteManyShopProductProfileResult | null);

  bulkCreateShopProductProfiles: (InternalBulkCreateShopProductProfilesResult | null);
};



export type AvailableInternalMutationsSelection = {

  __typename?: boolean | null | undefined;

  startTransaction?: boolean | null | undefined;

  commitTransaction?: boolean | null | undefined;

  rollbackTransaction?: boolean | null | undefined;

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock?: AvailableLockOperationResultSelection;

  createSession?: AvailableInternalCreateSessionResultSelection;

  updateSession?: AvailableInternalUpdateSessionResultSelection;

  deleteSession?: AvailableInternalDeleteSessionResultSelection;

  deleteManySession?: AvailableInternalDeleteManySessionResultSelection;

  bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;

  createShopifyGdprRequest?: AvailableInternalCreateShopifyGdprRequestResultSelection;

  updateShopifyGdprRequest?: AvailableInternalUpdateShopifyGdprRequestResultSelection;

  deleteShopifyGdprRequest?: AvailableInternalDeleteShopifyGdprRequestResultSelection;

  deleteManyShopifyGdprRequest?: AvailableInternalDeleteManyShopifyGdprRequestResultSelection;

  bulkCreateShopifyGdprRequests?: AvailableInternalBulkCreateShopifyGdprRequestsResultSelection;

  createShopifyProduct?: AvailableInternalCreateShopifyProductResultSelection;

  updateShopifyProduct?: AvailableInternalUpdateShopifyProductResultSelection;

  deleteShopifyProduct?: AvailableInternalDeleteShopifyProductResultSelection;

  deleteManyShopifyProduct?: AvailableInternalDeleteManyShopifyProductResultSelection;

  bulkCreateShopifyProducts?: AvailableInternalBulkCreateShopifyProductsResultSelection;

  createShopifyShop?: AvailableInternalCreateShopifyShopResultSelection;

  updateShopifyShop?: AvailableInternalUpdateShopifyShopResultSelection;

  deleteShopifyShop?: AvailableInternalDeleteShopifyShopResultSelection;

  deleteManyShopifyShop?: AvailableInternalDeleteManyShopifyShopResultSelection;

  bulkCreateShopifyShops?: AvailableInternalBulkCreateShopifyShopsResultSelection;

  createShopifySync?: AvailableInternalCreateShopifySyncResultSelection;

  updateShopifySync?: AvailableInternalUpdateShopifySyncResultSelection;

  deleteShopifySync?: AvailableInternalDeleteShopifySyncResultSelection;

  deleteManyShopifySync?: AvailableInternalDeleteManyShopifySyncResultSelection;

  bulkCreateShopifySyncs?: AvailableInternalBulkCreateShopifySyncsResultSelection;

  createShopifyProductImage?: AvailableInternalCreateShopifyProductImageResultSelection;

  updateShopifyProductImage?: AvailableInternalUpdateShopifyProductImageResultSelection;

  deleteShopifyProductImage?: AvailableInternalDeleteShopifyProductImageResultSelection;

  deleteManyShopifyProductImage?: AvailableInternalDeleteManyShopifyProductImageResultSelection;

  bulkCreateShopifyProductImages?: AvailableInternalBulkCreateShopifyProductImagesResultSelection;

  createShopSeasonDimension?: AvailableInternalCreateShopSeasonDimensionResultSelection;

  updateShopSeasonDimension?: AvailableInternalUpdateShopSeasonDimensionResultSelection;

  deleteShopSeasonDimension?: AvailableInternalDeleteShopSeasonDimensionResultSelection;

  deleteManyShopSeasonDimension?: AvailableInternalDeleteManyShopSeasonDimensionResultSelection;

  bulkCreateShopSeasonDimensions?: AvailableInternalBulkCreateShopSeasonDimensionsResultSelection;

  createShopProductProfile?: AvailableInternalCreateShopProductProfileResultSelection;

  updateShopProductProfile?: AvailableInternalUpdateShopProductProfileResultSelection;

  deleteShopProductProfile?: AvailableInternalDeleteShopProductProfileResultSelection;

  deleteManyShopProductProfile?: AvailableInternalDeleteManyShopProductProfileResultSelection;

  bulkCreateShopProductProfiles?: AvailableInternalBulkCreateShopProductProfilesResultSelection;
};



export interface LockOperationResult {

  __typename: 'LockOperationResult';

  /** Whether the lock operation succeeded */
  success: Scalars['Boolean'];

  /** Any errors encountered during the locking/unlocking operation */
  errors: ExecutionError[];
};



export type AvailableLockOperationResultSelection = {

  __typename?: boolean | null | undefined;

  /** Whether the lock operation succeeded */
  success?: boolean | null | undefined;

  /** Any errors encountered during the locking/unlocking operation */
  errors?: AvailableExecutionErrorSelection;
};



export interface InternalCreateSessionResult {

  __typename: 'InternalCreateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalCreateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export interface InternalUpdateSessionResult {

  __typename: 'InternalUpdateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalUpdateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export interface InternalDeleteSessionResult {

  __typename: 'InternalDeleteSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalDeleteSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export interface InternalDeleteManySessionResult {

  __typename: 'InternalDeleteManySessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManySessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateSessionsResult {

  __typename: 'InternalBulkCreateSessionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  sessions: (InternalSessionRecord | null)[];
};



export type AvailableInternalBulkCreateSessionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  sessions?: boolean | null | undefined;
};



export interface InternalCreateShopifyGdprRequestResult {

  __typename: 'InternalCreateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export interface InternalUpdateShopifyGdprRequestResult {

  __typename: 'InternalUpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export interface InternalDeleteShopifyGdprRequestResult {

  __typename: 'InternalDeleteShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalDeleteShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export interface InternalDeleteManyShopifyGdprRequestResult {

  __typename: 'InternalDeleteManyShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateShopifyGdprRequestsResult {

  __typename: 'InternalBulkCreateShopifyGdprRequestsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequests: (InternalShopifyGdprRequestRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyGdprRequestsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequests?: boolean | null | undefined;
};



export interface InternalCreateShopifyProductResult {

  __typename: 'InternalCreateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalCreateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export interface InternalUpdateShopifyProductResult {

  __typename: 'InternalUpdateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalUpdateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export interface InternalDeleteShopifyProductResult {

  __typename: 'InternalDeleteShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalDeleteShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export interface InternalDeleteManyShopifyProductResult {

  __typename: 'InternalDeleteManyShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateShopifyProductsResult {

  __typename: 'InternalBulkCreateShopifyProductsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProducts: (InternalShopifyProductRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProducts?: boolean | null | undefined;
};



export interface InternalCreateShopifyShopResult {

  __typename: 'InternalCreateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalCreateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export interface InternalUpdateShopifyShopResult {

  __typename: 'InternalUpdateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export interface InternalDeleteShopifyShopResult {

  __typename: 'InternalDeleteShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalDeleteShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export interface InternalDeleteManyShopifyShopResult {

  __typename: 'InternalDeleteManyShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateShopifyShopsResult {

  __typename: 'InternalBulkCreateShopifyShopsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShops: (InternalShopifyShopRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyShopsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShops?: boolean | null | undefined;
};



export interface InternalCreateShopifySyncResult {

  __typename: 'InternalCreateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalCreateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export interface InternalUpdateShopifySyncResult {

  __typename: 'InternalUpdateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalUpdateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export interface InternalDeleteShopifySyncResult {

  __typename: 'InternalDeleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalDeleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export interface InternalDeleteManyShopifySyncResult {

  __typename: 'InternalDeleteManyShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateShopifySyncsResult {

  __typename: 'InternalBulkCreateShopifySyncsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySyncs: (InternalShopifySyncRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySyncs?: boolean | null | undefined;
};



export interface InternalCreateShopifyProductImageResult {

  __typename: 'InternalCreateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (InternalShopifyProductImageRecord | null);
};



export type AvailableInternalCreateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: boolean | null | undefined;
};



export interface InternalUpdateShopifyProductImageResult {

  __typename: 'InternalUpdateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (InternalShopifyProductImageRecord | null);
};



export type AvailableInternalUpdateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: boolean | null | undefined;
};



export interface InternalDeleteShopifyProductImageResult {

  __typename: 'InternalDeleteShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (InternalShopifyProductImageRecord | null);
};



export type AvailableInternalDeleteShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: boolean | null | undefined;
};



export interface InternalDeleteManyShopifyProductImageResult {

  __typename: 'InternalDeleteManyShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateShopifyProductImagesResult {

  __typename: 'InternalBulkCreateShopifyProductImagesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImages: (InternalShopifyProductImageRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductImagesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImages?: boolean | null | undefined;
};



export interface InternalCreateShopSeasonDimensionResult {

  __typename: 'InternalCreateShopSeasonDimensionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopSeasonDimension: (InternalShopSeasonDimensionRecord | null);
};



export type AvailableInternalCreateShopSeasonDimensionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopSeasonDimension?: boolean | null | undefined;
};



export interface InternalUpdateShopSeasonDimensionResult {

  __typename: 'InternalUpdateShopSeasonDimensionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopSeasonDimension: (InternalShopSeasonDimensionRecord | null);
};



export type AvailableInternalUpdateShopSeasonDimensionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopSeasonDimension?: boolean | null | undefined;
};



export interface InternalDeleteShopSeasonDimensionResult {

  __typename: 'InternalDeleteShopSeasonDimensionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopSeasonDimension: (InternalShopSeasonDimensionRecord | null);
};



export type AvailableInternalDeleteShopSeasonDimensionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopSeasonDimension?: boolean | null | undefined;
};



export interface InternalDeleteManyShopSeasonDimensionResult {

  __typename: 'InternalDeleteManyShopSeasonDimensionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopSeasonDimensionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateShopSeasonDimensionsResult {

  __typename: 'InternalBulkCreateShopSeasonDimensionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopSeasonDimensions: (InternalShopSeasonDimensionRecord | null)[];
};



export type AvailableInternalBulkCreateShopSeasonDimensionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopSeasonDimensions?: boolean | null | undefined;
};



export interface InternalCreateShopProductProfileResult {

  __typename: 'InternalCreateShopProductProfileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopProductProfile: (InternalShopProductProfileRecord | null);
};



export type AvailableInternalCreateShopProductProfileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopProductProfile?: boolean | null | undefined;
};



export interface InternalUpdateShopProductProfileResult {

  __typename: 'InternalUpdateShopProductProfileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopProductProfile: (InternalShopProductProfileRecord | null);
};



export type AvailableInternalUpdateShopProductProfileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopProductProfile?: boolean | null | undefined;
};



export interface InternalDeleteShopProductProfileResult {

  __typename: 'InternalDeleteShopProductProfileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopProductProfile: (InternalShopProductProfileRecord | null);
};



export type AvailableInternalDeleteShopProductProfileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopProductProfile?: boolean | null | undefined;
};



export interface InternalDeleteManyShopProductProfileResult {

  __typename: 'InternalDeleteManyShopProductProfileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopProductProfileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateShopProductProfilesResult {

  __typename: 'InternalBulkCreateShopProductProfilesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopProductProfiles: (InternalShopProductProfileRecord | null)[];
};



export type AvailableInternalBulkCreateShopProductProfilesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopProductProfiles?: boolean | null | undefined;
};



export type ExplicitNestingRequired = never;

export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
  [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;

export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined
  ? never
  : Schema extends (infer T)[]
  ? Select<T, Selection>[]
  : Schema extends null
  ? Select<Exclude<Schema, null>, Selection> | null
  : {
      [Key in keyof Selection & keyof Schema]: Selection[Key] extends true
        ? Schema[Key]
        : Selection[Key] extends FieldSelection
        ? Select<Schema[Key], Selection[Key]>
        : never;
    };