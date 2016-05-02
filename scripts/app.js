/* ***** Import Libraries ***** */
const Re = Redux,
	  RR = ReactRouter,
	  RRd = ReactRedux;

/* ***** The Immutables ***** */
const Map  = Immutable.Map,
			List = Immutable.List;

/* ***** Global Variables ***** */
window.isLocal = 
	document.URL.match(/127.0.0.1/)[0] === '127.0.0.1' ? true : false;

// To access the remove csv sources.
window.query = '&tqx=out:csv';
window.googleSheet = 'https://spreadsheets.google.com/tq?';

// States for different topic
const DataFilterStateTree = {
	state:
		Map()
			.set('correction',	
				List([
					{
						dataset: '監獄人數概況',
						availableChartTypes: [
							'長條圖',
							'趨勢',
							'面積圖'
						],
						content: {
							data: [
								{
									name: '本年執行人數',
									topics: [
										['總數'],
										['減刑']
									]
									
								},
								{
									name: '本年入監人數',
									topics: [
										['總數', '入監原因分類'],
										['減刑']
									]
									
								},
								{
									name: '新入監人數',
									topics: [
										['總數', '犯次分類'],
										['減刑']
									]
								},
								{
									name: '本年出獄人數',
									topics: [
										['總數', '出獄原因分類'],
										['減刑']
									]
								},
								{
									name: '本年年底留監人數',
									topics: [
										['總數'],
										['減刑']
									]
								}
							]
						}
					},
					{
						dataset: '新入監資料概覽',
						availableChartTypes: [
										'圓環比例圖'
						],
						content: {
							data: [
								{
									name: '民國75年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]
								},
								{
									name: '民國76年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]
								},
								{
									name: '民國77年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]
								},
								{
									name: '民國78年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]
								},
								{
									name: '民國79年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]
								},
								{
									name: '民國80年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]

								},
								{
									name: '民國81年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]
								},
								{
									name: '民國82年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]
								},
								{
									name: '民國83年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]
								},
								{
									name: '民國84年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										['總數']
									]
								},
								{
									name: '85',
								},
								{
									name: '86',
								},
								{
									name: '87',
								},
								{
									name: '88',
								},
								{
									name: '89',
								},
								{
									name: '90',
								},
								{
									name: '91',
								},
								{
									name: '92',
								},
								{
									name: '93',
								},
								{
									name: '94',
								},
								{
									name: '95',
								},
								{
									name: '96',
								}
							]
						}
					}	
				]	
			)
		),

	selectState: function(key) {
		return this.state.get(key)
	},

	// Find the index of the specific dataset
	findDatasetIndex: function(key, datasetName) {

		const state = this.selectState(key);

		// Transform the List to js array
		let list = state.toArray();

		return list.findIndex((d) => {
			return d.dataset === datasetName
		})
	},

	// Find the index of the data in the chosen dataset.
	findDataIndex: function(key, datasetName, dataName) {

		const state = this.selectState(key);

		let index = this.findDatasetIndex(key, datasetName),
				dataList = state.get(index).content.data;

		return dataList.findIndex((data)=>{
			return data.name === dataName
		})
	},

	// Find the index of the chart type in the chosen dataset.
	findChartTypeIndex: function(key, datasetName, chartName) {

		const state = this.selectState(key);

		let index = this.findDatasetIndex(key, datasetName),
				chartList = state.get(index).availableChartTypes;

		return chartList.findIndex((chart)=>{
			return chart === chartName
		})
	},

	// List the dataset
	listDataset: function(key) {

		const state = this.selectState(key);

		let datasets = [];

		for (let i = 0; i < state.size; ++i) {
			datasets.push(state.get(i).dataset);
		}

		return datasets
	}, 

	// List the available data
	listData: function(key, datasetIdx) {

		const state = this.selectState(key);

		let datas = 
			state.get(datasetIdx)
				.content.data.map((d) => {
					return d.name
				});
		
		return datas
	},

	listCharttype: function(key, datasetIdx) {

		const state = this.selectState(key);

		let charttypes = 
			state.get(datasetIdx).availableChartTypes;

		return charttypes

	},

	listTopic: function(key, datasetIdx, dataIdx, chartIndex) {

		const state = this.selectState(key);
		
		let topics =
			state.get(datasetIdx)
				.content.data[dataIdx].topics[chartIndex];

			return topics

	}
}




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

