/**
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OrdSide from './OrdSide';
import OrdType from './OrdType';
import TimeInForce from './TimeInForce';

/**
 * The NewOrderSingle model module.
 * @module model/NewOrderSingle
 * @version v1
 */
class NewOrderSingle {
    /**
     * Constructs a new <code>NewOrderSingle</code>.
     * The new order message.
     * @alias module:model/NewOrderSingle
     * @param exchangeId {String} Exchange identifier.
     * @param clientOrderId {String} Unique identifier for the order assigned by the `OEML API` client.
     * @param amountOrder {Number} Order quantity.
     * @param price {Number} Order price.
     * @param side {module:model/OrdSide} 
     * @param orderType {module:model/OrdType} 
     * @param timeInForce {module:model/TimeInForce} 
     */
    constructor(exchangeId, clientOrderId, amountOrder, price, side, orderType, timeInForce) { 
        
        NewOrderSingle.initialize(this, exchangeId, clientOrderId, amountOrder, price, side, orderType, timeInForce);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, exchangeId, clientOrderId, amountOrder, price, side, orderType, timeInForce) { 
        obj['exchange_id'] = exchangeId;
        obj['client_order_id'] = clientOrderId;
        obj['amount_order'] = amountOrder;
        obj['price'] = price;
        obj['side'] = side;
        obj['order_type'] = orderType;
        obj['time_in_force'] = timeInForce;
    }

    /**
     * Constructs a <code>NewOrderSingle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewOrderSingle} obj Optional instance to populate.
     * @return {module:model/NewOrderSingle} The populated <code>NewOrderSingle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewOrderSingle();

            if (data.hasOwnProperty('exchange_id')) {
                obj['exchange_id'] = ApiClient.convertToType(data['exchange_id'], 'String');
            }
            if (data.hasOwnProperty('client_order_id')) {
                obj['client_order_id'] = ApiClient.convertToType(data['client_order_id'], 'String');
            }
            if (data.hasOwnProperty('symbol_exchange')) {
                obj['symbol_exchange'] = ApiClient.convertToType(data['symbol_exchange'], 'String');
            }
            if (data.hasOwnProperty('symbol_coinapi')) {
                obj['symbol_coinapi'] = ApiClient.convertToType(data['symbol_coinapi'], 'String');
            }
            if (data.hasOwnProperty('amount_order')) {
                obj['amount_order'] = ApiClient.convertToType(data['amount_order'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('side')) {
                obj['side'] = OrdSide.constructFromObject(data['side']);
            }
            if (data.hasOwnProperty('order_type')) {
                obj['order_type'] = OrdType.constructFromObject(data['order_type']);
            }
            if (data.hasOwnProperty('time_in_force')) {
                obj['time_in_force'] = TimeInForce.constructFromObject(data['time_in_force']);
            }
            if (data.hasOwnProperty('expire_time')) {
                obj['expire_time'] = ApiClient.convertToType(data['expire_time'], 'Date');
            }
            if (data.hasOwnProperty('exec_inst')) {
                obj['exec_inst'] = ApiClient.convertToType(data['exec_inst'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Exchange identifier.
 * @member {String} exchange_id
 */
NewOrderSingle.prototype['exchange_id'] = undefined;

/**
 * Unique identifier for the order assigned by the `OEML API` client.
 * @member {String} client_order_id
 */
NewOrderSingle.prototype['client_order_id'] = undefined;

/**
 * Exchange symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the order.
 * @member {String} symbol_exchange
 */
NewOrderSingle.prototype['symbol_exchange'] = undefined;

/**
 * CoinAPI symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the order.
 * @member {String} symbol_coinapi
 */
NewOrderSingle.prototype['symbol_coinapi'] = undefined;

/**
 * Order quantity.
 * @member {Number} amount_order
 */
NewOrderSingle.prototype['amount_order'] = undefined;

/**
 * Order price.
 * @member {Number} price
 */
NewOrderSingle.prototype['price'] = undefined;

/**
 * @member {module:model/OrdSide} side
 */
NewOrderSingle.prototype['side'] = undefined;

/**
 * @member {module:model/OrdType} order_type
 */
NewOrderSingle.prototype['order_type'] = undefined;

/**
 * @member {module:model/TimeInForce} time_in_force
 */
NewOrderSingle.prototype['time_in_force'] = undefined;

/**
 * Expiration time. Conditionaly required for orders with time_in_force = `GOOD_TILL_TIME_EXCHANGE` or `GOOD_TILL_TIME_OEML`.
 * @member {Date} expire_time
 */
NewOrderSingle.prototype['expire_time'] = undefined;

/**
 * Order execution instructions are documented in the separate section: <a href=\"#oeml-order-params-exec\">OEML / Starter Guide / Order parameters / Execution instructions</a>
 * @member {Array.<module:model/NewOrderSingle.ExecInstEnum>} exec_inst
 */
NewOrderSingle.prototype['exec_inst'] = undefined;





/**
 * Allowed values for the <code>execInst</code> property.
 * @enum {String}
 * @readonly
 */
NewOrderSingle['ExecInstEnum'] = {

    /**
     * value: "MAKER_OR_CANCEL"
     * @const
     */
    "MAKER_OR_CANCEL": "MAKER_OR_CANCEL",

    /**
     * value: "AUCTION_ONLY"
     * @const
     */
    "AUCTION_ONLY": "AUCTION_ONLY",

    /**
     * value: "INDICATION_OF_INTEREST"
     * @const
     */
    "INDICATION_OF_INTEREST": "INDICATION_OF_INTEREST"
};



export default NewOrderSingle;

