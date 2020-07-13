/**
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
package org.openapitools.client.models


import com.squareup.moshi.Json
/**
 * 
 * @param exchangeId Exchange identifier from which active orders should be canceled.
 */

data class CancelOrderAllRequest (
    /* Exchange identifier from which active orders should be canceled. */
    @Json(name = "exchange_id")
    val exchangeId: kotlin.String
)
