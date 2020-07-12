/*
 * OrderStatus.h
 *
 * Order statuses and the lifecycle are documented in the separate section: https://docs.coinapi.io/#oeml-order-lifecycle 
 */

#ifndef _OrderStatus_H_
#define _OrderStatus_H_


#include <string>
#include "Object.h"

/** \defgroup Models Data Structures for API
 *  Classes containing all the Data Structures needed for calling/returned by API endpoints
 *
 */

namespace Tizen {
namespace ArtikCloud {


/*! \brief Order statuses and the lifecycle are documented in the separate section: https://docs.coinapi.io/#oeml-order-lifecycle 
 *
 *  \ingroup Models
 *
 */

class OrderStatus : public Object {
public:
	/*! \brief Constructor.
	 */
	OrderStatus();
	OrderStatus(char* str);

	/*! \brief Destructor.
	 */
	virtual ~OrderStatus();

	/*! \brief Retrieve a string JSON representation of this class.
	 */
	char* toJson();

	/*! \brief Fills in members of this class from JSON string representing it.
	 */
	void fromJson(char* jsonStr);


private:
	void __init();
	void __cleanup();

};
}
}

#endif /* _OrderStatus_H_ */