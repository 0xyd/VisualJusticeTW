import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

export default class FacebookSocialPage extends React.Component {

	render() {

		return (

			<div id="facebook-social-page-container">
				<div className="fb-page" 
					 data-href="https://www.facebook.com/vizjust" 
					 data-tabs="timeline" 
					 data-small-header="false" 
					 data-adapt-container-width="true" 
					 data-hide-cover="false" 
					 data-show-facepile="true">
					 <blockquote 
					 cite="https://www.facebook.com/vizjust" 
					 className="fb-xfbml-parse-ignore">
					 	<a href="https://www.facebook.com/vizjust">看見思法</a>
					 </blockquote>
				</div>
			</div>

		)

	}

}