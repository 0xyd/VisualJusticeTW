import React from 'react';
import ReactDom from 'react-dom';

import Chronicle from '../components/chronicle/Chronicle';


window.onload = function() {

	ReactDom.render(<Chronicle />, document.getElementById('react-root'));

}