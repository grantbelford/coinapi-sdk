# coding: utf-8

"""
    OEML - REST API

    This section will provide necessary information about the `CoinAPI OEML REST API` protocol.   # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import openapi_client
from openapi_client.api.balances_api import BalancesApi  # noqa: E501
from openapi_client.rest import ApiException


class TestBalancesApi(unittest.TestCase):
    """BalancesApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.balances_api.BalancesApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_v1_balances_get(self):
        """Test case for v1_balances_get

        Get balances  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
