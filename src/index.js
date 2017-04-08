import ReactDOM from 'react-dom';
import Confirmation from './Confirmation.js';
import { createConfirmation } from './react-confirm.js';

const defaultConfirmation = createConfirmation(Confirmation);

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
export default function PopConfirm(options = {}) {
	var container = document.getElementById('confirm-container');
	if (container) {
		ReactDOM.unmountComponentAtNode(container);
	}
	return defaultConfirmation({ ...options });
}