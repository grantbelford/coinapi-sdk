/*
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.ExecutionReportAllOf;
import org.openapitools.client.model.NewOrderSingle;
import org.openapitools.client.model.OrdSide;
import org.openapitools.client.model.OrdStatus;
import org.openapitools.client.model.OrdType;
import org.openapitools.client.model.TimeInForce;
import org.threeten.bp.LocalDate;

/**
 * ExecutionReport
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-07-13T11:25:52.494Z[Etc/UTC]")
public class ExecutionReport {
  public static final String SERIALIZED_NAME_EXCHANGE_ID = "exchange_id";
  @SerializedName(SERIALIZED_NAME_EXCHANGE_ID)
  private String exchangeId;

  public static final String SERIALIZED_NAME_CLIENT_ORDER_ID = "client_order_id";
  @SerializedName(SERIALIZED_NAME_CLIENT_ORDER_ID)
  private String clientOrderId;

  public static final String SERIALIZED_NAME_SYMBOL_EXCHANGE = "symbol_exchange";
  @SerializedName(SERIALIZED_NAME_SYMBOL_EXCHANGE)
  private String symbolExchange;

  public static final String SERIALIZED_NAME_SYMBOL_COINAPI = "symbol_coinapi";
  @SerializedName(SERIALIZED_NAME_SYMBOL_COINAPI)
  private String symbolCoinapi;

  public static final String SERIALIZED_NAME_AMOUNT_ORDER = "amount_order";
  @SerializedName(SERIALIZED_NAME_AMOUNT_ORDER)
  private BigDecimal amountOrder;

  public static final String SERIALIZED_NAME_PRICE = "price";
  @SerializedName(SERIALIZED_NAME_PRICE)
  private BigDecimal price;

  public static final String SERIALIZED_NAME_SIDE = "side";
  @SerializedName(SERIALIZED_NAME_SIDE)
  private OrdSide side;

  public static final String SERIALIZED_NAME_ORDER_TYPE = "order_type";
  @SerializedName(SERIALIZED_NAME_ORDER_TYPE)
  private OrdType orderType;

  public static final String SERIALIZED_NAME_TIME_IN_FORCE = "time_in_force";
  @SerializedName(SERIALIZED_NAME_TIME_IN_FORCE)
  private TimeInForce timeInForce;

  public static final String SERIALIZED_NAME_EXPIRE_TIME = "expire_time";
  @SerializedName(SERIALIZED_NAME_EXPIRE_TIME)
  private LocalDate expireTime = null;

  /**
   * Gets or Sets execInst
   */
  @JsonAdapter(ExecInstEnum.Adapter.class)
  public enum ExecInstEnum {
    MAKER_OR_CANCEL("MAKER_OR_CANCEL"),
    
    AUCTION_ONLY("AUCTION_ONLY"),
    
    INDICATION_OF_INTEREST("INDICATION_OF_INTEREST");

    private String value;

    ExecInstEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ExecInstEnum fromValue(String value) {
      for (ExecInstEnum b : ExecInstEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ExecInstEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ExecInstEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ExecInstEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return ExecInstEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_EXEC_INST = "exec_inst";
  @SerializedName(SERIALIZED_NAME_EXEC_INST)
  private List<ExecInstEnum> execInst = null;

  public static final String SERIALIZED_NAME_CLIENT_ORDER_ID_FORMAT_EXCHANGE = "client_order_id_format_exchange";
  @SerializedName(SERIALIZED_NAME_CLIENT_ORDER_ID_FORMAT_EXCHANGE)
  private String clientOrderIdFormatExchange;

  public static final String SERIALIZED_NAME_EXCHANGE_ORDER_ID = "exchange_order_id";
  @SerializedName(SERIALIZED_NAME_EXCHANGE_ORDER_ID)
  private String exchangeOrderId;

  public static final String SERIALIZED_NAME_AMOUNT_OPEN = "amount_open";
  @SerializedName(SERIALIZED_NAME_AMOUNT_OPEN)
  private BigDecimal amountOpen;

  public static final String SERIALIZED_NAME_AMOUNT_FILLED = "amount_filled";
  @SerializedName(SERIALIZED_NAME_AMOUNT_FILLED)
  private BigDecimal amountFilled;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private OrdStatus status;

  public static final String SERIALIZED_NAME_TIME_ORDER = "time_order";
  @SerializedName(SERIALIZED_NAME_TIME_ORDER)
  private List<List<String>> timeOrder = null;

  public static final String SERIALIZED_NAME_ERROR_MESSAGE = "error_message";
  @SerializedName(SERIALIZED_NAME_ERROR_MESSAGE)
  private String errorMessage;


  public ExecutionReport exchangeId(String exchangeId) {
    
    this.exchangeId = exchangeId;
    return this;
  }

   /**
   * Exchange identifier.
   * @return exchangeId
  **/
  @ApiModelProperty(example = "KRAKEN", required = true, value = "Exchange identifier.")

  public String getExchangeId() {
    return exchangeId;
  }


  public void setExchangeId(String exchangeId) {
    this.exchangeId = exchangeId;
  }


  public ExecutionReport clientOrderId(String clientOrderId) {
    
    this.clientOrderId = clientOrderId;
    return this;
  }

   /**
   * Unique identifier for the order assigned by the &#x60;OEML API&#x60; client.
   * @return clientOrderId
  **/
  @ApiModelProperty(example = "KPP-222389382-AQ", required = true, value = "Unique identifier for the order assigned by the `OEML API` client.")

  public String getClientOrderId() {
    return clientOrderId;
  }


  public void setClientOrderId(String clientOrderId) {
    this.clientOrderId = clientOrderId;
  }


  public ExecutionReport symbolExchange(String symbolExchange) {
    
    this.symbolExchange = symbolExchange;
    return this;
  }

   /**
   * Exchange symbol. One of the properties (&#x60;symbol_exchange&#x60;, &#x60;symbol_coinapi&#x60;) is required to identify the market for the order.
   * @return symbolExchange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "BTCUSD", value = "Exchange symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the order.")

  public String getSymbolExchange() {
    return symbolExchange;
  }


  public void setSymbolExchange(String symbolExchange) {
    this.symbolExchange = symbolExchange;
  }


  public ExecutionReport symbolCoinapi(String symbolCoinapi) {
    
    this.symbolCoinapi = symbolCoinapi;
    return this;
  }

   /**
   * CoinAPI symbol. One of the properties (&#x60;symbol_exchange&#x60;, &#x60;symbol_coinapi&#x60;) is required to identify the market for the order.
   * @return symbolCoinapi
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "KRAKEN_SPOT_BTC_USD", value = "CoinAPI symbol. One of the properties (`symbol_exchange`, `symbol_coinapi`) is required to identify the market for the order.")

  public String getSymbolCoinapi() {
    return symbolCoinapi;
  }


  public void setSymbolCoinapi(String symbolCoinapi) {
    this.symbolCoinapi = symbolCoinapi;
  }


  public ExecutionReport amountOrder(BigDecimal amountOrder) {
    
    this.amountOrder = amountOrder;
    return this;
  }

   /**
   * Order quantity.
   * @return amountOrder
  **/
  @ApiModelProperty(example = "0.045", required = true, value = "Order quantity.")

  public BigDecimal getAmountOrder() {
    return amountOrder;
  }


  public void setAmountOrder(BigDecimal amountOrder) {
    this.amountOrder = amountOrder;
  }


  public ExecutionReport price(BigDecimal price) {
    
    this.price = price;
    return this;
  }

   /**
   * Order price.
   * @return price
  **/
  @ApiModelProperty(example = "0.0783", required = true, value = "Order price.")

  public BigDecimal getPrice() {
    return price;
  }


  public void setPrice(BigDecimal price) {
    this.price = price;
  }


  public ExecutionReport side(OrdSide side) {
    
    this.side = side;
    return this;
  }

   /**
   * Get side
   * @return side
  **/
  @ApiModelProperty(required = true, value = "")

  public OrdSide getSide() {
    return side;
  }


  public void setSide(OrdSide side) {
    this.side = side;
  }


  public ExecutionReport orderType(OrdType orderType) {
    
    this.orderType = orderType;
    return this;
  }

   /**
   * Get orderType
   * @return orderType
  **/
  @ApiModelProperty(required = true, value = "")

  public OrdType getOrderType() {
    return orderType;
  }


  public void setOrderType(OrdType orderType) {
    this.orderType = orderType;
  }


  public ExecutionReport timeInForce(TimeInForce timeInForce) {
    
    this.timeInForce = timeInForce;
    return this;
  }

   /**
   * Get timeInForce
   * @return timeInForce
  **/
  @ApiModelProperty(required = true, value = "")

  public TimeInForce getTimeInForce() {
    return timeInForce;
  }


  public void setTimeInForce(TimeInForce timeInForce) {
    this.timeInForce = timeInForce;
  }


  public ExecutionReport expireTime(LocalDate expireTime) {
    
    this.expireTime = expireTime;
    return this;
  }

   /**
   * Expiration time. Conditionaly required for orders with time_in_force &#x3D; &#x60;GOOD_TILL_TIME_EXCHANGE&#x60; or &#x60;GOOD_TILL_TIME_OEML&#x60;.
   * @return expireTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Expiration time. Conditionaly required for orders with time_in_force = `GOOD_TILL_TIME_EXCHANGE` or `GOOD_TILL_TIME_OEML`.")

  public LocalDate getExpireTime() {
    return expireTime;
  }


  public void setExpireTime(LocalDate expireTime) {
    this.expireTime = expireTime;
  }


  public ExecutionReport execInst(List<ExecInstEnum> execInst) {
    
    this.execInst = execInst;
    return this;
  }

  public ExecutionReport addExecInstItem(ExecInstEnum execInstItem) {
    if (this.execInst == null) {
      this.execInst = new ArrayList<ExecInstEnum>();
    }
    this.execInst.add(execInstItem);
    return this;
  }

   /**
   * Order execution instructions are documented in the separate section: &lt;a href&#x3D;\&quot;#oeml-order-params-exec\&quot;&gt;OEML / Starter Guide / Order parameters / Execution instructions&lt;/a&gt;
   * @return execInst
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "MAKER_OR_CANCEL", value = "Order execution instructions are documented in the separate section: <a href=\"#oeml-order-params-exec\">OEML / Starter Guide / Order parameters / Execution instructions</a>")

  public List<ExecInstEnum> getExecInst() {
    return execInst;
  }


  public void setExecInst(List<ExecInstEnum> execInst) {
    this.execInst = execInst;
  }


  public ExecutionReport clientOrderIdFormatExchange(String clientOrderIdFormatExchange) {
    
    this.clientOrderIdFormatExchange = clientOrderIdFormatExchange;
    return this;
  }

   /**
   * Hash client id
   * @return clientOrderIdFormatExchange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "f81211e2-27c4-b86a-8143-01088ba9222c", value = "Hash client id")

  public String getClientOrderIdFormatExchange() {
    return clientOrderIdFormatExchange;
  }


  public void setClientOrderIdFormatExchange(String clientOrderIdFormatExchange) {
    this.clientOrderIdFormatExchange = clientOrderIdFormatExchange;
  }


  public ExecutionReport exchangeOrderId(String exchangeOrderId) {
    
    this.exchangeOrderId = exchangeOrderId;
    return this;
  }

   /**
   * Exchange order id
   * @return exchangeOrderId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "90832ASASAS89789-1112", value = "Exchange order id")

  public String getExchangeOrderId() {
    return exchangeOrderId;
  }


  public void setExchangeOrderId(String exchangeOrderId) {
    this.exchangeOrderId = exchangeOrderId;
  }


  public ExecutionReport amountOpen(BigDecimal amountOpen) {
    
    this.amountOpen = amountOpen;
    return this;
  }

   /**
   * Amount open
   * @return amountOpen
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.22", value = "Amount open")

  public BigDecimal getAmountOpen() {
    return amountOpen;
  }


  public void setAmountOpen(BigDecimal amountOpen) {
    this.amountOpen = amountOpen;
  }


  public ExecutionReport amountFilled(BigDecimal amountFilled) {
    
    this.amountFilled = amountFilled;
    return this;
  }

   /**
   * Amount filled
   * @return amountFilled
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.0", value = "Amount filled")

  public BigDecimal getAmountFilled() {
    return amountFilled;
  }


  public void setAmountFilled(BigDecimal amountFilled) {
    this.amountFilled = amountFilled;
  }


  public ExecutionReport status(OrdStatus status) {
    
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OrdStatus getStatus() {
    return status;
  }


  public void setStatus(OrdStatus status) {
    this.status = status;
  }


  public ExecutionReport timeOrder(List<List<String>> timeOrder) {
    
    this.timeOrder = timeOrder;
    return this;
  }

  public ExecutionReport addTimeOrderItem(List<String> timeOrderItem) {
    if (this.timeOrder == null) {
      this.timeOrder = new ArrayList<List<String>>();
    }
    this.timeOrder.add(timeOrderItem);
    return this;
  }

   /**
   * History of order status changes
   * @return timeOrder
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "History of order status changes")

  public List<List<String>> getTimeOrder() {
    return timeOrder;
  }


  public void setTimeOrder(List<List<String>> timeOrder) {
    this.timeOrder = timeOrder;
  }


  public ExecutionReport errorMessage(String errorMessage) {
    
    this.errorMessage = errorMessage;
    return this;
  }

   /**
   * Error message
   * @return errorMessage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"result\":\"error\",\"reason\":\"InsufficientFunds\",\"message\":\"Failed to place buy order on symbol 'BTCUSD' for price $7,000.00 and quantity 0.22 BTC due to insufficient funds\"}", value = "Error message")

  public String getErrorMessage() {
    return errorMessage;
  }


  public void setErrorMessage(String errorMessage) {
    this.errorMessage = errorMessage;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExecutionReport executionReport = (ExecutionReport) o;
    return Objects.equals(this.exchangeId, executionReport.exchangeId) &&
        Objects.equals(this.clientOrderId, executionReport.clientOrderId) &&
        Objects.equals(this.symbolExchange, executionReport.symbolExchange) &&
        Objects.equals(this.symbolCoinapi, executionReport.symbolCoinapi) &&
        Objects.equals(this.amountOrder, executionReport.amountOrder) &&
        Objects.equals(this.price, executionReport.price) &&
        Objects.equals(this.side, executionReport.side) &&
        Objects.equals(this.orderType, executionReport.orderType) &&
        Objects.equals(this.timeInForce, executionReport.timeInForce) &&
        Objects.equals(this.expireTime, executionReport.expireTime) &&
        Objects.equals(this.execInst, executionReport.execInst) &&
        Objects.equals(this.clientOrderIdFormatExchange, executionReport.clientOrderIdFormatExchange) &&
        Objects.equals(this.exchangeOrderId, executionReport.exchangeOrderId) &&
        Objects.equals(this.amountOpen, executionReport.amountOpen) &&
        Objects.equals(this.amountFilled, executionReport.amountFilled) &&
        Objects.equals(this.status, executionReport.status) &&
        Objects.equals(this.timeOrder, executionReport.timeOrder) &&
        Objects.equals(this.errorMessage, executionReport.errorMessage);
  }

  @Override
  public int hashCode() {
    return Objects.hash(exchangeId, clientOrderId, symbolExchange, symbolCoinapi, amountOrder, price, side, orderType, timeInForce, expireTime, execInst, clientOrderIdFormatExchange, exchangeOrderId, amountOpen, amountFilled, status, timeOrder, errorMessage);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExecutionReport {\n");
    sb.append("    exchangeId: ").append(toIndentedString(exchangeId)).append("\n");
    sb.append("    clientOrderId: ").append(toIndentedString(clientOrderId)).append("\n");
    sb.append("    symbolExchange: ").append(toIndentedString(symbolExchange)).append("\n");
    sb.append("    symbolCoinapi: ").append(toIndentedString(symbolCoinapi)).append("\n");
    sb.append("    amountOrder: ").append(toIndentedString(amountOrder)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    side: ").append(toIndentedString(side)).append("\n");
    sb.append("    orderType: ").append(toIndentedString(orderType)).append("\n");
    sb.append("    timeInForce: ").append(toIndentedString(timeInForce)).append("\n");
    sb.append("    expireTime: ").append(toIndentedString(expireTime)).append("\n");
    sb.append("    execInst: ").append(toIndentedString(execInst)).append("\n");
    sb.append("    clientOrderIdFormatExchange: ").append(toIndentedString(clientOrderIdFormatExchange)).append("\n");
    sb.append("    exchangeOrderId: ").append(toIndentedString(exchangeOrderId)).append("\n");
    sb.append("    amountOpen: ").append(toIndentedString(amountOpen)).append("\n");
    sb.append("    amountFilled: ").append(toIndentedString(amountFilled)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    timeOrder: ").append(toIndentedString(timeOrder)).append("\n");
    sb.append("    errorMessage: ").append(toIndentedString(errorMessage)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

