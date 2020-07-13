<?php
/**
 * OrderExecutionReportAllOf
 *
 * PHP version 5
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * OEML - REST API
 *
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@coinapi.io
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 4.3.1
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * OrderExecutionReportAllOf Class Doc Comment
 *
 * @category Class
 * @description The order execution report message.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class OrderExecutionReportAllOf implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'OrderExecutionReport_allOf';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'client_order_id_format_exchange' => 'string',
        'exchange_order_id' => 'string',
        'amount_open' => 'float',
        'amount_filled' => 'float',
        'status' => '\OpenAPI\Client\Model\OrdStatus',
        'time_order' => 'string[][]',
        'error_message' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'client_order_id_format_exchange' => null,
        'exchange_order_id' => null,
        'amount_open' => null,
        'amount_filled' => null,
        'status' => null,
        'time_order' => null,
        'error_message' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'client_order_id_format_exchange' => 'client_order_id_format_exchange',
        'exchange_order_id' => 'exchange_order_id',
        'amount_open' => 'amount_open',
        'amount_filled' => 'amount_filled',
        'status' => 'status',
        'time_order' => 'time_order',
        'error_message' => 'error_message'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'client_order_id_format_exchange' => 'setClientOrderIdFormatExchange',
        'exchange_order_id' => 'setExchangeOrderId',
        'amount_open' => 'setAmountOpen',
        'amount_filled' => 'setAmountFilled',
        'status' => 'setStatus',
        'time_order' => 'setTimeOrder',
        'error_message' => 'setErrorMessage'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'client_order_id_format_exchange' => 'getClientOrderIdFormatExchange',
        'exchange_order_id' => 'getExchangeOrderId',
        'amount_open' => 'getAmountOpen',
        'amount_filled' => 'getAmountFilled',
        'status' => 'getStatus',
        'time_order' => 'getTimeOrder',
        'error_message' => 'getErrorMessage'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['client_order_id_format_exchange'] = isset($data['client_order_id_format_exchange']) ? $data['client_order_id_format_exchange'] : null;
        $this->container['exchange_order_id'] = isset($data['exchange_order_id']) ? $data['exchange_order_id'] : null;
        $this->container['amount_open'] = isset($data['amount_open']) ? $data['amount_open'] : null;
        $this->container['amount_filled'] = isset($data['amount_filled']) ? $data['amount_filled'] : null;
        $this->container['status'] = isset($data['status']) ? $data['status'] : null;
        $this->container['time_order'] = isset($data['time_order']) ? $data['time_order'] : null;
        $this->container['error_message'] = isset($data['error_message']) ? $data['error_message'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['client_order_id_format_exchange'] === null) {
            $invalidProperties[] = "'client_order_id_format_exchange' can't be null";
        }
        if ($this->container['amount_open'] === null) {
            $invalidProperties[] = "'amount_open' can't be null";
        }
        if ($this->container['amount_filled'] === null) {
            $invalidProperties[] = "'amount_filled' can't be null";
        }
        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
        }
        if ($this->container['time_order'] === null) {
            $invalidProperties[] = "'time_order' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets client_order_id_format_exchange
     *
     * @return string
     */
    public function getClientOrderIdFormatExchange()
    {
        return $this->container['client_order_id_format_exchange'];
    }

    /**
     * Sets client_order_id_format_exchange
     *
     * @param string $client_order_id_format_exchange The unique identifier of the order assigned by the client converted to the exchange order tag format for the purpose of tracking it.
     *
     * @return $this
     */
    public function setClientOrderIdFormatExchange($client_order_id_format_exchange)
    {
        $this->container['client_order_id_format_exchange'] = $client_order_id_format_exchange;

        return $this;
    }

    /**
     * Gets exchange_order_id
     *
     * @return string|null
     */
    public function getExchangeOrderId()
    {
        return $this->container['exchange_order_id'];
    }

    /**
     * Sets exchange_order_id
     *
     * @param string|null $exchange_order_id The unique identifier of the order assigned by the exchange.
     *
     * @return $this
     */
    public function setExchangeOrderId($exchange_order_id)
    {
        $this->container['exchange_order_id'] = $exchange_order_id;

        return $this;
    }

    /**
     * Gets amount_open
     *
     * @return float
     */
    public function getAmountOpen()
    {
        return $this->container['amount_open'];
    }

    /**
     * Sets amount_open
     *
     * @param float $amount_open Amount open.
     *
     * @return $this
     */
    public function setAmountOpen($amount_open)
    {
        $this->container['amount_open'] = $amount_open;

        return $this;
    }

    /**
     * Gets amount_filled
     *
     * @return float
     */
    public function getAmountFilled()
    {
        return $this->container['amount_filled'];
    }

    /**
     * Sets amount_filled
     *
     * @param float $amount_filled Amount filled.
     *
     * @return $this
     */
    public function setAmountFilled($amount_filled)
    {
        $this->container['amount_filled'] = $amount_filled;

        return $this;
    }

    /**
     * Gets status
     *
     * @return \OpenAPI\Client\Model\OrdStatus
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param \OpenAPI\Client\Model\OrdStatus $status status
     *
     * @return $this
     */
    public function setStatus($status)
    {
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets time_order
     *
     * @return string[][]
     */
    public function getTimeOrder()
    {
        return $this->container['time_order'];
    }

    /**
     * Sets time_order
     *
     * @param string[][] $time_order Timestamped history of order status changes.
     *
     * @return $this
     */
    public function setTimeOrder($time_order)
    {
        $this->container['time_order'] = $time_order;

        return $this;
    }

    /**
     * Gets error_message
     *
     * @return string|null
     */
    public function getErrorMessage()
    {
        return $this->container['error_message'];
    }

    /**
     * Sets error_message
     *
     * @param string|null $error_message Error message
     *
     * @return $this
     */
    public function setErrorMessage($error_message)
    {
        $this->container['error_message'] = $error_message;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


