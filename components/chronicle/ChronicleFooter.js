import React from 'react';
import ReactDom from 'react-dom';

import FacebookLike from '../common/FacebookLikeButton';
import GithubStar from '../common/Github';

export default class ChronicleFooter extends React.Component {

	render() {

		return (
			<footer className="col-md-12">
				<span className="ver-helper"></span>
				<FacebookLike />
				<GithubStar />
				<span>By 看見思法團隊</span>
				<span>License: CC0</span>
				<span><a src="https://docs.google.com/spreadsheets/d/1dcZJKLTIjAKgAQrvYPQ7w49WMITzzEsv2lGD5Xjls1A/edit?usp=sharing">資料在這裡</a></span>
			</footer>
			)

	}

}

