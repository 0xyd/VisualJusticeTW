import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import JRConfCommiteeHeader from './JRConfCommiteeHeader';
import JRConfCommiteeBody from './JRConfCommiteeBody';
import JRConfCommiteeFooter from './JRConfCommiteeFooter';


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