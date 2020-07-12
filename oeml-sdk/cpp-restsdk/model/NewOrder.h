/**
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 4.3.1.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * NewOrder.h
 *
 * 
 */

#ifndef ORG_OPENAPITOOLS_CLIENT_MODEL_NewOrder_H_
#define ORG_OPENAPITOOLS_CLIENT_MODEL_NewOrder_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>
#include "TimeInForce.h"
#include <vector>

namespace org {
namespace openapitools {
namespace client {
namespace model {


/// <summary>
/// 
/// </summary>
class  NewOrder
    : public ModelBase
{
public:
    NewOrder();
    virtual ~NewOrder();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    bool fromJson(const web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    bool fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// NewOrder members

    /// <summary>
    /// Exchange name
    /// </summary>
    utility::string_t getExchangeId() const;
    bool exchangeIdIsSet() const;
    void unsetExchange_id();

    void setExchangeId(const utility::string_t& value);

    /// <summary>
    /// Client unique identifier for the trade.
    /// </summary>
    utility::string_t getClientOrderId() const;
    bool clientOrderIdIsSet() const;
    void unsetClient_order_id();

    void setClientOrderId(const utility::string_t& value);

    /// <summary>
    /// The symbol of the order.
    /// </summary>
    utility::string_t getSymbolExchange() const;
    bool symbolExchangeIsSet() const;
    void unsetSymbol_exchange();

    void setSymbolExchange(const utility::string_t& value);

    /// <summary>
    /// The CoinAPI symbol of the order.
    /// </summary>
    utility::string_t getSymbolCoinapi() const;
    bool symbolCoinapiIsSet() const;
    void unsetSymbol_coinapi();

    void setSymbolCoinapi(const utility::string_t& value);

    /// <summary>
    /// Quoted decimal amount to purchase.
    /// </summary>
    double getAmountOrder() const;
    bool amountOrderIsSet() const;
    void unsetAmount_order();

    void setAmountOrder(double value);

    /// <summary>
    /// Quoted decimal amount to spend per unit.
    /// </summary>
    double getPrice() const;
    bool priceIsSet() const;
    void unsetPrice();

    void setPrice(double value);

    /// <summary>
    /// Buy or Sell
    /// </summary>
    utility::string_t getSide() const;
    bool sideIsSet() const;
    void unsetSide();

    void setSide(const utility::string_t& value);

    /// <summary>
    /// The order type.
    /// </summary>
    utility::string_t getOrderType() const;
    bool orderTypeIsSet() const;
    void unsetOrder_type();

    void setOrderType(const utility::string_t& value);

    /// <summary>
    /// 
    /// </summary>
    std::shared_ptr<TimeInForce> getTimeInForce() const;
    bool timeInForceIsSet() const;
    void unsetTime_in_force();

    void setTimeInForce(const std::shared_ptr<TimeInForce>& value);

    /// <summary>
    /// Required for orders with time_in_force &#x3D; GOOD_TILL_TIME_EXCHANGE, GOOD_TILL_TIME_OMS
    /// </summary>
    std::shared_ptr<utility::datetime> getExpireTime() const;
    bool expireTimeIsSet() const;
    void unsetExpire_time();

    void setExpireTime(const std::shared_ptr<utility::datetime>& value);

    /// <summary>
    /// Order execution instructions are documented in the separate section: &lt;a href&#x3D;\&quot;#oeml-order-params-exec\&quot;&gt;OEML / Starter Guide / Order parameters / Execution instructions&lt;/a&gt; 
    /// </summary>
    std::vector<utility::string_t>& getExecInst();
    bool execInstIsSet() const;
    void unsetExec_inst();

    void setExecInst(const std::vector<utility::string_t>& value);


protected:
    utility::string_t m_Exchange_id;
    bool m_Exchange_idIsSet;
    utility::string_t m_Client_order_id;
    bool m_Client_order_idIsSet;
    utility::string_t m_Symbol_exchange;
    bool m_Symbol_exchangeIsSet;
    utility::string_t m_Symbol_coinapi;
    bool m_Symbol_coinapiIsSet;
    double m_Amount_order;
    bool m_Amount_orderIsSet;
    double m_Price;
    bool m_PriceIsSet;
    utility::string_t m_Side;
    bool m_SideIsSet;
    utility::string_t m_Order_type;
    bool m_Order_typeIsSet;
    std::shared_ptr<TimeInForce> m_Time_in_force;
    bool m_Time_in_forceIsSet;
    std::shared_ptr<utility::datetime> m_Expire_time;
    bool m_Expire_timeIsSet;
    std::vector<utility::string_t> m_Exec_inst;
    bool m_Exec_instIsSet;
};


}
}
}
}

#endif /* ORG_OPENAPITOOLS_CLIENT_MODEL_NewOrder_H_ */
