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


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.CancelAllOrder;
import org.openapitools.client.model.CancelOrder;
import org.openapitools.client.model.CreateOrder400;
import org.openapitools.client.model.Messages;
import org.openapitools.client.model.MessagesOk;
import org.openapitools.client.model.NewOrder;
import org.openapitools.client.model.Order;
import org.openapitools.client.model.OrderLive;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OrdersApi {
    private ApiClient localVarApiClient;

    public OrdersApi() {
        this(Configuration.getDefaultApiClient());
    }

    public OrdersApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for v1OrdersCancelAllPost
     * @param cancelAllOrder  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Result </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OrdersCancelAllPostCall(CancelAllOrder cancelAllOrder, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = cancelAllOrder;

        // create path and map variables
        String localVarPath = "/v1/orders/cancel/all";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1OrdersCancelAllPostValidateBeforeCall(CancelAllOrder cancelAllOrder, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'cancelAllOrder' is set
        if (cancelAllOrder == null) {
            throw new ApiException("Missing the required parameter 'cancelAllOrder' when calling v1OrdersCancelAllPost(Async)");
        }
        

        okhttp3.Call localVarCall = v1OrdersCancelAllPostCall(cancelAllOrder, _callback);
        return localVarCall;

    }

    /**
     * Cancel all order
     * Cancel all existing order.
     * @param cancelAllOrder  (required)
     * @return MessagesOk
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Result </td><td>  -  </td></tr>
     </table>
     */
    public MessagesOk v1OrdersCancelAllPost(CancelAllOrder cancelAllOrder) throws ApiException {
        ApiResponse<MessagesOk> localVarResp = v1OrdersCancelAllPostWithHttpInfo(cancelAllOrder);
        return localVarResp.getData();
    }

    /**
     * Cancel all order
     * Cancel all existing order.
     * @param cancelAllOrder  (required)
     * @return ApiResponse&lt;MessagesOk&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Result </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<MessagesOk> v1OrdersCancelAllPostWithHttpInfo(CancelAllOrder cancelAllOrder) throws ApiException {
        okhttp3.Call localVarCall = v1OrdersCancelAllPostValidateBeforeCall(cancelAllOrder, null);
        Type localVarReturnType = new TypeToken<MessagesOk>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Cancel all order (asynchronously)
     * Cancel all existing order.
     * @param cancelAllOrder  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Result </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OrdersCancelAllPostAsync(CancelAllOrder cancelAllOrder, final ApiCallback<MessagesOk> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1OrdersCancelAllPostValidateBeforeCall(cancelAllOrder, _callback);
        Type localVarReturnType = new TypeToken<MessagesOk>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1OrdersCancelPost
     * @param cancelOrder  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Canceled order </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Validation errors </td><td>  -  </td></tr>
        <tr><td> 490 </td><td> Exchange not registered </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OrdersCancelPostCall(CancelOrder cancelOrder, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = cancelOrder;

        // create path and map variables
        String localVarPath = "/v1/orders/cancel";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json", "appliction/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1OrdersCancelPostValidateBeforeCall(CancelOrder cancelOrder, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'cancelOrder' is set
        if (cancelOrder == null) {
            throw new ApiException("Missing the required parameter 'cancelOrder' when calling v1OrdersCancelPost(Async)");
        }
        

        okhttp3.Call localVarCall = v1OrdersCancelPostCall(cancelOrder, _callback);
        return localVarCall;

    }

    /**
     * Cancel order
     * Cancel an existing order, can be used to cancel margin, exchange, and derivative orders. You can cancel the order by the internal order ID or exchange order ID.
     * @param cancelOrder  (required)
     * @return OrderLive
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Canceled order </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Validation errors </td><td>  -  </td></tr>
        <tr><td> 490 </td><td> Exchange not registered </td><td>  -  </td></tr>
     </table>
     */
    public OrderLive v1OrdersCancelPost(CancelOrder cancelOrder) throws ApiException {
        ApiResponse<OrderLive> localVarResp = v1OrdersCancelPostWithHttpInfo(cancelOrder);
        return localVarResp.getData();
    }

    /**
     * Cancel order
     * Cancel an existing order, can be used to cancel margin, exchange, and derivative orders. You can cancel the order by the internal order ID or exchange order ID.
     * @param cancelOrder  (required)
     * @return ApiResponse&lt;OrderLive&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Canceled order </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Validation errors </td><td>  -  </td></tr>
        <tr><td> 490 </td><td> Exchange not registered </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<OrderLive> v1OrdersCancelPostWithHttpInfo(CancelOrder cancelOrder) throws ApiException {
        okhttp3.Call localVarCall = v1OrdersCancelPostValidateBeforeCall(cancelOrder, null);
        Type localVarReturnType = new TypeToken<OrderLive>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Cancel order (asynchronously)
     * Cancel an existing order, can be used to cancel margin, exchange, and derivative orders. You can cancel the order by the internal order ID or exchange order ID.
     * @param cancelOrder  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Canceled order </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Validation errors </td><td>  -  </td></tr>
        <tr><td> 490 </td><td> Exchange not registered </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OrdersCancelPostAsync(CancelOrder cancelOrder, final ApiCallback<OrderLive> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1OrdersCancelPostValidateBeforeCall(cancelOrder, _callback);
        Type localVarReturnType = new TypeToken<OrderLive>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1OrdersGet
     * @param exchangeId Exchange name (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Ok </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OrdersGetCall(String exchangeId, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/v1/orders";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (exchangeId != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("exchange_id", exchangeId));
        }

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1OrdersGetValidateBeforeCall(String exchangeId, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = v1OrdersGetCall(exchangeId, _callback);
        return localVarCall;

    }

    /**
     * Get orders
     * List your current open orders.
     * @param exchangeId Exchange name (optional)
     * @return List&lt;Order&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Ok </td><td>  -  </td></tr>
     </table>
     */
    public List<Order> v1OrdersGet(String exchangeId) throws ApiException {
        ApiResponse<List<Order>> localVarResp = v1OrdersGetWithHttpInfo(exchangeId);
        return localVarResp.getData();
    }

    /**
     * Get orders
     * List your current open orders.
     * @param exchangeId Exchange name (optional)
     * @return ApiResponse&lt;List&lt;Order&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Ok </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<List<Order>> v1OrdersGetWithHttpInfo(String exchangeId) throws ApiException {
        okhttp3.Call localVarCall = v1OrdersGetValidateBeforeCall(exchangeId, null);
        Type localVarReturnType = new TypeToken<List<Order>>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get orders (asynchronously)
     * List your current open orders.
     * @param exchangeId Exchange name (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Ok </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OrdersGetAsync(String exchangeId, final ApiCallback<List<Order>> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1OrdersGetValidateBeforeCall(exchangeId, _callback);
        Type localVarReturnType = new TypeToken<List<Order>>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1OrdersPost
     * @param newOrder  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Created </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Validation errors </td><td>  -  </td></tr>
        <tr><td> 490 </td><td> Exchange not registered </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OrdersPostCall(NewOrder newOrder, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = newOrder;

        // create path and map variables
        String localVarPath = "/v1/orders";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json", "appliction/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1OrdersPostValidateBeforeCall(NewOrder newOrder, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'newOrder' is set
        if (newOrder == null) {
            throw new ApiException("Missing the required parameter 'newOrder' when calling v1OrdersPost(Async)");
        }
        

        okhttp3.Call localVarCall = v1OrdersPostCall(newOrder, _callback);
        return localVarCall;

    }

    /**
     * Create new order
     * You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds.
     * @param newOrder  (required)
     * @return OrderLive
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Created </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Validation errors </td><td>  -  </td></tr>
        <tr><td> 490 </td><td> Exchange not registered </td><td>  -  </td></tr>
     </table>
     */
    public OrderLive v1OrdersPost(NewOrder newOrder) throws ApiException {
        ApiResponse<OrderLive> localVarResp = v1OrdersPostWithHttpInfo(newOrder);
        return localVarResp.getData();
    }

    /**
     * Create new order
     * You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds.
     * @param newOrder  (required)
     * @return ApiResponse&lt;OrderLive&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Created </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Validation errors </td><td>  -  </td></tr>
        <tr><td> 490 </td><td> Exchange not registered </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<OrderLive> v1OrdersPostWithHttpInfo(NewOrder newOrder) throws ApiException {
        okhttp3.Call localVarCall = v1OrdersPostValidateBeforeCall(newOrder, null);
        Type localVarReturnType = new TypeToken<OrderLive>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Create new order (asynchronously)
     * You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds.
     * @param newOrder  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Created </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Validation errors </td><td>  -  </td></tr>
        <tr><td> 490 </td><td> Exchange not registered </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OrdersPostAsync(NewOrder newOrder, final ApiCallback<OrderLive> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1OrdersPostValidateBeforeCall(newOrder, _callback);
        Type localVarReturnType = new TypeToken<OrderLive>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
