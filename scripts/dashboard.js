// working-spot-2: Import data from different sources according to the env.
window.isLocal = 
	document.URL.match(/127.0.0.1/)[0] === '127.0.0.1' ? true : false;

// To access the remove csv sources.
window.query = '&tqx=out:csv';
window.googleSheet = 'https://spreadsheets.google.com/tq?';


var DashBoard = React.createClass({

	graphs: 
		(function() {
			return {
				barGraph: new barGraphClass(),
				lineGraph: new lineGraphClass(),
				ringGraph: new ringGraphClass()
			}
		})(),

	getInitialState: function() {
		return {
			dataset: null,
			topic: null,
			chartType: null,

			indexDB: [
				{
					dataset: '監獄人數概況',
					content: {
						topics: [
							{
								name: '本年執行人數',
								compos: [
									'總數'
								],
								availableChartTypes: [
									'長條圖',
									'走勢',
									'面積圖'
								]
							},
							{
								name: '本年入監人數',
								compos: [
									'總數'
								],
								availableChartTypes: [
									'長條圖',
									'走勢',
									'面積圖'
								]
							},
							{
								name: '新入監人數',
								compos: [
									'總數'
								],
								availableChartTypes: [
									'長條圖',
									'走勢',
									'面積圖'
								]
							},
							{
								name: '本年出獄人數',
								compos: [
									'總數'
								],
								availableChartTypes: [
									'長條圖',
									'走勢',
									'面積圖'
								]
							},
							{
								name: '本年年底留監人數',
								compos: [
									'總數'
								],
								availableChartTypes: [
									'長條圖',
									'走勢',
									'面積圖'
								]
							}
						]
					}
				},
				{
					dataset: '新入監資料概覽',
					content: {
						topics: [
							{
								name: '民國75年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
								]
							},
							{
								name: '民國76年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
								]
							},
							{
								name: '民國77年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
								]
							},
							{
								name: '民國78年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
								]
							},
							{
								name: '民國79年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
								]
							},
							{
								name: '民國80年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
								]
							},
							{
								name: '民國81年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
								]
							},
							{
								name: '民國82年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
								]
							},
							{
								name: '民國83年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
								]
							},
							{
								name: '民國84年',
								compos: [
									'總覽',
									'新入監前家庭狀況',
									'新入監前犯罪次數與種類',
									'新入監前教育程度',
									'新入監年齡統計'
								],
								availableChartTypes: [
									'圓環圖'
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
		}
	},

	componentWillMount: function() {
		this.setState({
			dataset: '監獄人數概況',
			topic: '本年執行人數',
			chartType: '長條圖'
		});
	},

	chartRefresh: function(inputStr = null, menuIndex = 0) {

		if (menuIndex === 0) {

			let r = this.state.indexDB.find(
				function(d) {
					if (d.dataset === inputStr) 
						return true
					});
			
			this.setState({
				dataset: r.dataset,
				topic: r.content.topics[0].name
			});
			
		} else if (menuIndex === 1) {

			let state = this.state,

				// Find out the index of current selected dataset.
				cDatasetIdx = 
					findCurrentDatasetIndex(this.state),
			
			    r = 
					this.state.indexDB[cDatasetIdx].content.topics
						.find(function(d) {
							if (d.name === inputStr)
								return true
					});

			this.setState({ topic: r.name });

		} else if (menuIndex === 2) {




		} else if (menuIndex === 3) {

			let cDatasetIdx = 
					findCurrentDatasetIndex(this.state),
				cTopicIdx   = 
					findCurrentTopicIndex(this.state, cDatasetIdx),

				r = this.state.indexDB[cDatasetIdx]
					.content.topics[cTopicIdx].availableChartTypes
						.find(function(d) {
							if (d === inputStr) return true
						});

			this.setState({ chartType: r });
		}

		// Find out the index of current selected dataset.
		function findCurrentDatasetIndex(s) {
			var index = 
				s.indexDB.findIndex(function(d) {
					if (d.dataset === s.dataset)
						return true
				});
			return index
		}

		function findCurrentTopicIndex(s, datasetIdx) {
			var index = 
				s.indexDB[datasetIdx].content.topics.findIndex(function(d) {
					if (d.name === s.topic) return true
				});
			return index
		}
	},

	componentWillReceiveProps: function(nextProps) {
	},

	shouldComponentUpdate: function() {
		return true
	},

	render: function() {

		return (
			<div id="PANEL">
				<DashBoardSide 
					dataset={this.state.dataset}
					chartRefresh={this.chartRefresh}
					indexDB={this.state.indexDB} />
				<ChartPanelWrapper 
					dataset={this.state.dataset}
					topic={this.state.topic}
					chartType={this.state.chartType}
					barGraph={this.graphs.barGraph} 
					lineGraph={this.graphs.lineGraph}
					ringGraph={this.graphs.ringGraph} />
			</div>
		)
	}
});