/* Major Themes are displaying on the index page. */
var Theme = React.createClass({

	render: function() {

		return (
			<div id="" className="b12-col-md-3 b12-row-md-12 sect-part sect-part--box bd-right ">
				<div className="b12-col-md-12 b12-row-md-8 sect-part-imgwrapper">
					<img className="sect-part-img" src={this.props.themeImg} />
				</div>
				<div className="b12-col-md-12 b12-row-md-1 sect-part-btnwrapper">
					<span className="ver-helper"></span>
					<ThemeButton path={this.props.path} btnTxtSrc={this.props.btnTxt}/>
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

var ThemeBtn = React.createClass({

	render: function() {

		return (
			<div className="sect-part-btn"  >
				<RR.Link to={this.props.path} onClick={ this.props.selectTheme } >
					<img className="sect-part-btn-img" src={this.props.btnTxtSrc}/> 
				</RR.Link>
			</div>
		)
	}
});

/* ***** DataBoard components: The components render the visualized data  ***** */
const DataBoard = React.createClass({

	/* Customized Methods */
	// Graph unit for drawing.
	gpu: (() => {
		return {
			barGraph  : new barGraphClass(),
			lineGraph : new lineGraphClass(),
			ringGraph : new ringGraphClass()
		}
	})(),

	tip: new tipClass(),

	// working-spot-5: Find the index of datasheet.
	findDataSheetIndex(props) {
		let dSheet = this.state.dataSheets
			.find((dataSheet) => {
				return dataSheet.name === props.dataset
			});
		return dSheet
	},


	// Visualizing data with bar chart
	vizDataWithBarChart(props, dataSheet, update = false) {

		let bG = this.gpu.barGraph,
				// lG = this.gpu.lineGraph,
				t  = this.tip;

		if (update) {
			bG.update(
				dataSheet.url, 
				dataSheet.axes.xAxis,
				dataSheet.axes.yAxis,
				props.data
				);
		} else {
			
			bG.initializeAPad()
				.setChartSize().setOutPadding(10).setStep(10)
				.drawingData(
					dataSheet.url, 
					dataSheet.axes.xAxis,
					dataSheet.axes.yAxis,
					props.data
				)
				.then(function() {
					t.initTips().appendBarMouseOver(props.data);
				});
		}
	},

	// Visualizing data with bar chart
	vizDataWithLineChart(props, dataSheet, update = false) {

		let lG = this.gpu.lineGraph,
				t = this.tip;

		if (update) {
			lG.update(
				dataSheet.url, 
				dataSheet.axes.xAxis,
				dataSheet.axes.yAxis,
				props.data
			);
		} else {
			lG.initializeAPad()
				.setChartSize().setOutPadding(10).setStep(10)
					.drawingData(
						dataSheet.url, 
						dataSheet.axes.xAxis,
						dataSheet.axes.yAxis,
						props.data
					)
					.then(function() {
						t.initTips().appendDotMouseOver(props.data);
					});
		}
	},

	// Visualizing data with ring chart
	vizDataWithRingChart(props, dataSheet, update = false) {
		let rG = this.gpu.ringGraph;

		if (update) {

			let yr = parseInt(props.data.match(/\d+/));

			rG.selectROCYr(yr)
				.updateRings();

		} else {
			rG.resetRings()
				.initializeAPad()
				.init()
					.selectROCYr(75)
						.drawMultiRings(
							dataSheet.urls);
		}
	},

	/* React Native methods */
	getInitialState() {
		return {
			dataSheets: [
				{
					name: '監獄人數概況',
					url: (function() {
						if (isLocal)
							return '/correction/監獄人數概況.csv'
						else
							return window.googleSheet + 
						  	'1zUyMPJbbW0GZ6KGwD-tCVSSHDlTDECX6s3vPnGJmP28' + 
						  		query
					})(),
					axes: {
						xAxis: '民國',
						yAxis: '人數(仟人)'
					},
				},
				{
					name: '新入監資料概覽',
					keys: [
						'1CvwvOSmEV681gY9GBFdQdGT9IpM3oH9ttfPmVTCshsg',
						'17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg',
						'1qz5R2oAgh-KGjxIPZrXUMrUeeRGnVwkLDWzjnlzoSV8',
						'1IyFpSljBLk6XrP59di75M5Xy7lGd0KqEicraZCHCt-4'
					],
							urls: (function() {

								if (isLocal) 
									return ([
										// working-spot-2
										{
											name: '新入監前家庭狀況',
											url : '/correction/新入監前家庭狀況.csv'
										},
										{
											name: '新入監犯罪次數與種類',
											url : '/correction/新入監犯罪次數與種類.csv'
										},
										{
											name: '新入監前教育程度',
											url : '/correction/新入監前教育程度.csv'
										},
										{
											name: '歷年新入監年齡歷年統計',
											url : '/correction/歷年新入監年齡歷年統計.csv'
										}
									])
								else {
									let urls = [
										{
											name: '新入監前家庭狀況',
											url : 
												window.googleSheet +
													'1CvwvOSmEV681gY9GBFdQdGT9IpM3oH9ttfPmVTCshsg' + 
														window.query
										},
										{
											name: '新入監犯罪次數與種類.',
											url : 
												window.googleSheet +
													'17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg' + 
														window.query
										},
										{
											name: '新入監前教育程度',
											url : 
												window.googleSheet +
													'1qz5R2oAgh-KGjxIPZrXUMrUeeRGnVwkLDWzjnlzoSV8' + 
														window.query
										},
										{
											name: '歷年新入監年齡歷年統計',
											url : 
												window.googleSheet +
													'1IyFpSljBLk6XrP59di75M5Xy7lGd0KqEicraZCHCt-4' + 
														window.query
										}
									];
									return urls
								}
							})()
						}
					] 
				}
	},



	// working-spot-5: Initial Data Visualizing
	componentDidMount() {

		let dataSheet = this.findDataSheetIndex(this.props);
		
		if (this.props.chartType === '長條圖') {
			this.vizDataWithBarChart(this.props, dataSheet);
			
		} else if (this.props.chartType === '趨勢') {
			this.vizDataWithLineChart(this.props, dataSheet);

		} else if (this.props.chartType === '圓環比例圖') {

		}
	},

	// working-spot-5: The DataBoard component will renew the visualized data or change a different type.
	componentWillUpdate (nextProps, nextStates) {
		
		let dataSheet = this.findDataSheetIndex(nextProps);

		if (dataSheet.name === '監獄人數概況') {
			if (nextProps.chartType === '長條圖' && this.props.chartType === '長條圖') {
				this.vizDataWithBarChart(nextProps, dataSheet, true);
			}
			else if (nextProps.chartType === '長條圖' && this.props.chartType !== '長條圖') {
				d3.select('#SKETCHPAD').remove();
				this.vizDataWithBarChart(nextProps, dataSheet);
			}
			// Init the line bar once the user switch with different one.
			else if (nextProps.chartType === '趨勢' && this.props.chartType !== '趨勢') { 
				d3.select('#SKETCHPAD').remove();
				this.vizDataWithLineChart(nextProps, dataSheet);
			}
			// Update the line bar when user switch the data.
			else if (nextProps.chartType === '趨勢' && this.props.chartType === '趨勢') {
				this.vizDataWithLineChart(nextProps, dataSheet, true);
			}
		}

		else if (dataSheet.name === '新入監資料概覽') {
			// Update the 圓環比例圖 (chart's name)
			console.log('should switch to 新入監資料概覽');
			if (nextProps.chartType === '圓環比例圖' && this.props.chartType === '圓環比例圖') {
				this.vizDataWithRingChart(nextProps, dataSheet, true);
			}
			// Initialize the 圓環比例圖 (chart's name)
			else if (nextProps.chartType === '圓環比例圖' && this.props.chartType !== '圓環比例圖') {
				d3.select('#SKETCHPAD').remove();
				this.vizDataWithRingChart(nextProps, dataSheet);
			}
		}
	},

	render() {

		return (
			<div id='DATABOARD_WRAPPER' className='b20-col-md-20'>
				<div id='DATABOARD'></div>
			</div>
		)
	}
});

const Filter = React.createClass({

	generateFilterFields: function() {

		const FilterNames = this.props.filterNames;
		const FilterDropdownMenus = this.props.currentFilterDropdownMenus;
		
		let FilterFields = [],
				FilterDefaultField = [
					this.props.currentDataset,
					this.props.currentData,
					this.props.currentChartType,
					this.props.currentTopic
				];

		for (let i = 0; i < FilterNames.size; i++) {

			FilterFields.push(
				<FilterField key={i} 
										 index={i}
										 filterName={FilterNames.get(i)} 
										 selectedOption={FilterDefaultField[i]}
										 options={FilterDropdownMenus.get(i).get('Options')}/>
				);
		}
		return FilterFields
	},

	render: function() {

		const FilterFields = this.generateFilterFields();

		return (
			<nav id="FILTER_WRAPPER" className="b12-col-md-12 b15-row-md-8 hdr-div">
				<form id="FILTER" className="b15-row-md-15">
					<div id="FILTER-TITLE" className="b15-row-md-1">
						<span className="ver-helper"></span>
					<span style={{verticalAlign: 'middle'}}>資料選擇</span>
					</div>
					<div className="b12-col-md-12 b15-row-md-14">
						{FilterFields}
					</div>
				</form>
			</nav>
		)
	}
});

// FilterField Components make a way for user to select the data or the data expression they want.
const FilterField = React.createClass({

	render: function() {
		return (
			<fieldset className="b12-col-md-12 b12-row-md-3 formblock-fieldset">
				<div className="b12-col-md-12 b12-row-md-12">
					<span className="ver-helper"></span>
					<div className="dropdown-group">
						<legend className="dropdown-title">
							<span>{ this.props.filterName }</span>
						</legend>
						<div className="dropdown">
							<StatFilterDropdownToggle 
								menuIndex={ this.props.index }
								name={ this.props.selectedOption } />
							<StatFilterDropdownMenu 
								menuIndex={ this.props.index }
								options={ this.props.options } />
						</div>
					</div>
				</div>
			</fieldset>
		)
	}
});

const DropdownToggle = React.createClass({

	render: function() {
		return (
			// working-spot-5
			<button className="dropdown-btn" type="button" 
							onClick={ this.props.expandDropdown }>
				<span className="dropdown-txt">{ this.props.name }</span>
				<span className="dropdown-caret"></span>
			</button>
		)
	}
});

const DropdownMenu = React.createClass({

	render: function() {

		let key = 0,
				menuItems = [];
		
		for (let option of this.props.options) 
			menuItems.push(<StatFilterDropdownMenuItem
				key={++key} optionIdx={++key} name={option} menuIndex={this.props.menuIndex}/>)

		return (
			<ul className={this.props.isDisplayed ? 
				'dropdown-menu displayed' : 'dropdown-menu'}>
					{ menuItems }
			</ul>
		)
	}
});

// working-spot-5
const DropdownMenuItem = React.createClass({
	render: function() {
		return (
			// working-spot-5: Click for selecting the option
			<li onClick={ this.props.selectOption }>
				{ this.props.name }
			</li>
		)
	}
});

/* ***** Basic components: The components that are used almost everywhere. ***** */
const Logo = React.createClass({
	render: function() {
		return (
			<div id="LOGO-WRAPPER" className="b12-col-md-12 b15-row-md-5">
				<div id="LOGO" className="b12-col-md-12 b12-row-md-12"></div>
			</div>
		)
	}
});

// Title components for rendering the theme image.
const Title = React.createClass({
	render: function() {
		return (
			<div className="b12-col-md-12 b15-row-md-1 hdr-div">
				<img id="TITLE" src={ this.props.imageSource } />
			</div>
		)
	}
});

const Sign = React.createClass({
	render: function() {
		return (
			<div id="SIGN">
				<img src="./src/sign.png" />
			</div>
		)
	}
});

const HomeLink = React.createClass({
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

	componentWillUpdate() {
		console.log('testing');
	},

	render: function() {
		const { nav, main } = this.props
		console.log(nav);
		console.log(main);
		return (
			<div id="APP">
				{/*<AppNav />
				<AppMain />*/}
				{ nav }
				{ main }
			</div>
		)
	}
});

var Nav = React.createClass({
	render: function() {
		console.log('Nav rendering');
		console.log(this.props.childrenComponents);
		return (
			<header id="HDR" className="b20-col-md-4 b12-row-md-12 bd-right">
				{this.props.childrenComponents}
			</header>
		)
	}
});


var Main = React.createClass({

	render: function() {
		console.log('Main rendering');
		console.log(this.props.childrenComponents);
		return (
			<section id="BODY" className="b20-col-md-16 b12-row-md-12">
				{ this.props.childrenComponents }
			</section>
		)
	}
});

/* ***** Action Creators ***** */
/* "AC" is the postfix for action creators */

function setAppNavAC(components) {
	return {
		type: 'SET_NAV',
		components: components
	}
}

function setAppMainAC(components) {
	return {
		type: 'SET_MAIN',
		components: components
	}
}

function setThemesAC() {
	return {
		type: 'SET_THEMES'
	}
}

function selectThemeAC(name) {
	console.log(name);
	return {
		type: 'SELECT_THEME',
		themeName: name
	}
}

function expandDropdownAC(dropdownIndex) {
	return {
		type: 'EXPAND_DROPDOWN',
		dropdownIndex: dropdownIndex
	}
}

// working-spot-5
function selectDropdownOptionAC(theme, optionName, fieldsetIndex, dIndex) {
	
	return {
		type : 'SELECT_DROPDOWN_OPTION',
		theme: theme,
		fieldsetIndex: fieldsetIndex,
		dataIndex: dIndex,
		option: optionName
	}
}

/* ***** Reducers ***** */
const INITIAL_STATE = Map();



function AppReducer(state = INITIAL_STATE, action) {
	
	switch(action.type) {
		case 'SET_NAV':
			return setAppNavIndex(state, action.components)

		case 'SET_MAIN':
			return setAppMainIndex(state, action.components)

		case 'SET_THEMES':
			return setAppMainThemes(state)

		case 'SELECT_THEME':
			return selectAppTheme(state, action.themeName)

		case 'EXPAND_DROPDOWN':
			return setDropdownMenuStates(state, action.dropdownIndex)

		// working-spot-5
		case 'SELECT_DROPDOWN_OPTION':
			return selectDropdownOption(
				state, 
				action.theme, action.option, action.fieldsetIndex, action.dataIndex)

		default: 
			return state
	} 
}

function setAppNavIndex(state, components) {
	let navState = Map().set('Nav', components);
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
		'Main',
		(() => {
			let themeSections = [];

			for (let theme of themes) {
				themeSections.push(
					<Theme 
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


function selectAppTheme(state, theme) {
	console.log(theme);
	let navComponents  = [
			<Logo key='0'/>, <StatTitle key='1'/>, <StatFilter key='2'/>, <HomeLink key='3'/>],
		mainComponents = [<StatDataBoard key='0' />];

	const navState = Map().set('Nav', navComponents);
	const mainState = Map().set('Main', mainComponents);

	// The name of each filter field.
	const filterNames = 
		setState('filterNames', List(['資料集', '檢索資料','視覺化', '專題']));

	let themeState = null;
	let statTitle = null;
	let defaultDataset = null;
	let defaultData = null;
	let defaultChartType = null;
	let defaultTopic = null;

	switch(theme) {
		case 'POLICE_STAT':
			themeState = setState('theme', 'police');
			return state
		case 'PROSECUTION_STAT':
			themeState = setState('theme', 'prosecution');
			return state
		case 'JUDICIAL_STAT':
			themeState = setState('theme', 'judicial');
			return state
		case 'CORRECTION_STAT':
			
			themeState = setState('theme', 'correction');
			statTitle = setState('statTitleImageSrc', './src/correctStatTitle.png');
			defaultDataset = setState('currentDataset', '監獄人數概況');
			defaultData = setState('currentData', '本年執行人數');
			defaultChartType = setState('currentChartType', '長條圖');
			defaultTopic = setState('currentTopic', '總數');

			// working-spot-5: Applied the below function with states tree
			const defaultFilterDropdownMenus = 
				setState('filterDropdownMenus', List([
					// Options for the dataset
					Map().set(
						'Options', 
						List(DataFilterStateTree.listDataset('correction'))
					).set(
						'isDisplayed',
						false
					),
					// Options for the data
					Map().set(
						'Options', 
						List(DataFilterStateTree.listData('correction', 0))
					).set(
						'isDisplayed',
						false
					),
					// Options for the graph
					Map().set(
						'Options', 
						List(DataFilterStateTree.listCharttype('correction', 0))
					).set(
						'isDisplayed',
						false
					),
					// Options for the topics
					Map().set(
						'Options', 
						List(DataFilterStateTree.listTopic('correction', 0, 0, 0))
					).set(
						'isDisplayed',
						false
					)
				]));

			return state.merge(
				navState, mainState, 
				statTitle, filterNames, themeState,
				defaultDataset, defaultData, defaultChartType,
				defaultTopic, defaultFilterDropdownMenus
				)

		default:
			return state
	}
}

// Expand the dropdown and the rest should all collpased.
function setDropdownMenuStates(state, index) {
	
	// update the states of the current dropdown.
	let newState = state.get('filterDropdownMenus').update(function(Menus) {

		// Renew each of the dropdown state
		for ( let j = 0; j < Menus.size; ++j ) {

			const originMenuOptions = Menus.get(j).get('Options');

			if (j === index) {
				
				Menus = Menus.set(
					index, 
					Map()
						.set('isDisplayed', true)
							.set('Options', originMenuOptions)
					);
			} else {
				Menus = Menus.set(
					j, 
					Map()
						.set('isDisplayed', false)
							.set('Options', originMenuOptions)
					);
			}
		}
		return Menus
	});
	
	return state.delete('filterDropdownMenus').merge(Map().set('filterDropdownMenus', newState))
}

// working-spot-5
/* Option selecting reducser and its related function. */
/* Basic selecting option reducer */
function selectDropdownOption(state, theme, optionName, fieldsetIndex, dataIdx) {
	
	let newDataset = null;
	let newData = null;
	let newChartType = null;
	let newTopic = null;
	let newDropdownMenuStates = null;

	if (theme === '') {

	} else if (theme === '') {

	} else if (theme === '') {

	} else if (theme === 'correction') {

		const currentState = store.getState();

		// Create an initial collpased state for all menus.
		const collapsedAllDropdownMenuStates = setState(
				'filterDropdownMenus',
				setAllDropdownCollapsed(currentState));

		if (fieldsetIndex === 0 ) {

			// Fetch the prepared states 
			const stateTree = DataFilterStateTree.state.get(theme);
			const datasetIndex = DataFilterStateTree.findDatasetIndex(theme, optionName);

			// Create new states
			if (currentState.get('currentDataset') !== optionName) {
				newDataset = setState('currentDataset', optionName);
				newData = setState(
					'currentData', 
					stateTree.get(datasetIndex).content.data[0].name
				);
				newChartType = setState(
					'currentChartType', 
					stateTree.get(datasetIndex).availableChartTypes[0]
					);
				newTopic = setState(
					'currentTopic', 
					stateTree.get(datasetIndex).content.data[0].topics[0]
					);
				// Set up the states for the dropdowns.
				newDropdownMenuStates = 
					setState('filterDropdownMenus', List([
						// Options for the dataset
						Map().set(
							'Options', 
							List(DataFilterStateTree.listDataset('correction'))
						).set(
							'isDisplayed',
							false
						),
						// Options for the data
						Map().set(
							'Options', 
							List(DataFilterStateTree.listData('correction', datasetIndex))
						).set(
							'isDisplayed',
							false
						),
						// Options for the graph
						Map().set(
							'Options', 
							List(DataFilterStateTree.listCharttype('correction', datasetIndex))
						).set(
							'isDisplayed',
							false
						),
						// Options for the topics
						Map().set(
							'Options', 
							List(DataFilterStateTree.listTopic('correction', datasetIndex, 0, 0))
						).set(
							'isDisplayed',
							false
						)
					])); 
					return state.merge(newDataset, newData, newChartType, newTopic, newDropdownMenuStates)
				}
			return state.merge(collapsedAllDropdownMenuStates)
		} 

		// Selecting data 
		else if (fieldsetIndex === 1) {

			if (currentState.get('currentData') !== optionName) {

				newData = setState('currentData', optionName);

				// Switch data will change the available topics
				newDropdownMenuStates = setState(
					'filterDropdownMenus', 
					updateTopicDropdownOption(
						state, optionName, null
						));

				return state.merge(newData, newDropdownMenuStates)
			}

			return state.merge(collapsedAllDropdownMenuStates)
		}

		// Selecting the charttype which will affect the topics.
		else if (fieldsetIndex === 2) {

			if (currentState.get('currentChartType') !== optionName) {

				newChartType = setState('currentChartType', optionName);
				newDropdownMenuStates = setState(
					'filterDropdownMenus', 
					updateTopicDropdownOption(state, null, optionName));

				// Update current topic
				newTopic = setState(
					'currentTopic', 
					newDropdownMenuStates
						.get('filterDropdownMenus')
							.get(fieldsetIndex+1)
								.get('Options')[0]);
							
				return state.merge(newDropdownMenuStates, newChartType, newTopic) 
			}
			return state.merge(collapsedAllDropdownMenuStates)
		} 
		// working-spot-5
		// Selection the topic
		else if (fieldsetIndex === 3) {
			if (currentState.get('currentTopic') !== optionName) {
				newTopic = setState('currentTopic', optionName);

				return state.merge(newTopic, collapsedAllDropdownMenuStates)
			}
			return state.merge(collapsedAllDropdownMenuStates);
		}

		return state
	}
}

/* Related function of selecting option: Collapse all dropdown menu */
function setAllDropdownCollapsed(state) {

	let newState = state.get('filterDropdownMenus').update(function(Menus) {

		// Renew each of the dropdown state
		for ( let j = 0; j < Menus.size; ++j ) {

			const originMenuOptions = Menus.get(j).get('Options');
			
			Menus = Menus.set(
				j, 
				Map()
					.set('isDisplayed', false)
						.set('Options', originMenuOptions)
				);
			
		}
		return Menus
	});
	return newState
}

/* 
	 Related function of selecting option: Collapse all dropdown menu
	 Data and charttype have relation with topics
 */
function updateTopicDropdownOption(state, dataName, chartName) {
	
	const key = state.get('theme');
	const currentDataset = state.get('currentDataset');

	// If user is operating data selector. 
	const currentData =
		dataName ? dataName : state.get('currentData');

	// If user is operating chart selector.
	const currentChartType = 
		chartName ? chartName : state.get('currentChartType');
	
	let newState = state.get('filterDropdownMenus').update(function(Menus) {
		
		let datasetIndex = 
			DataFilterStateTree.findDatasetIndex(key, currentDataset);
		let dataIndex = 
			DataFilterStateTree.findDataIndex(key, currentDataset, currentData);
		let chartIndex = 
			DataFilterStateTree.findChartTypeIndex(key, currentDataset, currentChartType);

		const topics = 
			DataFilterStateTree
				.listTopic(key, datasetIndex, dataIndex, chartIndex);

		return Menus
			.set(1,
				Map()
					.set('isDisplayed', false)
						.set('Options', Menus.get(1).get('Options'))
				)
			.set(2,
				Map()
					.set('isDisplayed', false)
						.set('Options', Menus.get(2).get('Options'))
				)
			.set(3, 
				Map()
					.set('isDisplayed', false)
						.set('Options', topics))
			
	});

	return newState
}

// Create a immutable Map object as state
function setState(key, value) {
	return Map().set(key, value)
}

/* ***** Mapping the things from container components to prsentational components ***** */
/* Connect the redux's app state to Nav Component. */
const mapStateToAppNavProps = (state) => {
	return {
		childrenComponents: state.get('Nav')
	}
}
const AppNav = RRd.connect(
	mapStateToAppNavProps,
	null
)(Nav);


/* Connect the redux's app state to Main Component. */
const mapStateToAppMainProps = (state) => {
	return {
		childrenComponents: state.get('Main')
	}
}
const AppMain = RRd.connect(
	mapStateToAppMainProps,
	null
)(Main);


/* Connect the redux's app state to ThemeBtn. */
const mapDispatchToThemeBtnProps = (dispatch) => {
	return {
		selectTheme: (e) => {
			// Select the theme.
			const re = /#\/\w+_stat/;
			const theme = 
				e.target.parentNode.href
					.match(re)[0].slice(2)
						.toUpperCase();
			console.log(theme);

			dispatch(selectThemeAC(theme));
		}
	}
}

const ThemeButton = RRd.connect(
	null,
	mapDispatchToThemeBtnProps
)(ThemeBtn);

/* Connect Title Component with redux app state */
const mapStateToTitleProps = (state) => {
	return {
		imageSource: state.get('statTitleImageSrc')
	}
}

const StatTitle = RRd.connect(
	mapStateToTitleProps,
	null
)(Title);

/* Connect Fliter Component with redux app state. */

/* Connect DropdownToggle */
const mapDispatchToDropdownToggle = (dispatch, props) => {
	return {
		expandDropdown: (e) => {
			dispatch(expandDropdownAC(props.menuIndex));
		}
	}
}

const StatFilterDropdownToggle = RRd.connect(
	null,
	mapDispatchToDropdownToggle
)(DropdownToggle);

/* Connect DropdownMenu */
// Determine the dropdwon is displayed or not.
const mapStateToDropdownMenuProps = (state, props) => {
	return {
		isDisplayed: 
			state.get('filterDropdownMenus')
				.get(props.menuIndex)
					.get('isDisplayed')
	}
}

const StatFilterDropdownMenu = RRd.connect(
	mapStateToDropdownMenuProps,
	null
)(DropdownMenu);

/* Connect DropdownMenuItem */
const mapDispatchToDropdownMenuItemBtnProps = (dispatch, props) => {
	return {
						
		// working-spot-5
		selectOption: (e) => {

			const key = store.getState().get('theme');

			// Data is bounding with topics
			if (props.menuIndex === 1) 
				dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx));
			else 
				dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, null));
		}
	}
}
const StatFilterDropdownMenuItem = RRd.connect(
	null,
	mapDispatchToDropdownMenuItemBtnProps
)(DropdownMenuItem);

const mapStateToFilterProps = (state) => {

	return {
		filterNames: state.get('filterNames'),
		currentDataset: state.get('currentDataset'),
		currentData: state.get('currentData'),
		currentChartType: state.get('currentChartType'),
		currentTopic: state.get('currentTopic'),
		currentFilterDropdownMenus: state.get('filterDropdownMenus')
	}
}

const StatFilter = RRd.connect(
	mapStateToFilterProps,
	null
)(Filter);

/* Connect DataBoard */
const mapStateToDataBoardProps = (state) => {
	return {
		dataset  : state.get('currentDataset'), 
		data     : state.get('currentData'), 
		chartType: state.get('currentChartType'),
		topic    : state.get('currentTopic')
	}
}

const StatDataBoard = RRd.connect(
	mapStateToDataBoardProps,
	null
	)(DataBoard);

/* ***** Store: For handling the states of the App.***** */
let store = Re.createStore(AppReducer);







ReactDOM.render(
	<RRd.Provider store={store}>
		<RR.Router history={RR.hashHistory} >
			{/*<RR.Route path='/' component={App}>*/}
			<RR.Route component={App} >
				<RR.Route path='/' 
					getComponents={(nextState, cb) => {

						/*Set up the initial index page for nav side.*/
						store.dispatch(setAppNavAC([
							<Logo key='0'/>,
							<IndexNavList key='1'/>,
							<Sign key='2'/>,
							<HomeLink key='3'/>
						]));

						store.dispatch(setThemesAC());

						cb(null, { nav: AppNav, main: AppMain });
				}} />
				<RR.Route path='/police_stat' />
				<RR.Route path='/prosecute_stat' />
				<RR.Route path='/judicial_stat' />
				<RR.Route 
					path='/correction_stat' 
					getComponents={(nextState, cb) => {

						/* Routes to the correction statistic page when the url match. */
						store.dispatch(selectThemeAC('CORRECTION_STAT'));

						cb(null, { nav: AppNav, main: AppMain });
					}}/>
			</RR.Route>
		</RR.Router>
	</RRd.Provider>, 
	document.getElementById('CONTAINER'))