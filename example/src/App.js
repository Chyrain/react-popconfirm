import React from 'react';
import PopConfirm from 'react-popconfirm';
import {Button} from 'react-bootstrap';

const handleOnClick = (e) => {
	PopConfirm({
		confirmation:'Are you sure?',
		okLabbel: 'Yes',
		cancelLabel: 'No',
		placement:'top',
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
		<div style={{width:'100%', height:'500px', padding:'200px'}}>
			<Button bsStyle="info" onClick={handleOnClick}>PopConfirm</Button>
		</div>
	);
}

export default App;