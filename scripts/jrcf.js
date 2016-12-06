// Y.D. 20161201: Try to modulize the code.
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import JRConf from '../components/JRConf/JRConf';

window.onload = () => {
	ReactDOM.render(<JRConf />, document.getElementById('volume'))
}
