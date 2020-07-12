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
import BalanceData from './BalanceData';

/**
 * The Balance model module.
 * @module model/Balance
 * @version v1
 */
class Balance {
    /**
     * Constructs a new <code>Balance</code>.
     * @alias module:model/Balance
     */
    constructor() { 
        
        Balance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Balance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Balance} obj Optional instance to populate.
     * @return {module:model/Balance} The populated <code>Balance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Balance();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('exchange_name')) {
                obj['exchange_name'] = ApiClient.convertToType(data['exchange_name'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BalanceData]);
            }
        }
        return obj;
    }


}

/**
 * Result type.
 * @member {String} type
 */
Balance.prototype['type'] = undefined;

/**
 * Exchange name.
 * @member {String} exchange_name
 */
Balance.prototype['exchange_name'] = undefined;

/**
 * @member {Array.<module:model/BalanceData>} data
 */
Balance.prototype['data'] = undefined;






export default Balance;

