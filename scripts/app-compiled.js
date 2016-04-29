'use strict';

/* ***** Import Libraries ***** */
var Re = Redux,
    RR = ReactRouter,
    RRd = ReactRedux;

/* ***** The Immutables ***** */
var Map = Immutable.Map,
    List = Immutable.List;

/* ***** Global Variables ***** */
window.isLocal = document.URL.match(/127.0.0.1/)[0] === '127.0.0.1' ? true : false;

// To access the remove csv sources.
window.query = '&tqx=out:csv';
window.googleSheet = 'https://spreadsheets.google.com/tq?';

/* ***** Elements for the Index Page ***** */
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

/* Major Themes are displaying on the index page. */
var Theme = React.createClass({
	displayName: 'Theme',

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
				React.createElement(ThemeButton, { path: this.props.path, btnTxtSrc: this.props.btnTxt })
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

var ThemeBtn = React.createClass({
	displayName: 'ThemeBtn',

	render: function render() {

		return React.createElement(
			'div',
			{ className: 'sect-part-btn' },
			React.createElement(
				RR.Link,
				{ to: this.props.path, onClick: this.props.selectTheme },
				React.createElement('img', { className: 'sect-part-btn-img', src: this.props.btnTxtSrc })
			)
		);
	}
});

/* ***** Databoard components: The components render the visualized data  ***** */
var DataBoard = React.createClass({
	displayName: 'DataBoard',

	gpu: function () {
		return {
			barGraph: new barGraphClass(),
			lineGraph: new lineGraphClass(),
			RingGraph: new ringGraphClass()
		};
	}(),

	render: function render() {

		return React.createElement(
			'div',
			{ id: 'DATABOARD_WRAPPER', className: 'b20-col-md-20' },
			React.createElement('div', { id: 'DATABOARD' })
		);
	}
});

var Filter = React.createClass({
	displayName: 'Filter',

	generateFilterFields: function generateFilterFields() {

		var FilterNames = this.props.filterNames;
		var FilterDropdownMenus = this.props.currentFilterDropdownMenus;

		var FilterFields = [],
		    FilterDefaultField = [this.props.currentDataset, this.props.currentData, this.props.currentChartType, this.props.currentTopic];

		for (var i = 0; i < FilterNames.size; i++) {

			FilterFields.push(React.createElement(FilterField, { key: i,
				index: i,
				filterName: FilterNames.get(i),
				selectedOption: FilterDefaultField[i],
				options: FilterDropdownMenus.get(i).get('Options') }));
		}
		return FilterFields;
	},

	render: function render() {

		var FilterFields = this.generateFilterFields();

		return React.createElement(
			'nav',
			{ id: 'FILTER_WRAPPER', className: 'b12-col-md-12 b15-row-md-8 hdr-div' },
			React.createElement(
				'form',
				{ id: 'FILTER', className: 'b15-row-md-15' },
				React.createElement(
					'div',
					{ id: 'FILTER-TITLE', className: 'b15-row-md-1' },
					React.createElement('span', { className: 'ver-helper' }),
					React.createElement(
						'span',
						{ style: { verticalAlign: 'middle' } },
						'資料選擇'
					)
				),
				React.createElement(
					'div',
					{ className: 'b12-col-md-12 b15-row-md-14' },
					FilterFields
				)
			)
		);
	}
});

// FilterField Components make a way for user to select the data or the data expression they want.
var FilterField = React.createClass({
	displayName: 'FilterField',

	render: function render() {
		return React.createElement(
			'fieldset',
			{ className: 'b12-col-md-12 b12-row-md-3 formblock-fieldset' },
			React.createElement(
				'div',
				{ className: 'b12-col-md-12 b12-row-md-12' },
				React.createElement('span', { className: 'ver-helper' }),
				React.createElement(
					'div',
					{ className: 'dropdown-group' },
					React.createElement(
						'legend',
						{ className: 'dropdown-title' },
						React.createElement(
							'span',
							null,
							this.props.filterName
						)
					),
					React.createElement(
						'div',
						{ className: 'dropdown' },
						React.createElement(StatFilterDropdownToggle, {
							menuIndex: this.props.index,
							name: this.props.selectedOption }),
						React.createElement(StatFilterDropdownMenu, {
							menuIndex: this.props.index,
							options: this.props.options })
					)
				)
			)
		);
	}
});

var DropdownToggle = React.createClass({
	displayName: 'DropdownToggle',

	render: function render() {
		return(
			// working-spot-5
			React.createElement(
				'button',
				{ className: 'dropdown-btn', type: 'button',
					onClick: this.props.expandDropdown },
				React.createElement(
					'span',
					{ className: 'dropdown-txt' },
					this.props.name
				),
				React.createElement('span', { className: 'dropdown-caret' })
			)
		);
	}
});

var DropdownMenu = React.createClass({
	displayName: 'DropdownMenu',

	render: function render() {

		var key = 0,
		    menuItems = [];

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = this.props.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var option = _step.value;

				menuItems.push(React.createElement(StatFilterDropdownMenuItem, {
					key: ++key, optionIdx: ++key, name: option, menuIndex: this.props.menuIndex }));
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

		return React.createElement(
			'ul',
			{ className: this.props.isDisplayed ? 'dropdown-menu displayed' : 'dropdown-menu' },
			menuItems
		);
	}
});

// working-spot-5
var DropdownMenuItem = React.createClass({
	displayName: 'DropdownMenuItem',

	render: function render() {
		return(
			// working-spot-5: Click for selecting the option
			React.createElement(
				'li',
				{ onClick: this.props.selectOption },
				this.props.name
			)
		);
	}
});

/* ***** Basic components: The components that are used almost everywhere. ***** */
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

// Title components for rendering the theme image.
var Title = React.createClass({
	displayName: 'Title',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'b12-col-md-12 b15-row-md-1 hdr-div' },
			React.createElement('img', { id: 'TITLE', src: this.props.imageSource })
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
			React.createElement(AppNav, null),
			React.createElement(AppMain, null)
		);
	}
});

