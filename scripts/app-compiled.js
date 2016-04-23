'use strict';

/* ***** Import Libraries ***** */
var Re = Redux,
    RR = ReactRouter,
    RRd = ReactRedux;

/* *****  A State for initial rendering ***** */

/* ***** Elements for the Index Page ***** */
// var Index = React.createClass({
// 	render: function() {
// 		return (
// 			<div id="HOME">
// 				<IndexHeader />
// 				<IndexSection />
// 			</div>
// 		)
// 	}
// });

/* Header for the index page. */
// var IndexHeader = React.createClass({

// 	render: function() {
// 		return (
// 			<header id="HDR" className="b20-col-md-4 b12-row-md-12 bd-right">
// 				<div id="LOGO-WRAPPER" className="b12-col-md-12 b15-row-md-5">
// 					<div id="LOGO" className="b12-col-md-12 b12-row-md-12"></div>
// 				</div>
// 				<IndexNavList />
// 				<IndexFoot />
// 				<Sign />
// 			</header>
// 		)
// 	}
// });

var IndexNavList = React.createClass({
	displayName: 'IndexNavList',

	getInitialState: function getInitialState() {

		return {
			nav: [React.createElement(
				RR.Link,
				{ to: '/about_us' },
				React.createElement('img', { src: './src/aboutus.png' })
			), React.createElement(
				RR.Link,
				{ to: '/main' },
				React.createElement('img', { src: './src/see.png' })
			), React.createElement(
				RR.Link,
				{ to: '/special' },
				React.createElement('img', { src: './src/issue.png' })
			), React.createElement(
				RR.Link,
				{ to: '/work_together' },
				React.createElement('img', { src: './src/work.png' })
			)]
		};
	},

	render: function render() {

		var listItems = [],
		    l = this.state.nav.length;

		for (var i = 0; i < l; i++) {
			listItems.push(React.createElement(IndexNavListItem, {
				key: i,
				link: this.state.nav[i] }));
		}return React.createElement(
			'nav',
			{ id: 'NAV', className: 'b12-col-md-12 b15-row-md-9' },
			React.createElement(
				'ul',
				{ className: 'b12-col-md-12 b15-row-md-15' },
				listItems
			)
		);
	}
});

var IndexNavListItem = React.createClass({
	displayName: 'IndexNavListItem',

	render: function render() {
		return React.createElement(
			'li',
			{ className: 'nav-option b12-col-md-12 b12-row-md-2' },
			this.props.link
		);
	}
});

// var IndexFoot = React.createClass({

// 	render: function() {
// 		return (
// 			<div id="HDR-FOOTER" className="b12-col-md-12 b15-row-md-1">
// 				<a id="HOME-LINK" href="">vizjust.tw</a>
// 			</div>
// 		)

// 	}
// });

// var IndexSection = React.createClass({

// getInitialState: function() {

// 	return {
// 		divs: [
// 			{
// 				style: {
// 					zIndex: 1000
// 				},
// 				img: "./src/police.png",
// 				path: '/police_stat',
// 				btnTxtImg: "./src/policeStatBtnName.png",
// 				infoTxtImg: "./src/police-2.png"

// 			},
// 			{
// 				style: {
// 					zIndex: 900
// 				},
// 				img: "./src/prosecutor.png",
// 				path: '/prosecute_stat',
// 				btnTxtImg: "./src/proStatBtnName.png",
// 				infoTxtImg: "./src/justiceLaw86.png"

// 			},
// 			{
// 				style: {
// 					zIndex: 800
// 				},
// 				img: "./src/justice.png",
// 				path: '/judicial_stat',
// 				btnTxtImg: "./src/justiceStatBtnName.png",
// 				infoTxtImg: "./src/constitution-80.png"

// 			},
// 			{
// 				style: {
// 					zIndex: 700
// 				},
// 				img: "./src/correction.png",
// 				path: '/correction_stat',
// 				btnTxtImg: "./src/corrStatBtnName.png",
// 				infoTxtImg: "./src/prison-1.png"

// 			}
// 		]
// 	}

// },

// render: function() {

// let divs = [],
// 	key = 0;

// for (let div of this.state.divs) {
// 	divs.push(
// 		<IndexSection
// 			key={++key}
// 			info={div.infoTxtImg}
// 			path={div.path}
// 			style={div.style}
// 			themeImg={div.img}
// 			btnTxt={div.btnTxtImg}
// 		/>);
// }
// ref-working-spot-4
// return (
// 	<section id="BODY" className="b20-col-md-16 b12-row-md-12">
// 		{ divs }
// 	</section>
// )
// 	}
// });

