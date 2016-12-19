import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import JRConfHeader from './JRConfLandingHeader';
import JRConfFooter from './JRConfFooter';
import Timer from './JRConfTimer';
import { RedRibbon } from './githubRibbon';
import FacebookLikeButton from './FacebookLikeButton';
import GithubButton from './Github';


class JRConfNextSlideBtn extends React.Component {


	render() {

		let imgSrc = null,
			bgType = this.props.bgType;

		if (bgType == 'bg-white') {
			imgSrc = './src/next-white.png';
		} else if (bgType == 'bg-grey') {
			imgSrc = './src/next-grey.png';
		} else if (bgType == 'bg-red') {
			imgSrc = './src/next-red.png';
		}

		return (

			<div className="next-row">
				<img src={ imgSrc } />
			</div>

		)

	}
}


class JRConfBtn extends React.Component {

	openWindow(url) {

		window.open(url);
	}


	render() {

		let bgType = this.props.bgType,
			btnType, btnHref = [ null, null ],
			arrowBoneClass = "arrow-bone ",
			arrowHeadClass = "arrow-head rotate-clock ",
			arrowHeadCounterClass = "arrow-head rotate-counter-clock ";

		btnType = this.props.type;

		if ( btnType == 'advice' ) {

			btnHref = 'https://justice.president.gov.tw/opinions/';
			

		} else if ( btnType == 'issue' ) {

			btnHref = 'https://justice.president.gov.tw/issues/';
			
		} 


		// Y.D. 20161218: Determine color
		if (bgType == 'bg-white') {
			arrowBoneClass = "arrow-bone bg-red";
			arrowHeadClass = "arrow-head rotate-clock bg-red",
			arrowHeadCounterClass = "arrow-head rotate-counter-clock bg-red";
		} else if (bgType == 'bg-red') {
			arrowBoneClass = "arrow-bone bg-white";
			arrowHeadClass = "arrow-head rotate-clock bg-white",
			arrowHeadCounterClass = "arrow-head rotate-counter-clock bg-white";
		
		}

		return (
			<a className="btn" onClick={ this.openWindow.bind(null, btnHref) } >
			{ this.props.context } 
			   <div className="arrow">
			   		<span className={ arrowBoneClass }></span>
					<span className={ arrowHeadCounterClass }></span>
					<span className={ arrowHeadClass }></span>
			   </div>
			</a>
		)

	}

}

class JRConfMsg extends React.Component {

	render() {

		return (
			<a className="btn btn-invalid">即將開始</a>
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

class JRConfHeadSlide extends React.Component {

	render() {

		return (
			<div className="col-md-12 landing-slide bg-light-gray">
				<p className="context">
					1999年，全國司法改革會議召開，許多法律學術界與司法實務界的人
					參與了會議，也訂定未來司法改革的方向，只可惜許多改革的項目至今仍尚未完成。
					17年後，在民主與思想愈加前進的台灣社會，司法改革國是會議再度招開，
					躬逢其盛的看見思法，決定替台灣大眾監督司法改革國是會議的動態。
				</p>
				<div className="head-img-wrapper">
					<img className="head-img" src="./src/vjtw-logo.png" />
				</div>
				<div className="social-row">
					<span className="ver-helper"></span>
					<FacebookLikeButton />
					<GithubButton />
				</div>
				<JRConfNextSlideBtn bgType="bg-grey"/>
			</div>

		)

	}

}

class JRConfTimerSlide extends React.Component {

	render() {

		let timerType = this.props.clockType;

		let idName, mainTitle, subTitle, context, btnContext, note = [ null, null, null, null, null, null ];

		let classValue = "col-md-12 landing-slide timerblock ";

		if (timerType == 'advice') {

			idName = "AdviceStage";
			subTitle = '現正熱映';
			mainTitle = "全民司改意見徵集";
			context = "司法改革意見徵集將於12月底截止，看見思法鼓勵每一個對司法感到不公或對司法改革理想的人，都去網站留下意見，讓國是會議是人民聲音滿滿的大平台！";
			btnContext = "前往國是會議留言";

		} else if (timerType == 'issue') {

			idName = "IssuesStage";
			subTitle = "同場加映";
			mainTitle = "分組會議  共識凝聚";
			context = "隨著民眾的留言，許多國是會議的議題也因孕而生。現在府方網站有許多議題讓全民參與討論，讓我們把握僅存的時間，用我們的想法轟炸這些議題吧！";
			btnContext = "前往國是會議的議題";

		} else if (timerType == 'group') {

			idName = "GroupStage";
			subTitle = '第二階段';
			mainTitle = "分組會議  共識凝聚";
			context = "府方將邀社會各界代表『共襄盛舉』，討論不同的議題。看見思法將會密切注意每一個議題的發展動況。現階段的國是會議網站上已有發佈的議題，大家可以上網參與各個議題的討論。";

		} else if (timerType == 'final') {

			idName = "FinalStage";
			subTitle = '第三階段';
			mainTitle = "會議最終曲";
			context = "國是會議的結果，此時皆揭曉。"
			note = "備註：總結會議倒數時間僅供參考，詳細日期以府方公佈為主。";

		}


		return (
			<div id={idName} className={ classValue + this.props.bgType }>
				<h2 className="sub-title">{ subTitle }</h2>
				<h1 className="main-title">{ mainTitle }</h1>
				{ timerType ? 
					<Timer bgType={ this.props.bgType } type={ timerType }/> : null } 
				{ note ? <p className="note">{ note }</p> : null }
				<p className="context">&nbsp;&nbsp;&nbsp;&nbsp;{ context }</p>
				{
					timerType != 'final' && timerType != 'group' ? 
						<JRConfBtn type={ timerType } context={ btnContext } bgType={ this.props.bgType }/> : "即將開始"
				}
				<JRConfNextSlideBtn bgType={ this.props.bgType } />
			</div>
		)

	}

}




export default class JRConfLanding extends React.Component {


	// componentWillMount() {

	// 	(function(d, s, id) {
	//   		var js, fjs = d.getElementsByTagName(s)[0];
	//   		if (d.getElementById(id)) return;
	//   		js = d.createElement(s); js.id = id;
	//   		js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=487648844706858";
	//   		fjs.parentNode.insertBefore(js, fjs);
	// 	}(document, 'script', 'facebook-jssdk'));

	// }

	render() {

		return (
			<div className="row">
				<JRConfHeader />
				<RedRibbon />
				<JRConfHeadSlide />
				<JRConfTimerSlide clockType="advice" bgType="bg-white"/>
				<JRConfTimerSlide clockType="issue"  bgType="bg-red"/>
				<JRConfTimerSlide clockType="group"  bgType="bg-white"/>
				<JRConfTimerSlide clockType="final"  bgType="bg-red"/>
				<JRConfFooter />
			</div>
		)

	}

}