import React from 'react';
import ReactDom from 'react-dom';

import ChronicleHeader from './ChronicleHeader';
import ChronicleFooter from './ChronicleFooter';
import ChronicleBody from './ChronicleBody';

export default class Chronicle extends React.Component {

	render() {

		return (

			<div>
				<ChronicleHeader/>
				<ChronicleFooter/>
				<ChronicleBody />
			</div>

		)
	}
} 