var Nav = React.createClass({
	displayName: 'Nav',

	render: function render() {
		return React.createElement(
			'header',
			{ id: 'HDR', className: 'b20-col-md-4 b12-row-md-12 bd-right' },
			this.props.childrenComponents
		);
	}
});

var Main = React.createClass({
	displayName: 'Main',

	render: function render() {
		return React.createElement(
			'section',
			{ id: 'BODY', className: 'b20-col-md-16 b12-row-md-12' },
			this.props.childrenComponents
		);
	}
});

/* ***** Action Creators ***** */
/* "AC" is the postfix for action creators */

function setAppNavAC(components) {
	return {
		type: 'SET_NAV',
		components: components
	};
}

function setAppMainAC(components) {
	return {
		type: 'SET_MAIN',
		components: components
	};
}

function setThemesAC() {
	return {
		type: 'SET_THEMES'
	};
}

function selectThemeAC(name) {
	return {
		type: 'SELECT_THEME',
		themeName: name
	};
}

function expandDropdownAC(dropdownIndex) {
	return {
		type: 'EXPAND_DROPDOWN',
		dropdownIndex: dropdownIndex
	};
}

// working-spot-5
function selectDropdownOptionAC(theme, optionName, fieldsetIndex, dIndex) {
	console.log(dIndex);
	return {
		type: 'SELECT_DROPDOWN_OPTION',
		theme: theme,
		fieldsetIndex: fieldsetIndex,
		dataIndex: dIndex,
		option: optionName
	};
}

/* ***** Reducers ***** */
var INITIAL_STATE = Map();

