import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for NewOrder
void main() {
  var instance = new NewOrder();

  group('test NewOrder', () {
    // Exchange name
    // String exchangeId (default value: null)
    test('to test the property `exchangeId`', () async {
      // TODO
    });

    // Client unique identifier for the trade.
    // String clientOrderId (default value: null)
    test('to test the property `clientOrderId`', () async {
      // TODO
    });

    // The symbol of the order.
    // String symbolExchange (default value: null)
    test('to test the property `symbolExchange`', () async {
      // TODO
    });

    // The CoinAPI symbol of the order.
    // String symbolCoinapi (default value: null)
    test('to test the property `symbolCoinapi`', () async {
      // TODO
    });

    // Quoted decimal amount to purchase.
    // num amountOrder (default value: null)
    test('to test the property `amountOrder`', () async {
      // TODO
    });

    // Quoted decimal amount to spend per unit.
    // num price (default value: null)
    test('to test the property `price`', () async {
      // TODO
    });

    // Buy or Sell
    // String side (default value: null)
    test('to test the property `side`', () async {
      // TODO
    });

    // The order type.
    // String orderType (default value: null)
    test('to test the property `orderType`', () async {
      // TODO
    });

    // TimeInForce timeInForce (default value: null)
    test('to test the property `timeInForce`', () async {
      // TODO
    });

    // Required for orders with time_in_force = GOOD_TILL_TIME_EXCHANGE, GOOD_TILL_TIME_OMS
    // DateTime expireTime (default value: null)
    test('to test the property `expireTime`', () async {
      // TODO
    });

    // Order execution instructions are documented in the separate section: <a href=\"#oeml-order-params-exec\">OEML / Starter Guide / Order parameters / Execution instructions</a> 
    // List<String> execInst (default value: const [])
    test('to test the property `execInst`', () async {
      // TODO
    });


  });

}
