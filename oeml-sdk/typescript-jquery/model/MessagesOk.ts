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
 */

import * as models from './models';

export interface MessagesOk {
    /**
     * Type of message
     */
    type?: string;

    /**
     * Exchange name
     */
    exchange_id?: string;

    /**
     * Message
     */
    message?: string;

}
