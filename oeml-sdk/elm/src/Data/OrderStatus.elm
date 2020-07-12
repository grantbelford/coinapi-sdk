{-
   OEML - REST API
   Lorem2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ###Lifecycle Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. ###Lifecycle 2 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackhama. 

   The version of the OpenAPI document: v1

   NOTE: This file is auto generated by the openapi-generator.
   https://github.com/openapitools/openapi-generator.git
   Do not edit this file manually.
-}


module Data.OrderStatus exposing (OrderStatus(..), decoder, encode, toString)

import Dict exposing (Dict)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (optional, required)
import Json.Encode as Encode


{-| Order statuses and the lifecycle are documented in the separate section: https://docs.coinapi.io/#oeml-order-lifecycle 
-}
type OrderStatus
    = RECEIVED
    | ROUTING
    | ROUTED
    | NEW
    | PENDINGCANCEL
    | PARTIALLYFILLED
    | FILLED
    | CANCELED
    | REJECTED



decoder : Decoder OrderStatus
decoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "RECEIVED" ->
                        Decode.succeed RECEIVED

                    "ROUTING" ->
                        Decode.succeed ROUTING

                    "ROUTED" ->
                        Decode.succeed ROUTED

                    "NEW" ->
                        Decode.succeed NEW

                    "PENDING_CANCEL" ->
                        Decode.succeed PENDINGCANCEL

                    "PARTIALLY_FILLED" ->
                        Decode.succeed PARTIALLYFILLED

                    "FILLED" ->
                        Decode.succeed FILLED

                    "CANCELED" ->
                        Decode.succeed CANCELED

                    "REJECTED" ->
                        Decode.succeed REJECTED

                    other ->
                        Decode.fail <| "Unknown type: " ++ other
            )



encode : OrderStatus -> Encode.Value
encode model =
    case model of
        RECEIVED ->
            Encode.string "RECEIVED"

        ROUTING ->
            Encode.string "ROUTING"

        ROUTED ->
            Encode.string "ROUTED"

        NEW ->
            Encode.string "NEW"

        PENDINGCANCEL ->
            Encode.string "PENDING_CANCEL"

        PARTIALLYFILLED ->
            Encode.string "PARTIALLY_FILLED"

        FILLED ->
            Encode.string "FILLED"

        CANCELED ->
            Encode.string "CANCELED"

        REJECTED ->
            Encode.string "REJECTED"




toString : OrderStatus -> String
toString model =
    case model of
        RECEIVED ->
            "RECEIVED"

        ROUTING ->
            "ROUTING"

        ROUTED ->
            "ROUTED"

        NEW ->
            "NEW"

        PENDINGCANCEL ->
            "PENDING_CANCEL"

        PARTIALLYFILLED ->
            "PARTIALLY_FILLED"

        FILLED ->
            "FILLED"

        CANCELED ->
            "CANCELED"

        REJECTED ->
            "REJECTED"