var ChartPanelWrapper = React.createClass({
	render: function() {
		return (
			<div id='DISPLAY_PANEL_WRAPPER' className='b20-col-md-16'>
				<ChartPanel
					dataset={this.props.dataset}
					topic={this.props.topic}
					chartType={this.props.chartType}
					barGraph={this.props.barGraph} 
					lineGraph={this.props.lineGraph}
					ringGraph={this.props.ringGraph} />
			</div>
		)
	}
});

var ChartPanel = React.createClass({

	tip: new tipClass(),

	_chartGroup_1: (function() {
		const s = new Set(['長條圖', '走勢', '面積圖']);
		return s
	})(),
	_chartGroup_2: (function() {
		const s = new Set(['圓環圖']);
		return s
	})(),

	getInitialState: function() {
		return {
			sheetName: null,
			dataTopic: null,
			sheetUrl : null,
			chartAxes: null,
			chartType: null,

			dataSheets: [
				{
					name: '監獄人數概況',
					// working-spot-2
					url: (function() {
						if (isLocal)
							return '/correction/監獄人數概況.csv'
						else
							return window.googleSheet+'1zUyMPJbbW0GZ6KGwD-tCVSSHDlTDECX6s3vPnGJmP28'+query
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
					// working-spot-2
					// urls: [
					// 	'/correction/新入監前家庭狀況.csv', 
					// 	'/correction/新入監犯罪次數與種類.csv',
					// 	'/correction/新入監前教育程度.csv',
					// 	'/correction/歷年新入監年齡歷年統計.csv' 
					// ]
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
								// '/correction/新入監前家庭狀況.csv', 
								// '/correction/新入監犯罪次數與種類.csv',
								// '/correction/新入監前教育程度.csv',
								// '/correction/歷年新入監年齡歷年統計.csv' 
							])
						else {
							let urls = [
								{
									name: '新入監前家庭狀況',
									url : window.googleSheet+'1CvwvOSmEV681gY9GBFdQdGT9IpM3oH9ttfPmVTCshsg'+window.query
								},
								{
									name: '新入監犯罪次數與種類.',
									url : window.googleSheet+'17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg'+window.query
								},
								{
									name: '新入監前教育程度',
									url : window.googleSheet+'1qz5R2oAgh-KGjxIPZrXUMrUeeRGnVwkLDWzjnlzoSV8'+window.query
								},
								{
									name: '歷年新入監年齡歷年統計',
									url : window.googleSheet+'1IyFpSljBLk6XrP59di75M5Xy7lGd0KqEicraZCHCt-4'+window.query
								}
							];
							return urls
						}
					})()
				}
			]
		}
	},

	componentWillMount: function() {

		let tSheetName = this.props.dataset;

		let currentDataSheet = 
			this.state.dataSheets
				.find(function(sheet) {
					if ( sheet.name === tSheetName )
						return sheet
				});
			
		this.setState({
			sheetName: currentDataSheet.name,
			sheetUrl : currentDataSheet.url,
			chartAxes: currentDataSheet.axes,
			dataTopic: this.props.topic,
			chartType: this.props.chartType
		});
	},

	// The barchart is the default chart we render
	componentDidMount: function() {
		this.initBarChart();
	},

	componentWillReceiveProps: function(nextProps) {

		let i = 
			this.state.dataSheets
				.findIndex(
					function(d) {
						if (d.name === nextProps.dataset)
							return true
						});

		// Check the chart types whether it is one of '長條圖', '走勢', '面積圖'
		if (this._chartGroup_1.has(nextProps.chartType)) {
			this.setState({
				sheetName: nextProps.dataset,
				dataTopic: nextProps.topic,
				chartType: nextProps.chartType,
				sheetUrl : this.state.dataSheets[i].url
			});
		} else if (this._chartGroup_2.has(nextProps.chartType)) {
			this.setState({
				sheetName: nextProps.dataset,
				dataTopic: nextProps.topic,
				chartType: nextProps.chartType,
				sheetUrl : this.state.dataSheets[i].url
			});
		}
	},

	componentWillUpdate: function(nextProps, nextStates) {

		var self = this;

		// Initial the data when user switches to dataSheet 0
		if (this.props.dataset !== nextProps.dataset && 
			nextStates.sheetName === this.state.dataSheets[0].name) {
			console.log('init the bar chart');
			d3.select('#SKETCHPAD').remove();

			// Remove the stats and percentage boards of ringGraph.
			nextProps.ringGraph.removeBoards();

			// Clear the old setting of the previous
			nextProps.lineGraph.empty();
			this.initBarChart(nextProps, nextStates);

		// Initial the data when user switches to dataSheet[1] (新入監人數概況)
		} else if (this.props.dataset !== nextProps.dataset && 
			nextStates.sheetName === this.state.dataSheets[1].name) {
			console.log('init a ring chart');
			d3.select('#SKETCHPAD').remove();
			
			// Clear the old rings for the new ones.
			nextProps.ringGraph.resetRings();

			this.initRingChart();
		}
		// Show the update results of to dataSheet[0] (監獄)
		else if (nextProps.dataset === this.state.dataSheets[0].name) {
			console.log('update the bar chart');
			console.log(nextProps);
			let lG = this.props.lineGraph,
				chartTypeDisplay = this.chartTypeDisplay;

			if (nextProps.chartType !== '長條圖') 
				this.props.barGraph.bePhantom();

			this.props.barGraph
				.update(
					nextStates.sheetUrl,
					this.state.chartAxes.xAxis,
					this.state.chartAxes.yAxis, 
					nextStates.dataTopic
					)
				.then(function(jsonOutput) {
					
					lG.plotBars(
						jsonOutput.data,
						jsonOutput.pad,
						jsonOutput.updatedBars, 
						jsonOutput.barWidth/2
					).then(function(o) {

						lG.linePath = o.line;
						lG.lineDots = o.dots;
						lG.areaUnderLine = o.area;
						
						// Append new hover listeners.
						self.tip.appendDotMouseOver(nextProps.topic);
						self.tip.appendBarMouseOver(nextProps.topic);

						// working-spot-1: Event lines developement.
						lG.drawDivideLine();
						lG.initInfoBoard();

						chartTypeDisplay(nextStates.chartType);
					});
				});
		// Show the update results of to dataSheet 1
		} else if (nextProps.dataset === this.state.dataSheets[1].name) {
			console.log('update the ring chart');

			let yr = parseInt(nextProps.topic.match(/\d+/));
			
			this.props.ringGraph
				.selectROCYr(yr)
				.updateRings();
		} 
	},

	initBarChart: function(nextProps, nextStates) {

		let self = this,
			bG = nextProps ? nextProps.barGraph : this.props.barGraph,
			lG = nextProps ? nextProps.lineGraph : this.props.lineGraph,
			t  = this.tip,
			chartTypeDisplay = this.chartTypeDisplay;

		bG.initializeAPad()
			.setChartSize().setOutPadding(10).setStep(10)
			.drawingData(
				nextStates ? nextStates.sheetUrl : this.state.sheetUrl, 
				this.state.chartAxes.xAxis,
				this.state.chartAxes.yAxis,
				nextStates ? nextStates.dataTopic: this.state.dataTopic
				)
					.then(function(jsonOutput) {

						// Initialize the tips 
						t.initTips();

						lG.inheritPad(
							bG.pad, 
							bG.padHeight, 
							bG.padWidth, 
							bG.padPadding
							)
							.setChartSize()
								.plotBars(
									jsonOutput.data,
									jsonOutput.pad, 
									null,
									jsonOutput.barWidth/2
								)
								.then(function(o) {

									lG.linePath = o.line;
									lG.lineDots = o.dots; 
									lG.areaUnderLine = o.area;

									chartTypeDisplay(self.props.chartType);

									t.appendDotMouseOver('本年執行人數');
									t.appendBarMouseOver('本年執行人數');
									
								});
			});
	},

	initRingChart: function() {

		let rG = this.props.ringGraph;

		rG.initializeAPad()
			.init()
				.selectROCYr(75)
					.drawMultiRings(
						this.state.dataSheets[1].urls);

	},

	chartTypeDisplay: function(chartType) {
		
		let b = this.props.barGraph,
			l = this.props.lineGraph;

		if (chartType === "長條圖") {
			if (b.isInvisible) b.beVisible();
			l.hide().hideUnderArea();
		} else if (chartType === "走勢") {
			l.beDisplayed().hideUnderArea();
			b.hide();
		} else if (chartType === "面積圖") {
			l.displayUnderArea().hide();
			b.hide();
		}
	},

	render: function() {
		return (
			<div id='DISPLAY_PANEL' className='b20-col-md-20'>

			</div>
		)
	}
});