// States for different topic
var DataFilterStateTree = {
	state: Map().set('correction', List([{
		dataset: '監獄人數概況',
		availableChartTypes: ['長條圖', '走勢', '面積圖'],
		content: {
			data: [{
				name: '本年執行人數',
				topics: [['總數'], ['減刑']]

			}, {
				name: '本年入監人數',
				topics: [['總數', '入監原因分類'], ['減刑']]

			}, {
				name: '新入監人數',
				topics: [['總數', '犯次分類'], ['減刑']]
			}, {
				name: '本年出獄人數',
				topics: [['總數', '出獄原因分類'], ['減刑']]
			}, {
				name: '本年年底留監人數',
				topics: [['總數'], ['減刑']]
			}]
		}
	}, {
		dataset: '新入監資料概覽',
		availableChartTypes: ['圓環圖'],
		content: {
			data: [{
				name: '民國75年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]
			}, {
				name: '民國76年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]
			}, {
				name: '民國77年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]
			}, {
				name: '民國78年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]
			}, {
				name: '民國79年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]
			}, {
				name: '民國80年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]

			}, {
				name: '民國81年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]
			}, {
				name: '民國82年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]
			}, {
				name: '民國83年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]
			}, {
				name: '民國84年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [['總數']]
			}, {
				name: '85'
			}, {
				name: '86'
			}, {
				name: '87'
			}, {
				name: '88'
			}, {
				name: '89'
			}, {
				name: '90'
			}, {
				name: '91'
			}, {
				name: '92'
			}, {
				name: '93'
			}, {
				name: '94'
			}, {
				name: '95'
			}, {
				name: '96'
			}]
		}
	}])),

	selectState: function selectState(key) {
		return this.state.get(key);
	},

	// Find the index of the specific dataset
	findDatasetIndex: function findDatasetIndex(key, datasetName) {

		var state = this.selectState(key);

		// Transform the List to js array
		var list = state.toArray();

		return list.findIndex(function (d) {
			return d.dataset === datasetName;
		});
	},

	// Find the index of the data in the chosen dataset.
	findDataIndex: function findDataIndex(key, datasetName, dataName) {

		var state = this.selectState(key);

		var index = this.findDatasetIndex(key, datasetName),
		    dataList = state.get(index).content.data;

		return dataList.findIndex(function (data) {
			return data.name === dataName;
		});
	},

	// Find the index of the chart type in the chosen dataset.
	findChartTypeIndex: function findChartTypeIndex(key, datasetName, chartName) {

		var state = this.selectState(key);

		var index = this.findDatasetIndex(key, datasetName),
		    chartList = state.get(index).availableChartTypes;

		return chartList.findIndex(function (chart) {
			return chart === chartName;
		});
	},

	// List the dataset
	listDataset: function listDataset(key) {

		var state = this.selectState(key);

		var datasets = [];

		for (var i = 0; i < state.size; ++i) {
			datasets.push(state.get(i).dataset);
		}

		return datasets;
	},

	// List the available data
	listData: function listData(key, datasetIdx) {

		var state = this.selectState(key);

		var datas = state.get(datasetIdx).content.data.map(function (d) {
			return d.name;
		});

		return datas;
	},

	listCharttype: function listCharttype(key, datasetIdx) {

		var state = this.selectState(key);

		var charttypes = state.get(datasetIdx).availableChartTypes;

		return charttypes;
	},

	listTopic: function listTopic(key, datasetIdx, dataIdx, chartIndex) {

		var state = this.selectState(key);

		// let chartIndex =
		// 	chartTypeName ?
		// 		state.get(datasetIdx)
		// 			.availableChartTypes.findIndex(
		// 				(chartType) => {
		// 					return chartType === chartTypeName }) : 0;

		var topics = state.get(datasetIdx).content.data[dataIdx].topics[chartIndex];

		return topics;
	}
};

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

		case 'SELECT_THEME':
			return selectAppTheme(state, action.themeName);

		case 'EXPAND_DROPDOWN':
			return setDropdownMenuStates(state, action.dropdownIndex);

		// working-spot-5
		case 'SELECT_DROPDOWN_OPTION':
			return selectDropdownOption(state, action.theme, action.option, action.fieldsetIndex, action.dataIndex);

		default:
			return state;
	}
}

function setAppNavIndex(state, components) {
	var navState = Map().set('Nav', components);
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
	    mainState = Immutable.Map().set('Main', function () {
		var themeSections = [];

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = themes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var theme = _step2.value;

				themeSections.push(React.createElement(Theme, {
					key: theme.key,
					info: theme.infoTxtImg,
					path: theme.path,
					style: theme.style,
					themeImg: theme.img,
					btnTxt: theme.btnTxtImg }));
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return themeSections;
	}());
	return state.merge(mainState);
}

