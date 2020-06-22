--[[
  OMS - REST API
 
  OMS Project
 
  The version of the OpenAPI document: v1
  
  Generated by: https://openapi-generator.tech
]]

-- order_live class
local order_live = {}
local order_live_mt = {
	__name = "order_live";
	__index = order_live;
}

local function cast_order_live(t)
	return setmetatable(t, order_live_mt)
end

local function new_order_live(type, exchange_id, id, client_order_id_format_exchange, exchange_order_id, amount_open, amount_filled, status, time_order, error_message, client_order_id, symbol_exchange, symbol_coinapi, amount_order, price, side, order_type, time_in_force, expire_time, exec_inst)
	return cast_order_live({
		["type"] = type;
		["exchange_id"] = exchange_id;
		["id"] = id;
		["client_order_id_format_exchange"] = client_order_id_format_exchange;
		["exchange_order_id"] = exchange_order_id;
		["amount_open"] = amount_open;
		["amount_filled"] = amount_filled;
		["status"] = status;
		["time_order"] = time_order;
		["error_message"] = error_message;
		["client_order_id"] = client_order_id;
		["symbol_exchange"] = symbol_exchange;
		["symbol_coinapi"] = symbol_coinapi;
		["amount_order"] = amount_order;
		["price"] = price;
		["side"] = side;
		["order_type"] = order_type;
		["time_in_force"] = time_in_force;
		["expire_time"] = expire_time;
		["exec_inst"] = exec_inst;
	})
end

return {
	cast = cast_order_live;
	new = new_order_live;
}