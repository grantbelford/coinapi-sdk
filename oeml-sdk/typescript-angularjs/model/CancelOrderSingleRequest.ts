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

export interface CancelOrderSingleRequest {
    /**
     * Exchange identifier.
     */
    "exchange_id"?: string;
    /**
     * The unique identifier of the order assigned by the exchange.
     */
    "exchange_order_id"?: string;
    /**
     * The unique identifier of the order assigned by the client.
     */
    "client_order_id"?: string;
}