function selectAppTheme(state, theme) {

	var navComponents = [React.createElement(Logo, { key: '0' }), React.createElement(StatTitle, { key: '1' }), React.createElement(StatFilter, { key: '2' }), React.createElement(HomeLink, { key: '3' })],
	    mainComponents = [React.createElement(DataBoard, { key: '0' })];

	var navState = Map().set('Nav', navComponents);
	var mainState = Map().set('Main', mainComponents);

	// The name of each filter field.
	var filterNames = setState('filterNames', List(['資料集', '檢索資料', '視覺化', '專題']));

	var themeState = null;
	var statTitle = null;
	var defaultDataset = null;
	var defaultData = null;
	var defaultChartType = null;
	var defaultTopic = null;

	switch (theme) {
		case 'POLICE_STAT':
			themeState = setState('theme', 'police');
			return state;
		case 'PROSECUTION_STAT':
			themeState = setState('theme', 'prosecution');
			return state;
		case 'JUDICIAL_STAT':
			themeState = setState('theme', 'judicial');
			return state;
		case 'CORRECTION_STAT':

			themeState = setState('theme', 'correction');
			statTitle = setState('statTitleImageSrc', './src/correctStatTitle.png');
			defaultDataset = setState('currentDataset', '監獄人數概況');
			defaultData = setState('currentData', '本年執行人數');
			defaultChartType = setState('currentChartType', '長條圖');
			defaultTopic = setState('currentTopic', '總數');

			// working-spot-5: Applied the below function with states tree
			var defaultFilterDropdownMenus = setState('filterDropdownMenus', List([
			// Options for the dataset
			Map().set('Options', List(DataFilterStateTree.listDataset('correction'))).set('isDisplayed', false),
			// Options for the data
			Map().set('Options', List(DataFilterStateTree.listData('correction', 0))).set('isDisplayed', false),
			// Options for the graph
			Map().set('Options', List(DataFilterStateTree.listCharttype('correction', 0))).set('isDisplayed', false),
			// Options for the topics
			Map().set('Options', List(DataFilterStateTree.listTopic('correction', 0, 0, 0))).set('isDisplayed', false)]));

			return state.merge(navState, mainState, statTitle, filterNames, themeState, defaultDataset, defaultData, defaultChartType, defaultTopic, defaultFilterDropdownMenus);

		default:
			return state;
	}
}

// Expand the dropdown and the rest should all collpased.
function setDropdownMenuStates(state, index) {

	// update the states of the current dropdown.
	var newState = state.get('filterDropdownMenus').update(function (Menus) {

		// Renew each of the dropdown state
		for (var j = 0; j < Menus.size; ++j) {

			var originMenuOptions = Menus.get(j).get('Options');

			if (j === index) {

				Menus = Menus.set(index, Map().set('isDisplayed', true).set('Options', originMenuOptions));
			} else {
				Menus = Menus.set(j, Map().set('isDisplayed', false).set('Options', originMenuOptions));
			}
		}
		return Menus;
	});

	return state.delete('filterDropdownMenus').merge(Map().set('filterDropdownMenus', newState));
}

