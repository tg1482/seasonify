import { AmbientContext, ActionExecutionScope } from "./AmbientContext";
/** All the data passed to an effect or precondition within the `globalShopifySync` global action. */
export interface GlobalShopifySyncGlobalActionContext extends AmbientContext {
    /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects, or returning data from this global action by setting `scope.result`.
  * For global actions, `scope.result` is returned to the client at the end of action execution.
  */
    scope: ActionExecutionScope;
    /**
    * An object containing any custom params that have been defined for the global action.
    */
    params: {
        [key: string]: string | number | boolean | object | bigint | symbol | null | undefined;
    };
}
/** All the data passed to an effect or precondition within the `dailyCronProfileUpdate` global action. */
export interface DailyCronProfileUpdateGlobalActionContext extends AmbientContext {
    /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects, or returning data from this global action by setting `scope.result`.
  * For global actions, `scope.result` is returned to the client at the end of action execution.
  */
    scope: ActionExecutionScope;
    /**
    * An object containing any custom params that have been defined for the global action.
    */
    params: {
        [key: string]: string | number | boolean | object | bigint | symbol | null | undefined;
    };
}
