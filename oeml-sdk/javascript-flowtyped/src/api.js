// @flow
/* eslint-disable no-use-before-define */
/**
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI-Generator
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH: string = "http://localhost:8080".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 */
export type FetchAPI = {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 */
export type FetchArgs = {
    url: string;
    options: {};
}


/**
 *
 * @export
 */
export type RequestOptions = {
    headers?: {};
    query?: {};
    body?: string | FormData;
}

/**
 * * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name:string = "RequiredError"
    constructor(field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 */
export type Balance = {
    /**
     * Result type.
     * @type {string}
     * @memberof Balance
     */
    type?: string;
    /**
     * Exchange name.
     * @type {string}
     * @memberof Balance
     */
    exchange_name?: string;
    /**
     * 
     * @type {Array<BalanceData>}
     * @memberof Balance
     */
    data?: Array<BalanceData>;
}



            export type BalanceDataUpdateOriginEnum = 'INITIALIZATION' | 'BALANCE_MANAGER' | 'EXCHANGE';
/**
 * 
 * @export
 */
export type BalanceData = {
    /**
     * Exchange identifier.
     * @type {string}
     * @memberof BalanceData
     */
    id?: string;
    /**
     * Exchange currency code.
     * @type {string}
     * @memberof BalanceData
     */
    symbol_exchange?: string;
    /**
     * CoinAPI currency code.
     * @type {string}
     * @memberof BalanceData
     */
    symbol_coinapi?: string;
    /**
     * Value of the current total currency balance on the exchange.
     * @type {number}
     * @memberof BalanceData
     */
    balance?: number;
    /**
     * Value of the current available currency balance on the exchange that can be used as collateral.
     * @type {number}
     * @memberof BalanceData
     */
    available?: number;
    /**
     * Value of the current locked currency balance by the exchange.
     * @type {number}
     * @memberof BalanceData
     */
    locked?: number;
    /**
     * Source of the last modification. 
     * @type {string}
     * @memberof BalanceData
     */
    update_origin?: BalanceDataUpdateOriginEnum;
}


/**
 * 
 * @export
 */
export type CreateOrderValidationError = {
    /**
     * 
     * @type {string}
     * @memberof CreateOrderValidationError
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderValidationError
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateOrderValidationError
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderValidationError
     */
    traceId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderValidationError
     */
    errors?: string;
}



            export type ExecutionReportExecInstEnum = 'MAKER_OR_CANCEL' | 'AUCTION_ONLY' | 'INDICATION_OF_INTEREST';
/**
 * 
 * @export
 */
export type ExecutionReport = {
    /**
     * Exchange identifier.
     * @type {string}
     * @memberof ExecutionReport
     */
    exchange_id: string;
    /**
     * Unique identifier for the order assigned by the `OEML API` client.
     * @type {string}
     * @memberof ExecutionReport
     */
    client_order_id: string;
    /**
     * Exchange symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the order.
     * @type {string}
     * @memberof ExecutionReport
     */
    symbol_exchange?: string;
    /**
     * CoinAPI symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the order.
     * @type {string}
     * @memberof ExecutionReport
     */
    symbol_coinapi?: string;
    /**
     * Order quantity.
     * @type {number}
     * @memberof ExecutionReport
     */
    amount_order: number;
    /**
     * Order price.
     * @type {number}
     * @memberof ExecutionReport
     */
    price: number;
    /**
     * 
     * @type {OrdSide}
     * @memberof ExecutionReport
     */
    side: OrdSide;
    /**
     * 
     * @type {OrdType}
     * @memberof ExecutionReport
     */
    order_type: OrdType;
    /**
     * 
     * @type {TimeInForce}
     * @memberof ExecutionReport
     */
    time_in_force: TimeInForce;
    /**
     * Expiration time. Conditionaly required for orders with time_in_force = `GOOD_TILL_TIME_EXCHANGE` or `GOOD_TILL_TIME_OEML`.
     * @type {Date}
     * @memberof ExecutionReport
     */
    expire_time?: Date;
    /**
     * Order execution instructions are documented in the separate section: <a href=\"#oeml-order-params-exec\">OEML / Starter Guide / Order parameters / Execution instructions</a>
     * @type {Array<string>}
     * @memberof ExecutionReport
     */
    exec_inst?: Array<ExecutionReportExecInstEnum>;
    /**
     * Hash client id
     * @type {string}
     * @memberof ExecutionReport
     */
    client_order_id_format_exchange?: string;
    /**
     * Exchange order id
     * @type {string}
     * @memberof ExecutionReport
     */
    exchange_order_id?: string;
    /**
     * Amount open
     * @type {number}
     * @memberof ExecutionReport
     */
    amount_open?: number;
    /**
     * Amount filled
     * @type {number}
     * @memberof ExecutionReport
     */
    amount_filled?: number;
    /**
     * 
     * @type {OrdStatus}
     * @memberof ExecutionReport
     */
    status?: OrdStatus;
    /**
     * History of order status changes
     * @type {Array<Array<string>>}
     * @memberof ExecutionReport
     */
    time_order?: Array<Array<string>>;
    /**
     * Error message
     * @type {string}
     * @memberof ExecutionReport
     */
    error_message?: string;
}


/**
 * The order execution report message.
 * @export
 */
export type ExecutionReportAllOf = {
    /**
     * Hash client id
     * @type {string}
     * @memberof ExecutionReportAllOf
     */
    client_order_id_format_exchange?: string;
    /**
     * Exchange order id
     * @type {string}
     * @memberof ExecutionReportAllOf
     */
    exchange_order_id?: string;
    /**
     * Amount open
     * @type {number}
     * @memberof ExecutionReportAllOf
     */
    amount_open?: number;
    /**
     * Amount filled
     * @type {number}
     * @memberof ExecutionReportAllOf
     */
    amount_filled?: number;
    /**
     * 
     * @type {OrdStatus}
     * @memberof ExecutionReportAllOf
     */
    status?: OrdStatus;
    /**
     * History of order status changes
     * @type {Array<Array<string>>}
     * @memberof ExecutionReportAllOf
     */
    time_order?: Array<Array<string>>;
    /**
     * Error message
     * @type {string}
     * @memberof ExecutionReportAllOf
     */
    error_message?: string;
}


/**
 * 
 * @export
 */
export type Message = {
    /**
     * Type of message.
     * @type {string}
     * @memberof Message
     */
    type?: string;
    /**
     * 
     * @type {Severity}
     * @memberof Message
     */
    severity?: Severity;
    /**
     * If message related exchange then identifier of this exchange.
     * @type {string}
     * @memberof Message
     */
    exchange_id?: string;
    /**
     * Sucess message
     * @type {string}
     * @memberof Message
     */
    message?: string;
}



            export type NewOrderSingleExecInstEnum = 'MAKER_OR_CANCEL' | 'AUCTION_ONLY' | 'INDICATION_OF_INTEREST';
/**
 * The new order message.
 * @export
 */
export type NewOrderSingle = {
    /**
     * Exchange identifier.
     * @type {string}
     * @memberof NewOrderSingle
     */
    exchange_id: string;
    /**
     * Unique identifier for the order assigned by the `OEML API` client.
     * @type {string}
     * @memberof NewOrderSingle
     */
    client_order_id: string;
    /**
     * Exchange symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the order.
     * @type {string}
     * @memberof NewOrderSingle
     */
    symbol_exchange?: string;
    /**
     * CoinAPI symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the order.
     * @type {string}
     * @memberof NewOrderSingle
     */
    symbol_coinapi?: string;
    /**
     * Order quantity.
     * @type {number}
     * @memberof NewOrderSingle
     */
    amount_order: number;
    /**
     * Order price.
     * @type {number}
     * @memberof NewOrderSingle
     */
    price: number;
    /**
     * 
     * @type {OrdSide}
     * @memberof NewOrderSingle
     */
    side: OrdSide;
    /**
     * 
     * @type {OrdType}
     * @memberof NewOrderSingle
     */
    order_type: OrdType;
    /**
     * 
     * @type {TimeInForce}
     * @memberof NewOrderSingle
     */
    time_in_force: TimeInForce;
    /**
     * Expiration time. Conditionaly required for orders with time_in_force = `GOOD_TILL_TIME_EXCHANGE` or `GOOD_TILL_TIME_OEML`.
     * @type {Date}
     * @memberof NewOrderSingle
     */
    expire_time?: Date;
    /**
     * Order execution instructions are documented in the separate section: <a href=\"#oeml-order-params-exec\">OEML / Starter Guide / Order parameters / Execution instructions</a>
     * @type {Array<string>}
     * @memberof NewOrderSingle
     */
    exec_inst?: Array<NewOrderSingleExecInstEnum>;
}


/**
 * Side of order. 
 * @export
 * @enum {string}
 */
export type OrdSide = 'BUY' | 'SELL';

/**
 * Order statuses and the lifecycle are documented in the separate section: <a href=\"#oeml-order-lifecycle\">OEML / Starter Guide / Order Lifecycle</a> 
 * @export
 * @enum {string}
 */
export type OrdStatus = 'RECEIVED' | 'ROUTING' | 'ROUTED' | 'NEW' | 'PENDING_CANCEL' | 'PARTIALLY_FILLED' | 'FILLED' | 'CANCELED' | 'REJECTED';

/**
 * Order types are documented in the separate section: <a href=\"#oeml-order-params-type\">OEML / Starter Guide / Order parameters / Order type</a> 
 * @export
 * @enum {string}
 */
export type OrdType = 'LIMIT';

/**
 * 
 * @export
 */
export type OrderCancelAllRequest = {
    /**
     * Exchange identifier from which active orders should be canceled.
     * @type {string}
     * @memberof OrderCancelAllRequest
     */
    exchange_id: string;
}


/**
 * 
 * @export
 */
export type OrderCancelSingleRequest = {
    /**
     * Exchange name
     * @type {string}
     * @memberof OrderCancelSingleRequest
     */
    exchange_id?: string;
    /**
     * Order Id
     * @type {string}
     * @memberof OrderCancelSingleRequest
     */
    exchange_order_id?: string;
    /**
     * Client order Id
     * @type {string}
     * @memberof OrderCancelSingleRequest
     */
    client_order_id?: string;
}


/**
 * 
 * @export
 */
export type Position = {
    /**
     * Result type.
     * @type {string}
     * @memberof Position
     */
    type?: string;
    /**
     * Name of exchange.
     * @type {string}
     * @memberof Position
     */
    exchange_name?: string;
    /**
     * 
     * @type {Array<PositionData>}
     * @memberof Position
     */
    data?: Array<PositionData>;
}


/**
 * 
 * @export
 */
export type PositionData = {
    /**
     * Unique position ID
     * @type {string}
     * @memberof PositionData
     */
    id?: string;
    /**
     * The contract for this position.
     * @type {string}
     * @memberof PositionData
     */
    symbol_exchange?: string;
    /**
     * The coinapi contract for this position.
     * @type {string}
     * @memberof PositionData
     */
    symbol_coinapi?: string;
    /**
     * 
     * @type {number}
     * @memberof PositionData
     */
    avg_entry_price?: number;
    /**
     * The current position amount in contracts.
     * @type {number}
     * @memberof PositionData
     */
    quantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PositionData
     */
    is_buy?: boolean;
    /**
     * Unrealised PNL is all the unrealised profit or loss coming from your portfolio\'s open positions.
     * @type {number}
     * @memberof PositionData
     */
    unrealised_pn_l?: number;
    /**
     * 1 / initMarginReq.
     * @type {number}
     * @memberof PositionData
     */
    leverage?: number;
    /**
     * True/false depending on whether you set cross margin on this position.
     * @type {boolean}
     * @memberof PositionData
     */
    cross_margin?: boolean;
    /**
     * Once markPrice reaches this price, this position will be liquidated.
     * @type {number}
     * @memberof PositionData
     */
    liquidation_price?: number;
    /**
     * 
     * @type {string}
     * @memberof PositionData
     */
    raw_data?: string;
}


/**
 * 
 * @export
 * @enum {string}
 */
export type Severity = 'INFO' | 'WARNING' | 'ERROR';

/**
 * Order time in force options are documented in the separate section: <a href=\"#oeml-order-params-tif\">OEML / Starter Guide / Order parameters / Time in force</a> 
 * @export
 * @enum {string}
 */
export type TimeInForce = 'GOOD_TILL_CANCEL' | 'GOOD_TILL_TIME_EXCHANGE' | 'GOOD_TILL_TIME_OMS' | 'FILL_OR_KILL' | 'IMMEDIATE_OR_CANCEL';



/**
 * BalancesApi - fetch parameter creator
 * @export
 */
export const BalancesApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns all of your balances, including available balance.
         * @summary Get balances
         * @throws {RequiredError}
         */
        v1BalancesGet(exchangeId?: string, options: RequestOptions): FetchArgs {
            const localVarPath = `/v1/balances`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            if (exchangeId !== undefined) {
                localVarQueryParameter['exchange_id'] = ((exchangeId:any):string);
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

export type BalancesApiType = { 
    v1BalancesGet(exchangeId?: string, options?: RequestOptions): Promise<Array<Balance>>,
}

/**
 * BalancesApi - factory function to inject configuration 
 * @export
 */
export const BalancesApi = function(configuration?: Configuration, fetch: FetchAPI = portableFetch): BalancesApiType {
    const basePath: string = (configuration && configuration.basePath) || BASE_PATH;
    return {
        /**
         * Returns all of your balances, including available balance.
         * @summary Get balances
         * @throws {RequiredError}
         */
        v1BalancesGet(exchangeId?: string, options?: RequestOptions = {}): Promise<Array<Balance>> {
            const localVarFetchArgs = BalancesApiFetchParamCreator(configuration).v1BalancesGet(exchangeId, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
    }
};

/**
 * OrdersApi - fetch parameter creator
 * @export
 */
export const OrdersApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This request cancels all open orders across all or single specified exchange.
         * @summary Cancel all orders
         * @throws {RequiredError}
         */
        v1OrdersCancelAllPost(orderCancelAllRequest: OrderCancelAllRequest, options: RequestOptions): FetchArgs {
            // verify required parameter 'orderCancelAllRequest' is not null or undefined
            if (orderCancelAllRequest === null || orderCancelAllRequest === undefined) {
                throw new RequiredError('orderCancelAllRequest','Required parameter orderCancelAllRequest was null or undefined when calling v1OrdersCancelAllPost.');
            }
            const localVarPath = `/v1/orders/cancel/all`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (typeof orderCancelAllRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(orderCancelAllRequest != null ? orderCancelAllRequest : {}) : (((orderCancelAllRequest:any):string) || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This request cancels an existing order. The order can be canceled by the client order ID or exchange order ID.
         * @summary Cancel order
         * @throws {RequiredError}
         */
        v1OrdersCancelPost(orderCancelSingleRequest: OrderCancelSingleRequest, options: RequestOptions): FetchArgs {
            // verify required parameter 'orderCancelSingleRequest' is not null or undefined
            if (orderCancelSingleRequest === null || orderCancelSingleRequest === undefined) {
                throw new RequiredError('orderCancelSingleRequest','Required parameter orderCancelSingleRequest was null or undefined when calling v1OrdersCancelPost.');
            }
            const localVarPath = `/v1/orders/cancel`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (typeof orderCancelSingleRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(orderCancelSingleRequest != null ? orderCancelSingleRequest : {}) : (((orderCancelSingleRequest:any):string) || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all current open orders across all or single specified exchange.
         * @summary Get all orders
         * @throws {RequiredError}
         */
        v1OrdersGet(exchangeId?: string, options: RequestOptions): FetchArgs {
            const localVarPath = `/v1/orders`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            if (exchangeId !== undefined) {
                localVarQueryParameter['exchange_id'] = ((exchangeId:any):string);
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This request creating new order for the specific exchange.
         * @summary Create new order
         * @throws {RequiredError}
         */
        v1OrdersPost(newOrderSingle: NewOrderSingle, options: RequestOptions): FetchArgs {
            // verify required parameter 'newOrderSingle' is not null or undefined
            if (newOrderSingle === null || newOrderSingle === undefined) {
                throw new RequiredError('newOrderSingle','Required parameter newOrderSingle was null or undefined when calling v1OrdersPost.');
            }
            const localVarPath = `/v1/orders`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (typeof newOrderSingle !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(newOrderSingle != null ? newOrderSingle : {}) : (((newOrderSingle:any):string) || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the current order status for the specified order. The requested order can no longer be active.
         * @summary Get order status
         * @throws {RequiredError}
         */
        v1OrdersStatusClientOrderIdGet(clientOrderId: string, options: RequestOptions): FetchArgs {
            // verify required parameter 'clientOrderId' is not null or undefined
            if (clientOrderId === null || clientOrderId === undefined) {
                throw new RequiredError('clientOrderId','Required parameter clientOrderId was null or undefined when calling v1OrdersStatusClientOrderIdGet.');
            }
            const localVarPath = `/v1/orders/status/{client_order_id}`
                .replace(`{${"client_order_id"}}`, encodeURIComponent(String(clientOrderId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

export type OrdersApiType = { 
    v1OrdersCancelAllPost(orderCancelAllRequest: OrderCancelAllRequest, options?: RequestOptions): Promise<Message>,

    v1OrdersCancelPost(orderCancelSingleRequest: OrderCancelSingleRequest, options?: RequestOptions): Promise<ExecutionReport>,

    v1OrdersGet(exchangeId?: string, options?: RequestOptions): Promise<Array<ExecutionReport>>,

    v1OrdersPost(newOrderSingle: NewOrderSingle, options?: RequestOptions): Promise<ExecutionReport>,

    v1OrdersStatusClientOrderIdGet(clientOrderId: string, options?: RequestOptions): Promise<ExecutionReport>,
}

/**
 * OrdersApi - factory function to inject configuration 
 * @export
 */
export const OrdersApi = function(configuration?: Configuration, fetch: FetchAPI = portableFetch): OrdersApiType {
    const basePath: string = (configuration && configuration.basePath) || BASE_PATH;
    return {
        /**
         * This request cancels all open orders across all or single specified exchange.
         * @summary Cancel all orders
         * @throws {RequiredError}
         */
        v1OrdersCancelAllPost(orderCancelAllRequest: OrderCancelAllRequest, options?: RequestOptions = {}): Promise<Message> {
            const localVarFetchArgs = OrdersApiFetchParamCreator(configuration).v1OrdersCancelAllPost(orderCancelAllRequest, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
        /**
         * This request cancels an existing order. The order can be canceled by the client order ID or exchange order ID.
         * @summary Cancel order
         * @throws {RequiredError}
         */
        v1OrdersCancelPost(orderCancelSingleRequest: OrderCancelSingleRequest, options?: RequestOptions = {}): Promise<ExecutionReport> {
            const localVarFetchArgs = OrdersApiFetchParamCreator(configuration).v1OrdersCancelPost(orderCancelSingleRequest, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
        /**
         * Get all current open orders across all or single specified exchange.
         * @summary Get all orders
         * @throws {RequiredError}
         */
        v1OrdersGet(exchangeId?: string, options?: RequestOptions = {}): Promise<Array<ExecutionReport>> {
            const localVarFetchArgs = OrdersApiFetchParamCreator(configuration).v1OrdersGet(exchangeId, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
        /**
         * This request creating new order for the specific exchange.
         * @summary Create new order
         * @throws {RequiredError}
         */
        v1OrdersPost(newOrderSingle: NewOrderSingle, options?: RequestOptions = {}): Promise<ExecutionReport> {
            const localVarFetchArgs = OrdersApiFetchParamCreator(configuration).v1OrdersPost(newOrderSingle, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
        /**
         * Get the current order status for the specified order. The requested order can no longer be active.
         * @summary Get order status
         * @throws {RequiredError}
         */
        v1OrdersStatusClientOrderIdGet(clientOrderId: string, options?: RequestOptions = {}): Promise<ExecutionReport> {
            const localVarFetchArgs = OrdersApiFetchParamCreator(configuration).v1OrdersStatusClientOrderIdGet(clientOrderId, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
    }
};

/**
 * PositionsApi - fetch parameter creator
 * @export
 */
export const PositionsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns all of your positions.
         * @summary Get positions
         * @throws {RequiredError}
         */
        v1PositionsGet(exchangeId?: string, options: RequestOptions): FetchArgs {
            const localVarPath = `/v1/positions`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            if (exchangeId !== undefined) {
                localVarQueryParameter['exchange_id'] = ((exchangeId:any):string);
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

export type PositionsApiType = { 
    v1PositionsGet(exchangeId?: string, options?: RequestOptions): Promise<Array<Position>>,
}

/**
 * PositionsApi - factory function to inject configuration 
 * @export
 */
export const PositionsApi = function(configuration?: Configuration, fetch: FetchAPI = portableFetch): PositionsApiType {
    const basePath: string = (configuration && configuration.basePath) || BASE_PATH;
    return {
        /**
         * Returns all of your positions.
         * @summary Get positions
         * @throws {RequiredError}
         */
        v1PositionsGet(exchangeId?: string, options?: RequestOptions = {}): Promise<Array<Position>> {
            const localVarFetchArgs = PositionsApiFetchParamCreator(configuration).v1PositionsGet(exchangeId, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
    }
};

export type ApiTypes = { 
    BalancesApi: BalancesApiType,

    OrdersApi: OrdersApiType,

    PositionsApi: PositionsApiType,
 }
