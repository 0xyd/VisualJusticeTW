import React from 'react';
import ReactDom from 'react-dom';

class ChronicleTimeline extends React.Component {


	componentDidMount() {

		var tl = new TL.Timeline('Timeline', './chronicle_data/timeline_special_prosecute.json');

	}

	render() {

		return (

			<div id="Timeline">

			</div>

			)

	}

}

export default class ChronicleBody extends React.Component {

	render() {

		return (

			<div id="TimelinePanel" className="col-md-12">
				<ChronicleTimeline />
			</div>
			)

	}

}
