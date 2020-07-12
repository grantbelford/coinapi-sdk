<?php
/**
 * OrderLive
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
 * 
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
 * OrderLive Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class OrderLive implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'orderLive';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'type' => 'string',
        'exchange_id' => 'string',
        'id' => 'string',
        'client_order_id_format_exchange' => 'string',
        'exchange_order_id' => 'string',
        'amount_open' => 'float',
        'amount_filled' => 'float',
        'status' => '\OpenAPI\Client\Model\OrderStatus',
        'time_order' => 'string[][]',
        'error_message' => 'string',
        'client_order_id' => 'string',
        'symbol_exchange' => 'string',
        'symbol_coinapi' => 'string',
        'amount_order' => 'float',
        'price' => 'float',
        'side' => 'string',
        'order_type' => 'string',
        'time_in_force' => '\OpenAPI\Client\Model\TimeInForce',
        'expire_time' => '\DateTime',
        'exec_inst' => 'string[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'type' => null,
        'exchange_id' => null,
        'id' => null,
        'client_order_id_format_exchange' => null,
        'exchange_order_id' => null,
        'amount_open' => null,
        'amount_filled' => null,
        'status' => null,
        'time_order' => null,
        'error_message' => null,
        'client_order_id' => null,
        'symbol_exchange' => null,
        'symbol_coinapi' => null,
        'amount_order' => null,
        'price' => null,
        'side' => null,
        'order_type' => null,
        'time_in_force' => null,
        'expire_time' => null,
        'exec_inst' => null
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
        'type' => 'type',
        'exchange_id' => 'exchange_id',
        'id' => 'id',
        'client_order_id_format_exchange' => 'client_order_id_format_exchange',
        'exchange_order_id' => 'exchange_order_id',
        'amount_open' => 'amount_open',
        'amount_filled' => 'amount_filled',
        'status' => 'status',
        'time_order' => 'time_order',
        'error_message' => 'error_message',
        'client_order_id' => 'client_order_id',
        'symbol_exchange' => 'symbol_exchange',
        'symbol_coinapi' => 'symbol_coinapi',
        'amount_order' => 'amount_order',
        'price' => 'price',
        'side' => 'side',
        'order_type' => 'order_type',
        'time_in_force' => 'time_in_force',
        'expire_time' => 'expire_time',
        'exec_inst' => 'exec_inst'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'type' => 'setType',
        'exchange_id' => 'setExchangeId',
        'id' => 'setId',
        'client_order_id_format_exchange' => 'setClientOrderIdFormatExchange',
        'exchange_order_id' => 'setExchangeOrderId',
        'amount_open' => 'setAmountOpen',
        'amount_filled' => 'setAmountFilled',
        'status' => 'setStatus',
        'time_order' => 'setTimeOrder',
        'error_message' => 'setErrorMessage',
        'client_order_id' => 'setClientOrderId',
        'symbol_exchange' => 'setSymbolExchange',
        'symbol_coinapi' => 'setSymbolCoinapi',
        'amount_order' => 'setAmountOrder',
        'price' => 'setPrice',
        'side' => 'setSide',
        'order_type' => 'setOrderType',
        'time_in_force' => 'setTimeInForce',
        'expire_time' => 'setExpireTime',
        'exec_inst' => 'setExecInst'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'type' => 'getType',
        'exchange_id' => 'getExchangeId',
        'id' => 'getId',
        'client_order_id_format_exchange' => 'getClientOrderIdFormatExchange',
        'exchange_order_id' => 'getExchangeOrderId',
        'amount_open' => 'getAmountOpen',
        'amount_filled' => 'getAmountFilled',
        'status' => 'getStatus',
        'time_order' => 'getTimeOrder',
        'error_message' => 'getErrorMessage',
        'client_order_id' => 'getClientOrderId',
        'symbol_exchange' => 'getSymbolExchange',
        'symbol_coinapi' => 'getSymbolCoinapi',
        'amount_order' => 'getAmountOrder',
        'price' => 'getPrice',
        'side' => 'getSide',
        'order_type' => 'getOrderType',
        'time_in_force' => 'getTimeInForce',
        'expire_time' => 'getExpireTime',
        'exec_inst' => 'getExecInst'
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

    const SIDE_BUY = 'BUY';
    const SIDE_SELL = 'SELL';
    const ORDER_TYPE_LIMIT = 'LIMIT';
    const EXEC_INST_MAKER_OR_CANCEL = 'MAKER_OR_CANCEL';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getSideAllowableValues()
    {
        return [
            self::SIDE_BUY,
            self::SIDE_SELL,
        ];
    }
    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getOrderTypeAllowableValues()
    {
        return [
            self::ORDER_TYPE_LIMIT,
        ];
    }
    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getExecInstAllowableValues()
    {
        return [
            self::EXEC_INST_MAKER_OR_CANCEL,
        ];
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
        $this->container['type'] = isset($data['type']) ? $data['type'] : null;
        $this->container['exchange_id'] = isset($data['exchange_id']) ? $data['exchange_id'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['client_order_id_format_exchange'] = isset($data['client_order_id_format_exchange']) ? $data['client_order_id_format_exchange'] : null;
        $this->container['exchange_order_id'] = isset($data['exchange_order_id']) ? $data['exchange_order_id'] : null;
        $this->container['amount_open'] = isset($data['amount_open']) ? $data['amount_open'] : null;
        $this->container['amount_filled'] = isset($data['amount_filled']) ? $data['amount_filled'] : null;
        $this->container['status'] = isset($data['status']) ? $data['status'] : null;
        $this->container['time_order'] = isset($data['time_order']) ? $data['time_order'] : null;
        $this->container['error_message'] = isset($data['error_message']) ? $data['error_message'] : null;
        $this->container['client_order_id'] = isset($data['client_order_id']) ? $data['client_order_id'] : null;
        $this->container['symbol_exchange'] = isset($data['symbol_exchange']) ? $data['symbol_exchange'] : null;
        $this->container['symbol_coinapi'] = isset($data['symbol_coinapi']) ? $data['symbol_coinapi'] : null;
        $this->container['amount_order'] = isset($data['amount_order']) ? $data['amount_order'] : null;
        $this->container['price'] = isset($data['price']) ? $data['price'] : null;
        $this->container['side'] = isset($data['side']) ? $data['side'] : null;
        $this->container['order_type'] = isset($data['order_type']) ? $data['order_type'] : null;
        $this->container['time_in_force'] = isset($data['time_in_force']) ? $data['time_in_force'] : null;
        $this->container['expire_time'] = isset($data['expire_time']) ? $data['expire_time'] : null;
        $this->container['exec_inst'] = isset($data['exec_inst']) ? $data['exec_inst'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        $allowedValues = $this->getSideAllowableValues();
        if (!is_null($this->container['side']) && !in_array($this->container['side'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'side', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getOrderTypeAllowableValues();
        if (!is_null($this->container['order_type']) && !in_array($this->container['order_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'order_type', must be one of '%s'",
                implode("', '", $allowedValues)
            );
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
     * Gets type
     *
     * @return string|null
     */
    public function getType()
    {
        return $this->container['type'];
    }

    /**
     * Sets type
     *
     * @param string|null $type Result type name
     *
     * @return $this
     */
    public function setType($type)
    {
        $this->container['type'] = $type;

        return $this;
    }

    /**
     * Gets exchange_id
     *
     * @return string|null
     */
    public function getExchangeId()
    {
        return $this->container['exchange_id'];
    }

    /**
     * Sets exchange_id
     *
     * @param string|null $exchange_id Exchange name
     *
     * @return $this
     */
    public function setExchangeId($exchange_id)
    {
        $this->container['exchange_id'] = $exchange_id;

        return $this;
    }

    /**
     * Gets id
     *
     * @return string|null
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param string|null $id Client unique identifier for the trade.
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets client_order_id_format_exchange
     *
     * @return string|null
     */
    public function getClientOrderIdFormatExchange()
    {
        return $this->container['client_order_id_format_exchange'];
    }

    /**
     * Sets client_order_id_format_exchange
     *
     * @param string|null $client_order_id_format_exchange Hash client id
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
     * @param string|null $exchange_order_id Exchange order id
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
     * @return float|null
     */
    public function getAmountOpen()
    {
        return $this->container['amount_open'];
    }

    /**
     * Sets amount_open
     *
     * @param float|null $amount_open Amount open
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
     * @return float|null
     */
    public function getAmountFilled()
    {
        return $this->container['amount_filled'];
    }

    /**
     * Sets amount_filled
     *
     * @param float|null $amount_filled Amount filled
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
     * @return \OpenAPI\Client\Model\OrderStatus|null
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param \OpenAPI\Client\Model\OrderStatus|null $status status
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
     * @return string[][]|null
     */
    public function getTimeOrder()
    {
        return $this->container['time_order'];
    }

    /**
     * Sets time_order
     *
     * @param string[][]|null $time_order History of order status changes
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
     * Gets client_order_id
     *
     * @return string|null
     */
    public function getClientOrderId()
    {
        return $this->container['client_order_id'];
    }

    /**
     * Sets client_order_id
     *
     * @param string|null $client_order_id Client unique identifier for the trade.
     *
     * @return $this
     */
    public function setClientOrderId($client_order_id)
    {
        $this->container['client_order_id'] = $client_order_id;

        return $this;
    }

    /**
     * Gets symbol_exchange
     *
     * @return string|null
     */
    public function getSymbolExchange()
    {
        return $this->container['symbol_exchange'];
    }

    /**
     * Sets symbol_exchange
     *
     * @param string|null $symbol_exchange The symbol of the order.
     *
     * @return $this
     */
    public function setSymbolExchange($symbol_exchange)
    {
        $this->container['symbol_exchange'] = $symbol_exchange;

        return $this;
    }

    /**
     * Gets symbol_coinapi
     *
     * @return string|null
     */
    public function getSymbolCoinapi()
    {
        return $this->container['symbol_coinapi'];
    }

    /**
     * Sets symbol_coinapi
     *
     * @param string|null $symbol_coinapi The CoinAPI symbol of the order.
     *
     * @return $this
     */
    public function setSymbolCoinapi($symbol_coinapi)
    {
        $this->container['symbol_coinapi'] = $symbol_coinapi;

        return $this;
    }

    /**
     * Gets amount_order
     *
     * @return float|null
     */
    public function getAmountOrder()
    {
        return $this->container['amount_order'];
    }

    /**
     * Sets amount_order
     *
     * @param float|null $amount_order Quoted decimal amount to purchase.
     *
     * @return $this
     */
    public function setAmountOrder($amount_order)
    {
        $this->container['amount_order'] = $amount_order;

        return $this;
    }

    /**
     * Gets price
     *
     * @return float|null
     */
    public function getPrice()
    {
        return $this->container['price'];
    }

    /**
     * Sets price
     *
     * @param float|null $price Quoted decimal amount to spend per unit.
     *
     * @return $this
     */
    public function setPrice($price)
    {
        $this->container['price'] = $price;

        return $this;
    }

    /**
     * Gets side
     *
     * @return string|null
     */
    public function getSide()
    {
        return $this->container['side'];
    }

    /**
     * Sets side
     *
     * @param string|null $side Buy or Sell
     *
     * @return $this
     */
    public function setSide($side)
    {
        $allowedValues = $this->getSideAllowableValues();
        if (!is_null($side) && !in_array($side, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'side', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['side'] = $side;

        return $this;
    }

    /**
     * Gets order_type
     *
     * @return string|null
     */
    public function getOrderType()
    {
        return $this->container['order_type'];
    }

    /**
     * Sets order_type
     *
     * @param string|null $order_type The order type.
     *
     * @return $this
     */
    public function setOrderType($order_type)
    {
        $allowedValues = $this->getOrderTypeAllowableValues();
        if (!is_null($order_type) && !in_array($order_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'order_type', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['order_type'] = $order_type;

        return $this;
    }

    /**
     * Gets time_in_force
     *
     * @return \OpenAPI\Client\Model\TimeInForce|null
     */
    public function getTimeInForce()
    {
        return $this->container['time_in_force'];
    }

    /**
     * Sets time_in_force
     *
     * @param \OpenAPI\Client\Model\TimeInForce|null $time_in_force time_in_force
     *
     * @return $this
     */
    public function setTimeInForce($time_in_force)
    {
        $this->container['time_in_force'] = $time_in_force;

        return $this;
    }

    /**
     * Gets expire_time
     *
     * @return \DateTime|null
     */
    public function getExpireTime()
    {
        return $this->container['expire_time'];
    }

    /**
     * Sets expire_time
     *
     * @param \DateTime|null $expire_time Required for orders with time_in_force = GOOD_TILL_TIME_EXCHANGE, GOOD_TILL_TIME_OMS
     *
     * @return $this
     */
    public function setExpireTime($expire_time)
    {
        $this->container['expire_time'] = $expire_time;

        return $this;
    }

    /**
     * Gets exec_inst
     *
     * @return string[]|null
     */
    public function getExecInst()
    {
        return $this->container['exec_inst'];
    }

    /**
     * Sets exec_inst
     *
     * @param string[]|null $exec_inst Order execution instructions are documented in the separate section: <a href=\"#oeml-order-params-exec\">OEML / Starter Guide / Order parameters / Execution instructions</a>
     *
     * @return $this
     */
    public function setExecInst($exec_inst)
    {
        $allowedValues = $this->getExecInstAllowableValues();
        if (!is_null($exec_inst) && array_diff($exec_inst, $allowedValues)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'exec_inst', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['exec_inst'] = $exec_inst;

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


