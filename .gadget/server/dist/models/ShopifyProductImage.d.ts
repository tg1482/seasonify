import { AmbientContext, ActionExecutionScope, NotYetTyped, ActionTrigger } from "../AmbientContext";
import { GadgetRecord, ShopifyProductImage } from "@gadget-client/seasonify";
import { Select } from "@gadgetinc/api-client-core";
export declare type DefaultShopifyProductImageServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly shopifyCreatedAt: true;
    readonly height: true;
    readonly position: true;
    readonly source: true;
    readonly shopifyUpdatedAt: true;
    readonly width: true;
    readonly productId: true;
    readonly product: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyProductImage` model. */
export interface CreateShopifyProductImageActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `Shopify Product Image` record this action is operating on.
  */
    record: GadgetRecord<Select<ShopifyProductImage, DefaultShopifyProductImageServerSelection>>;
    /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
    scope: ActionExecutionScope;
    /**
  * An object describing what started this action execution.
  */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyProductImage` model. */
export interface UpdateShopifyProductImageActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `Shopify Product Image` record this action is operating on.
  */
    record: GadgetRecord<Select<ShopifyProductImage, DefaultShopifyProductImageServerSelection>>;
    /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
    scope: ActionExecutionScope;
    /**
  * An object describing what started this action execution.
  */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyProductImage` model. */
export interface DeleteShopifyProductImageActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `Shopify Product Image` record this action is operating on.
  */
    record: GadgetRecord<Select<ShopifyProductImage, DefaultShopifyProductImageServerSelection>>;
    /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
    scope: ActionExecutionScope;
    /**
  * An object describing what started this action execution.
  */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
}
