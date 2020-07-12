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

#include "OAIPosition.h"

#include <QDebug>
#include <QJsonArray>
#include <QJsonDocument>
#include <QObject>

#include "OAIHelpers.h"

namespace OpenAPI {

OAIPosition::OAIPosition(QString json) {
    this->initializeModel();
    this->fromJson(json);
}

OAIPosition::OAIPosition() {
    this->initializeModel();
}

OAIPosition::~OAIPosition() {}

void OAIPosition::initializeModel() {

    m_type_isSet = false;
    m_type_isValid = false;

    m_exchange_name_isSet = false;
    m_exchange_name_isValid = false;

    m_data_isSet = false;
    m_data_isValid = false;
}

void OAIPosition::fromJson(QString jsonString) {
    QByteArray array(jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void OAIPosition::fromJsonObject(QJsonObject json) {

    m_type_isValid = ::OpenAPI::fromJsonValue(type, json[QString("type")]);
    m_type_isSet = !json[QString("type")].isNull() && m_type_isValid;

    m_exchange_name_isValid = ::OpenAPI::fromJsonValue(exchange_name, json[QString("exchange_name")]);
    m_exchange_name_isSet = !json[QString("exchange_name")].isNull() && m_exchange_name_isValid;

    m_data_isValid = ::OpenAPI::fromJsonValue(data, json[QString("data")]);
    m_data_isSet = !json[QString("data")].isNull() && m_data_isValid;
}

QString OAIPosition::asJson() const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject OAIPosition::asJsonObject() const {
    QJsonObject obj;
    if (m_type_isSet) {
        obj.insert(QString("type"), ::OpenAPI::toJsonValue(type));
    }
    if (m_exchange_name_isSet) {
        obj.insert(QString("exchange_name"), ::OpenAPI::toJsonValue(exchange_name));
    }
    if (data.size() > 0) {
        obj.insert(QString("data"), ::OpenAPI::toJsonValue(data));
    }
    return obj;
}

QString OAIPosition::getType() const {
    return type;
}
void OAIPosition::setType(const QString &type) {
    this->type = type;
    this->m_type_isSet = true;
}

bool OAIPosition::is_type_Set() const{
    return m_type_isSet;
}

bool OAIPosition::is_type_Valid() const{
    return m_type_isValid;
}

QString OAIPosition::getExchangeName() const {
    return exchange_name;
}
void OAIPosition::setExchangeName(const QString &exchange_name) {
    this->exchange_name = exchange_name;
    this->m_exchange_name_isSet = true;
}

bool OAIPosition::is_exchange_name_Set() const{
    return m_exchange_name_isSet;
}

bool OAIPosition::is_exchange_name_Valid() const{
    return m_exchange_name_isValid;
}

QList<OAIPosition_data> OAIPosition::getData() const {
    return data;
}
void OAIPosition::setData(const QList<OAIPosition_data> &data) {
    this->data = data;
    this->m_data_isSet = true;
}

bool OAIPosition::is_data_Set() const{
    return m_data_isSet;
}

bool OAIPosition::is_data_Valid() const{
    return m_data_isValid;
}

bool OAIPosition::isSet() const {
    bool isObjectUpdated = false;
    do {
        if (m_type_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_exchange_name_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (data.size() > 0) {
            isObjectUpdated = true;
            break;
        }
    } while (false);
    return isObjectUpdated;
}

bool OAIPosition::isValid() const {
    // only required properties are required for the object to be considered valid
    return true;
}

} // namespace OpenAPI
