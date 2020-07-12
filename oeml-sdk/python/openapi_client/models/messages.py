# coding: utf-8

"""
    OEML - REST API

    This section will provide necessary information about the `CoinAPI OEML REST API` protocol.   # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from openapi_client.configuration import Configuration


class Messages(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'type': 'str',
        'exchange_id': 'str',
        'message': 'str'
    }

    attribute_map = {
        'type': 'type',
        'exchange_id': 'exchange_id',
        'message': 'message'
    }

    def __init__(self, type=None, exchange_id=None, message=None, local_vars_configuration=None):  # noqa: E501
        """Messages - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._type = None
        self._exchange_id = None
        self._message = None
        self.discriminator = None

        if type is not None:
            self.type = type
        if exchange_id is not None:
            self.exchange_id = exchange_id
        if message is not None:
            self.message = message

    @property
    def type(self):
        """Gets the type of this Messages.  # noqa: E501

        Type of message  # noqa: E501

        :return: The type of this Messages.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this Messages.

        Type of message  # noqa: E501

        :param type: The type of this Messages.  # noqa: E501
        :type: str
        """

        self._type = type

    @property
    def exchange_id(self):
        """Gets the exchange_id of this Messages.  # noqa: E501

        Exchange name  # noqa: E501

        :return: The exchange_id of this Messages.  # noqa: E501
        :rtype: str
        """
        return self._exchange_id

    @exchange_id.setter
    def exchange_id(self, exchange_id):
        """Sets the exchange_id of this Messages.

        Exchange name  # noqa: E501

        :param exchange_id: The exchange_id of this Messages.  # noqa: E501
        :type: str
        """

        self._exchange_id = exchange_id

    @property
    def message(self):
        """Gets the message of this Messages.  # noqa: E501

        Message  # noqa: E501

        :return: The message of this Messages.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this Messages.

        Message  # noqa: E501

        :param message: The message of this Messages.  # noqa: E501
        :type: str
        """

        self._message = message

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, Messages):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Messages):
            return True

        return self.to_dict() != other.to_dict()