var IndexSection = React.createClass({
	displayName: 'IndexSection',

	render: function render() {

		return React.createElement(
			'div',
			{ id: '', className: 'b12-col-md-3 b12-row-md-12 sect-part sect-part--box bd-right ' },
			React.createElement(
				'div',
				{ className: 'b12-col-md-12 b12-row-md-8 sect-part-imgwrapper' },
				React.createElement('img', { className: 'sect-part-img', src: this.props.themeImg })
			),
			React.createElement(
				'div',
				{ className: 'b12-col-md-12 b12-row-md-1 sect-part-btnwrapper' },
				React.createElement('span', { className: 'ver-helper' }),
				React.createElement(
					'div',
					{ className: 'sect-part-btn', href: '' },
					React.createElement(
						RR.Link,
						{ to: this.props.path },
						React.createElement('img', { className: 'sect-part-btn-img', src: this.props.btnTxt })
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'b12-col-md-12 b12-row-md-3 sect-part-imgwrapper' },
				React.createElement('span', { className: 'ver-helper' }),
				React.createElement(
					'div',
					{ className: 'imgtxt-wrapper' },
					React.createElement('img', { className: 'imgtxt', src: this.props.info })
				)
			)
		);
	}
});

/* ***** Basic Elements: The elements that are used almost everywhere. ***** */
var Logo = React.createClass({
	displayName: 'Logo',

	render: function render() {
		return React.createElement(
			'div',
			{ id: 'LOGO-WRAPPER', className: 'b12-col-md-12 b15-row-md-5' },
			React.createElement('div', { id: 'LOGO', className: 'b12-col-md-12 b12-row-md-12' })
		);
	}
});

var Sign = React.createClass({
	displayName: 'Sign',

	render: function render() {
		return React.createElement(
			'div',
			{ id: 'SIGN' },
			React.createElement('img', { src: './src/sign.png' })
		);
	}
});

var HomeLink = React.createClass({
	displayName: 'HomeLink',

	render: function render() {
		return React.createElement(
			'div',
			{ id: 'HDR-FOOTER', className: 'b12-col-md-12 b15-row-md-1' },
			React.createElement(
				'a',
				{ id: 'HOME-LINK', href: '' },
				'vizjust.tw'
			)
		);
	}
});

/* ***** App are the main components of all web pages  ***** */
var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			{ id: 'APP' },
			React.createElement(AppIndexNav, null),
			React.createElement(AppIndexMain, null)
		);
	}
});

var AppNav = React.createClass({
	displayName: 'AppNav',

	render: function render() {
		return React.createElement(
			'header',
			{ id: 'HDR', className: 'b20-col-md-4 b12-row-md-12 bd-right' },
			this.props.childrenComponents
		);
	}
});

var AppMain = React.createClass({
	displayName: 'AppMain',

	// working-spot-4
	// getInitialState: function() {

	// 	return {
	// 		divs: [
	// 			{
	// 				style: {
	// 					zIndex: 1000
	// 				},
	// 				img: "./src/police.png",
	// 				path: '/police_stat',
	// 				btnTxtImg: "./src/policeStatBtnName.png",
	// 				infoTxtImg: "./src/police-2.png"

	// 			},
	// 			{
	// 				style: {
	// 					zIndex: 900
	// 				},
	// 				img: "./src/prosecutor.png",
	// 				path: '/prosecute_stat',
	// 				btnTxtImg: "./src/proStatBtnName.png",
	// 				infoTxtImg: "./src/justiceLaw86.png"

	// 			},
	// 			{
	// 				style: {
	// 					zIndex: 800
	// 				},
	// 				img: "./src/justice.png",
	// 				path: '/judicial_stat',
	// 				btnTxtImg: "./src/justiceStatBtnName.png",
	// 				infoTxtImg: "./src/constitution-80.png"

	// 			},
	// 			{
	// 				style: {
	// 					zIndex: 700
	// 				},
	// 				img: "./src/correction.png",
	// 				path: '/correction_stat',
	// 				btnTxtImg: "./src/corrStatBtnName.png",
	// 				infoTxtImg: "./src/prison-1.png"

	// 			}
	// 		]
	// 	}
	// },

	render: function render() {
		// ref-working-spot-4
		// let divs = [],
		// 	key = 0;

		// for (let div of this.state.divs) {
		// 	divs.push(
		// 		<IndexSection
		// 			key={++key}
		// 			info={div.infoTxtImg}
		// 			path={div.path}
		// 			style={div.style}
		// 			themeImg={div.img}
		// 			btnTxt={div.btnTxtImg}
		// 		/>);
		// }
		/*return (
  	<section id="BODY" className="b20-col-md-16 b12-row-md-12">
  		{ divs }
  	</section>
  )*/
		return React.createElement(
			'section',
			{ id: 'BODY', className: 'b20-col-md-16 b12-row-md-12' },
			this.props.childrenComponents
		);
	}
});

