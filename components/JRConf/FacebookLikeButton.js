import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

export default class FacebookLike extends React.Component {

	render() {

		return (

			<div className="fb-like social-element" 
				 data-href="https://www.facebook.com/vizjust" 
				 data-layout="button_count" data-action="like" data-size="small" 
				 data-show-faces="true" data-share="true"></div>

		)

	}

}