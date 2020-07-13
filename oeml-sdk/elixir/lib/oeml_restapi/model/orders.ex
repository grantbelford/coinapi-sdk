# NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
# https://openapi-generator.tech
# Do not edit the class manually.

defmodule OEML-RESTAPI.Model.Orders do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :"type",
    :"exchange_id",
    :"data"
  ]

  @type t :: %__MODULE__{
    :"type" => String.t | nil,
    :"exchange_id" => String.t | nil,
    :"data" => [OrdersData] | nil
  }
end

defimpl Poison.Decoder, for: OEML-RESTAPI.Model.Orders do
  import OEML-RESTAPI.Deserializer
  def decode(value, options) do
    value
    |> deserialize(:"data", :list, OEML-RESTAPI.Model.OrdersData, options)
  end
end
