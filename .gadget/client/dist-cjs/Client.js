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
  Client: () => Client
});
var import_api_client_core = __toModule(require("@gadgetinc/api-client-core"));
var import_Session = __toModule(require("./models/Session.js"));
var import_ShopifyGdprRequest = __toModule(require("./models/ShopifyGdprRequest.js"));
var import_ShopifyProduct = __toModule(require("./models/ShopifyProduct.js"));
var import_ShopifyShop = __toModule(require("./models/ShopifyShop.js"));
var import_ShopifySync = __toModule(require("./models/ShopifySync.js"));
var import_ShopifyProductImage = __toModule(require("./models/ShopifyProductImage.js"));
var import_ShopSeasonDimension = __toModule(require("./models/ShopSeasonDimension.js"));
var import_ShopProductProfile = __toModule(require("./models/ShopProductProfile.js"));
var import_CurrentSession = __toModule(require("./models/CurrentSession.js"));
var import_api_client_core2 = __toModule(require("@gadgetinc/api-client-core"));
const productionEnv = "production";
const developmentEnv = "development";
const getImplicitEnv = () => {
  try {
    return process.env.NODE_ENV;
  } catch (error) {
    return void 0;
  }
};
class Client {
  constructor(options) {
    this.developmentApiRoot = "https://seasonify--development.gadget.app/";
    this.productionApiRoot = "https://seasonify.gadget.app/";
    this.applicationId = "35627";
    this.globalShopifySync = Object.assign(async () => {
      return await (0, import_api_client_core2.globalActionRunner)(this.connection, "globalShopifySync", {}, null);
    }, {
      type: "globalAction",
      operationName: "globalShopifySync",
      namespace: null,
      variablesType: {},
      variables: {}
    });
    this.transaction = async (callback) => {
      return await this.connection.transaction(callback);
    };
    this.getDirectUploadToken = async () => {
      const result = await this.query(`query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }`, { nonce: Math.random().toString(36).slice(2, 7) }, {
        requestPolicy: "network-only"
      });
      return result.gadgetMeta.directUploadToken;
    };
    const environment = (options == null ? void 0 : options.environment) ?? getImplicitEnv() ?? developmentEnv;
    let normalizedEnvironment = environment.toLocaleLowerCase();
    if (normalizedEnvironment != developmentEnv && normalizedEnvironment != productionEnv) {
      console.warn("Invalid environment", environment, "defaulting to development");
      normalizedEnvironment = developmentEnv;
    }
    this.connection = new import_api_client_core.GadgetConnection(__spreadProps(__spreadValues({
      endpoint: new URL("api/graphql", normalizedEnvironment == productionEnv ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (options == null ? void 0 : options.authenticationMode) ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true })
    }, options), {
      environment: normalizedEnvironment == productionEnv ? "Production" : "Development"
    }));
    this.session = new import_Session.SessionManager(this.connection);
    this.shopifyGdprRequest = new import_ShopifyGdprRequest.ShopifyGdprRequestManager(this.connection);
    this.shopifyProduct = new import_ShopifyProduct.ShopifyProductManager(this.connection);
    this.shopifyShop = new import_ShopifyShop.ShopifyShopManager(this.connection);
    this.shopifySync = new import_ShopifySync.ShopifySyncManager(this.connection);
    this.shopifyProductImage = new import_ShopifyProductImage.ShopifyProductImageManager(this.connection);
    this.shopSeasonDimension = new import_ShopSeasonDimension.ShopSeasonDimensionManager(this.connection);
    this.shopProductProfile = new import_ShopProductProfile.ShopProductProfileManager(this.connection);
    this.currentSession = new import_CurrentSession.CurrentSessionManager(this.connection);
    this.internal = {
      session: new import_api_client_core.InternalModelManager("session", this.connection, {
        pluralApiIdentifier: "sessions",
        hasAmbiguousIdentifier: false
      }),
      shopifyGdprRequest: new import_api_client_core.InternalModelManager("shopifyGdprRequest", this.connection, {
        pluralApiIdentifier: "shopifyGdprRequests",
        hasAmbiguousIdentifier: false
      }),
      shopifyProduct: new import_api_client_core.InternalModelManager("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        hasAmbiguousIdentifier: false
      }),
      shopifyShop: new import_api_client_core.InternalModelManager("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        hasAmbiguousIdentifier: false
      }),
      shopifySync: new import_api_client_core.InternalModelManager("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        hasAmbiguousIdentifier: false
      }),
      shopifyProductImage: new import_api_client_core.InternalModelManager("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        hasAmbiguousIdentifier: false
      }),
      shopSeasonDimension: new import_api_client_core.InternalModelManager("shopSeasonDimension", this.connection, {
        pluralApiIdentifier: "shopSeasonDimensions",
        hasAmbiguousIdentifier: false
      }),
      shopProductProfile: new import_api_client_core.InternalModelManager("shopProductProfile", this.connection, {
        pluralApiIdentifier: "shopProductProfiles",
        hasAmbiguousIdentifier: false
      })
    };
  }
  async query(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  async mutate(graphQL, variables) {
    const { data, error } = await this.connection.currentClient.mutation(graphQL, variables).toPromise();
    if (error)
      throw error;
    return data;
  }
  async fetch(input, init = {}) {
    return await this.connection.fetch(input, init);
  }
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client
});
//# sourceMappingURL=Client.js.map
