/*
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol.\n
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by the OAS code generator program.
 * https://github.com/OpenAPITools/openapi-generator
 * Do not edit the class manually.
 */

/**
 * OASOrdersData
 */
public class OASOrdersData implements OAS.MappedProperties {
    /**
     * Exchange name
     * @return exchangeId
     */
    public String exchangeId { get; set; }

    /**
     * Client unique identifier for the trade.
     * @return id
     */
    public String id { get; set; }

    /**
     * Hash client id
     * @return clientOrderIdFormatExchange
     */
    public String clientOrderIdFormatExchange { get; set; }

    /**
     * Exchange order id
     * @return exchangeOrderId
     */
    public String exchangeOrderId { get; set; }

    /**
     * Amount open
     * @return amountOpen
     */
    public Double amountOpen { get; set; }

    /**
     * Amount filled
     * @return amountFilled
     */
    public Double amountFilled { get; set; }

    /**
     * Get status
     * @return status
     */
    public OASOrdStatus status { get; set; }

    /**
     * History of order status changes
     * @return timeOrder
     */
    public List<List<String>> timeOrder { get; set; }

    /**
     * Error message
     * @return errorMessage
     */
    public String errorMessage { get; set; }

    /**
     * Client unique identifier for the trade.
     * @return clientOrderId
     */
    public String clientOrderId { get; set; }

    /**
     * The symbol of the order.
     * @return symbolExchange
     */
    public String symbolExchange { get; set; }

    /**
     * The CoinAPI symbol of the order.
     * @return symbolCoinapi
     */
    public String symbolCoinapi { get; set; }

    /**
     * Quoted decimal amount to purchase.
     * @return amountOrder
     */
    public Double amountOrder { get; set; }

    /**
     * Quoted decimal amount to spend per unit.
     * @return price
     */
    public Double price { get; set; }

    /**
     * Buy or Sell
     */
    public enum SideEnum {
        BUY,
        SELL
    }

    /**
     * Buy or Sell
     * @return side
     */
    public SideEnum side { get; set; }

    /**
     * The order type.
     */
    public enum OrderTypeEnum {
        LIMIT
    }

    /**
     * The order type.
     * @return orderType
     */
    public OrderTypeEnum orderType { get; set; }

    /**
     * Get timeInForce
     * @return timeInForce
     */
    public OASTimeInForce timeInForce { get; set; }

    /**
     * Required for orders with time_in_force = GOOD_TILL_TIME_EXCHANGE, GOOD_TILL_TIME_OMS
     * @return expireTime
     */
    public Date expireTime { get; set; }

    /**
     * Gets or Sets execInst
     */
    public enum ExecInstEnum {
        MAKER_OR_CANCEL,
        AUCTION_ONLY,
        INDICATION_OF_INTEREST
    }

    /**
     * Order execution instructions are documented in the separate section: <a href="#oeml-order-params-exec">OEML / Starter Guide / Order parameters / Execution instructions</a>
     * @return execInst
     */
    public List<ExecInstEnum> execInst { get; set; }

    private static final Map<String, String> propertyMappings = new Map<String, String>{
        'exchange_id' => 'exchangeId',
        'client_order_id_format_exchange' => 'clientOrderIdFormatExchange',
        'exchange_order_id' => 'exchangeOrderId',
        'amount_open' => 'amountOpen',
        'amount_filled' => 'amountFilled',
        'time_order' => 'timeOrder',
        'error_message' => 'errorMessage',
        'client_order_id' => 'clientOrderId',
        'symbol_exchange' => 'symbolExchange',
        'symbol_coinapi' => 'symbolCoinapi',
        'amount_order' => 'amountOrder',
        'order_type' => 'orderType',
        'time_in_force' => 'timeInForce',
        'expire_time' => 'expireTime',
        'exec_inst' => 'execInst'
    };

    public Map<String, String> getPropertyMappings() {
        return propertyMappings;
    }

    public OASOrdersData() {
        timeOrder = new List<List<String>>();
        execInst = new List<ExecInstEnum>();
    }

