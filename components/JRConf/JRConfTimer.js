import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import $ from 'jquery';
import FlipClock from 'flipclock/compiled/flipClock';


function calTimeDiff(endDate) {

	let startDate = Date.now();

	return (endDate - startDate) / 1000

}

// Timer for advice deadline
class AdviceTimer extends React.Component {

	componentDidMount() {

		let endDate = new Date(2016, 11, 31);

		let Clock = $('#AdviceTimer').FlipClock(

			calTimeDiff(endDate),

			{
				countdown: true,
				clockFace: 'DailyCounter'
			});

	}	

	render() {

		return (
			<div id="AdviceTimer"></div>

		)

	}

}

// Timer for group discussing
class IssueTimer extends React.Component {

	componentDidMount() {


		let endDate = new Date(2017, 2, 1);

		let Clock = $('#IssueTimer').FlipClock(

			calTimeDiff(endDate),

			{
				countdown: true,
				clockFace: 'DailyCounter'
			});

	}


	render() {

		return (

			<div id="IssueTimer"></div>

		)

	}

}

// Timer for the final conference
class FinalTimer extends React.Component {

	componentDidMount() {

		let endDate = new Date(2017, 5, 1);

		let Clock = $('#FinalTimer').FlipClock(

			calTimeDiff(endDate),

			{
				countdown: true,
				clockFace: 'DailyCounter'
			});

	}	

	render() {

		return (
			<div id="FinalTimer"></div>

		)

	}

}

export default class Timer extends React.Component {


	render() {

		return (
			<div className="time">
				{ this.props.type == 'advice' ? <AdviceTimer /> : null }
				{ this.props.type == 'issue' ? <IssueTimer /> : null }
				{ this.props.type == 'final' ? <FinalTimer /> : null }
			</div>
		)


	}


}