var DashBoardSide = React.createClass({
	render: function() {
		return(
			<header id="DASHBOARD_HDR" className="b20-col-md-4 b12-row-md-12">
				<Logo />
				<StatTitle />
				<StatNav 
					dataset={this.props.dataset}
					chartRefresh={this.props.chartRefresh} 
					indexDB={this.props.indexDB}/>
				<SideFoot />
			</header>
		)
	}
});

var Logo = React.createClass({
	render: function() {
		return (
			<div id="LOGO-WRAPPER" className="b12-col-md-12 b15-row-md-5 hdr-div">
				<div id="LOGO" className="b12-col-md-12 b12-row-md-12"></div>
			</div>
		)
	}
});

var StatTitle = React.createClass({
	render: function() {
		return (
			<div className="b12-col-md-12 b15-row-md-1 hdr-div">
				<img id="TITLE" src="./src/correctStatTitle.png" />
			</div>
		)
	}
});

var StatNav = React.createClass({
	render: function() {
		return (
			<nav id="NAVI" className="b12-col-md-12 b15-row-md-8 hdr-div">
				<StatFilter 
					dataset={this.props.dataset}
					chartRefresh={this.props.chartRefresh} 
					indexDB={this.props.indexDB} />
			</nav>
		)
	}
});


var StatFilter = React.createClass({

	initialValues: (function() {
		// Initail the start states when every thime that theme changes.
		const initialDefaults = [
			{
				dataset  : '監獄人數概況',
				topic    : '本年執行人數',
				filter   : '總數',
				chartType: '長條圖'  
			},
			{
				dataset  : '新入監資料概覽',
				topic    : '民國75年',
				filter   : '總覽',
				chartType: '圓環圖'  
			}
		];
		return initialDefaults
	})(),

	getInitialState: function() {
		return {

			filterNames: [
				'選擇主題',
				'選擇類別',
				'選擇成分',
				'選擇圖形'
			],

			filterValues: {
				dataset  : null,
				topic    : null,
				filter   : null,
				chartType: null
			},

			menuDisplayedStatus: [
				false, false, false, false
			]
		}
	},

	componentWillMount: function() {
		
		this.setState({
			filterValues: this.initialValues[0]
		});
	},

	componentWillReceiveProps: function(nextProps) {
		if (nextProps.dataset === '監獄人數概況') 
			this.setState({ filterValues: this.initialValues[0] });
		else if (nextProps.dataset === '新入監資料概覽') 
			this.setState({ filterValues: this.initialValues[1] });
	},

	expandMenu: function(menuIndex) {

		var s = [false, false, false, false];

		s[menuIndex] = true;

		this.setState({
			menuDisplayedStatus: s
		});
	},

	collapseMenu: function() {
		this.setState({ 
			menuDisplayedStatus: 
				[false, false, false, false] 
			});
	},

	render: function() {

		var l = this.state.filterNames.length,
			fieldsets = [],
			c = this.state.filterValues,
			
			// index is designed for appointing the wanting object
			index = 
				this.props.indexDB.findIndex(
					function(field, index) {
						if ( field.dataset===c.dataset ) return true 
					}),

			datasetList = 
				this.props.indexDB.map(function(obj) { return obj.dataset }),

			
			topicList = 
				this.props.indexDB[index]
					.content.topics.map(
						function(obj) { return obj.name }),

			// otherList contains the filters and avialable chart types
			otherList = 
				this.props.indexDB[index]
					.content.topics.find(
						function(obj) { 
							if (obj.name === c.topic)
								return true
						}),

			// Mapping the state's current into an array
			currentStates = 
				Object.keys(this.state.filterValues)
					.map(function(key) { return c[key] }),

			// Mapping the list into the array for generating the menus
			menus = 
				[datasetList, topicList, otherList.compos, otherList.availableChartTypes];

		for (let i=0;i<l;i++) {

			fieldsets.push(
				<StatFilterField 
					key={i}
					index={i}
					filterName={this.state.filterNames[i]} 
					fieldName={currentStates[i]}
					fieldMenu={menus[i]}
					expandMenu={this.expandMenu}
					collapseMenu={this.collapseMenu}
					chartRefresh={this.props.chartRefresh}
					menuIsDisplayed={this.state.menuDisplayedStatus[i]}
					/>
			);
		}
		
		return (
			<form id="FILTER" className="b15-row-md-15">
				<div id="FILTER-TITLE" className="b15-row-md-1">
					<span className="ver-helper"></span>
					<span style={{verticalAlign: 'middle'}}>資料選擇</span>
				</div>
				<div className="b12-col-md-12 b15-row-md-14">
					{ fieldsets }
				</div>
			</form>
		)
	}
});

