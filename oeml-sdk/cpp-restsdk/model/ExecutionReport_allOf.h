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
 * ExecutionReport_allOf.h
 *
 * The order execution report message.
 */

#ifndef ORG_OPENAPITOOLS_CLIENT_MODEL_ExecutionReport_allOf_H_
#define ORG_OPENAPITOOLS_CLIENT_MODEL_ExecutionReport_allOf_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>
#include <vector>
#include "OrdStatus.h"

namespace org {
namespace openapitools {
namespace client {
namespace model {


/// <summary>
/// The order execution report message.
/// </summary>
class  ExecutionReport_allOf
    : public ModelBase
{
public:
    ExecutionReport_allOf();
    virtual ~ExecutionReport_allOf();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    bool fromJson(const web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    bool fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// ExecutionReport_allOf members

    /// <summary>
    /// Hash client id
    /// </summary>
    utility::string_t getClientOrderIdFormatExchange() const;
    bool clientOrderIdFormatExchangeIsSet() const;
    void unsetClient_order_id_format_exchange();

    void setClientOrderIdFormatExchange(const utility::string_t& value);

    /// <summary>
    /// Exchange order id
    /// </summary>
    utility::string_t getExchangeOrderId() const;
    bool exchangeOrderIdIsSet() const;
    void unsetExchange_order_id();

    void setExchangeOrderId(const utility::string_t& value);

    /// <summary>
    /// Amount open
    /// </summary>
    double getAmountOpen() const;
    bool amountOpenIsSet() const;
    void unsetAmount_open();

    void setAmountOpen(double value);

    /// <summary>
    /// Amount filled
    /// </summary>
    double getAmountFilled() const;
    bool amountFilledIsSet() const;
    void unsetAmount_filled();

    void setAmountFilled(double value);

    /// <summary>
    /// 
    /// </summary>
    std::shared_ptr<OrdStatus> getStatus() const;
    bool statusIsSet() const;
    void unsetStatus();

    void setStatus(const std::shared_ptr<OrdStatus>& value);

    /// <summary>
    /// History of order status changes
    /// </summary>
    std::vector<std::vector<utility::string_t>>& getTimeOrder();
    bool timeOrderIsSet() const;
    void unsetTime_order();

    void setTimeOrder(const std::vector<std::vector<utility::string_t>>& value);

    /// <summary>
    /// Error message
    /// </summary>
    utility::string_t getErrorMessage() const;
    bool errorMessageIsSet() const;
    void unsetError_message();

    void setErrorMessage(const utility::string_t& value);


protected:
    utility::string_t m_Client_order_id_format_exchange;
    bool m_Client_order_id_format_exchangeIsSet;
    utility::string_t m_Exchange_order_id;
    bool m_Exchange_order_idIsSet;
    double m_Amount_open;
    bool m_Amount_openIsSet;
    double m_Amount_filled;
    bool m_Amount_filledIsSet;
    std::shared_ptr<OrdStatus> m_Status;
    bool m_StatusIsSet;
    std::vector<std::vector<utility::string_t>> m_Time_order;
    bool m_Time_orderIsSet;
    utility::string_t m_Error_message;
    bool m_Error_messageIsSet;
};


}
}
}
}

#endif /* ORG_OPENAPITOOLS_CLIENT_MODEL_ExecutionReport_allOf_H_ */
