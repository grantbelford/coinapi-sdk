/**
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
 *
 * The version of the OpenAPI document: v1
 * Contact: support@coinapi.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * The order execution report object.
 */
export interface OrderExecutionReport {
    /**
     * Exchange identifier.
     */
    "exchange_id": string;
    /**
     * The unique identifier of the order assigned by the client.
     */
    "client_order_id": string;
    /**
     * Exchange symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the new order.
     */
    "symbol_exchange"?: string;
    /**
     * CoinAPI symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the new order.
     */
    "symbol_coinapi"?: string;
    /**
     * Order quantity.
     */
    "amount_order": number;
    /**
     * Order price.
     */
    "price": number;
    "side": models.OrdSide;
    "order_type": models.OrdType;
    "time_in_force": models.TimeInForce;
    /**
     * Expiration time. Conditionaly required for orders with time_in_force = `GOOD_TILL_TIME_EXCHANGE` or `GOOD_TILL_TIME_OEML`.
     */
    "expire_time"?: string;
    /**
     * Order execution instructions are documented in the separate section: <a href=\"#oeml-order-params-exec\">OEML / Starter Guide / Order parameters / Execution instructions</a> 
     */
    "exec_inst"?: Array<OrderExecutionReport.ExecInstEnum>;
    /**
     * The unique identifier of the order assigned by the client converted to the exchange order tag format for the purpose of tracking it.
     */
    "client_order_id_format_exchange": string;
    /**
     * The unique identifier of the order assigned by the exchange.
     */
    "exchange_order_id"?: string;
    /**
     * Amount open.
     */
    "amount_open": number;
    /**
     * Amount filled.
     */
    "amount_filled": number;
    "status": models.OrdStatus;
    /**
     * Timestamped history of order status changes.
     */
    "time_order": Array<Array<string>>;
    /**
     * Error message
     */
    "error_message"?: string;
}

export namespace OrderExecutionReport {
    export enum ExecInstEnum {
        MAKERORCANCEL = <any> 'MAKER_OR_CANCEL',
        AUCTIONONLY = <any> 'AUCTION_ONLY',
        INDICATIONOFINTEREST = <any> 'INDICATION_OF_INTEREST'
    }
}
