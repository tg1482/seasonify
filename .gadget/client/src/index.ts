/**
* This is the Gadget API client library for:
*
*   ____                             _  __       
*  / ___|  ___  __ _ ___  ___  _ __ (_)/ _|_   _ 
*  \___ \ / _ \/ _` / __|/ _ \| '_ \| | |_| | | |
*   ___) |  __/ (_| \__ \ (_) | | | | |  _| |_| |
*  |____/ \___|\__,_|___/\___/|_| |_|_|_|  \__, |
*                                          |___/ 
*
* Built for environment "Development" at version 47
* API docs: https://docs.gadget.dev/api/seasonify
* Edit this app here: https://seasonify.gadget.dev/edit
*/
export {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordList,
  GadgetInternalError,
  GadgetClientError,
  GadgetOperationError,
  InvalidRecordError,
  GadgetValidationError,
  BrowserSessionStorageType
} from "@gadgetinc/api-client-core";

export type { ClientOptions, BrowserSessionAuthenticationModeOptions, InvalidFieldError, AuthenticationModeOptions, Select } from "@gadgetinc/api-client-core";

export * from "./Client.js";
export * from "./types.js";

declare global {
  interface Window {
    gadgetConfig: {
      apiKeys: {
        shopify: string;
      };
      environment: string;
      env: Record<string, any>;
    };
  }
}
