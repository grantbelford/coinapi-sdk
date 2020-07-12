--  OEML _ REST API
--  This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
--
--  The version of the OpenAPI document: v1
--  
--
--  NOTE: This package is auto generated by OpenAPI-Generator 4.3.1.
--  https://openapi-generator.tech
--  Do not edit the class manually.

with Swagger.Streams;
package body .Clients is

   --  Get balances
   --  Returns all of your balances, including available balance.
   procedure V1_Balances_Get
      (Client : in out Client_Type;
       Exchange_Id : in Swagger.Nullable_UString;
       Result : out .Models.Balance_Type_Vectors.Vector) is
      URI   : Swagger.Clients.URI_Type;
      Reply : Swagger.Value_Type;
   begin
      Client.Set_Accept ((1 => Swagger.Clients.APPLICATION_JSON));

      URI.Add_Param ("exchange_id", Exchange_Id);
      URI.Set_Path ("/v1/balances");
      Client.Call (Swagger.Clients.GET, URI, Reply);
      .Models.Deserialize (Reply, "", Result);
   end V1_Balances_Get;

   --  Cancel all order
   --  Cancel all existing order.
   procedure V1_Orders_Cancel_All_Post
      (Client : in out Client_Type;
       Cancel_All_Order_Type : in .Models.CancelAllOrder_Type;
       Result : out .Models.MessagesOk_Type) is
      URI   : Swagger.Clients.URI_Type;
      Req   : Swagger.Clients.Request_Type;
      Reply : Swagger.Value_Type;
   begin
      Client.Set_Accept ((1 => Swagger.Clients.APPLICATION_JSON));
      Client.Initialize (Req, (1 => Swagger.Clients.APPLICATION_JSON));
      .Models.Serialize (Req.Stream, "", Cancel_All_Order_Type);

      URI.Set_Path ("/v1/orders/cancel/all");
      Client.Call (Swagger.Clients.POST, URI, Req, Reply);
      .Models.Deserialize (Reply, "", Result);
   end V1_Orders_Cancel_All_Post;

   --  Cancel order
   --  Cancel an existing order, can be used to cancel margin, exchange, and derivative orders. You can cancel the order by the internal order ID or exchange order ID.
   procedure V1_Orders_Cancel_Post
      (Client : in out Client_Type;
       Cancel_Order_Type : in .Models.CancelOrder_Type;
       Result : out .Models.OrderLive_Type) is
      URI   : Swagger.Clients.URI_Type;
      Req   : Swagger.Clients.Request_Type;
      Reply : Swagger.Value_Type;
   begin
      Client.Set_Accept ((Swagger.Clients.APPLICATION_JSON,
                          Swagger.Clients.APPLICTION_JSON));
      Client.Initialize (Req, (1 => Swagger.Clients.APPLICATION_JSON));
      .Models.Serialize (Req.Stream, "", Cancel_Order_Type);

      URI.Set_Path ("/v1/orders/cancel");
      Client.Call (Swagger.Clients.POST, URI, Req, Reply);
      .Models.Deserialize (Reply, "", Result);
   end V1_Orders_Cancel_Post;

   --  Get orders
   --  List your current open orders.
   procedure V1_Orders_Get
      (Client : in out Client_Type;
       Exchange_Id : in Swagger.Nullable_UString;
       Result : out .Models.Order_Type_Vectors.Vector) is
      URI   : Swagger.Clients.URI_Type;
      Reply : Swagger.Value_Type;
   begin
      Client.Set_Accept ((1 => Swagger.Clients.APPLICATION_JSON));

      URI.Add_Param ("exchange_id", Exchange_Id);
      URI.Set_Path ("/v1/orders");
      Client.Call (Swagger.Clients.GET, URI, Reply);
      .Models.Deserialize (Reply, "", Result);
   end V1_Orders_Get;

   --  Create new order
   --  You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds.
   procedure V1_Orders_Post
      (Client : in out Client_Type;
       New_Order_Type : in .Models.NewOrder_Type;
       Result : out .Models.OrderLive_Type) is
      URI   : Swagger.Clients.URI_Type;
      Req   : Swagger.Clients.Request_Type;
      Reply : Swagger.Value_Type;
   begin
      Client.Set_Accept ((Swagger.Clients.APPLICATION_JSON,
                          Swagger.Clients.APPLICTION_JSON));
      Client.Initialize (Req, (1 => Swagger.Clients.APPLICATION_JSON));
      .Models.Serialize (Req.Stream, "", New_Order_Type);

      URI.Set_Path ("/v1/orders");
      Client.Call (Swagger.Clients.POST, URI, Req, Reply);
      .Models.Deserialize (Reply, "", Result);
   end V1_Orders_Post;

   --  Get positions
   --  Returns all of your positions.
   procedure V1_Positions_Get
      (Client : in out Client_Type;
       Exchange_Id : in Swagger.Nullable_UString;
       Result : out .Models.Position_Type_Vectors.Vector) is
      URI   : Swagger.Clients.URI_Type;
      Reply : Swagger.Value_Type;
   begin
      Client.Set_Accept ((1 => Swagger.Clients.APPLICATION_JSON));

      URI.Add_Param ("exchange_id", Exchange_Id);
      URI.Set_Path ("/v1/positions");
      Client.Call (Swagger.Clients.GET, URI, Reply);
      .Models.Deserialize (Reply, "", Result);
   end V1_Positions_Get;
end .Clients;