// working-spot-5
/* Option selecting reducser and its related function. */
/* Basic selecting option reducer */
function selectDropdownOption(state, theme, optionName, fieldsetIndex, dataIdx) {

	var newDataset = null;
	var newData = null;
	var newChartType = null;
	var newTopic = null;
	var newDropdownMenuStates = null;

	if (theme === '') {} else if (theme === '') {} else if (theme === '') {} else if (theme === 'correction') {

		var currentState = store.getState();

		// Create an initial collpased state for all menus.
		newDropdownMenuStates = setState('filterDropdownMenus', setAllDropdownCollapsed(currentState));

		if (fieldsetIndex === 0) {

			// Fetch the prepared states
			var stateTree = DataFilterStateTree.state.get(theme);
			var datasetIndex = DataFilterStateTree.findDatasetIndex(theme, optionName);

			// Create new states
			if (currentState.get('currentDataset') !== optionName) {
				newDataset = setState('currentDataset', optionName);
				newData = setState('currentData', stateTree.get(datasetIndex).content.data[0].name);
				newChartType = setState('currentChartType', stateTree.get(datasetIndex).availableChartTypes[0]);
				newTopic = setState('currentTopic', stateTree.get(datasetIndex).content.data[0].topics[0]);
				// Set up the states for the dropdowns.
				newDropdownMenuStates = setState('filterDropdownMenus', List([
				// Options for the dataset
				Map().set('Options', List(DataFilterStateTree.listDataset('correction'))).set('isDisplayed', false),
				// Options for the data
				Map().set('Options', List(DataFilterStateTree.listData('correction', datasetIndex))).set('isDisplayed', false),
				// Options for the graph
				Map().set('Options', List(DataFilterStateTree.listCharttype('correction', datasetIndex))).set('isDisplayed', false),
				// Options for the topics
				Map().set('Options', List(DataFilterStateTree.listTopic('correction', datasetIndex, 0, 0))).set('isDisplayed', false)]));
				return state.merge(newDataset, newData, newChartType, newTopic, newDropdownMenuStates);
			}
			return state.merge(newDropdownMenuStates);
		}
		// Selecting data
		else if (fieldsetIndex === 1) {

				if (currentState.get('currentData') !== optionName) {

					newData = setState('currentData', optionName);

					// Switch data will change the available topics
					newDropdownMenuStates = setState('filterDropdownMenus', updateTopicDropdownOption(state, optionName, null));

					return state.merge(newData, newDropdownMenuStates);
				}

				return state.merge(newDropdownMenuStates);
			}
			// Selecting the charttype which will affect the topics.
			else if (fieldsetIndex === 2) {
					if (currentState.get('currentChartType') !== optionName) {

						newChartType = setState('currentChartType', optionName);
						newDropdownMenuStates = setState('filterDropdownMenus', updateTopicDropdownOption(state, null, optionName));

						return state.merge(newDropdownMenuStates, newChartType);
					}
					return state.merge(newDropdownMenuStates);
				}
		return state;
	}
}

/* Related function of selecting option: Collapse all dropdown menu */
function setAllDropdownCollapsed(state) {

	var newState = state.get('filterDropdownMenus').update(function (Menus) {

		// Renew each of the dropdown state
		for (var j = 0; j < Menus.size; ++j) {

			var originMenuOptions = Menus.get(j).get('Options');

			Menus = Menus.set(j, Map().set('isDisplayed', false).set('Options', originMenuOptions));
		}
		return Menus;
	});
	return newState;
}

/* Related function of selecting option: Collapse all dropdown menu
	 Data and charttype have relation with topics
 */

function updateTopicDropdownOption(state, dataName, chartName) {

	var key = state.get('theme');
	var currentDataset = state.get('currentDataset');

	var currentData = dataName ? dataName : state.get('currentData');

	var currentChartType = chartName ? chartName : state.get('currentChartType');

	// working-spot-5
	var newState = state.get('filterDropdownMenus').update(function (Menus) {

		var datasetIndex = DataFilterStateTree.findDatasetIndex(key, currentDataset);
		var dataIndex = DataFilterStateTree.findDataIndex(key, currentDataset, currentData);
		var chartIndex = DataFilterStateTree.findChartTypeIndex(key, currentDataset, currentChartType);

		// key, datasetIdx, dataIdx, chartTypeName
		var topics = DataFilterStateTree.listTopic(key, datasetIndex, dataIndex, chartIndex);

		console.log(currentData);
		console.log(topics);

		return Menus.set(1, Map().set('isDisplayed', false).set('Options', Menus.get(1).get('Options'))).set(2, Map().set('isDisplayed', false).set('Options', Menus.get(2).get('Options'))).set(3, Map().set('isDisplayed', false).set('Options', topics));
	});

	return newState;
}

// working-spot-5
// function updateDropdownMenuState(state, fieldsetIndex, optionName) {

// 	const key = state.get('theme');

// 	let newDropdownMenuStates = null;

// 	if (fieldsetIndex === 0) {

// 	} else if (fieldsetIndex === 1) {

// 	} else if (fieldsetIndex === 2) {

// 	} else if (fieldsetIndex === 3) {

// 	}
// }

// Create a immutable Map object as state
function setState(key, value) {
	return Map().set(key, value);
}

