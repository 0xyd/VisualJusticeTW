import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import JRConfHeader from './JRConfHeader';
import JRConfBody from './JRConfBody';
import JRConfFooter from './JRConfFooter';


export default class JRConf extends React.Component {

	render() {
		return (
			<div id="JRCF-root" className="row">
				<JRConfHeader></JRConfHeader>			
				<JRConfBody></JRConfBody>
				<JRConfFooter></JRConfFooter>
			</div>
		)
	}

} 