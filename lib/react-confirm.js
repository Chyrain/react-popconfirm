'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfirmation = exports.confirmable = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirmable = function confirmable(Component) {
  return function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = {
        show: true
      };
      return _this;
    }

    _createClass(_class, [{
      key: 'dismiss',
      value: function dismiss() {
        var _this2 = this;

        this.setState({
          show: false
        }, function () {
          _this2.props.dispose();
        });
      }
    }, {
      key: 'cancel',
      value: function cancel(value) {
        var _this3 = this;

        this.setState({
          show: false
        }, function () {
          _this3.props.reject(value);
        });
      }
    }, {
      key: 'proceed',
      value: function proceed(value) {
        var _this4 = this;

        this.setState({
          show: false
        }, function () {
          _this4.props.resolve(value);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({ proceed: this.proceed.bind(this), cancel: this.cancel.bind(this), dismiss: this.dismiss.bind(this), show: this.state.show }, this.props));
      }
    }]);

    return _class;
  }(_react2.default.Component);
};

var createConfirmation = function createConfirmation(Component) {
  return function (props) {
    var container = document.getElementById('confirm-container');
    var wrapper = document.body.appendChild(container || document.createElement('div'));
    wrapper.id = 'confirm-container';

    var promise = new Promise(function (resolve, reject) {
      try {
        _reactDom2.default.render(_react2.default.createElement(Component, _extends({
          reject: reject,
          resolve: resolve,
          dispose: dispose
        }, props)), wrapper);
      } catch (e) {
        console.error(e);
        throw e;
      }
    });

    function dispose() {
      setTimeout(function () {
        _reactDom2.default.unmountComponentAtNode(wrapper);
        setTimeout(function () {
          return wrapper.remove();
        });
      }, 1);
    }

    return promise.then(function (result) {
      dispose();
      return result;
    }, function (result) {
      dispose();
      return Promise.reject(result);
    });
  };
};

exports.confirmable = confirmable;
exports.createConfirmation = createConfirmation;