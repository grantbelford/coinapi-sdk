# ORDER_EXECUTION_REPORT_ALL_OF

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_order_id_format_exchange** | [**STRING_32**](STRING_32.md) | The unique identifier of the order assigned by the client converted to the exchange order tag format for the purpose of tracking it. | [default to null]
**exchange_order_id** | [**STRING_32**](STRING_32.md) | The unique identifier of the order assigned by the exchange. | [optional] [default to null]
**amount_open** | **REAL_32** | Amount open | [default to null]
**amount_filled** | **REAL_32** | Amount filled | [default to null]
**status** | [**ORD_STATUS**](OrdStatus.md) |  | [default to null]
**time_order** | [**LIST [LIST [STRING_32]]**](LIST.md) | Timestamped history of order status changes. | [default to null]
**error_message** | [**STRING_32**](STRING_32.md) | Error message | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

