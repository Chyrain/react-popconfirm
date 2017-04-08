'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PopConfirm;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Confirmation = require('./Confirmation.js');

var _Confirmation2 = _interopRequireDefault(_Confirmation);

var _reactConfirm = require('./react-confirm.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConfirmation = (0, _reactConfirm.createConfirmation)(_Confirmation2.default);

/**
 * options key set down:
 *  {
 *		element,				// require
 *		confirmation,			// require
 *		placement = 'top',		// require
 *		okLabbel = '确定',		// optional
 *		cancelLabel = '取消',	// optional
 *		positionLeft,			// optional (auto calculate by element position and width,height)
 *		positionTop,			// optional (auto calculate by element position and width,height)
 *		width = 160,			// optional (default 160)
 *		height = 70 			// optional (default 70)
 *		confirmationColor = '#e83f3f',	// optional (default '#e83f3f')
 *		okStyle = 'info',				// optional (default 'info', available: default|primary|success|info|warning|danger|link)
 *		cancelStyle = 'default'			// optional (default 'default' available: default|primary|success|info|warning|danger|link)
 *	}
 */
function PopConfirm() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var container = document.getElementById('confirm-container');
  if (container) {
    _reactDom2.default.unmountComponentAtNode(container);
  }
  return defaultConfirmation(_extends({}, options));
}