// All the generated types for the "Shopify Product" model preconditions, actions, params, etc
import { AmbientContext, ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../AmbientContext";
import { GadgetRecord, ShopifyProduct } from "@gadget-client/seasonify";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyProductServerSelection = {
  readonly __typename: true;
   
    readonly id: true;
   
    readonly createdAt: true;
   
    readonly updatedAt: true;
   
    readonly productCategory: true;
   
    readonly body: true;
   
    readonly shopifyCreatedAt: true;
   
    readonly handle: true;
   
    readonly productType: true;
   
    readonly publishedAt: true;
   
    readonly publishedScope: true;
   
    readonly status: true;
   
    readonly tags: true;
   
    readonly templateSuffix: true;
   
    readonly title: true;
   
    readonly shopifyUpdatedAt: true;
   
    readonly vendor: true;
   
    readonly shopId: true;
    readonly shop: false;
   
    readonly images: false;
   
    readonly shopProductProfiles: false;
  };

  /** All the data passed to an effect or precondition within the `create` action on the `shopifyProduct` model. */
export interface CreateShopifyProductActionContext extends AmbientContext {

  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;

  /**
* The `Shopify Product` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopifyProduct, DefaultShopifyProductServerSelection>>;

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
};


    /** All the data passed to an effect or precondition within the `update` action on the `shopifyProduct` model. */
export interface UpdateShopifyProductActionContext extends AmbientContext {

  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;

  /**
* The `Shopify Product` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopifyProduct, DefaultShopifyProductServerSelection>>;

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
};


    /** All the data passed to an effect or precondition within the `delete` action on the `shopifyProduct` model. */
export interface DeleteShopifyProductActionContext extends AmbientContext {

  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;

  /**
* The `Shopify Product` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopifyProduct, DefaultShopifyProductServerSelection>>;

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
};


  