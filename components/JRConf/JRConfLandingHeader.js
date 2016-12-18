import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

export default class JRConfHeader extends React.Component {

	render() {

		return (
			<header className="landing-page col-md-12">
				<div className="header-title">
					{/*國是會議觀測站<span className="author">By 看見思法</span>*/}
					國是會議觀測站
				</div>
				<div className="header-elements">
					{/*<span className="ver-helper"></span>
					<a href="https://www.facebook.com/vizjust/">
					<img src="./src/fb-observe-fb_2x.png" />
					</a>*/}
					<a className="link" href="https://www.facebook.com/vizjust/">Facebook</a>
				</div>
			</header>

		)

	}

}