// @flow
/* eslint-disable no-use-before-define */
/**
 * OEML - REST API
 * Lorem2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ###Lifecycle Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. ###Lifecycle 2 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackhama. 
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

const BASE_PATH: string = "http://localhost:8080/v1".replace(/\/+$/, "");

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
     * symbol_exchange
     * @type {string}
     * @memberof BalanceData
     */
    id?: string;
    /**
     * Currency code.
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
     * The current balance.
     * @type {number}
     * @memberof BalanceData
     */
    balance?: number;
    /**
     * The amount that is available to trade.
     * @type {number}
     * @memberof BalanceData
     */
    available?: number;
    /**
     * Blocked funds.
     * @type {number}
     * @memberof BalanceData
     */
    locked?: number;
    /**
     * Source of last modification. 
     * @type {string}
     * @memberof BalanceData
     */
    update_origin?: BalanceDataUpdateOriginEnum;
}


/**
 * 
 * @export
 */
export type CancelAllOrder = {
    /**
     * Exchange name
     * @type {string}
     * @memberof CancelAllOrder
     */
    exchange_id?: string;
}


/**
 * 
 * @export
 */
export type CancelOrder = {
    /**
     * Exchange name
     * @type {string}
     * @memberof CancelOrder
     */
    exchange_id?: string;
    /**
     * Order Id
     * @type {string}
     * @memberof CancelOrder
     */
    exchange_order_id?: string;
    /**
     * Client order Id
     * @type {string}
     * @memberof CancelOrder
     */
    client_order_id?: string;
}


/**
 * 
 * @export
 */
export type CreateOrder400 = {
    /**
     * 
     * @type {string}
     * @memberof CreateOrder400
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrder400
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateOrder400
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateOrder400
     */
    traceId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrder400
     */
    errors?: string;
}


/**
 * 
 * @export
 */
export type Messages = {
    /**
     * Type of message
     * @type {string}
     * @memberof Messages
     */
    type?: string;
    /**
     * Exchange name
     * @type {string}
     * @memberof Messages
     */
    exchange_id?: string;
    /**
     * Message
     * @type {string}
     * @memberof Messages
     */
    message?: string;
}


/**
 * 
 * @export
 */
export type MessagesInfo = {
    /**
     * Type of message
     * @type {string}
     * @memberof MessagesInfo
     */
    type?: string;
    /**
     * Exchange name
     * @type {string}
     * @memberof MessagesInfo
     */
    exchange_id?: string;
    /**
     * Error message
     * @type {string}
     * @memberof MessagesInfo
     */
    error_message?: string;
}


/**
 * 
 * @export
 */
export type MessagesOk = {
    /**
     * Type of message
     * @type {string}
     * @memberof MessagesOk
     */
    type?: string;
    /**
     * Exchange name
     * @type {string}
     * @memberof MessagesOk
     */
    exchange_id?: string;
    /**
     * Message
     * @type {string}
     * @memberof MessagesOk
     */
    message?: string;
}



            export type NewOrderSideEnum = 'BUY' | 'SELL';

            export type NewOrderOrderTypeEnum = 'LIMIT';

            export type NewOrderExecInstEnum = 'MAKER_OR_CANCEL';
/**
 * 
 * @export
 */
