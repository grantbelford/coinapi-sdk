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
package org.openapitools.client.model

import org.openapitools.client.core.ApiModel

case class Orders (
  /* Constant value `snapshotOrders`. */
  `type`: Option[String] = None,
  /* Exchange identifier. */
  exchangeId: Option[String] = None,
  /* Orders array */
  data: Option[Seq[OrdersData]] = None
) extends ApiModel

