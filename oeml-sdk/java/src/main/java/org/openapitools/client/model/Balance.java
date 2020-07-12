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
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.BalanceData;

/**
 * Balance
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-07-12T15:41:17.557Z[Etc/UTC]")
public class Balance {
  public static final String SERIALIZED_NAME_TYPE = "type";
  @SerializedName(SERIALIZED_NAME_TYPE)
  private String type;

  public static final String SERIALIZED_NAME_EXCHANGE_NAME = "exchange_name";
  @SerializedName(SERIALIZED_NAME_EXCHANGE_NAME)
  private String exchangeName;

  public static final String SERIALIZED_NAME_DATA = "data";
  @SerializedName(SERIALIZED_NAME_DATA)
  private List<BalanceData> data = null;


  public Balance type(String type) {
    
    this.type = type;
    return this;
  }

   /**
   * Result type.
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "snapshotBalances", value = "Result type.")

  public String getType() {
    return type;
  }


  public void setType(String type) {
    this.type = type;
  }


  public Balance exchangeName(String exchangeName) {
    
    this.exchangeName = exchangeName;
    return this;
  }

   /**
   * Exchange name.
   * @return exchangeName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "KRAKEN", value = "Exchange name.")

  public String getExchangeName() {
    return exchangeName;
  }


  public void setExchangeName(String exchangeName) {
    this.exchangeName = exchangeName;
  }


  public Balance data(List<BalanceData> data) {
    
    this.data = data;
    return this;
  }

  public Balance addDataItem(BalanceData dataItem) {
    if (this.data == null) {
      this.data = new ArrayList<BalanceData>();
    }
    this.data.add(dataItem);
    return this;
  }

   /**
   * Get data
   * @return data
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<BalanceData> getData() {
    return data;
  }


  public void setData(List<BalanceData> data) {
    this.data = data;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Balance balance = (Balance) o;
    return Objects.equals(this.type, balance.type) &&
        Objects.equals(this.exchangeName, balance.exchangeName) &&
        Objects.equals(this.data, balance.data);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, exchangeName, data);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Balance {\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    exchangeName: ").append(toIndentedString(exchangeName)).append("\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
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

