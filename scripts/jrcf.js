// Y.D. 20161201: Try to modulize the code.
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import JRConf from '../components/JRConf/JRConfCommitee';
import JRConfLanding from '../components/JRConf/JRConfLanding';

// Y.D. 20161218: 
// window.onload = () => {
// 	ReactDOM.render(<JRConf />, document.getElementById('volume'))
// }

window.onload = () => {
	ReactDOM.render(
		<JRConfLanding />, 
		document.getElementById('volume'));
}



