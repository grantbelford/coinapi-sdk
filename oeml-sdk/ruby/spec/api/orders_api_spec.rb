=begin
#OEML - REST API

#This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 

The version of the OpenAPI document: v1

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::OrdersApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'OrdersApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::OrdersApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of OrdersApi' do
    it 'should create an instance of OrdersApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::OrdersApi)
    end
  end

  # unit tests for v1_orders_cancel_all_post
  # Cancel all orders
  # This request cancels all open orders across all or single specified exchange.
  # @param cancel_order_all_request 
  # @param [Hash] opts the optional parameters
  # @return [Message]
  describe 'v1_orders_cancel_all_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for v1_orders_cancel_post
  # Cancel order
  # This request cancels an existing order. The order can be canceled by the client order ID or exchange order ID.
  # @param cancel_order_single_request 
  # @param [Hash] opts the optional parameters
  # @return [OrderExecutionReport]
  describe 'v1_orders_cancel_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for v1_orders_get
  # Get all orders
  # Get all current open orders across all or single specified exchange.
  # @param [Hash] opts the optional parameters
  # @option opts [String] :exchange_id Filter the output to the orders from the specific exchange.
  # @return [Array<OrderExecutionReport>]
  describe 'v1_orders_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for v1_orders_post
  # Create new order
  # This request creating new order for the specific exchange.
  # @param new_order_single 
  # @param [Hash] opts the optional parameters
  # @return [OrderExecutionReport]
  describe 'v1_orders_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for v1_orders_status_client_order_id_get
  # Get order status
  # Get the last order execution report for the specified order. The requested order does not need to be active/opened.
  # @param client_order_id The unique identifier of the order assigned by the client.
  # @param [Hash] opts the optional parameters
  # @return [OrderExecutionReport]
  describe 'v1_orders_status_client_order_id_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
