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
import OrderStatus from './OrderStatus';
import TimeInForce from './TimeInForce';

/**
 * The OrderData model module.
 * @module model/OrderData
 * @version v1
 */
class OrderData {
    /**
     * Constructs a new <code>OrderData</code>.
     * @alias module:model/OrderData
     */
    constructor() { 
        
        OrderData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderData} obj Optional instance to populate.
     * @return {module:model/OrderData} The populated <code>OrderData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderData();

            if (data.hasOwnProperty('exchange_id')) {
                obj['exchange_id'] = ApiClient.convertToType(data['exchange_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('client_order_id_format_exchange')) {
                obj['client_order_id_format_exchange'] = ApiClient.convertToType(data['client_order_id_format_exchange'], 'String');
            }
            if (data.hasOwnProperty('exchange_order_id')) {
                obj['exchange_order_id'] = ApiClient.convertToType(data['exchange_order_id'], 'String');
            }
            if (data.hasOwnProperty('amount_open')) {
                obj['amount_open'] = ApiClient.convertToType(data['amount_open'], 'Number');
            }
            if (data.hasOwnProperty('amount_filled')) {
                obj['amount_filled'] = ApiClient.convertToType(data['amount_filled'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = OrderStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('time_order')) {
                obj['time_order'] = ApiClient.convertToType(data['time_order'], [['String']]);
            }
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
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
                obj['side'] = ApiClient.convertToType(data['side'], 'String');
            }
            if (data.hasOwnProperty('order_type')) {
                obj['order_type'] = ApiClient.convertToType(data['order_type'], 'String');
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
 * Exchange name
 * @member {String} exchange_id
 */
OrderData.prototype['exchange_id'] = undefined;

/**
 * Client unique identifier for the trade.
 * @member {String} id
 */
OrderData.prototype['id'] = undefined;

/**
 * Hash client id
 * @member {String} client_order_id_format_exchange
 */
OrderData.prototype['client_order_id_format_exchange'] = undefined;

/**
 * Exchange order id
 * @member {String} exchange_order_id
 */
OrderData.prototype['exchange_order_id'] = undefined;

/**
 * Amount open
 * @member {Number} amount_open
 */
OrderData.prototype['amount_open'] = undefined;

/**
 * Amount filled
 * @member {Number} amount_filled
 */
OrderData.prototype['amount_filled'] = undefined;

/**
 * @member {module:model/OrderStatus} status
 */
OrderData.prototype['status'] = undefined;

/**
 * History of order status changes
 * @member {Array.<Array.<String>>} time_order
 */
OrderData.prototype['time_order'] = undefined;

/**
 * Error message
 * @member {String} error_message
 */
OrderData.prototype['error_message'] = undefined;

/**
 * Client unique identifier for the trade.
 * @member {String} client_order_id
 */
OrderData.prototype['client_order_id'] = undefined;

/**
 * The symbol of the order.
 * @member {String} symbol_exchange
 */
OrderData.prototype['symbol_exchange'] = undefined;

/**
 * The CoinAPI symbol of the order.
 * @member {String} symbol_coinapi
 */
OrderData.prototype['symbol_coinapi'] = undefined;

/**
 * Quoted decimal amount to purchase.
 * @member {Number} amount_order
 */
OrderData.prototype['amount_order'] = undefined;

/**
 * Quoted decimal amount to spend per unit.
 * @member {Number} price
 */
OrderData.prototype['price'] = undefined;

/**
 * Buy or Sell
 * @member {module:model/OrderData.SideEnum} side
 */
OrderData.prototype['side'] = undefined;

/**
 * The order type.
 * @member {module:model/OrderData.OrderTypeEnum} order_type
 */
OrderData.prototype['order_type'] = undefined;

/**
 * @member {module:model/TimeInForce} time_in_force
 */
OrderData.prototype['time_in_force'] = undefined;

/**
 * Required for orders with time_in_force = GOOD_TILL_TIME_EXCHANGE, GOOD_TILL_TIME_OMS
 * @member {Date} expire_time
 */
OrderData.prototype['expire_time'] = undefined;

/**
 * TODO: description exec inst  | Parameter | Description | |-----------|--------| | `MAKER_OR_CANCEL` | Rests on the continuous order book at a specified price. If any quantity can be filled immediately, the entire order is canceled. | ##### Exec inst options  | Exchange | MAKER_OR_CANCEL | | --- | --- | | BINANCE | X | | BITFINEX | X | | BITMEX | X | | BLOCKCHAINEXCHANGE | X | | BITSTAMP |  | | COINBASE | X | | GEMINI | X | | KRAKEN | X | | POLONIEX | X | | HITBTC |  | | KRAKENFTS | X | 
 * @member {Array.<module:model/OrderData.ExecInstEnum>} exec_inst
 */
OrderData.prototype['exec_inst'] = undefined;





/**
 * Allowed values for the <code>side</code> property.
 * @enum {String}
 * @readonly
 */
OrderData['SideEnum'] = {

    /**
     * value: "BUY"
     * @const
     */
    "BUY": "BUY",

    /**
     * value: "SELL"
     * @const
     */
    "SELL": "SELL"
};


/**
 * Allowed values for the <code>order_type</code> property.
 * @enum {String}
 * @readonly
 */
OrderData['OrderTypeEnum'] = {

    /**
     * value: "LIMIT"
     * @const
     */
    "LIMIT": "LIMIT"
};


/**
 * Allowed values for the <code>execInst</code> property.
 * @enum {String}
 * @readonly
 */
OrderData['ExecInstEnum'] = {

    /**
     * value: "MAKER_OR_CANCEL"
     * @const
     */
    "MAKER_OR_CANCEL": "MAKER_OR_CANCEL"
};



export default OrderData;

