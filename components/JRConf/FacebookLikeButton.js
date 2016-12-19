import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

export default class FacebookLike extends React.Component {

	render() {

		let styleValue = {

			border: "none",
			overflow: "hidden"
		};

		return (
			<iframe 
			src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fvizjust&width=117&layout=button_count&action=like&size=small&show_faces=true&share=true&height=46&appId=1750136755257522" 
			width="150" height="20" 
			style={ styleValue } 
			scrolling="no" frameBorder="0" allowTransparency="true">
			</iframe>

		)

	}

}