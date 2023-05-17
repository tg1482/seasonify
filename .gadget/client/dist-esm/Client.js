import { GadgetConnection, InternalModelManager } from "@gadgetinc/api-client-core";
import { SessionManager } from "./models/Session.js";
import { ShopifyGdprRequestManager } from "./models/ShopifyGdprRequest.js";
import { ShopifyProductManager } from "./models/ShopifyProduct.js";
import { ShopifyShopManager } from "./models/ShopifyShop.js";
import { ShopifySyncManager } from "./models/ShopifySync.js";
import { ShopifyProductImageManager } from "./models/ShopifyProductImage.js";
import { CurrentSessionManager } from "./models/CurrentSession.js";
import { globalActionRunner } from "@gadgetinc/api-client-core";
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
      return await globalActionRunner(this.connection, "globalShopifySync", {}, null);
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
    const environment = options?.environment ?? getImplicitEnv() ?? developmentEnv;
    let normalizedEnvironment = environment.toLocaleLowerCase();
    if (normalizedEnvironment != developmentEnv && normalizedEnvironment != productionEnv) {
      console.warn("Invalid environment", environment, "defaulting to development");
      normalizedEnvironment = developmentEnv;
    }
    this.connection = new GadgetConnection({
      endpoint: new URL("api/graphql", normalizedEnvironment == productionEnv ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: options?.authenticationMode ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      environment: normalizedEnvironment == productionEnv ? "Production" : "Development"
    });
    this.session = new SessionManager(this.connection);
    this.shopifyGdprRequest = new ShopifyGdprRequestManager(this.connection);
    this.shopifyProduct = new ShopifyProductManager(this.connection);
    this.shopifyShop = new ShopifyShopManager(this.connection);
    this.shopifySync = new ShopifySyncManager(this.connection);
    this.shopifyProductImage = new ShopifyProductImageManager(this.connection);
    this.currentSession = new CurrentSessionManager(this.connection);
    this.internal = {
      session: new InternalModelManager("session", this.connection, {
        pluralApiIdentifier: "sessions",
        hasAmbiguousIdentifier: false
      }),
      shopifyGdprRequest: new InternalModelManager("shopifyGdprRequest", this.connection, {
        pluralApiIdentifier: "shopifyGdprRequests",
        hasAmbiguousIdentifier: false
      }),
      shopifyProduct: new InternalModelManager("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        hasAmbiguousIdentifier: false
      }),
      shopifyShop: new InternalModelManager("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        hasAmbiguousIdentifier: false
      }),
      shopifySync: new InternalModelManager("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        hasAmbiguousIdentifier: false
      }),
      shopifyProductImage: new InternalModelManager("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
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
export {
  Client
};
//# sourceMappingURL=Client.js.map
