'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _frescoHttpServiceUtilities = require('fresco-http-service-utilities');

var _frescoHttpServiceUtilities2 = _interopRequireDefault(_frescoHttpServiceUtilities);

var _domainRoutingService = require('../../domain-routing-service');

var _domainRoutingService2 = _interopRequireDefault(_domainRoutingService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InboxHandler = function (_BaseHandler) {
  (0, _inherits3.default)(InboxHandler, _BaseHandler);

  function InboxHandler() {
    (0, _classCallCheck3.default)(this, InboxHandler);
    return (0, _possibleConstructorReturn3.default)(this, (InboxHandler.__proto__ || (0, _getPrototypeOf2.default)(InboxHandler)).apply(this, arguments));
  }

  (0, _createClass3.default)(InboxHandler, [{
    key: 'index',
    value: function index(req, res) {
      var worker = new _domainRoutingService2.default();
      var response = worker.work(req);
      res.json({
        'res': response
      });
    }
  }]);
  return InboxHandler;
}(_frescoHttpServiceUtilities2.default);

exports.default = new InboxHandler();