export type NewOrder = {
    /**
     * Exchange name
     * @type {string}
     * @memberof NewOrder
     */
    exchange_id?: string;
    /**
     * Client unique identifier for the trade.
     * @type {string}
     * @memberof NewOrder
     */
    client_order_id?: string;
    /**
     * The symbol of the order.
     * @type {string}
     * @memberof NewOrder
     */
    symbol_exchange?: string;
    /**
     * The CoinAPI symbol of the order.
     * @type {string}
     * @memberof NewOrder
     */
    symbol_coinapi?: string;
    /**
     * Quoted decimal amount to purchase.
     * @type {number}
     * @memberof NewOrder
     */
    amount_order?: number;
    /**
     * Quoted decimal amount to spend per unit.
     * @type {number}
     * @memberof NewOrder
     */
    price?: number;
    /**
     * Buy or Sell
     * @type {string}
     * @memberof NewOrder
     */
    side?: NewOrderSideEnum;
    /**
     * The order type.
     * @type {string}
     * @memberof NewOrder
     */
    order_type?: NewOrderOrderTypeEnum;
    /**
     * 
     * @type {TimeInForce}
     * @memberof NewOrder
     */
    time_in_force?: TimeInForce;
    /**
     * Required for orders with time_in_force = GOOD_TILL_TIME_EXCHANGE, GOOD_TILL_TIME_OMS
     * @type {Date}
     * @memberof NewOrder
     */
    expire_time?: Date;
    /**
     * TODO: description exec inst  | Parameter | Description | |-----------|--------| | `MAKER_OR_CANCEL` | Rests on the continuous order book at a specified price. If any quantity can be filled immediately, the entire order is canceled. | ##### Exec inst options  | Exchange | MAKER_OR_CANCEL | | --- | --- | | BINANCE | X | | BITFINEX | X | | BITMEX | X | | BLOCKCHAINEXCHANGE | X | | BITSTAMP |  | | COINBASE | X | | GEMINI | X | | KRAKEN | X | | POLONIEX | X | | HITBTC |  | | KRAKENFTS | X | 
     * @type {Array<string>}
     * @memberof NewOrder
     */
    exec_inst?: Array<NewOrderExecInstEnum>;
}


/**
 * 
 * @export
 */
export type Order = {
    /**
     * null
     * @type {string}
     * @memberof Order
     */
    type?: string;
    /**
     * Exchange name
     * @type {string}
     * @memberof Order
     */
    exchange_name?: string;
    /**
     * Orders array
     * @type {Array<OrderData>}
     * @memberof Order
     */
    data?: Array<OrderData>;
}



            export type OrderDataSideEnum = 'BUY' | 'SELL';

            export type OrderDataOrderTypeEnum = 'LIMIT';

            export type OrderDataExecInstEnum = 'MAKER_OR_CANCEL';
/**
 * 
 * @export
 */
export type OrderData = {
    /**
     * Exchange name
     * @type {string}
     * @memberof OrderData
     */
    exchange_id?: string;
    /**
     * Client unique identifier for the trade.
     * @type {string}
     * @memberof OrderData
     */
    id?: string;
    /**
     * Hash client id
     * @type {string}
     * @memberof OrderData
     */
    client_order_id_format_exchange?: string;
    /**
     * Exchange order id
     * @type {string}
     * @memberof OrderData
     */
    exchange_order_id?: string;
    /**
     * Amount open
     * @type {number}
     * @memberof OrderData
     */
    amount_open?: number;
    /**
     * Amount filled
     * @type {number}
     * @memberof OrderData
     */
    amount_filled?: number;
    /**
     * 
     * @type {OrderStatus}
     * @memberof OrderData
     */
    status?: OrderStatus;
    /**
     * History of order status changes
     * @type {Array<Array<string>>}
     * @memberof OrderData
     */
    time_order?: Array<Array<string>>;
    /**
     * Error message
     * @type {string}
     * @memberof OrderData
     */
    error_message?: string;
    /**
     * Client unique identifier for the trade.
     * @type {string}
     * @memberof OrderData
     */
    client_order_id?: string;
    /**
     * The symbol of the order.
     * @type {string}
     * @memberof OrderData
     */
    symbol_exchange?: string;
    /**
     * The CoinAPI symbol of the order.
     * @type {string}
     * @memberof OrderData
     */
    symbol_coinapi?: string;
    /**
     * Quoted decimal amount to purchase.
     * @type {number}
     * @memberof OrderData
     */
    amount_order?: number;
    /**
     * Quoted decimal amount to spend per unit.
     * @type {number}
     * @memberof OrderData
     */
    price?: number;
    /**
     * Buy or Sell
     * @type {string}
     * @memberof OrderData
     */
    side?: OrderDataSideEnum;
    /**
     * The order type.
     * @type {string}
     * @memberof OrderData
     */
    order_type?: OrderDataOrderTypeEnum;
    /**
     * 
     * @type {TimeInForce}
     * @memberof OrderData
     */
    time_in_force?: TimeInForce;
    /**
     * Required for orders with time_in_force = GOOD_TILL_TIME_EXCHANGE, GOOD_TILL_TIME_OMS
     * @type {Date}
     * @memberof OrderData
     */
    expire_time?: Date;
    /**
     * TODO: description exec inst  | Parameter | Description | |-----------|--------| | `MAKER_OR_CANCEL` | Rests on the continuous order book at a specified price. If any quantity can be filled immediately, the entire order is canceled. | ##### Exec inst options  | Exchange | MAKER_OR_CANCEL | | --- | --- | | BINANCE | X | | BITFINEX | X | | BITMEX | X | | BLOCKCHAINEXCHANGE | X | | BITSTAMP |  | | COINBASE | X | | GEMINI | X | | KRAKEN | X | | POLONIEX | X | | HITBTC |  | | KRAKENFTS | X | 
     * @type {Array<string>}
     * @memberof OrderData
     */
    exec_inst?: Array<OrderDataExecInstEnum>;
}



            export type OrderLiveSideEnum = 'BUY' | 'SELL';

            export type OrderLiveOrderTypeEnum = 'LIMIT';

            export type OrderLiveExecInstEnum = 'MAKER_OR_CANCEL';