/* ***** Action Creators ***** */
function setAppNav(components) {
	return {
		type: 'SET_NAV',
		components: components
	};
}

function setAppMain(components) {
	return {
		type: 'SET_MAIN',
		components: components
	};
}

function setThemes() {
	return {
		type: 'SET_THEMES'
	};
}

var INITIAL_STATE = Immutable.Map();

/* ***** Reducers ***** */
function AppReducer() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'SET_NAV':
			return setAppNavIndex(state, action.components);

		case 'SET_MAIN':
			return setAppMainIndex(state, action.components);

		case 'SET_THEMES':
			return setAppMainThemes(state);

		default:
			return state;
	}
}

function setAppNavIndex(state, components) {
	var navState = Immutable.Map().set('AppNav', components);
	return state.merge(navState);
}

function setAppMainThemes(state) {
	// The 4 major themes on the Index page.
	var themes = [{
		style: {
			zIndex: 1000
		},
		key: 0,
		img: "./src/police.png",
		path: '/police_stat',
		btnTxtImg: "./src/policeStatBtnName.png",
		infoTxtImg: "./src/police-2.png"
	}, {
		style: {
			zIndex: 900
		},
		key: 1,
		img: "./src/prosecutor.png",
		path: '/prosecute_stat',
		btnTxtImg: "./src/proStatBtnName.png",
		infoTxtImg: "./src/justiceLaw86.png"
	}, {
		style: {
			zIndex: 800
		},
		key: 2,
		img: "./src/justice.png",
		path: '/judicial_stat',
		btnTxtImg: "./src/justiceStatBtnName.png",
		infoTxtImg: "./src/constitution-80.png"
	}, {
		style: {
			zIndex: 700
		},
		key: 3,
		img: "./src/correction.png",
		path: '/correction_stat',
		btnTxtImg: "./src/corrStatBtnName.png",
		infoTxtImg: "./src/prison-1.png"
	}],
	    mainState = Immutable.Map().set('AppMain', function () {
		var themeSections = [];

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = themes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var theme = _step.value;

				themeSections.push(React.createElement(IndexSection, {
					key: theme.key,
					info: theme.infoTxtImg,
					path: theme.path,
					style: theme.style,
					themeImg: theme.img,
					btnTxt: theme.btnTxtImg }));
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return themeSections;
	}());
	return state.merge(mainState);
}

/* ***** Mapping the things from container components to prsentational components ***** */
/* Connect the redux's app state to AppNav Component. */
var mapAppNavStateToProps = function mapAppNavStateToProps(state) {

	return {
		childrenComponents: state.get('AppNav')
	};
};
var mapAppNavDispatchToProps = function mapAppNavDispatchToProps(dispatch) {
	return {};
};

var AppIndexNav = RRd.connect(mapAppNavStateToProps, mapAppNavDispatchToProps)(AppNav);

// working-spot-4
/* Connect the redux's app state to AppMain Component. */
var mapAppMainStateToProps = function mapAppMainStateToProps(state) {
	console.log(state.get('AppMain'));
	return {
		childrenComponents: state.get('AppMain')
	};
};
var mapAppMainDispatchToProps = function mapAppMainDispatchToProps(dispatch) {
	return {};
};
var AppIndexMain = RRd.connect(mapAppMainStateToProps, mapAppMainDispatchToProps)(AppMain);

/* ***** Store: For handling the states of the App.***** */
var store = Re.createStore(AppReducer);

/*Set up the initial index page for nav side.*/
store.dispatch(setAppNav([React.createElement(Logo, { key: '0' }), React.createElement(IndexNavList, { key: '1' }), React.createElement(Sign, { key: '2' }), React.createElement(HomeLink, { key: '3' })]));

store.dispatch(setThemes());

ReactDOM.render(React.createElement(
	RRd.Provider,
	{ store: store },
	React.createElement(
		RR.Router,
		{ history: RR.hashHistory },
		React.createElement(RR.Route, { path: '/', component: App })
	)
), document.getElementById('CONTAINER'));
