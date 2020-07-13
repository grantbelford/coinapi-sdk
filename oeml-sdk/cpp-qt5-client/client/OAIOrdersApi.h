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

#ifndef OAI_OAIOrdersApi_H
#define OAI_OAIOrdersApi_H

#include "OAIHttpRequest.h"

#include "OAIExecutionReport.h"
#include "OAIMessage.h"
#include "OAINewOrderSingle.h"
#include "OAIOrderCancelAllRequest.h"
#include "OAIOrderCancelSingleRequest.h"
#include "OAIValidationError.h"
#include <QString>

#include <QObject>

namespace OpenAPI {

class OAIOrdersApi : public QObject {
    Q_OBJECT

public:
    OAIOrdersApi(const QString &scheme = "http", const QString &host = "localhost", int port = 8080, const QString &basePath = "", const int timeOut = 0);
    ~OAIOrdersApi();

    void setScheme(const QString &scheme);
    void setHost(const QString &host);
    void setPort(int port);
    void setBasePath(const QString &basePath);
    void setTimeOut(const int timeOut);
    void setWorkingDirectory(const QString &path);
    void addHeaders(const QString &key, const QString &value);
    void enableRequestCompression();
    void enableResponseCompression();
    void abortRequests();

    void v1OrdersCancelAllPost(const OAIOrderCancelAllRequest &oai_order_cancel_all_request);
    void v1OrdersCancelPost(const OAIOrderCancelSingleRequest &oai_order_cancel_single_request);
    void v1OrdersGet(const QString &exchange_id);
    void v1OrdersPost(const OAINewOrderSingle &oai_new_order_single);
    void v1OrdersStatusClientOrderIdGet(const QString &client_order_id);

private:
    QString _scheme, _host;
    int _port;
    QString _basePath;
    int _timeOut;
    QString _workingDirectory;
    QMap<QString, QString> defaultHeaders;
    bool isResponseCompressionEnabled;
    bool isRequestCompressionEnabled;

    void v1OrdersCancelAllPostCallback(OAIHttpRequestWorker *worker);
    void v1OrdersCancelPostCallback(OAIHttpRequestWorker *worker);
    void v1OrdersGetCallback(OAIHttpRequestWorker *worker);
    void v1OrdersPostCallback(OAIHttpRequestWorker *worker);
    void v1OrdersStatusClientOrderIdGetCallback(OAIHttpRequestWorker *worker);

signals:

    void v1OrdersCancelAllPostSignal(OAIMessage summary);
    void v1OrdersCancelPostSignal(OAIExecutionReport summary);
    void v1OrdersGetSignal(QList<OAIExecutionReport> summary);
    void v1OrdersPostSignal(OAIExecutionReport summary);
    void v1OrdersStatusClientOrderIdGetSignal(OAIExecutionReport summary);

    void v1OrdersCancelAllPostSignalFull(OAIHttpRequestWorker *worker, OAIMessage summary);
    void v1OrdersCancelPostSignalFull(OAIHttpRequestWorker *worker, OAIExecutionReport summary);
    void v1OrdersGetSignalFull(OAIHttpRequestWorker *worker, QList<OAIExecutionReport> summary);
    void v1OrdersPostSignalFull(OAIHttpRequestWorker *worker, OAIExecutionReport summary);
    void v1OrdersStatusClientOrderIdGetSignalFull(OAIHttpRequestWorker *worker, OAIExecutionReport summary);

    void v1OrdersCancelAllPostSignalE(OAIMessage summary, QNetworkReply::NetworkError error_type, QString error_str);
    void v1OrdersCancelPostSignalE(OAIExecutionReport summary, QNetworkReply::NetworkError error_type, QString error_str);
    void v1OrdersGetSignalE(QList<OAIExecutionReport> summary, QNetworkReply::NetworkError error_type, QString error_str);
    void v1OrdersPostSignalE(OAIExecutionReport summary, QNetworkReply::NetworkError error_type, QString error_str);
    void v1OrdersStatusClientOrderIdGetSignalE(OAIExecutionReport summary, QNetworkReply::NetworkError error_type, QString error_str);

    void v1OrdersCancelAllPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void v1OrdersCancelPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void v1OrdersGetSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void v1OrdersPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void v1OrdersStatusClientOrderIdGetSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);

    void abortRequestsSignal(); 
};

} // namespace OpenAPI
#endif
