/**
* This is the Gadget server side types library for:
*
*   ____                             _  __       
*  / ___|  ___  __ _ ___  ___  _ __ (_)/ _|_   _ 
*  \___ \ / _ \/ _` / __|/ _ \| '_ \| | |_| | | |
*   ___) |  __/ (_| \__ \ (_) | | | | |  _| |_| |
*  |____/ \___|\__,_|___/\___/|_| |_|_|_|  \__, |
*                                          |___/ 
*
* Built for environment `"Development"` at version "1109"
* Edit this app here: https://"seasonify".gadget.dev/edit
*/
import { AmbientContext, ActionExecutionScope, NotYetTyped, ValidationErrors } from "./AmbientContext";
import { GadgetRecord } from "@gadget-client/seasonify";

export * from "./routes";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./GlobalActionContexts";
export * from "./AmbientContext";
export * from "./models/Session";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/ShopifyProductImage";
export * from "./models/ShopSeasonDimension";
export * from "./models/ShopProductProfile";

/**
 * An action context type for use in actions that can run on any model.
 */
export interface AnyActionContext extends AmbientContext {
  /**
   * The record this action is operating on.
   */
  record: GadgetRecord<any>;

  /**
   * The model this action is for.
   */
  model: NotYetTyped;

  /** 
   * The parameters passed to the action. 
   */
  params: {
    [key: string]: string | number | boolean | object | bigint | symbol | null | undefined;
  }

  /**
   * An object passed between all preconditions and effects of an action execution at the \`scope\` property.
   * Useful for transferring data between effects.
   */
  scope: ActionExecutionScope;
}

/**
 * Describes the context passed to every global action. 
 */
export interface AnyGlobalActionContext extends AmbientContext {
  /** 
  * The parameters passed to the action. 
  */
  params: {
    [key: string]: string | number | boolean | object | bigint | symbol | null | undefined;
  }

  /**
   * An object passed between all preconditions and effects of an action execution at the \`scope\` property.
   * Useful for transferring data between effects.
   * For global actions, \`scope.result\` is returned to the client at the end of action execution.
   */
  scope: ActionExecutionScope;
}