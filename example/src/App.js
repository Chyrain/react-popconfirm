import React from 'react';
import PopConfirm from 'react-popconfirm';
import {Button} from 'react-bootstrap';

const OnClickLeft = (e) => {
	PopConfirm({
		confirmation:'Are you sure?',
		okLabbel: 'Yes',
		cancelLabel: 'No',
		placement:'left',
		element:e.target // target is the element you clicked
		}).then(
			(result) => {
			// `proceed` callback
			console.log('proceed called');
			console.log(result);
		},
		(result) => {
			// `cancel` callback
			console.log('cancel called');
			console.log(result)
		}
	)
}

const OnClickRight = (e) => {
	PopConfirm({
		confirmation:'Are you sure?',
		okLabbel: 'Yes',
		cancelLabel: 'No',
		placement:'right',
		confirmationColor: '#000',
		cancelStyle: 'link',
		okStyle: 'link',
		element:e.target // target is the element you clicked
		}).then(
			(result) => {
			// `proceed` callback
			console.log('proceed called');
			console.log(result);
		},
		(result) => {
			// `cancel` callback
			console.log('cancel called');
			console.log(result)
		}
	)
}

const OnClickTop = (e) => {
	PopConfirm({
		confirmation:'Are you sure?',
		okLabbel: 'Yes',
		cancelLabel: 'No',
		placement:'top',
		confirmationColor: '#1881d3',
		cancelStyle: 'danger',
		okStyle: 'success',
		element:e.target // target is the element you clicked
		}).then(
			(result) => {
			// `proceed` callback
			console.log('proceed called');
			console.log(result);
		},
		(result) => {
			// `cancel` callback
			console.log('cancel called');
			console.log(result)
		}
	)
}

const OnClickBottom = (e) => {
	PopConfirm({
		confirmation:'Are you sure?',
		okLabbel: 'Yes',
		cancelLabel: 'No',
		placement:'bottom',
		confirmationColor: '#047218',
		okStyle: 'danger',
		element:e.target // target is the element you clicked
		}).then(
			(result) => {
			// `proceed` callback
			console.log('proceed called');
			console.log(result);
		},
		(result) => {
			// `cancel` callback
			console.log('cancel called');
			console.log(result)
		}
	)
}

const App = () => {
	return (
		<div className="container">
			<Button bsStyle="primary" className="left-btn" onClick={OnClickLeft}>PopLeft</Button>
			<Button bsStyle="success" className="top-btn" onClick={OnClickTop}>PopTop</Button>
			<Button bsStyle="warning" className="bottom-btn" onClick={OnClickBottom}>PopBottom</Button>
			<Button bsStyle="info" className="right-btn" onClick={OnClickRight}>PopRight</Button>
		</div>
	);
}

export default App;