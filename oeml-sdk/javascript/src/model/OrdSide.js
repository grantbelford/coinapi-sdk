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
* Enum class OrdSide.
* @enum {}
* @readonly
*/
export default class OrdSide {
    
        /**
         * value: "BUY"
         * @const
         */
        "BUY" = "BUY";

    
        /**
         * value: "SELL"
         * @const
         */
        "SELL" = "SELL";

    

    /**
    * Returns a <code>OrdSide</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/OrdSide} The enum <code>OrdSide</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
