import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import Timer from './JRConfTimer';


class JRConfBtn extends React.Component {

	render() {

		let btnType, btnHref = [ this.props.type, null ];

		if ( btnType == 'advice' ) {

			btnHref = 'https://justice.president.gov.tw/opinions/';

		} else if ( btnType == 'issue' ) {

			btnHref = 'https://justice.president.gov.tw/issues/';
		} 

		return (
			<a href={ btnHref }>{ this.props.context }</a>
		)

	}

}


class JRConfCommiteeSlide extends React.Component {

	render() {

		return (
			<div className="row">
				<h2></h2>
			</div>
		)

	}

}

class JRConfTimerSlide extends React.Component {

	render() {

		let timerType = this.props.clockType;

		let mainTitle, subTitle, context, btnContext, note = [ null, null, null, null, null ];


		if (timerType == 'advice') {

			subTitle = '第一階段';
			mainTitle = "全民司改意見徵集";
			context = "司法改革意見徵集將於12月底截止，看見思法鼓勵每一個曾有司法的不平遭遇者、對司法改革有所理想的人，都上去留下意見，讓國是會議最終淪為一個專家與學者的論壇！";
			btnContext = "前往國是會議留言";


		} else if (timerType == 'issue') {

			subTitle = '第二階段';
			mainTitle = "分組會議  共識凝聚";
			context = "府方將邀社會各界代表『共襄盛舉』，討論不同的議題。看見思法將會密切注意每一個議題的發展動況。現階段的國是會議網站上已有發佈的議題，大家可以上網參與各個議題的討論。";
			btnContext = "前往國是會議的議題";

		} else if (timerType == 'final') {

			subTitle = '第三階段';
			mainTitle = "會議最終曲";
			context = "府方將邀社會各界代表『共襄盛舉』，討論不同的議題。看見思法將會密切注意每一個議題的發展動況。現階段的國是會議網站上已有發佈的議題，大家可以上網參與各個議題的討論。";
			note = "備註：總結會議倒數時間請參考，詳細日期以府方公佈為主。";
		}


		return (
			<div className="row timerblock">
				<h2 className="sub-title">{ subTitle }</h2>
				<h1 className="main-title">{ mainTitle }</h1>
				{ timerType ? 
					<Timer type={ timerType }/> : null }
				{ note ? <p>{ note }</p> : null }
				<p>{ context }</p>
				{
					timerType != 'final' ? <JRConfBtn type={ timerType } context={ btnContext }/> : null
				}
			</div>
		)

	}

}




export default class JRConfLanding extends React.Component {

	render() {

		return (
			<div>
				<JRConfTimerSlide clockType="advice"/>
				<JRConfTimerSlide clockType="issue"/>
				<JRConfTimerSlide clockType="final"/>
			</div>
		)

	}

}