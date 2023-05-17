import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyShopSelection = {
  "id": true,
  "__typename": true,
  "state": true,
  "createdAt": true,
  "updatedAt": true,
  "accessToken": true,
  "address1": true,
  "address2": true,
  "checkoutApiSupported": true,
  "city": true,
  "cookieConsentLevel": true,
  "country": true,
  "countryCode": true,
  "countryName": true,
  "countyTaxes": true,
  "shopifyCreatedAt": true,
  "currency": true,
  "customerEmail": true,
  "domain": true,
  "eligibleForCardReaderGiveaway": true,
  "eligibleForPayments": true,
  "email": true,
  "enabledPresentmentCurrencies": true,
  "finances": true,
  "forceSsl": true,
  "googleAppsDomain": true,
  "googleAppsLoginEnabled": true,
  "grantedScopes": true,
  "hasDiscounts": true,
  "hasGiftCards": true,
  "hasStorefront": true,
  "ianaTimezone": true,
  "installedViaApiKey": true,
  "latitude": true,
  "longitude": true,
  "marketingSmsContentEnabledAtCheckout": true,
  "moneyFormat": true,
  "moneyInEmailsFormat": true,
  "moneyWithCurrencyFormat": true,
  "moneyWithCurrencyInEmailsFormat": true,
  "multiLocationEnabled": true,
  "myshopifyDomain": true,
  "name": true,
  "passwordEnabled": true,
  "phone": true,
  "planDisplayName": true,
  "planName": true,
  "preLaunchEnabled": true,
  "primaryLocale": true,
  "province": true,
  "provinceCode": true,
  "registeredWebhooks": true,
  "requiresExtraPaymentsAgreement": true,
  "setupRequired": true,
  "shopOwner": true,
  "source": true,
  "taxShipping": true,
  "taxesIncluded": true,
  "timezone": true,
  "transactionalSmsDisabled": true,
  "shopifyUpdatedAt": true,
  "weightUnit": true,
  "zipCode": true
};
;
;
;
;
;
class ShopifyShopManager {
  constructor(connection) {
    this.connection = connection;
    this.findOne = Object.assign(async (id, options) => {
      return await findOneRunner(this, "shopifyShop", id, DefaultShopifyShopSelection, "shopifyShop", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "shopifyShop",
      modelApiIdentifier: "shopifyShop",
      defaultSelection: DefaultShopifyShopSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindOne = Object.assign(async (id, options) => {
      const record = await findOneRunner(this, "shopifyShop", id, DefaultShopifyShopSelection, "shopifyShop", options, false);
      return record.isEmpty() ? null : record;
    }, {
      type: "maybeFindOne",
      findByVariableName: "id",
      operationName: "shopifyShop",
      modelApiIdentifier: "shopifyShop",
      defaultSelection: DefaultShopifyShopSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findMany = Object.assign(async (options) => {
      return await findManyRunner(this, "shopifyShops", DefaultShopifyShopSelection, "shopifyShop", options);
    }, {
      type: "findMany",
      operationName: "shopifyShops",
      modelApiIdentifier: "shopifyShop",
      defaultSelection: DefaultShopifyShopSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "shopifyShops", DefaultShopifyShopSelection, "shopifyShop", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, true);
      return list[0];
    }, {
      type: "findFirst",
      operationName: "shopifyShops",
      modelApiIdentifier: "shopifyShop",
      defaultSelection: DefaultShopifyShopSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "shopifyShops", DefaultShopifyShopSelection, "shopifyShop", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, false);
      return list?.[0] ?? null;
    }, {
      type: "maybeFindFirst",
      operationName: "shopifyShops",
      modelApiIdentifier: "shopifyShop",
      defaultSelection: DefaultShopifyShopSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
  }
}
export {
  DefaultShopifyShopSelection,
  ShopifyShopManager
};
//# sourceMappingURL=ShopifyShop.js.map