var StatFilterField = React.createClass({

	getInitialState: function() {
		return {
			menuIndex: null,
			isMenuDisplayed: null,
			selectedOption: null
		}
	},

	componentWillMount: function() {
		this.setState({
			menuIndex: this.props.index,
			isMenuDisplayed: this.props.menuIsDisplayed,
			selectedOption: this.props.fieldName
		});
	},

	shouldComponentUpdate: function(nextProps, nextStates) {
		
		if ( this.state.isMenuDisplayed !== nextStates.isMenuDisplayed ) return true
		else if ( this.state.selectedOption !== nextStates.selectedOption ) return true

		// Update the whole default settings displayed after the theme is changed. 
		// Ex: '監獄人數概況' => '新入監資料概覽'
		else if ( this.props.fieldName !== nextProps.fieldName) return true
		else return false
	},

	componentWillReceiveProps: function(nextProps) {

		// Updated the selected item in button after a theme changed
		if (this.props.fieldName !== nextProps.fieldName) 
			this.setState({ selectedOption: nextProps.fieldName });
		else 
			this.setState({ isMenuDisplayed: nextProps.menuIsDisplayed });
	},

	// Click for displaying the hidden menu
	toggleMenu: function(e) {
		
		if ( this.state.isMenuDisplayed )
			this.props.collapseMenu();
		else 
			// Pass the index of the displayed menu to the parent
			this.props.expandMenu(this.state.menuIndex);
	},

	// Click for updating the seleted option on the button
	selectOption: function(optionStr) {

		this.setState({
			isMenuDisplayed: !this.state.isMenuDisplayed,
			selectedOption: optionStr
		});
	},

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
							<StatFilterBtn 
								index={ this.state.menuIndex }
								toggleMenu={ this.toggleMenu } 
								name={ this.state.selectedOption }/>
							<StatFilterMenu 
								select={ this.selectOption }
								chartRefresh={ this.props.chartRefresh }
								displayed={ this.state.isMenuDisplayed }
								menu={ this.props.fieldMenu }
								collapseMenu={ this.props.collapseMenu }
								index={ this.state.menuIndex }/>
						</div>
					</div>
				</div>
			</fieldset>
		)
	}
});