/**
 * 
 * @export
 */
export type OrderLive = {
    /**
     * Result type name
     * @type {string}
     * @memberof OrderLive
     */
    type?: string;
    /**
     * Exchange name
     * @type {string}
     * @memberof OrderLive
     */
    exchange_id?: string;
    /**
     * Client unique identifier for the trade.
     * @type {string}
     * @memberof OrderLive
     */
    id?: string;
    /**
     * Hash client id
     * @type {string}
     * @memberof OrderLive
     */
    client_order_id_format_exchange?: string;
    /**
     * Exchange order id
     * @type {string}
     * @memberof OrderLive
     */
    exchange_order_id?: string;
    /**
     * Amount open
     * @type {number}
     * @memberof OrderLive
     */
    amount_open?: number;
    /**
     * Amount filled
     * @type {number}
     * @memberof OrderLive
     */
    amount_filled?: number;
    /**
     * 
     * @type {OrderStatus}
     * @memberof OrderLive
     */
    status?: OrderStatus;
    /**
     * History of order status changes
     * @type {Array<Array<string>>}
     * @memberof OrderLive
     */
    time_order?: Array<Array<string>>;
    /**
     * Error message
     * @type {string}
     * @memberof OrderLive
     */
    error_message?: string;
    /**
     * Client unique identifier for the trade.
     * @type {string}
     * @memberof OrderLive
     */
    client_order_id?: string;
    /**
     * The symbol of the order.
     * @type {string}
     * @memberof OrderLive
     */
    symbol_exchange?: string;
    /**
     * The CoinAPI symbol of the order.
     * @type {string}
     * @memberof OrderLive
     */
    symbol_coinapi?: string;
    /**
     * Quoted decimal amount to purchase.
     * @type {number}
     * @memberof OrderLive
     */
    amount_order?: number;
    /**
     * Quoted decimal amount to spend per unit.
     * @type {number}
     * @memberof OrderLive
     */
    price?: number;
    /**
     * Buy or Sell
     * @type {string}
     * @memberof OrderLive
     */
    side?: OrderLiveSideEnum;
    /**
     * The order type.
     * @type {string}
     * @memberof OrderLive
     */
    order_type?: OrderLiveOrderTypeEnum;
    /**
     * 
     * @type {TimeInForce}
     * @memberof OrderLive
     */
    time_in_force?: TimeInForce;
    /**
     * Required for orders with time_in_force = GOOD_TILL_TIME_EXCHANGE, GOOD_TILL_TIME_OMS
     * @type {Date}
     * @memberof OrderLive
     */
    expire_time?: Date;
    /**
     * TODO: description exec inst  | Parameter | Description | |-----------|--------| | `MAKER_OR_CANCEL` | Rests on the continuous order book at a specified price. If any quantity can be filled immediately, the entire order is canceled. | ##### Exec inst options  | Exchange | MAKER_OR_CANCEL | | --- | --- | | BINANCE | X | | BITFINEX | X | | BITMEX | X | | BLOCKCHAINEXCHANGE | X | | BITSTAMP |  | | COINBASE | X | | GEMINI | X | | KRAKEN | X | | POLONIEX | X | | HITBTC |  | | KRAKENFTS | X | 
     * @type {Array<string>}
     * @memberof OrderLive
     */
    exec_inst?: Array<OrderLiveExecInstEnum>;
}


