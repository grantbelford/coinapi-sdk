/*
 * OrderExecutionReport_allOf.h
 *
 * The order execution report message.
 */

#ifndef _OrderExecutionReport_allOf_H_
#define _OrderExecutionReport_allOf_H_


#include <string>
#include "OrdStatus.h"
#include <list>
#include "Object.h"

/** \defgroup Models Data Structures for API
 *  Classes containing all the Data Structures needed for calling/returned by API endpoints
 *
 */

namespace Tizen {
namespace ArtikCloud {


/*! \brief The order execution report message.
 *
 *  \ingroup Models
 *
 */

class OrderExecutionReport_allOf : public Object {
public:
	/*! \brief Constructor.
	 */
	OrderExecutionReport_allOf();
	OrderExecutionReport_allOf(char* str);

	/*! \brief Destructor.
	 */
	virtual ~OrderExecutionReport_allOf();

	/*! \brief Retrieve a string JSON representation of this class.
	 */
	char* toJson();

	/*! \brief Fills in members of this class from JSON string representing it.
	 */
	void fromJson(char* jsonStr);

	/*! \brief Get The unique identifier of the order assigned by the client converted to the exchange order tag format for the purpose of tracking it.
	 */
	std::string getClientOrderIdFormatExchange();

	/*! \brief Set The unique identifier of the order assigned by the client converted to the exchange order tag format for the purpose of tracking it.
	 */
	void setClientOrderIdFormatExchange(std::string  client_order_id_format_exchange);
	/*! \brief Get The unique identifier of the order assigned by the exchange.
	 */
	std::string getExchangeOrderId();

	/*! \brief Set The unique identifier of the order assigned by the exchange.
	 */
	void setExchangeOrderId(std::string  exchange_order_id);
	/*! \brief Get Amount open.
	 */
	long long getAmountOpen();

	/*! \brief Set Amount open.
	 */
	void setAmountOpen(long long  amount_open);
	/*! \brief Get Amount filled.
	 */
	long long getAmountFilled();

	/*! \brief Set Amount filled.
	 */
	void setAmountFilled(long long  amount_filled);
	/*! \brief Get 
	 */
	OrdStatus getStatus();

	/*! \brief Set 
	 */
	void setStatus(OrdStatus  status);
	/*! \brief Get Timestamped history of order status changes.
	 */
	std::list<std::list> getTimeOrder();

	/*! \brief Set Timestamped history of order status changes.
	 */
	void setTimeOrder(std::list <std::list> time_order);
	/*! \brief Get Error message
	 */
	std::string getErrorMessage();

	/*! \brief Set Error message
	 */
	void setErrorMessage(std::string  error_message);

private:
	std::string client_order_id_format_exchange;
	std::string exchange_order_id;
	long long amount_open;
	long long amount_filled;
	OrdStatus status;
	std::list <std::list>time_order;
	std::string error_message;
	void __init();
	void __cleanup();

};
}
}

#endif /* _OrderExecutionReport_allOf_H_ */
