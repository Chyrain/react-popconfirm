'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactConfirm = require('./react-confirm.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirmation = function (_React$Component) {
  _inherits(Confirmation, _React$Component);

  function Confirmation() {
    _classCallCheck(this, Confirmation);

    return _possibleConstructorReturn(this, (Confirmation.__proto__ || Object.getPrototypeOf(Confirmation)).apply(this, arguments));
  }

  _createClass(Confirmation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$okLabbel = _props.okLabbel,
          okLabbel = _props$okLabbel === undefined ? 'Yes' : _props$okLabbel,
          _props$cancelLabel = _props.cancelLabel,
          cancelLabel = _props$cancelLabel === undefined ? 'No' : _props$cancelLabel,
          _props$okStyle = _props.okStyle,
          okStyle = _props$okStyle === undefined ? 'info' : _props$okStyle,
          _props$cancelStyle = _props.cancelStyle,
          cancelStyle = _props$cancelStyle === undefined ? 'default' : _props$cancelStyle,
          element = _props.element,
          confirmation = _props.confirmation,
          _props$confirmationCo = _props.confirmationColor,
          confirmationColor = _props$confirmationCo === undefined ? '#e83f3f' : _props$confirmationCo,
          show = _props.show,
          proceed = _props.proceed,
          dismiss = _props.dismiss,
          cancel = _props.cancel,
          _props$placement = _props.placement,
          placement = _props$placement === undefined ? 'top' : _props$placement,
          positionLeft = _props.positionLeft,
          positionTop = _props.positionTop,
          _props$width = _props.width,
          width = _props$width === undefined ? 160 : _props$width,
          _props$height = _props.height,
          height = _props$height === undefined ? 70 : _props$height;

      if (element && (!positionLeft || !positionTop)) {
        var _getElementPosition = this.getElementPosition(element),
            x = _getElementPosition.x,
            y = _getElementPosition.y;
        // windth:160 height:70
        // arrow 22x10


        switch (placement) {
          case 'top':
            {
              positionLeft = x + element.clientWidth / 2 - width / 2;
              positionTop = y - 10 - 66;
              break;
            }
          case 'bottom':
            {
              positionLeft = x + element.clientWidth / 2 - width / 2;
              positionTop = y + 10 + element.clientHeight;
              break;
            }
          case 'left':
            {
              positionLeft = x - width - 10;
              positionTop = y + element.clientHeight / 2 - height / 2;
              break;
            }
          case 'right':
            {
              positionLeft = x + 10 + element.clientWidth;
              positionTop = y + element.clientHeight / 2 - height / 2;
              break;
            }
        }
      }
      //title={title || content} 
      return _react2.default.createElement(
        'div',
        { className: 'static-confirm' },
        _react2.default.createElement(
          _reactBootstrap.Popover,
          { id: 'pop-confirm',
            style: { width: width + 'px', height: height + 'px' },
            show: show,
            onHide: dismiss,
            placement: placement,
            positionLeft: positionLeft,
            positionTop: positionTop },
          _react2.default.createElement(
            'p',
            { style: { margin: 0, padding: '.3em 0', fontSize: 'small', color: confirmationColor } },
            confirmation
          ),
          _react2.default.createElement(
            _reactBootstrap.ButtonToolbar,
            { style: { paddingBottom: '6px', float: 'right' } },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: 'xsmall', bsStyle: cancelStyle, onClick: cancel },
              cancelLabel
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: 'xsmall', bsStyle: okStyle, onClick: proceed },
              okLabbel
            )
          )
        )
      );
    }
  }, {
    key: 'getElementPosition',
    value: function getElementPosition(e) {
      var x = 0,
          y = 0;
      while (e != null) {
        x += e.offsetLeft;
        y += e.offsetTop;
        e = e.offsetParent;
      }
      return { x: x, y: y };
    }
  }]);

  return Confirmation;
}(_react2.default.Component);

Confirmation.propTypes = {
  okLabbel: _react2.default.PropTypes.string,
  cancelLabel: _react2.default.PropTypes.string,
  confirmation: _react2.default.PropTypes.string,
  show: _react2.default.PropTypes.bool,
  proceed: _react2.default.PropTypes.func, // called when ok button is clicked.
  cancel: _react2.default.PropTypes.func, // called when cancel button is clicked.
  dismiss: _react2.default.PropTypes.func, // called when backdrop is clicked or escaped.
  placement: _react2.default.PropTypes.string, // top, bottom, left, right
  positionLeft: _react2.default.PropTypes.number,
  positionTop: _react2.default.PropTypes.number,
  width: _react2.default.PropTypes.number,
  height: _react2.default.PropTypes.number,
  element: _react2.default.PropTypes.object,
  confirmationColor: _react2.default.PropTypes.string,
  okStyle: _react2.default.PropTypes.string,
  cancelStyle: _react2.default.PropTypes.string
};

exports.default = (0, _reactConfirm.confirmable)(Confirmation);