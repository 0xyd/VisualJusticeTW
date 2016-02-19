'use strict';

var DashBoard = React.createClass({
	displayName: 'DashBoard',

	graphs: function () {
		return {
			barGraph: new barGraphClass(),
			lineGraph: new lineGraphClass()
		};
	}(),

	getInitialState: function getInitialState() {
		return {
			dataset: null,
			topic: null,
			chartType: null,

			indexDB: [{
				dataset: '監獄人數概況',
				content: {
					topics: [{
						name: '本年執行人數',
						compos: ['總數'],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}, {
						name: '本年入監人數',
						compos: ['總數'],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}, {
						name: '新入監人數',
						compos: ['總數'],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}, {
						name: '本年出獄人數',
						compos: ['總數'],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}, {
						name: '本年年底留監人數',
						compos: ['總數'],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}]
				}
			}, {
				dataset: '新入監資料概覽',
				content: {
					topics: [{
						name: '75',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
					}, {
						name: '76',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
					}, {
						name: '77',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
					}, {
						name: '78',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
					}, {
						name: '79',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
					}, {
						name: '80',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
					}, {
						name: '81',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
					}, {
						name: '82',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
					}, {
						name: '83',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
					}, {
						name: '84',
						compos: ['新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
						availableChartTypes: ['圓環圖']
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
			}]
		};
	},

	componentWillMount: function componentWillMount() {
		this.setState({
			dataset: '監獄人數概況',
			topic: '本年執行人數',
			chartType: '長條圖'
		});
	},

	componentDidMount: function componentDidMount() {
		// this.graphs.tip = new tipClass();
		// this.graphs.tip.appendDotMouseOver('本年執行人數');
		// this.graphs.tip.appendBarMouseOver('本年執行人數');
	},

	chartRefresh: function chartRefresh() {
		var inputStr = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
		var menuIndex = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		if (menuIndex === 0) {

			var r = this.state.indexDB.find(function (d) {
				if (d.dataset === inputStr) return true;
			});

			this.setState({
				dataset: r.dataset,
				topic: r.content.topics[0].name
			});
		} else if (menuIndex === 1) {

			var state = this.state,
			   

			// Find out the index of current selected dataset.
			cDatasetIdx = findCurrentDatasetIndex(this.state),
			    r = this.state.indexDB[cDatasetIdx].content.topics.find(function (d) {
				if (d.name === inputStr) return true;
			});

			this.setState({ topic: r.name });
		} else if (menuIndex === 2) {} else if (menuIndex === 3) {

			var cDatasetIdx = findCurrentDatasetIndex(this.state),
			    cTopicIdx = findCurrentTopicIndex(this.state, cDatasetIdx),
			    r = this.state.indexDB[cDatasetIdx].content.topics[cTopicIdx].availableChartTypes.find(function (d) {
				if (d === inputStr) return true;
			});

			this.setState({ chartType: r });
		}

		// Find out the index of current selected dataset.
		function findCurrentDatasetIndex(s) {
			var index = s.indexDB.findIndex(function (d) {
				if (d.dataset === s.dataset) return true;
			});
			return index;
		}

		function findCurrentTopicIndex(s, datasetIdx) {
			var index = s.indexDB[datasetIdx].content.topics.findIndex(function (d) {
				if (d.name === s.topic) return true;
			});
			return index;
		}

		// this.setState({
		// 	dataset: r.dataset,
		// 	topic: topic
		// });
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {},

	shouldComponentUpdate: function shouldComponentUpdate() {
		return true;
	},

	render: function render() {

		return React.createElement(
			'div',
			{ id: 'PANEL' },
			React.createElement(DashBoardSide, {
				chartRefresh: this.chartRefresh,
				indexDB: this.state.indexDB }),
			React.createElement(ChartPanel, {
				dataset: this.state.dataset,
				topic: this.state.topic,
				chartType: this.state.chartType,
				barGraph: this.graphs.barGraph,
				lineGraph: this.graphs.lineGraph })
		);
	}
});

var ChartPanel = React.createClass({
	displayName: 'ChartPanel',

	tip: new tipClass(),

	_chartGroup_1: function () {
		var s = new Set(['長條圖', '折線圖', '面積圖']);
		return s;
	}(),
	_chartGroup_2: function () {
		var s = new Set(['圓環圖']);
		return s;
	}(),

	getInitialState: function getInitialState() {
		return {
			sheetName: null,
			dataTopic: null,
			sheetUrl: null,
			chartAxes: null,
			chartType: null,

			dataSheets: [{
				name: '監獄人數概況',
				url: '/correction/監獄人數概況.csv',
				axes: {
					xAxis: '民國',
					yAxis: '人數(仟人)'
				}
			}, {
				name: '新入監資料概覽',
				urls: ['/correction/新入監前家庭狀況.csv', '/correction/新入監犯罪次數與種類.csv', '/correction/新入監前教育程度.csv', '/correction/歷年新入監年齡歷年統計.csv']
			}]
		};
	},

	componentWillMount: function componentWillMount() {

		var tSheetName = this.props.dataset;

		var currentDataSheet = this.state.dataSheets.find(function (sheet) {
			if (sheet.name === tSheetName) return sheet;
		});

		this.setState({
			sheetName: currentDataSheet.name,
			sheetUrl: currentDataSheet.url,
			chartAxes: currentDataSheet.axes,
			dataTopic: this.props.topic,
			chartType: this.props.chartType
		});
	},

	// The barchart is the default chart we render
	componentDidMount: function componentDidMount() {

		var p = this.props,
		    bG = p.barGraph,
		    lG = p.lineGraph,
		    t = this.tip,
		    chartTypeDisplay = this.chartTypeDisplay;

		bG.initializeAPad().setChartSize().setOutPadding(10).setStep(10).drawingData(this.state.sheetUrl, this.state.chartAxes.xAxis, this.state.chartAxes.yAxis, this.state.dataTopic).then(function (jsonOutput) {

			// Initialize the tips
			t.initTips();

			lG.inheritPad(bG.pad, bG.padHeight, bG.padWidth, bG.padPadding).setChartSize().plotBars(jsonOutput.data, jsonOutput.pad, null, jsonOutput.barWidth / 2).then(function (o) {

				lG.linePath = o.line;
				lG.lineDots = o.dots;
				lG.areaUnderLine = o.area;

				chartTypeDisplay(p.chartType);

				t.appendDotMouseOver('本年執行人數');
				t.appendBarMouseOver('本年執行人數');
			});
		});
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {

		if (this._chartGroup_1.has(nextProps.chartType)) {
			var i = this.state.dataSheets.findIndex(function (d) {
				if (d.name === nextProps.dataset) return true;
			});

			this.setState({
				sheetName: nextProps.dataset,
				dataTopic: nextProps.topic,
				chartType: nextProps.chartType,
				sheetUrl: this.state.dataSheets[i].url
			});
		} else if (this._chartGroup_2.has(nextProps.chartType)) {
			console.log('This chart type is at the chart group 2');
		}
	},

	componentWillUpdate: function componentWillUpdate(nextProps, nextStates) {

		var lineGraph = this.props.lineGraph,
		    chartTypeDisplay = this.chartTypeDisplay;

		if (nextProps.chartType !== '長條圖') this.props.barGraph.bePhantom();

		this.props.barGraph.update(nextStates.sheetUrl, this.state.chartAxes.xAxis, this.state.chartAxes.yAxis, nextStates.dataTopic).then(function (jsonOutput) {
			lineGraph.plotBars(jsonOutput.data, jsonOutput.pad, jsonOutput.updatedBars, jsonOutput.barWidth / 2).then(function (o) {

				lineGraph.linePath = o.line;
				lineGraph.lineDots = o.dots;
				lineGraph.areaUnderLine = o.area;

				chartTypeDisplay(nextStates.chartType);
			});
		});
	},

	chartTypeDisplay: function chartTypeDisplay(chartType) {

		var b = this.props.barGraph,
		    l = this.props.lineGraph;

		if (chartType === "長條圖") {
			if (b.isInvisible) b.beVisible();
			l.hide().hideUnderArea();
		} else if (chartType === "折線圖") {
			l.beDisplayed().hideUnderArea();
			b.hide();
		} else if (chartType === "面積圖") {
			l.displayUnderArea().hide();
			b.hide();
		}
	},

	render: function render() {
		return React.createElement('div', { id: 'DISPLAY_PANEL', className: 'b20-col-md-16' });
	}
});

var DashBoardSide = React.createClass({
	displayName: 'DashBoardSide',

	render: function render() {
		return React.createElement(
			'header',
			{ id: 'DASHBOARD_HDR', className: 'b20-col-md-4 b12-row-md-12' },
			React.createElement(Logo, null),
			React.createElement(StatTitle, null),
			React.createElement(StatNav, {
				chartRefresh: this.props.chartRefresh,
				indexDB: this.props.indexDB }),
			React.createElement(SideFoot, null)
		);
	}
});

var Logo = React.createClass({
	displayName: 'Logo',

	render: function render() {
		return React.createElement(
			'div',
			{ id: 'LOGO-WRAPPER', className: 'b12-col-md-12 b15-row-md-5 hdr-div' },
			React.createElement('div', { id: 'LOGO', className: 'b12-col-md-12 b12-row-md-12' })
		);
	}
});

var StatTitle = React.createClass({
	displayName: 'StatTitle',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'b12-col-md-12 b15-row-md-1 hdr-div' },
			React.createElement('img', { id: 'TITLE', src: './src/correctStatTitle.png' })
		);
	}
});

var StatNav = React.createClass({
	displayName: 'StatNav',

	render: function render() {
		return React.createElement(
			'nav',
			{ id: 'NAVI', className: 'b12-col-md-12 b15-row-md-8 hdr-div' },
			React.createElement(StatFilter, {
				chartRefresh: this.props.chartRefresh,
				indexDB: this.props.indexDB })
		);
	}
});

var StatFilter = React.createClass({
	displayName: 'StatFilter',

	getInitialState: function getInitialState() {
		return {

			current: {
				dataset: '監獄人數概況',
				topic: '本年執行人數',
				filter: '總數',
				chartType: '長條圖'
			},
			filterNames: ['選擇主題', '選擇類別', '選擇成分', '選擇圖形'],
			menuDisplayedStatus: [false, false, false, false]
		};
	},

	expandMenu: function expandMenu(menuIndex) {

		var s = [false, false, false, false];

		s[menuIndex] = true;

		this.setState({
			menuDisplayedStatus: s
		});
	},

	collapseMenu: function collapseMenu() {
		this.setState({
			menuDisplayedStatus: [false, false, false, false]
		});
	},

	render: function render() {

		var l = this.state.filterNames.length,
		    fieldsets = [],
		    c = this.state.current,
		    index = this.props.indexDB.findIndex(function (field, index) {
			if (field.dataset === c.dataset) return true;
		}),
		    datasetList = this.props.indexDB.map(function (obj) {
			return obj.dataset;
		}),
		    topicList = this.props.indexDB[index].content.topics.map(function (obj) {
			return obj.name;
		}),
		   

		// otherList contains the filters and avialable chart types
		otherList = this.props.indexDB[index].content.topics.find(function (obj) {
			if (obj.name === c.topic) return true;
		}),
		   

		// Mapping the state's current into an array
		currentStates = Object.keys(this.state.current).map(function (key) {
			return c[key];
		}),
		   

		// Mapping the list into the array for generating the menus
		menus = [datasetList, topicList, otherList.compos, otherList.availableChartTypes];

		console.log('checking current state here:');
		console.log(c);

		for (var i = 0; i < l; i++) {

			fieldsets.push(React.createElement(StatFilterField, {
				key: i,
				index: i,
				filterName: this.state.filterNames[i],
				fieldName: currentStates[i],
				fieldMenu: menus[i],
				expandMenu: this.expandMenu,
				collapseMenu: this.collapseMenu,
				chartRefresh: this.props.chartRefresh,
				menuIsDisplayed: this.state.menuDisplayedStatus[i]
			}));
		}

		return React.createElement(
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
				fieldsets
			)
		);
	}
});

var StatFilterField = React.createClass({
	displayName: 'StatFilterField',

	getInitialState: function getInitialState() {
		return {
			menuIndex: null,
			isMenuDisplayed: null,
			selectedOption: null
		};
	},

	componentWillMount: function componentWillMount() {
		this.setState({
			menuIndex: this.props.index,
			isMenuDisplayed: this.props.menuIsDisplayed,
			selectedOption: this.props.fieldName
		});
	},

	shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextStates) {

		if (this.state.isMenuDisplayed !== nextStates.isMenuDisplayed) return true;else if (this.state.selectedOption !== nextStates.selectedOption) return true;else return false;
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {

		this.setState({
			isMenuDisplayed: nextProps.menuIsDisplayed
		});
	},

	// Click for displaying the hidden menu
	toggleMenu: function toggleMenu(e) {

		if (this.state.isMenuDisplayed) this.props.collapseMenu();else
			// Pass the index of the displayed menu to the parent
			this.props.expandMenu(this.state.menuIndex);
	},

	// Click for updating the seleted option on the button
	selectOption: function selectOption(optionStr) {

		this.setState({
			isMenuDisplayed: !this.state.isMenuDisplayed,
			selectedOption: optionStr
		});
	},

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
						React.createElement(StatFilterBtn, {
							index: this.state.menuIndex,
							toggleMenu: this.toggleMenu,
							name: this.state.selectedOption }),
						React.createElement(StatFilterMenu, {
							select: this.selectOption,
							chartRefresh: this.props.chartRefresh,
							displayed: this.state.isMenuDisplayed,
							menu: this.props.fieldMenu,
							collapseMenu: this.props.collapseMenu,
							index: this.state.menuIndex })
					)
				)
			)
		);
	}
});

