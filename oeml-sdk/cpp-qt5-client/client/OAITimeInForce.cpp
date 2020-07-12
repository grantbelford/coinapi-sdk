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

#include "OAITimeInForce.h"

#include <QDebug>
#include <QJsonArray>
#include <QJsonDocument>
#include <QObject>

#include "OAIHelpers.h"

namespace OpenAPI {

OAITimeInForce::OAITimeInForce(QString json) {
    this->initializeModel();
    this->fromJson(json);
}

OAITimeInForce::OAITimeInForce() {
    this->initializeModel();
}

OAITimeInForce::~OAITimeInForce() {}

void OAITimeInForce::initializeModel() {

    m_value_isSet = false;
    m_value_isValid = false;
    m_value = eOAITimeInForce::INVALID_VALUE_OPENAPI_GENERATED;
}

void OAITimeInForce::fromJson(QString jsonString) {
    
    if ( jsonString.compare("GOOD_TILL_CANCEL", Qt::CaseInsensitive) == 0) {
        m_value = eOAITimeInForce::GOOD_TILL_CANCEL;
        m_value_isSet = m_value_isValid = true;
    }
    else if ( jsonString.compare("GOOD_TILL_TIME_EXCHANGE", Qt::CaseInsensitive) == 0) {
        m_value = eOAITimeInForce::GOOD_TILL_TIME_EXCHANGE;
        m_value_isSet = m_value_isValid = true;
    }
    else if ( jsonString.compare("GOOD_TILL_TIME_OMS", Qt::CaseInsensitive) == 0) {
        m_value = eOAITimeInForce::GOOD_TILL_TIME_OMS;
        m_value_isSet = m_value_isValid = true;
    }
    else if ( jsonString.compare("FILL_OR_KILL", Qt::CaseInsensitive) == 0) {
        m_value = eOAITimeInForce::FILL_OR_KILL;
        m_value_isSet = m_value_isValid = true;
    }
    else if ( jsonString.compare("IMMEDIATE_OR_CANCEL", Qt::CaseInsensitive) == 0) {
        m_value = eOAITimeInForce::IMMEDIATE_OR_CANCEL;
        m_value_isSet = m_value_isValid = true;
    }
    else if ( jsonString.compare("AUCTION_ONLY", Qt::CaseInsensitive) == 0) {
        m_value = eOAITimeInForce::AUCTION_ONLY;
        m_value_isSet = m_value_isValid = true;
    }
    else if ( jsonString.compare("INDICATION_OF_INTEREST", Qt::CaseInsensitive) == 0) {
        m_value = eOAITimeInForce::INDICATION_OF_INTEREST;
        m_value_isSet = m_value_isValid = true;
    }
}

void OAITimeInForce::fromJsonValue(QJsonValue json) {
fromJson(json.toString());
}

QString OAITimeInForce::asJson() const {
    
    QString val;
    switch (m_value){
        case eOAITimeInForce::GOOD_TILL_CANCEL:
            val = "GOOD_TILL_CANCEL";
            break;
        case eOAITimeInForce::GOOD_TILL_TIME_EXCHANGE:
            val = "GOOD_TILL_TIME_EXCHANGE";
            break;
        case eOAITimeInForce::GOOD_TILL_TIME_OMS:
            val = "GOOD_TILL_TIME_OMS";
            break;
        case eOAITimeInForce::FILL_OR_KILL:
            val = "FILL_OR_KILL";
            break;
        case eOAITimeInForce::IMMEDIATE_OR_CANCEL:
            val = "IMMEDIATE_OR_CANCEL";
            break;
        case eOAITimeInForce::AUCTION_ONLY:
            val = "AUCTION_ONLY";
            break;
        case eOAITimeInForce::INDICATION_OF_INTEREST:
            val = "INDICATION_OF_INTEREST";
            break;
        default:
            break;
    }
    return val;
}

QJsonValue OAITimeInForce::asJsonValue() const {
    
    return QJsonValue(asJson());
}


OAITimeInForce::eOAITimeInForce OAITimeInForce::getValue() const {
    return m_value;
}

void OAITimeInForce::setValue(const OAITimeInForce::eOAITimeInForce& value){
    m_value = value;
    m_value_isSet = true;
}
bool OAITimeInForce::isSet() const {
    
    return m_value_isSet;
}

bool OAITimeInForce::isValid() const {
    // only required properties are required for the object to be considered valid
    return m_value_isValid;
}

} // namespace OpenAPI