var StatFilterBtn = React.createClass({

	getInitialState: function() {
		return {
			currentOption: null
		}
	},

	componentWillMount: function() {
		this.setState({
			currentOption: this.props.name
		});
	},

	render: function() {

		return (
			<button className="dropdown-btn" 
					type="button" onClick={ this.props.toggleMenu }>
				<span className="dropdown-txt">{ this.props.name }</span>
				<span className="dropdown-caret"></span>
			</button>
		)
	}
});

var StatFilterMenu = React.createClass({

	clickHandler: function(e) {

		this.props.select(e.target.innerHTML);
		this.props.collapseMenu();

		this.props.chartRefresh(
			e.target.innerHTML, 
			this.props.index
		);
	},

	render: function() {

		var items = [],
			className = 
				this.props.displayed ?
					'dropdown-menu displayed': 'dropdown-menu';

		for (let i in this.props.menu) {
			items.push(
				<StatFilterMenuItem 
					key={i} 
					clickEvt={ this.clickHandler }
					name={ this.props.menu[i] }/>);
		}

		return (
			<ul className={ className } >
				{ items }
			</ul>
		)
	}
});

var StatFilterMenuItem = React.createClass({
	render: function() {
		return (
			<li onClick={ this.props.clickEvt }>
				{ this.props.name }
			</li>
		)
	}
});

var SideFoot = React.createClass({
	render: function() {
		return (
			<div className="b12-col-md-12 b15-row-md-1 hdr-div hdr-div--txt-mid">
				<span className="ver-helper"></span>
				<a id="HOME-LINK" href="">vjtw.org</a>
			</div>
		)
	}
});

ReactDOM.render(<DashBoard />, document.getElementById("CONTAINER"));