import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

export default class FacebookSocialPage extends React.Component {

	render() {

		let styleVal = {

			border: "none",
			overflow: "hidden"
		};

		return (

			<iframe 
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvizjust&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1750136755257522" 
				width="340" height="500" 
				style={ styleVal }
				scrolling="no" frameborder="0" allowTransparency="true">
			</iframe>

		)

	}

}