var StatFilterBtn = React.createClass({
	displayName: 'StatFilterBtn',

	getInitialState: function getInitialState() {
		return {
			currentOption: null
		};
	},

	componentWillMount: function componentWillMount() {
		this.setState({
			currentOption: this.props.name
		});
	},

	render: function render() {

		return React.createElement(
			'button',
			{ className: 'dropdown-btn',
				type: 'button', onClick: this.props.toggleMenu },
			React.createElement(
				'span',
				{ className: 'dropdown-txt' },
				this.props.name
			),
			React.createElement('span', { className: 'dropdown-caret' })
		);
	}
});

var StatFilterMenu = React.createClass({
	displayName: 'StatFilterMenu',

	clickHandler: function clickHandler(e) {

		this.props.select(e.target.innerHTML);
		this.props.collapseMenu();

		this.props.chartRefresh(e.target.innerHTML, this.props.index);
	},

	render: function render() {

		var items = [],
		    className = this.props.displayed ? 'dropdown-menu displayed' : 'dropdown-menu';

		for (var i in this.props.menu) {
			items.push(React.createElement(StatFilterMenuItem, {
				key: i,
				clickEvt: this.clickHandler,
				name: this.props.menu[i] }));
		}

		return React.createElement(
			'ul',
			{ className: className },
			items
		);
	}
});

var StatFilterMenuItem = React.createClass({
	displayName: 'StatFilterMenuItem',

	render: function render() {
		return React.createElement(
			'li',
			{ onClick: this.props.clickEvt },
			this.props.name
		);
	}
});

var SideFoot = React.createClass({
	displayName: 'SideFoot',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'b12-col-md-12 b15-row-md-1 hdr-div hdr-div--txt-mid' },
			React.createElement('span', { className: 'ver-helper' }),
			React.createElement(
				'a',
				{ id: 'HOME-LINK', href: '' },
				'vjtw.org'
			)
		);
	}
});

ReactDOM.render(React.createElement(DashBoard, null), document.getElementById("CONTAINER"));