/**
 * Order statuses and the lifecycle are documented in the separate section: https://docs.coinapi.io/#oeml-order-lifecycle 
 * @export
 * @enum {string}
 */
export type OrderStatus = 'RECEIVED' | 'ROUTING' | 'ROUTED' | 'NEW' | 'PENDING_CANCEL' | 'PARTIALLY_FILLED' | 'FILLED' | 'CANCELED' | 'REJECTED';

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
 * Time in force is a special instruction used when placing a trade to indicate how long an order will remain active before it is executed or expires. These options are especially important for active traders and allow them to be more specific about the time parameters.  | Parameter | Description | |-----------|--------| | `GOOD_TILL_CANCEL` | A Good-Til-Cancelled (GTC) order is an order to buy or sell a stock that lasts until the order is completed or canceled. Brokerage firms typically limit the length of time an investor can leave a GTC order open.  This time frame may vary from broker to broker.  Investors should contact their brokerage firms to determine what time limit would apply to GTC orders. | | `GOOD_TILL_TIME_EXCHANGE` | The GTTE (Good-til-Date/Time) time in force lets you select an expiration date and time up until which an order will continue to work. Setting this attribute requires both a time in force selection of GTD, a date entry in the Expiration Date field, and a time entry in the Expiration Time field if that level of detail is required. Note that if you only enter a good-till date, the unfilled order will cancel at the close of the market on the specified day. | | `GOOD_TILL_TIME_OMS` | The GTT (GTTO) supported by OMS. | | `FILL_OR_KILL` | Fill or kill (FOK) is a type of time-in-force designation used in securities trading that instructs a brokerage to execute a transaction immediately and completely or not at all. This type of order is most often used by active traders and is usually for a large quantity of stock. The order must be filled in its entirety or canceled (killed). | | `IMMEDIATE_OR_CANCEL` | An immediate or cancel order (IOC) is an order to buy or sell a security that executes all or part immediately and cancels any unfilled portion of the order. An IOC order is one of several \"duration orders\" that investors can use to specify how long the order remains active in the market and under what conditions the order is canceled. Other commonly used duration order types include fill or kill (FOK), all or none (AON) and good ‘till canceled (GTC). Most online trading platforms allow IOC orders to be placed manually or programmed into automated trading strategies. | | `AUCTION_ONLY` | This order will be added to the auction-only (AO) book for the next auction for this symbol. | | `INDICATION_OF_INTEREST` | An indication of interest (IOI) is an underwriting expression showing a conditional, non-binding interest in buying a security that is currently in registration—awaiting approval by the Securities and Exchange Commission (SEC). The investor\'s broker is required to provide the investor with a preliminary prospectus. However, IOIs in the mergers and acquisitions world has similar intent but is done differently. |  ##### Time in force options  | Exchange | GTC | GTTE | GTTO | FOK | IOC | AO | IOI | | --- | --- | --- | ---- | --- | --- | --- | --- | | BINANCE | X | X |  | X | X |  |  | | BITFINEX | X | X |  | X | X |  |  | | BITMEX | X | X |  |  | X |  |  | | BLOCKCHAINEXCHANGE | X | X |  |  | X |  |  | | BITSTAMP | X | X |  |  | X |  |  | | COINBASE | X |  | X | X | X |  |  | | GEMINI | X | X |  | X | X | X | X | | KRAKEN | X |  | X |  |  |  |  | | POLONIEX | X | X |  | X | X |  |  | | HITBTC | X | X |  | X | X |  |  | | KRAKENFTS | X | X |  |  | X |  |  | 
 * @export
 * @enum {string}
 */
