{-
   OEML - REST API
   This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 

   The version of the OpenAPI document: v1

   NOTE: This file is auto generated by the openapi-generator.
   https://github.com/openapitools/openapi-generator.git
   Do not edit this file manually.
-}


module Data.CancelOrder exposing (CancelOrder, decoder, encode, encodeWithTag, toString)

import Dict exposing (Dict)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (optional, required)
import Json.Encode as Encode


type alias CancelOrder =
    { exchangeId : Maybe (String)
    , exchangeOrderId : Maybe (String)
    , clientOrderId : Maybe (String)
    }


decoder : Decoder CancelOrder
decoder =
    Decode.succeed CancelOrder
        |> optional "exchange_id" (Decode.nullable Decode.string) Nothing
        |> optional "exchange_order_id" (Decode.nullable Decode.string) Nothing
        |> optional "client_order_id" (Decode.nullable Decode.string) Nothing



encode : CancelOrder -> Encode.Value
encode =
    Encode.object << encodePairs


encodeWithTag : ( String, String ) -> CancelOrder -> Encode.Value
encodeWithTag (tagField, tag) model =
    Encode.object <| encodePairs model ++ [ ( tagField, Encode.string tag ) ]


encodePairs : CancelOrder -> List (String, Encode.Value)
encodePairs model =
    [ ( "exchange_id", Maybe.withDefault Encode.null (Maybe.map Encode.string model.exchangeId) )
    , ( "exchange_order_id", Maybe.withDefault Encode.null (Maybe.map Encode.string model.exchangeOrderId) )
    , ( "client_order_id", Maybe.withDefault Encode.null (Maybe.map Encode.string model.clientOrderId) )
    ]



toString : CancelOrder -> String
toString =
    Encode.encode 0 << encode




