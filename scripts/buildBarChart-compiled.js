'use strict';

var DashBoard = React.createClass({
	displayName: 'DashBoard',

	graphs: function () {
		return {
			barGraph: new barGraphClass(),
			lineGraph: new lineGraphClass()
		};
	}(),

	componentDidMount: function componentDidMount() {
		// this.graphs.tip = new tipClass();
		// this.graphs.tip.appendDotMouseOver('本年執行人數');
		// this.graphs.tip.appendBarMouseOver('本年執行人數');
	},

	render: function render() {

		return React.createElement(
			'div',
			{ id: 'PANEL' },
			React.createElement(DashBoardSide, null),
			React.createElement(ChartPanel, {
				barGraph: this.graphs.barGraph,
				lineGraph: this.graphs.lineGraph })
		);
	}
});

var ChartPanel = React.createClass({
	displayName: 'ChartPanel',

	tip: new tipClass(),

	getInitialState: function getInitialState() {
		return {
			dataSource: '/correction/監獄人數概況.csv',
			dataOption: '本年執行人數',
			xAxis: '民國',
			yAxis: '人數(仟人)'
		};
	},

	componentDidMount: function componentDidMount() {

		var bG = this.props.barGraph,
		    lG = this.props.lineGraph,
		    t = this.tip;

		console.log(d3.select('#PANEL'));

		bG.initializeAPad().setChartSize().setOutPadding(10).setStep(10).drawingData('/correction/監獄人數概況.csv', '民國', '人數(仟人)', '本年執行人數').then(function (jsonOutput) {

			lG.inheritPad(bG.pad, bG.padHeight, bG.padWidth, bG.padPadding).setChartSize().plotBars(jsonOutput.data, jsonOutput.pad, null, jsonOutput.barWidth / 2).then(function (o) {

				lG.linePath = o.line;
				lG.lineDots = o.dots;
				lG.areaUnderLine = o.area;
				lG.hide().hideUnderArea();
				// whichDisplayed();

				t.appendDotMouseOver('本年執行人數');
				t.appendBarMouseOver('本年執行人數');
				console.log('finished drawing');
			});
		});
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
			{ className: 'b20-col-md-4 b12-row-md-12' },
			React.createElement(Logo, null),
			React.createElement(StatTitle, null),
			React.createElement(StatNav, null),
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
			React.createElement(StatFilter, null)
		);
	}
});

var StatFilter = React.createClass({
	displayName: 'StatFilter',

	getInitialState: function getInitialState() {
		return {

			current: {
				topic: '監獄人數概況',
				subTopic: '本年執行人數',
				filter: '總數',
				chartType: '長條圖'
			},
			filterNames: ['選擇主題', '選擇類別', '選擇成分', '選擇圖形'],

			menuDisplayedStatus: [false, false, false, false],
			// currentDisplayedMenuIndex: 0,

			fields: [{
				topic: '監獄人數概況',
				content: {
					subTopics: [{
						name: '本年執行人數',
						compos: ["總數"],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}, {
						name: '本年入監人數',
						compos: ["總數"],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}, {
						name: '新入監人數',
						compos: ["總數"],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}, {
						name: '本年出獄人數',
						compos: ["總數"],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}, {
						name: '本年年底留監人數',
						compos: ["總數"],
						availableChartTypes: ['長條圖', '折線圖', '面積圖']
					}]
				}
			}, {
				topic: '新入監資料概覽',
				content: {
					subTopics: []
				}
			}]
		};
	},

	refeshMenu: function refeshMenu(displayedMenuIndex) {

		var s = [false, false, false, false];

		s[displayedMenuIndex] = true;

		this.setState({
			menuDisplayedStatus: s
		});
	},

	render: function render() {

		var l = this.state.filterNames.length,
		    fieldsets = [],
		    c = this.state.current,
		    index = this.state.fields.findIndex(function (field, index) {
			if (field.topic === c.topic) return true;
		}),
		    topicList = this.state.fields.map(function (obj) {
			return obj.topic;
		}),
		    subTopicList = this.state.fields[index].content.subTopics.map(function (obj) {
			return obj.name;
		}),
		   

		// otherList contains the filters and avialable chart types
		otherList = this.state.fields[index].content.subTopics.find(function (obj) {
			if (obj.name === c.subTopic) return true;
		}),
		   

		// Mapping the state's current into an array
		currentStates = Object.keys(this.state.current).map(function (key) {
			return c[key];
		}),
		   

		// Mapping the list into the array for generating the menus
		menus = [topicList, subTopicList, otherList.compos, otherList.availableChartTypes];

		for (var i = 0; i < l; i++) {

			fieldsets.push(React.createElement(StatFilterField, {
				key: i,
				index: i,
				filterName: this.state.filterNames[i],
				fieldName: currentStates[i],
				fieldMenu: menus[i],
				clickEvt: this.refeshMenu,
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
		console.log('state filer field receives props');
		this.setState({
			isMenuDisplayed: nextProps.menuIsDisplayed
		});
	},

	// Click for displaying the hidden menu
	displayMenu: function displayMenu(e) {

		// Pass the index of the displayed menu to the parent
		this.props.clickEvt(this.state.menuIndex);

		this.setState({
			isMenuDisplayed: !this.state.isMenuDisplayed
		});
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
							clickEvt: this.displayMenu,
							name: this.state.selectedOption }),
						React.createElement(StatFilterMenu, {
							clickEvt: this.selectOption,
							displayed: this.state.isMenuDisplayed,
							menu: this.props.fieldMenu })
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
				type: 'button', onClick: this.props.clickEvt },
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

		this.props.clickEvt(e.target.innerHTML);
	},

	render: function render() {
		console.log('Menu Displayed:');
		console.log(this.props.displayed);

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
