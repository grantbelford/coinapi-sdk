/**
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * OAIOrder_data.h
 *
 * 
 */

#ifndef OAIOrder_data_H
#define OAIOrder_data_H

#include <QJsonObject>

#include "OAIOrderStatus.h"
#include "OAITimeInForce.h"
#include <QDate>
#include <QList>
#include <QString>

#include "OAIEnum.h"
#include "OAIObject.h"

namespace OpenAPI {

class OAIOrder_data : public OAIObject {
public:
    OAIOrder_data();
    OAIOrder_data(QString json);
    ~OAIOrder_data() override;

    QString asJson() const override;
    QJsonObject asJsonObject() const override;
    void fromJsonObject(QJsonObject json) override;
    void fromJson(QString jsonString) override;

    QString getExchangeId() const;
    void setExchangeId(const QString &exchange_id);
    bool is_exchange_id_Set() const;
    bool is_exchange_id_Valid() const;

    QString getId() const;
    void setId(const QString &id);
    bool is_id_Set() const;
    bool is_id_Valid() const;

    QString getClientOrderIdFormatExchange() const;
    void setClientOrderIdFormatExchange(const QString &client_order_id_format_exchange);
    bool is_client_order_id_format_exchange_Set() const;
    bool is_client_order_id_format_exchange_Valid() const;

    QString getExchangeOrderId() const;
    void setExchangeOrderId(const QString &exchange_order_id);
    bool is_exchange_order_id_Set() const;
    bool is_exchange_order_id_Valid() const;

    double getAmountOpen() const;
    void setAmountOpen(const double &amount_open);
    bool is_amount_open_Set() const;
    bool is_amount_open_Valid() const;

    double getAmountFilled() const;
    void setAmountFilled(const double &amount_filled);
    bool is_amount_filled_Set() const;
    bool is_amount_filled_Valid() const;

    OAIOrderStatus getStatus() const;
    void setStatus(const OAIOrderStatus &status);
    bool is_status_Set() const;
    bool is_status_Valid() const;

    QList<QList<QString>> getTimeOrder() const;
    void setTimeOrder(const QList<QList<QString>> &time_order);
    bool is_time_order_Set() const;
    bool is_time_order_Valid() const;

    QString getErrorMessage() const;
    void setErrorMessage(const QString &error_message);
    bool is_error_message_Set() const;
    bool is_error_message_Valid() const;

    QString getClientOrderId() const;
    void setClientOrderId(const QString &client_order_id);
    bool is_client_order_id_Set() const;
    bool is_client_order_id_Valid() const;

    QString getSymbolExchange() const;
    void setSymbolExchange(const QString &symbol_exchange);
    bool is_symbol_exchange_Set() const;
    bool is_symbol_exchange_Valid() const;

    QString getSymbolCoinapi() const;
    void setSymbolCoinapi(const QString &symbol_coinapi);
    bool is_symbol_coinapi_Set() const;
    bool is_symbol_coinapi_Valid() const;

    double getAmountOrder() const;
    void setAmountOrder(const double &amount_order);
    bool is_amount_order_Set() const;
    bool is_amount_order_Valid() const;

    double getPrice() const;
    void setPrice(const double &price);
    bool is_price_Set() const;
    bool is_price_Valid() const;

    QString getSide() const;
    void setSide(const QString &side);
    bool is_side_Set() const;
    bool is_side_Valid() const;

    QString getOrderType() const;
    void setOrderType(const QString &order_type);
    bool is_order_type_Set() const;
    bool is_order_type_Valid() const;

    OAITimeInForce getTimeInForce() const;
    void setTimeInForce(const OAITimeInForce &time_in_force);
    bool is_time_in_force_Set() const;
    bool is_time_in_force_Valid() const;

    QDate getExpireTime() const;
    void setExpireTime(const QDate &expire_time);
    bool is_expire_time_Set() const;
    bool is_expire_time_Valid() const;

    QList<QString> getExecInst() const;
    void setExecInst(const QList<QString> &exec_inst);
    bool is_exec_inst_Set() const;
    bool is_exec_inst_Valid() const;

    virtual bool isSet() const override;
    virtual bool isValid() const override;

private:
    void initializeModel();

    QString exchange_id;
    bool m_exchange_id_isSet;
    bool m_exchange_id_isValid;

    QString id;
    bool m_id_isSet;
    bool m_id_isValid;

    QString client_order_id_format_exchange;
    bool m_client_order_id_format_exchange_isSet;
    bool m_client_order_id_format_exchange_isValid;

    QString exchange_order_id;
    bool m_exchange_order_id_isSet;
    bool m_exchange_order_id_isValid;

    double amount_open;
    bool m_amount_open_isSet;
    bool m_amount_open_isValid;

    double amount_filled;
    bool m_amount_filled_isSet;
    bool m_amount_filled_isValid;

    OAIOrderStatus status;
    bool m_status_isSet;
    bool m_status_isValid;

    QList<QList<QString>> time_order;
    bool m_time_order_isSet;
    bool m_time_order_isValid;

    QString error_message;
    bool m_error_message_isSet;
    bool m_error_message_isValid;

    QString client_order_id;
    bool m_client_order_id_isSet;
    bool m_client_order_id_isValid;

    QString symbol_exchange;
    bool m_symbol_exchange_isSet;
    bool m_symbol_exchange_isValid;

    QString symbol_coinapi;
    bool m_symbol_coinapi_isSet;
    bool m_symbol_coinapi_isValid;

    double amount_order;
    bool m_amount_order_isSet;
    bool m_amount_order_isValid;

    double price;
    bool m_price_isSet;
    bool m_price_isValid;

    QString side;
    bool m_side_isSet;
    bool m_side_isValid;

    QString order_type;
    bool m_order_type_isSet;
    bool m_order_type_isValid;

    OAITimeInForce time_in_force;
    bool m_time_in_force_isSet;
    bool m_time_in_force_isValid;

    QDate expire_time;
    bool m_expire_time_isSet;
    bool m_expire_time_isValid;

    QList<QString> exec_inst;
    bool m_exec_inst_isSet;
    bool m_exec_inst_isValid;
};

} // namespace OpenAPI

Q_DECLARE_METATYPE(OpenAPI::OAIOrder_data)

#endif // OAIOrder_data_H