/* ***** Mapping the things from container components to prsentational components ***** */
/* Connect the redux's app state to Nav Component. */
var mapStateToAppNavProps = function mapStateToAppNavProps(state) {
	return {
		childrenComponents: state.get('Nav')
	};
};
var AppNav = RRd.connect(mapStateToAppNavProps, null)(Nav);

/* Connect the redux's app state to Main Component. */
var mapStateToAppMainProps = function mapStateToAppMainProps(state) {
	return {
		childrenComponents: state.get('Main')
	};
};
var AppMain = RRd.connect(mapStateToAppMainProps, null)(Main);

/* Connect the redux's app state to ThemeBtn. */
var mapDispatchToThemeBtnProps = function mapDispatchToThemeBtnProps(dispatch) {
	return {
		selectTheme: function selectTheme(e) {
			// Select the theme.
			var re = /#\/\w+_stat/;
			var theme = e.target.parentNode.href.match(re)[0].slice(2).toUpperCase();

			dispatch(selectThemeAC(theme));
		}
	};
};

var ThemeButton = RRd.connect(null, mapDispatchToThemeBtnProps)(ThemeBtn);

/* Connect Title Component with redux app state */
var mapStateToTitleProps = function mapStateToTitleProps(state) {
	return {
		imageSource: state.get('statTitleImageSrc')
	};
};

var StatTitle = RRd.connect(mapStateToTitleProps, null)(Title);

/* Connect Fliter Component with redux app state. */

/* Connect DropdownToggle */
var mapDispatchToDropdownToggle = function mapDispatchToDropdownToggle(dispatch, props) {
	return {
		expandDropdown: function expandDropdown(e) {
			dispatch(expandDropdownAC(props.menuIndex));
		}
	};
};

var StatFilterDropdownToggle = RRd.connect(null, mapDispatchToDropdownToggle)(DropdownToggle);

/* Connect DropdownMenu */
// Determine the dropdwon is displayed or not.
var mapStateToDropdownMenuProps = function mapStateToDropdownMenuProps(state, props) {
	return {
		isDisplayed: state.get('filterDropdownMenus').get(props.menuIndex).get('isDisplayed')
	};
};

var StatFilterDropdownMenu = RRd.connect(mapStateToDropdownMenuProps, null)(DropdownMenu);

/* Connect DropdownMenuItem */
var mapDispatchToDropdownMenuItemBtnProps = function mapDispatchToDropdownMenuItemBtnProps(dispatch, props) {
	return {

		// working-spot-5
		selectOption: function selectOption(e) {

			var key = store.getState().get('theme');

			// Data is bounding with topics
			if (props.menuIndex === 1) dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx));else dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, null));
		}
	};
};
var StatFilterDropdownMenuItem = RRd.connect(null, mapDispatchToDropdownMenuItemBtnProps)(DropdownMenuItem);

var mapStateToFilterProps = function mapStateToFilterProps(state) {

	return {
		filterNames: state.get('filterNames'),
		currentDataset: state.get('currentDataset'),
		currentData: state.get('currentData'),
		currentChartType: state.get('currentChartType'),
		currentTopic: state.get('currentTopic'),
		currentFilterDropdownMenus: state.get('filterDropdownMenus')
	};
};

var StatFilter = RRd.connect(mapStateToFilterProps, null)(Filter);

/* ***** Store: For handling the states of the App.***** */
var store = Re.createStore(AppReducer);

/*Set up the initial index page for nav side.*/
store.dispatch(setAppNavAC([React.createElement(Logo, { key: '0' }), React.createElement(IndexNavList, { key: '1' }), React.createElement(Sign, { key: '2' }), React.createElement(HomeLink, { key: '3' })]));

store.dispatch(setThemesAC());

ReactDOM.render(React.createElement(
	RRd.Provider,
	{ store: store },
	React.createElement(
		RR.Router,
		{ history: RR.hashHistory },
		React.createElement(
			RR.Route,
			{ path: '/', component: App },
			React.createElement(RR.Route, { path: '/police_stat' }),
			React.createElement(RR.Route, { path: '/prosecute_stat' }),
			React.createElement(RR.Route, { path: '/judicial_stat' }),
			React.createElement(RR.Route, { path: '/correction_stat' })
		)
	)
), document.getElementById('CONTAINER'));
