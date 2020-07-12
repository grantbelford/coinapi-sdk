{-
   OEML - REST API
   This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 

   The version of the OpenAPI document: v1

   NOTE: This file is auto generated by the openapi-generator.
   https://github.com/openapitools/openapi-generator.git
   Do not edit this file manually.
-}


module Data.OrderData exposing (OrderData, Side(..), OrderType(..), ExecInst(..), decoder, encode, encodeWithTag, toString)

import Data.OrderStatus as OrderStatus exposing (OrderStatus)
import Data.TimeInForce as TimeInForce exposing (TimeInForce)
import DateOnly exposing (DateOnly)
import Dict exposing (Dict)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (optional, required)
import Json.Encode as Encode


type alias OrderData =
    { exchangeId : Maybe (String)
    , id : Maybe (String)
    , clientOrderIdFormatExchange : Maybe (String)
    , exchangeOrderId : Maybe (String)
    , amountOpen : Maybe (Float)
    , amountFilled : Maybe (Float)
    , status : Maybe (OrderStatus)
    , timeOrder : Maybe ((List (List String)))
    , errorMessage : Maybe (String)
    , clientOrderId : Maybe (String)
    , symbolExchange : Maybe (String)
    , symbolCoinapi : Maybe (String)
    , amountOrder : Maybe (Float)
    , price : Maybe (Float)
    , side : Maybe (Side)
    , orderType : Maybe (OrderType)
    , timeInForce : Maybe (TimeInForce)
    , expireTime : Maybe (DateOnly)
    , execInst : Maybe ((List ExecInst))
    }


type Side
    = BUY
    | SELL



type OrderType
    = LIMIT



type ExecInst
    = MAKERORCANCEL



decoder : Decoder OrderData
decoder =
    Decode.succeed OrderData
        |> optional "exchange_id" (Decode.nullable Decode.string) Nothing
        |> optional "id" (Decode.nullable Decode.string) Nothing
        |> optional "client_order_id_format_exchange" (Decode.nullable Decode.string) Nothing
        |> optional "exchange_order_id" (Decode.nullable Decode.string) Nothing
        |> optional "amount_open" (Decode.nullable Decode.float) Nothing
        |> optional "amount_filled" (Decode.nullable Decode.float) Nothing
        |> optional "status" (Decode.nullable OrderStatus.decoder) Nothing
        |> optional "time_order" (Decode.nullable (Decode.list (Decode.list Decode.string))) Nothing
        |> optional "error_message" (Decode.nullable Decode.string) Nothing
        |> optional "client_order_id" (Decode.nullable Decode.string) Nothing
        |> optional "symbol_exchange" (Decode.nullable Decode.string) Nothing
        |> optional "symbol_coinapi" (Decode.nullable Decode.string) Nothing
        |> optional "amount_order" (Decode.nullable Decode.float) Nothing
        |> optional "price" (Decode.nullable Decode.float) Nothing
        |> optional "side" (Decode.nullable sideDecoder) Nothing
        |> optional "order_type" (Decode.nullable orderTypeDecoder) Nothing
        |> optional "time_in_force" (Decode.nullable TimeInForce.decoder) Nothing
        |> optional "expire_time" (Decode.nullable DateOnly.decoder) Nothing
        |> optional "exec_inst" (Decode.nullable (Decode.list execInstDecoder)) Nothing



encode : OrderData -> Encode.Value
encode =
    Encode.object << encodePairs


encodeWithTag : ( String, String ) -> OrderData -> Encode.Value
encodeWithTag (tagField, tag) model =
    Encode.object <| encodePairs model ++ [ ( tagField, Encode.string tag ) ]


encodePairs : OrderData -> List (String, Encode.Value)
encodePairs model =
    [ ( "exchange_id", Maybe.withDefault Encode.null (Maybe.map Encode.string model.exchangeId) )
    , ( "id", Maybe.withDefault Encode.null (Maybe.map Encode.string model.id) )
    , ( "client_order_id_format_exchange", Maybe.withDefault Encode.null (Maybe.map Encode.string model.clientOrderIdFormatExchange) )
    , ( "exchange_order_id", Maybe.withDefault Encode.null (Maybe.map Encode.string model.exchangeOrderId) )
    , ( "amount_open", Maybe.withDefault Encode.null (Maybe.map Encode.float model.amountOpen) )
    , ( "amount_filled", Maybe.withDefault Encode.null (Maybe.map Encode.float model.amountFilled) )
    , ( "status", Maybe.withDefault Encode.null (Maybe.map OrderStatus.encode model.status) )
    , ( "time_order", Maybe.withDefault Encode.null (Maybe.map (Encode.list (Encode.list Encode.string)) model.timeOrder) )
    , ( "error_message", Maybe.withDefault Encode.null (Maybe.map Encode.string model.errorMessage) )
    , ( "client_order_id", Maybe.withDefault Encode.null (Maybe.map Encode.string model.clientOrderId) )
    , ( "symbol_exchange", Maybe.withDefault Encode.null (Maybe.map Encode.string model.symbolExchange) )
    , ( "symbol_coinapi", Maybe.withDefault Encode.null (Maybe.map Encode.string model.symbolCoinapi) )
    , ( "amount_order", Maybe.withDefault Encode.null (Maybe.map Encode.float model.amountOrder) )
    , ( "price", Maybe.withDefault Encode.null (Maybe.map Encode.float model.price) )
    , ( "side", Maybe.withDefault Encode.null (Maybe.map encodeSide model.side) )
    , ( "order_type", Maybe.withDefault Encode.null (Maybe.map encodeOrderType model.orderType) )
    , ( "time_in_force", Maybe.withDefault Encode.null (Maybe.map TimeInForce.encode model.timeInForce) )
    , ( "expire_time", Maybe.withDefault Encode.null (Maybe.map DateOnly.encode model.expireTime) )
    , ( "exec_inst", Maybe.withDefault Encode.null (Maybe.map (Encode.list encodeExecInst) model.execInst) )
    ]



toString : OrderData -> String
toString =
    Encode.encode 0 << encode




sideDecoder : Decoder Side
sideDecoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "BUY" ->
                        Decode.succeed BUY

                    "SELL" ->
                        Decode.succeed SELL

                    other ->
                        Decode.fail <| "Unknown type: " ++ other
            )



encodeSide : Side -> Encode.Value
encodeSide model =
    case model of
        BUY ->
            Encode.string "BUY"

        SELL ->
            Encode.string "SELL"




orderTypeDecoder : Decoder OrderType
orderTypeDecoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "LIMIT" ->
                        Decode.succeed LIMIT

                    other ->
                        Decode.fail <| "Unknown type: " ++ other
            )



encodeOrderType : OrderType -> Encode.Value
encodeOrderType model =
    case model of
        LIMIT ->
            Encode.string "LIMIT"




execInstDecoder : Decoder ExecInst
execInstDecoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "MAKER_OR_CANCEL" ->
                        Decode.succeed MAKERORCANCEL

                    other ->
                        Decode.fail <| "Unknown type: " ++ other
            )



encodeExecInst : ExecInst -> Encode.Value
encodeExecInst model =
    case model of
        MAKERORCANCEL ->
            Encode.string "MAKER_OR_CANCEL"




