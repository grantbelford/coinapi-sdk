--  OEML _ REST API
--  This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
--
--  The version of the OpenAPI document: v1
--  Contact: support@coinapi.io
--
--  NOTE: This package is auto generated by OpenAPI-Generator 4.3.1.
--  https://openapi-generator.tech
--  Do not edit the class manually.

with .Models;
with Swagger.Clients;
package .Clients is

   type Client_Type is new Swagger.Clients.Client_Type with null record;

   --  Get balances
   --  Get current currency balance from all or single exchange.
   procedure V1_Balances_Get
      (Client : in out Client_Type;
       Exchange_Id : in Swagger.Nullable_UString;
       Result : out .Models.Balance_Type_Vectors.Vector);

   --  Cancel all orders request
   --  This request cancels all open orders on single specified exchange.
   procedure V1_Orders_Cancel_All_Post
      (Client : in out Client_Type;
       Order_Cancel_All_Request_Type : in .Models.OrderCancelAllRequest_Type;
       Result : out .Models.Message_Type);

   --  Cancel order request
   --  Request cancel for an existing order. The order can be canceled using the `client_order_id` or `exchange_order_id`.
   procedure V1_Orders_Cancel_Post
      (Client : in out Client_Type;
       Order_Cancel_Single_Request_Type : in .Models.OrderCancelSingleRequest_Type;
       Result : out .Models.OrderExecutionReport_Type);

   --  Get open orders
   --  Get last execution reports for open orders across all or single exchange.
   procedure V1_Orders_Get
      (Client : in out Client_Type;
       Exchange_Id : in Swagger.Nullable_UString;
       Result : out .Models.OrderExecutionReport_Type_Vectors.Vector);

   --  Send new order
   --  This request creating new order for the specific exchange.
   procedure V1_Orders_Post
      (Client : in out Client_Type;
       Order_New_Single_Request_Type : in .Models.OrderNewSingleRequest_Type;
       Result : out .Models.OrderExecutionReport_Type);

   --  Get order execution report
   --  Get the last order execution report for the specified order. The requested order does not need to be active or opened.
   procedure V1_Orders_Status_Client_Order_Id_Get
      (Client : in out Client_Type;
       Client_Order_Id : in Swagger.UString;
       Result : out .Models.OrderExecutionReport_Type);

   --  Get open positions
   --  Get current open positions across all or single exchange.
   procedure V1_Positions_Get
      (Client : in out Client_Type;
       Exchange_Id : in Swagger.Nullable_UString;
       Result : out .Models.Position_Type_Vectors.Vector);

end .Clients;
