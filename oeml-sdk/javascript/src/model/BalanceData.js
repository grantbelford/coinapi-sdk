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

/**
 * The BalanceData model module.
 * @module model/BalanceData
 * @version v1
 */
class BalanceData {
    /**
     * Constructs a new <code>BalanceData</code>.
     * @alias module:model/BalanceData
     */
    constructor() { 
        
        BalanceData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BalanceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceData} obj Optional instance to populate.
     * @return {module:model/BalanceData} The populated <code>BalanceData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BalanceData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('symbol_exchange')) {
                obj['symbol_exchange'] = ApiClient.convertToType(data['symbol_exchange'], 'String');
            }
            if (data.hasOwnProperty('symbol_coinapi')) {
                obj['symbol_coinapi'] = ApiClient.convertToType(data['symbol_coinapi'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Number');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Number');
            }
            if (data.hasOwnProperty('update_origin')) {
                obj['update_origin'] = ApiClient.convertToType(data['update_origin'], 'String');
            }
        }
        return obj;
    }


}

/**
 * symbol_exchange
 * @member {String} id
 */
BalanceData.prototype['id'] = undefined;

/**
 * Currency code.
 * @member {String} symbol_exchange
 */
BalanceData.prototype['symbol_exchange'] = undefined;

/**
 * CoinAPI currency code.
 * @member {String} symbol_coinapi
 */
BalanceData.prototype['symbol_coinapi'] = undefined;

/**
 * The current balance.
 * @member {Number} balance
 */
BalanceData.prototype['balance'] = undefined;

/**
 * The amount that is available to trade.
 * @member {Number} available
 */
BalanceData.prototype['available'] = undefined;

/**
 * Blocked funds.
 * @member {Number} locked
 */
BalanceData.prototype['locked'] = undefined;

/**
 * Source of last modification. 
 * @member {module:model/BalanceData.UpdateOriginEnum} update_origin
 */
BalanceData.prototype['update_origin'] = undefined;





/**
 * Allowed values for the <code>update_origin</code> property.
 * @enum {String}
 * @readonly
 */
BalanceData['UpdateOriginEnum'] = {

    /**
     * value: "INITIALIZATION"
     * @const
     */
    "INITIALIZATION": "INITIALIZATION",

    /**
     * value: "BALANCE_MANAGER"
     * @const
     */
    "BALANCE_MANAGER": "BALANCE_MANAGER",

    /**
     * value: "EXCHANGE"
     * @const
     */
    "EXCHANGE": "EXCHANGE"
};



export default BalanceData;

