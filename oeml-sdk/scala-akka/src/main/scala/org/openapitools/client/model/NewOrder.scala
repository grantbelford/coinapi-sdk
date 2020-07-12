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
package org.openapitools.client.model

import java.time.LocalDate
import org.openapitools.client.core.ApiModel

case class NewOrder (
  /* Exchange name */
  exchangeId: Option[String] = None,
  /* Client unique identifier for the trade. */
  clientOrderId: Option[String] = None,
  /* The symbol of the order. */
  symbolExchange: Option[String] = None,
  /* The CoinAPI symbol of the order. */
  symbolCoinapi: Option[String] = None,
  /* Quoted decimal amount to purchase. */
  amountOrder: Option[Double] = None,
  /* Quoted decimal amount to spend per unit. */
  price: Option[Double] = None,
  /* Buy or Sell */
  side: Option[NewOrderEnums.Side] = None,
  /* The order type. */
  orderType: Option[NewOrderEnums.OrderType] = None,
  timeInForce: Option[TimeInForce] = None,
  /* Required for orders with time_in_force = GOOD_TILL_TIME_EXCHANGE, GOOD_TILL_TIME_OMS */
  expireTime: Option[LocalDate] = None,
  /* TODO: description exec inst  | Parameter | Description | |-----------|--------| | `MAKER_OR_CANCEL` | Rests on the continuous order book at a specified price. If any quantity can be filled immediately, the entire order is canceled. | ##### Exec inst options  | Exchange | MAKER_OR_CANCEL | | --- | --- | | BINANCE | X | | BITFINEX | X | | BITMEX | X | | BLOCKCHAINEXCHANGE | X | | BITSTAMP |  | | COINBASE | X | | GEMINI | X | | KRAKEN | X | | POLONIEX | X | | HITBTC |  | | KRAKENFTS | X |  */
  execInst: Option[NewOrderEnums.Seq[ExecInst]] = None
) extends ApiModel

object NewOrderEnums {

  type Side = Side.Value
  type OrderType = OrderType.Value
  type Seq[ExecInst] = Seq[ExecInst].Value
  object Side extends Enumeration {
    val BUY = Value("BUY")
    val SELL = Value("SELL")
  }

  object OrderType extends Enumeration {
    val LIMIT = Value("LIMIT")
  }

  object Seq[ExecInst] extends Enumeration {
  }

}

