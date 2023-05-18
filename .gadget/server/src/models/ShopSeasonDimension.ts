// All the generated types for the "Shop Season Dimension" model preconditions, actions, params, etc
import { AmbientContext, ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../AmbientContext";
import { GadgetRecord, ShopSeasonDimension } from "@gadget-client/seasonify";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopSeasonDimensionServerSelection = {
  readonly __typename: true;
   
    readonly id: true;
   
    readonly createdAt: true;
   
    readonly updatedAt: true;
   
    readonly startDate: true;
   
    readonly endDate: true;
   
    readonly active: true;
   
    readonly name: true;
   
    readonly shopId: true;
    readonly shop: false;
  };

  /** All the data passed to an effect or precondition within the `create` action on the `shopSeasonDimension` model. */
export interface CreateShopSeasonDimensionActionContext extends AmbientContext {

  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;

  /**
* The `Shop Season Dimension` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopSeasonDimension, DefaultShopSeasonDimensionServerSelection>>;

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


    /** All the data passed to an effect or precondition within the `delete` action on the `shopSeasonDimension` model. */
export interface DeleteShopSeasonDimensionActionContext extends AmbientContext {

  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;

  /**
* The `Shop Season Dimension` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopSeasonDimension, DefaultShopSeasonDimensionServerSelection>>;

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


    /** All the data passed to an effect or precondition within the `update` action on the `shopSeasonDimension` model. */
export interface UpdateShopSeasonDimensionActionContext extends AmbientContext {

  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;

  /**
* The `Shop Season Dimension` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopSeasonDimension, DefaultShopSeasonDimensionServerSelection>>;

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


  