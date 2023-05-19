// All the generated types for the "Shop Product Profile" model preconditions, actions, params, etc
import { AmbientContext, ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../AmbientContext";
import { GadgetRecord, ShopProductProfile } from "@gadget-client/seasonify";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopProductProfileServerSelection = {
  readonly __typename: true;
   
    readonly id: true;
   
    readonly createdAt: true;
   
    readonly updatedAt: true;
   
    readonly productId: true;
    readonly product: false;
   
    readonly shopId: true;
    readonly shop: false;
   
    readonly seasonId: true;
    readonly season: false;
   
    readonly profileName: true;
   
    readonly active: true;
   
    readonly startDate: true;
   
    readonly endDate: true;
   
    readonly profileBody: true;
   
    readonly live: true;
  };

  /** All the data passed to an effect or precondition within the `create` action on the `shopProductProfile` model. */
export interface CreateShopProductProfileActionContext extends AmbientContext {

  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;

  /**
* The `Shop Product Profile` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopProductProfile, DefaultShopProductProfileServerSelection>>;

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


    /** All the data passed to an effect or precondition within the `update` action on the `shopProductProfile` model. */
export interface UpdateShopProductProfileActionContext extends AmbientContext {

  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;

  /**
* The `Shop Product Profile` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopProductProfile, DefaultShopProductProfileServerSelection>>;

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


    /** All the data passed to an effect or precondition within the `delete` action on the `shopProductProfile` model. */
export interface DeleteShopProductProfileActionContext extends AmbientContext {

  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;

  /**
* The `Shop Product Profile` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopProductProfile, DefaultShopProductProfileServerSelection>>;

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


  