export type TimeInForce = 'GOOD_TILL_CANCEL' | 'GOOD_TILL_TIME_EXCHANGE' | 'GOOD_TILL_TIME_OMS' | 'FILL_OR_KILL' | 'IMMEDIATE_OR_CANCEL' | 'AUCTION_ONLY' | 'INDICATION_OF_INTEREST';



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
         * Cancel all existing order.
         * @summary Cancel all order
         * @throws {RequiredError}
         */
        v1OrdersCancelAllPost(cancelAllOrder: CancelAllOrder, options: RequestOptions): FetchArgs {
            // verify required parameter 'cancelAllOrder' is not null or undefined
            if (cancelAllOrder === null || cancelAllOrder === undefined) {
                throw new RequiredError('cancelAllOrder','Required parameter cancelAllOrder was null or undefined when calling v1OrdersCancelAllPost.');
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
            const needsSerialization = (typeof cancelAllOrder !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(cancelAllOrder != null ? cancelAllOrder : {}) : (((cancelAllOrder:any):string) || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Cancel an existing order, can be used to cancel margin, exchange, and derivative orders. You can cancel the order by the internal order ID or exchange order ID.
         * @summary Cancel order
         * @throws {RequiredError}
         */
        v1OrdersCancelPost(cancelOrder: CancelOrder, options: RequestOptions): FetchArgs {
            // verify required parameter 'cancelOrder' is not null or undefined
            if (cancelOrder === null || cancelOrder === undefined) {
                throw new RequiredError('cancelOrder','Required parameter cancelOrder was null or undefined when calling v1OrdersCancelPost.');
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
            const needsSerialization = (typeof cancelOrder !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(cancelOrder != null ? cancelOrder : {}) : (((cancelOrder:any):string) || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List your current open orders.
         * @summary Get orders
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
         * You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds.
         * @summary Create new order
         * @throws {RequiredError}
         */
        v1OrdersPost(newOrder: NewOrder, options: RequestOptions): FetchArgs {
            // verify required parameter 'newOrder' is not null or undefined
            if (newOrder === null || newOrder === undefined) {
                throw new RequiredError('newOrder','Required parameter newOrder was null or undefined when calling v1OrdersPost.');
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
            const needsSerialization = (typeof newOrder !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(newOrder != null ? newOrder : {}) : (((newOrder:any):string) || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

export type OrdersApiType = { 
    v1OrdersCancelAllPost(cancelAllOrder: CancelAllOrder, options?: RequestOptions): Promise<MessagesOk>,

    v1OrdersCancelPost(cancelOrder: CancelOrder, options?: RequestOptions): Promise<OrderLive>,

    v1OrdersGet(exchangeId?: string, options?: RequestOptions): Promise<Array<Order>>,

    v1OrdersPost(newOrder: NewOrder, options?: RequestOptions): Promise<OrderLive>,
}

/**
 * OrdersApi - factory function to inject configuration 
 * @export
 */
export const OrdersApi = function(configuration?: Configuration, fetch: FetchAPI = portableFetch): OrdersApiType {
    const basePath: string = (configuration && configuration.basePath) || BASE_PATH;
    return {
        /**
         * Cancel all existing order.
         * @summary Cancel all order
         * @throws {RequiredError}
         */
        v1OrdersCancelAllPost(cancelAllOrder: CancelAllOrder, options?: RequestOptions = {}): Promise<MessagesOk> {
            const localVarFetchArgs = OrdersApiFetchParamCreator(configuration).v1OrdersCancelAllPost(cancelAllOrder, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
        /**
         * Cancel an existing order, can be used to cancel margin, exchange, and derivative orders. You can cancel the order by the internal order ID or exchange order ID.
         * @summary Cancel order
         * @throws {RequiredError}
         */
        v1OrdersCancelPost(cancelOrder: CancelOrder, options?: RequestOptions = {}): Promise<OrderLive> {
            const localVarFetchArgs = OrdersApiFetchParamCreator(configuration).v1OrdersCancelPost(cancelOrder, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
        /**
         * List your current open orders.
         * @summary Get orders
         * @throws {RequiredError}
         */
        v1OrdersGet(exchangeId?: string, options?: RequestOptions = {}): Promise<Array<Order>> {
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
         * You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds.
         * @summary Create new order
         * @throws {RequiredError}
         */
        v1OrdersPost(newOrder: NewOrder, options?: RequestOptions = {}): Promise<OrderLive> {
            const localVarFetchArgs = OrdersApiFetchParamCreator(configuration).v1OrdersPost(newOrder, options);
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
