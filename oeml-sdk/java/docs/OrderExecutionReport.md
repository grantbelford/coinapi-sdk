

# OrderExecutionReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchangeId** | **String** | Exchange identifier. | 
**clientOrderId** | **String** | The unique identifier of the order assigned by the client. | 
**symbolExchange** | **String** | Exchange symbol. One of the properties (&#x60;symbol_exchange&#x60;, &#x60;symbol_coinapi&#x60;) are required to identify the market for the new order. |  [optional]
**symbolCoinapi** | **String** | CoinAPI symbol. One of the properties (&#x60;symbol_exchange&#x60;, &#x60;symbol_coinapi&#x60;) are required to identify the market for the new order. |  [optional]
**amountOrder** | [**BigDecimal**](BigDecimal.md) | Order quantity. | 
**price** | [**BigDecimal**](BigDecimal.md) | Order price. | 
**side** | [**OrdSide**](OrdSide.md) |  | 
**orderType** | [**OrdType**](OrdType.md) |  | 
**timeInForce** | [**TimeInForce**](TimeInForce.md) |  | 
**expireTime** | [**LocalDate**](LocalDate.md) | Expiration time. Conditionaly required for orders with time_in_force &#x3D; &#x60;GOOD_TILL_TIME_EXCHANGE&#x60; or &#x60;GOOD_TILL_TIME_OEML&#x60;. |  [optional]
**execInst** | [**List&lt;ExecInstEnum&gt;**](#List&lt;ExecInstEnum&gt;) | Order execution instructions are documented in the separate section: &lt;a href&#x3D;\&quot;#oeml-order-params-exec\&quot;&gt;OEML / Starter Guide / Order parameters / Execution instructions&lt;/a&gt;  |  [optional]
**clientOrderIdFormatExchange** | **String** | The unique identifier of the order assigned by the client converted to the exchange order tag format for the purpose of tracking it. | 
**exchangeOrderId** | **String** | The unique identifier of the order assigned by the exchange. |  [optional]
**amountOpen** | [**BigDecimal**](BigDecimal.md) | Amount open | 
**amountFilled** | [**BigDecimal**](BigDecimal.md) | Amount filled | 
**status** | [**OrdStatus**](OrdStatus.md) |  | 
**timeOrder** | [**List&lt;List&lt;String&gt;&gt;**](List.md) | Timestamped history of order status changes. | 
**errorMessage** | **String** | Error message |  [optional]



## Enum: List&lt;ExecInstEnum&gt;

Name | Value
---- | -----
MAKER_OR_CANCEL | &quot;MAKER_OR_CANCEL&quot;
AUCTION_ONLY | &quot;AUCTION_ONLY&quot;
INDICATION_OF_INTEREST | &quot;INDICATION_OF_INTEREST&quot;


