/* ***** Import Libraries ***** */
const Re = Redux,
	  RR = ReactRouter,
	  RRd = ReactRedux;

/* ***** Elements for the Index Page ***** */
var IndexNavList = React.createClass({

	getInitialState: function() {

		return {
			nav: [
				<RR.Link to='/about_us'><img src="./src/aboutus.png" /></RR.Link>,
				<RR.Link to='/main'><img src="./src/see.png" /></RR.Link>,
				<RR.Link to='/special'><img src="./src/issue.png" /></RR.Link>,
				<RR.Link to='/work_together'><img src="./src/work.png" /></RR.Link>
			]
		}
	},

	render: function() {

		var listItems = [],
			l = this.state.nav.length;

		for ( var i=0; i<l; i++ ) 
			listItems.push(
				<IndexNavListItem 
					key={i}
					link={this.state.nav[i]} />
				);

		return (
			<nav id="NAV" className="b12-col-md-12 b15-row-md-9">
				<ul className="b12-col-md-12 b15-row-md-15">
					{ listItems }
				</ul>
			</nav>
		)

	}
});

var IndexNavListItem = React.createClass({

	render: function() {
		return (
			<li className="nav-option b12-col-md-12 b12-row-md-2">
				{ this.props.link }
			</li>
		)
	}
});

/*  */
var Themes = React.createClass({

	render: function() {

		return (
			<div id="" className="b12-col-md-3 b12-row-md-12 sect-part sect-part--box bd-right ">
				<div className="b12-col-md-12 b12-row-md-8 sect-part-imgwrapper">
					<img className="sect-part-img" src={this.props.themeImg} />
				</div>
				<div className="b12-col-md-12 b12-row-md-1 sect-part-btnwrapper">
					<span className="ver-helper"></span>
					<div className="sect-part-btn" href="">
						<RR.Link to={this.props.path}>
							<img className="sect-part-btn-img" src={this.props.btnTxt} /> 
						</RR.Link>
					</div>
				</div>
				<div className="b12-col-md-12 b12-row-md-3 sect-part-imgwrapper">
					<span className="ver-helper"></span>
					<div className="imgtxt-wrapper">
						<img className="imgtxt" src={this.props.info} />
					</div>
				</div>
			</div>
		)
	}
});

/* ***** Basic Elements: The elements that are used almost everywhere. ***** */
var Logo = React.createClass({
	render: function() {
		return (
			<div id="LOGO-WRAPPER" className="b12-col-md-12 b15-row-md-5">
				<div id="LOGO" className="b12-col-md-12 b12-row-md-12"></div>
			</div>
		)
	}
});

var Sign = React.createClass({
	render: function() {
		return (
			<div id="SIGN">
				<img src="./src/sign.png" />
			</div>
		)
	}
});

var HomeLink = React.createClass({
	render: function() {
		return (
			<div id="HDR-FOOTER" className="b12-col-md-12 b15-row-md-1">
				<a id="HOME-LINK" href="">vizjust.tw</a>
			</div>
		)
	}
});


/* ***** App are the main components of all web pages  ***** */
var App = React.createClass({

	render: function() {
		return (
			<div id="APP">
				<AppIndexNav />
				<AppIndexMain />
			</div>
		)
	}
});

var AppNav = React.createClass({
	render: function() {
		return (
			<header id="HDR" className="b20-col-md-4 b12-row-md-12 bd-right">
				{this.props.childrenComponents}
			</header>
		)
	}
});


var AppMain = React.createClass({

	render: function() {
		return (
			<section id="BODY" className="b20-col-md-16 b12-row-md-12">
				{ this.props.childrenComponents }
			</section>
		)
	}
});

/* ***** Action Creators ***** */
function setAppNav(components) {
	return {
		type: 'SET_NAV',
		components: components
	}
}

function setAppMain(components) {
	return {
		type: 'SET_MAIN',
		components: components
	}
}

function setThemes() {
	return {
		type: 'SET_THEMES'
	}
}

/* ***** Reducers ***** */
const INITIAL_STATE = Immutable.Map();

function AppReducer(state = INITIAL_STATE, action) {
	
	switch(action.type) {
		case 'SET_NAV':
			return setAppNavIndex(state, action.components)

		case 'SET_MAIN':
			return setAppMainIndex(state, action.components)

		case 'SET_THEMES':
			return setAppMainThemes(state)

		default: 
			return state
	} 
}

function setAppNavIndex(state, components) {
	let navState = Immutable.Map().set('AppNav', components);
	return state.merge(navState)
}

function setAppMainThemes(state) {
	// The 4 major themes on the Index page.
	let themes = [
		{
			style: { 
				zIndex: 1000
			},
			key : 0,
			img : "./src/police.png",
			path: '/police_stat',
			btnTxtImg : "./src/policeStatBtnName.png",
			infoTxtImg: "./src/police-2.png",
		},
		{
			style: {
				zIndex: 900
			},
			key : 1,
			img : "./src/prosecutor.png",
			path: '/prosecute_stat',
			btnTxtImg : "./src/proStatBtnName.png",
			infoTxtImg: "./src/justiceLaw86.png"
		},
		{
			style: {
				zIndex: 800
			},
			key : 2,
			img : "./src/justice.png",
			path: '/judicial_stat',
			btnTxtImg : "./src/justiceStatBtnName.png",
			infoTxtImg: "./src/constitution-80.png"
		},
		{
			style: {
				zIndex: 700
			},
			key : 3,
			img : "./src/correction.png",
			path: '/correction_stat',
			btnTxtImg : "./src/corrStatBtnName.png",
			infoTxtImg: "./src/prison-1.png"
		}
	],
	mainState = Immutable.Map().set(
		'AppMain',
		(() => {
			let themeSections = [];

			for (let theme of themes) {
				themeSections.push(
					<Themes 
						key={theme.key} 
						info={theme.infoTxtImg}
						path={theme.path}
						style={theme.style}
						themeImg={theme.img}
						btnTxt={theme.btnTxtImg} />
						);
					}
					return themeSections
					
				})()
		);
	return state.merge(mainState)
}

/* ***** Mapping the things from container components to prsentational components ***** */
/* Connect the redux's app state to AppNav Component. */
const mapAppNavStateToProps = (state) => {
	
	return {
		childrenComponents: state.get('AppNav')
	}
}
const mapAppNavDispatchToProps = (dispatch) => {
	return {

	}
}

const AppIndexNav = RRd.connect(
	mapAppNavStateToProps,
	mapAppNavDispatchToProps
)(AppNav);


/* Connect the redux's app state to AppMain Component. */
const mapAppMainStateToProps = (state) => {
	console.log(state.get('AppMain'));
	return {
		childrenComponents: state.get('AppMain')
	}
}
const mapAppMainDispatchToProps = (dispatch) => {
	return {

	}
}
const AppIndexMain = RRd.connect(
	mapAppMainStateToProps,
	mapAppMainDispatchToProps
)(AppMain);

/* ***** Store: For handling the states of the App.***** */
let store = Re.createStore(AppReducer);

/*Set up the initial index page for nav side.*/
store.dispatch(setAppNav([
		<Logo key='0'/>,
		<IndexNavList key='1'/>,
		<Sign key='2'/>,
		<HomeLink key='3'/>
]));

store.dispatch(setThemes());


ReactDOM.render(
	<RRd.Provider store={store}>
		<RR.Router history={RR.hashHistory} >
			<RR.Route path='/' component={App} />
		</RR.Router>
	</RRd.Provider>
	, 
	document.getElementById('CONTAINER'))