import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import $ from 'jquery';
import FlipClock from 'flipclock/compiled/flipClock';


function calTimeDiff(endDate) {

	let startDate = Date.now(),
		dayUnit = 3600 * 24 * 1000,
		dayDiff = endDate - startDate;

	// Y.D. 20161217: Time delay with different scale.
	// If the day diifereces is greater than 100, return day count.
	if ( Math.ceil(dayDiff / dayUnit) > 100) 
		return { unit: "day", value: Math.ceil(dayDiff / dayUnit) }
	else
		return { unit: "sec", value: dayDiff / 1000 }

}

// Y.D. 20161217: Countdown timer function
function countDown(clock, timerType) {

	if (timerType == 'day')
		setTimeout(function() {setTimeInterval(() => { clock.increment(); }, 24*3600*1000)});
	else 
		setTimeout(function() {setTimeInterval(() => { clock.increment(); }, 1000)});

}

// Y.D. 20170107: Time has stopped.
// Timer for advice deadline 
class AdviceTimer extends React.Component {

	componentDidMount() {

		let Clock = $('#AdviceTimer').FlipClock(

			0,
			{
				autoStart: false
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

		let endDate = new Date(2017, 1, 31),
			timeTypeAndDiff = calTimeDiff(endDate);

		let Clock = $('#IssueTimer').FlipClock(

			timeTypeAndDiff.value,

			{
				countdown: true,
				clockFace: timeTypeAndDiff.unit == 'day' ? 'Counter' : 'DailyCounter' 
			});

		countDown(Clock, timeTypeAndDiff.unit);

	}


	render() {

		return (

			<div id="IssueTimer"></div>

		)

	}

}

// Y.D. 20161217: Become day count down after 2017/2/1 
class GroupTimer extends React.Component {

	componentDidMount() {

		let endDate = new Date(2017, 1, 31),
			timeTypeAndDiff = calTimeDiff(endDate);

		let Clock = $('#GroupTimer').FlipClock(

			// Force transform the data 
			Math.ceil(timeTypeAndDiff.value / (24*3600)),

			{
				countdown: true,
				clockFace: 'Counter'
			});


		
		// 20161217 Y.D. Switch to Regular when time has come.
		countDown(Clock, 'day');
		// countDown(Clock, timeTypeAndDiff); // Regular

	}	

	render() {

		return (
			<div id="GroupTimer"></div>

		)

	}

}

// Timer for the final conference
class FinalTimer extends React.Component {

	componentDidMount() {

		let endDate = new Date(2017, 5, 1),
			timeTypeAndDiff = calTimeDiff(endDate);

		let Clock = $('#FinalTimer').FlipClock(

			timeTypeAndDiff.value,

			{
				countdown: true,
				clockFace: timeTypeAndDiff.unit == 'day' ? 'Counter' : 'DailyCounter' 
			});

		countDown(Clock, timeTypeAndDiff.unit);

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
				<div className="timer-img-wrapper">
					<span className="ver-helper"></span>
					<img className="timer-image" 
						 src={ this.props.bgType == "bg-red" ? "./src/countdown-timer-red.png" : "./src/countdown-timer-white.png" } />
				</div>
				{ this.props.type == 'advice' ? <AdviceTimer /> : null }
				{ this.props.type == 'issue' ? <IssueTimer /> : null }
				{ this.props.type == 'group' ? <GroupTimer /> : null  }
				{ this.props.type == 'final' ? <FinalTimer /> : null }
			</div>
		)


	}


}




