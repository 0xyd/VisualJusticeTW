import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import Disqus from './Disqus';
import FacebookSocialPage from './FacebookSocialPage';

export default class JRConfFooter extends React.Component {

	render() {

		return (

			<footer className="col-md-12 landing-footer">
				<div className="col-md-8">
					<Disqus />
				</div>
				<div className="col-md-4">
					<FacebookSocialPage />
				</div>
				<div className="col-md-12 credit-signature">
					<span className="ver-helper"></span>
					<span className="authors"> &nbsp; Developer: Y.D. Lin </span>
					<span className="authors"> &nbsp; Designer: CT. Tang</span>
					<span className="authors"> &nbsp; Credit: 看見思法</span>
					<span className="authors"> &nbsp; License: MIT</span>
				</div>
			</footer>

			)

	}


} 