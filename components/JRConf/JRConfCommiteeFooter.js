import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';


export default class JRConfFooter extends React.Component {

	render() {

		let facebookLikeStyle = {
			border: 'none',
			overflow: 'hidden'
		};

		return (
			<footer className="row">
				<span className="ver-helper"></span>
				<iframe 
					src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fvizjust%2F&width=117&layout=button_count&action=like&size=standard&show_faces=true&share=true&height=46&appId=487648844706858" 
					width="150" height="20" style={ facebookLikeStyle } 
					scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
				<a className="github-button" 
				   href="https://github.com/yudazilian/VisualJusticeTW" 
				   data-icon="octicon-star" data-style="mega" 
				   data-count-href="/yudazilian/VisualJusticeTW/stargazers" 
				   data-count-api="/repos/yudazilian/VisualJusticeTW#stargazers_count" 
				   data-count-aria-label="# stargazers on GitHub" 
				   aria-label="Star yudazilian/VisualJusticeTW on GitHub">Star</a>
				<span className="signature">
					Credit BY: &nbsp;&nbsp;&nbsp;
					<a href="https://www.facebook.com/yude.lin.754">Y.D. Lin</a>, &nbsp;&nbsp;&nbsp;
					<a href="https://www.facebook.com/profile.php?id=100000497148567&fref=ts">陳乃瑜</a> & 成員們 @
					<a href="http://vizjust.tw">看見思法</a></span>
			</footer>
		)
	}

}