    public static OASOrdersData getExample() {
        OASOrdersData ordersData = new OASOrdersData();
          ordersData.exchangeId = 'KRAKEN';
          ordersData.id = 'KPP-222389382-AQ';
          ordersData.clientOrderIdFormatExchange = 'f81211e2-27c4-b86a-8143-01088ba9222c';
          ordersData.exchangeOrderId = '90832ASASAS89789-1112';
          ordersData.amountOpen = 0.22;
          ordersData.amountFilled = 0.0;
          ordersData.status = OASOrdStatus.getExample();
          ordersData.timeOrder = new List<List<String>>{new List<String>{'["RECEIVED","2020-05-27T11:16:20.1677709Z"]'}};
          ordersData.errorMessage = '{"result":"error","reason":"InsufficientFunds","message":"Failed to place buy order on symbol \'BTCUSD\' for price $7,000.00 and quantity 0.22 BTC due to insufficient funds"}';
          ordersData.clientOrderId = 'KPP-222389382-AQ';
          ordersData.symbolExchange = 'BTCUSD';
          ordersData.symbolCoinapi = 'KRAKEN_SPOT_BTC_USD';
          ordersData.amountOrder = 0.045;
          ordersData.price = 0.0783;
          ordersData.side = SideEnum.BUY;
          ordersData.orderType = OrderTypeEnum.LIMIT;
          ordersData.timeInForce = OASTimeInForce.getExample();
          ordersData.expireTime = Date.getExample();
          ordersData.execInst = List<ExecInstEnum>.LIST_EXECINSTENUM_NEW_LIST_STRING_MAKER_OR_CANCEL_;
        return ordersData;
    }

    public Boolean equals(Object obj) {
        if (obj instanceof OASOrdersData) {           
            OASOrdersData ordersData = (OASOrdersData) obj;
            return this.exchangeId == ordersData.exchangeId
                && this.id == ordersData.id
                && this.clientOrderIdFormatExchange == ordersData.clientOrderIdFormatExchange
                && this.exchangeOrderId == ordersData.exchangeOrderId
                && this.amountOpen == ordersData.amountOpen
                && this.amountFilled == ordersData.amountFilled
                && this.status == ordersData.status
                && this.timeOrder == ordersData.timeOrder
                && this.errorMessage == ordersData.errorMessage
                && this.clientOrderId == ordersData.clientOrderId
                && this.symbolExchange == ordersData.symbolExchange
                && this.symbolCoinapi == ordersData.symbolCoinapi
                && this.amountOrder == ordersData.amountOrder
                && this.price == ordersData.price
                && this.side == ordersData.side
                && this.orderType == ordersData.orderType
                && this.timeInForce == ordersData.timeInForce
                && this.expireTime == ordersData.expireTime
                && this.execInst == ordersData.execInst;
        }
        return false;
    }

    public Integer hashCode() {
        Integer hashCode = 43;
        hashCode = (17 * hashCode) + (exchangeId == null ? 0 : System.hashCode(exchangeId));
        hashCode = (17 * hashCode) + (id == null ? 0 : System.hashCode(id));
        hashCode = (17 * hashCode) + (clientOrderIdFormatExchange == null ? 0 : System.hashCode(clientOrderIdFormatExchange));
        hashCode = (17 * hashCode) + (exchangeOrderId == null ? 0 : System.hashCode(exchangeOrderId));
        hashCode = (17 * hashCode) + (amountOpen == null ? 0 : System.hashCode(amountOpen));
        hashCode = (17 * hashCode) + (amountFilled == null ? 0 : System.hashCode(amountFilled));
        hashCode = (17 * hashCode) + (status == null ? 0 : System.hashCode(status));
        hashCode = (17 * hashCode) + (timeOrder == null ? 0 : System.hashCode(timeOrder));
        hashCode = (17 * hashCode) + (errorMessage == null ? 0 : System.hashCode(errorMessage));
        hashCode = (17 * hashCode) + (clientOrderId == null ? 0 : System.hashCode(clientOrderId));
        hashCode = (17 * hashCode) + (symbolExchange == null ? 0 : System.hashCode(symbolExchange));
        hashCode = (17 * hashCode) + (symbolCoinapi == null ? 0 : System.hashCode(symbolCoinapi));
        hashCode = (17 * hashCode) + (amountOrder == null ? 0 : System.hashCode(amountOrder));
        hashCode = (17 * hashCode) + (price == null ? 0 : System.hashCode(price));
        hashCode = (17 * hashCode) + (side == null ? 0 : System.hashCode(side));
        hashCode = (17 * hashCode) + (orderType == null ? 0 : System.hashCode(orderType));
        hashCode = (17 * hashCode) + (timeInForce == null ? 0 : System.hashCode(timeInForce));
        hashCode = (17 * hashCode) + (expireTime == null ? 0 : System.hashCode(expireTime));
        hashCode = (17 * hashCode) + (execInst == null ? 0 : System.hashCode(execInst));
        return hashCode;
    }
}
