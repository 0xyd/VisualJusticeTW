import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

class GitHubRiddon extends React.Component {

	render(type) {

		let src = "",
			dataSrc = "";

		if (type == 'red') { 

			src = "https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67";
			dataSrc = "https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png";
		}

		return (

			<div id="GitHubRibbon">
				<a href="https://github.com/yudazilian/VisualJusticeTW">
					<img src={src} alt="Fork me on GitHub" data-canonical-src={dataSrc} />
				</a>
			</div>

		)
	}

}


class RedRibbon extends GitHubRiddon {

	render() {

		return super.render('red');

	}

}

export { RedRibbon }