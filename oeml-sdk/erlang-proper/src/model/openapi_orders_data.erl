-module(openapi_orders_data).

-include("openapi.hrl").

-export([openapi_orders_data/0]).

-export([openapi_orders_data/1]).

-export_type([openapi_orders_data/0]).

-type openapi_orders_data() ::
  [ {'exchange_id', binary() }
  | {'id', binary() }
  | {'client_order_id_format_exchange', binary() }
  | {'exchange_order_id', binary() }
  | {'amount_open', integer() }
  | {'amount_filled', integer() }
  | {'status', openapi_ord_status:openapi_ord_status() }
  | {'time_order', list(list(binary())) }
  | {'error_message', binary() }
  | {'client_order_id', binary() }
  | {'symbol_exchange', binary() }
  | {'symbol_coinapi', binary() }
  | {'amount_order', integer() }
  | {'price', integer() }
  | {'side', binary() }
  | {'order_type', binary() }
  | {'time_in_force', openapi_time_in_force:openapi_time_in_force() }
  | {'expire_time', date() }
  | {'exec_inst', list(binary()) }
  ].


openapi_orders_data() ->
    openapi_orders_data([]).

openapi_orders_data(Fields) ->
  Default = [ {'exchange_id', binary() }
            , {'id', binary() }
            , {'client_order_id_format_exchange', binary() }
            , {'exchange_order_id', binary() }
            , {'amount_open', integer() }
            , {'amount_filled', integer() }
            , {'status', openapi_ord_status:openapi_ord_status() }
            , {'time_order', list(list(binary())) }
            , {'error_message', binary() }
            , {'client_order_id', binary() }
            , {'symbol_exchange', binary() }
            , {'symbol_coinapi', binary() }
            , {'amount_order', integer() }
            , {'price', integer() }
            , {'side', elements([<<"BUY">>, <<"SELL">>]) }
            , {'order_type', elements([<<"LIMIT">>]) }
            , {'time_in_force', openapi_time_in_force:openapi_time_in_force() }
            , {'expire_time', date() }
            , {'exec_inst', list(binary()) }
            ],
  lists:ukeymerge(1, lists:sort(Fields), lists:sort(Default)).
