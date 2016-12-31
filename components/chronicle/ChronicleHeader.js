import React from 'react';
import ReactDom from 'react-dom';

import { RedRibbon } from '../common/githubRibbon';

export default class ChronicleHeader extends React.Component {

	render() {

		return (
			<header className="col-md-12">
				<div>
					<img id="Logo" src="./src/chronicle.png"/>
					<RedRibbon />
				</div>

			</header>
			)

	}

}

