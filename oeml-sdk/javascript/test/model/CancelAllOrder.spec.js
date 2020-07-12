/**
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OemlRestApi);
  }
}(this, function(expect, OemlRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OemlRestApi.CancelAllOrder();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CancelAllOrder', function() {
    it('should create an instance of CancelAllOrder', function() {
      // uncomment below and update the code to test CancelAllOrder
      //var instane = new OemlRestApi.CancelAllOrder();
      //expect(instance).to.be.a(OemlRestApi.CancelAllOrder);
    });

    it('should have the property exchangeId (base name: "exchange_id")', function() {
      // uncomment below and update the code to test the property exchangeId
      //var instane = new OemlRestApi.CancelAllOrder();
      //expect(instance).to.be();
    });

  });

}));
