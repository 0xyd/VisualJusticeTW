var DashBoard = React.createClass({

	graphs: 
		(function() {
			return {
				barGraph: new barGraphClass(),
				lineGraph: new lineGraphClass(),
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
									"總數"
								],
								availableChartTypes: [
									'長條圖',
									'折線圖',
									'面積圖'
								]
							},
							{
								name: '本年入監人數',
								compos: [
									"總數"
								],
								availableChartTypes: [
									'長條圖',
									'折線圖',
									'面積圖'
								]
							},
							{
								name: '新入監人數',
								compos: [
									"總數"
								],
								availableChartTypes: [
									'長條圖',
									'折線圖',
									'面積圖'
								]
							},
							{
								name: '本年出獄人數',
								compos: [
									"總數"
								],
								availableChartTypes: [
									'長條圖',
									'折線圖',
									'面積圖'
								]
							},
							{
								name: '本年年底留監人數',
								compos: [
									"總數"
								],
								availableChartTypes: [
									'長條圖',
									'折線圖',
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

	componentDidMount: function() {
		// this.graphs.tip = new tipClass();
		// this.graphs.tip.appendDotMouseOver('本年執行人數');
		// this.graphs.tip.appendBarMouseOver('本年執行人數');
	},

	chartRefresh: function(inputStr = null, menuIndex = 0) {
		console.log('chart starts to refresh');

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

		// this.setState({
		// 	dataset: r.dataset,
		// 	topic: topic
		// });
	},

	componentWillReceiveProps: function(nextProps) {
		console.log('DashBoard should refresh');

	},

	shouldComponentUpdate: function() {
		return true
	},

	render: function() {

		return (
			<div id="PANEL">
				<DashBoardSide 
					chartRefresh={this.chartRefresh}
					indexDB={this.state.indexDB} />
				<ChartPanel 
					dataset={this.state.dataset}
					topic={this.state.topic}
					chartType={this.state.chartType}
					barGraph={this.graphs.barGraph} 
					lineGraph={this.graphs.lineGraph} />
			</div>
		)
	}
});

var ChartPanel = React.createClass({

	tip: new tipClass(),

	getInitialState: function() {
		return {
			sheetName: null,
			dataTopic: null,
			sheetUrl: null,
			chartAxes: null,
			chartType: null,

			dataSheets: [
				{
					name: '監獄人數概況',
					url: '/correction/監獄人數概況.csv',
					axes: {
						xAxis: '民國',
						yAxis: '人數(仟人)'
					}
				}
			]
		}
	},

	componentWillMount: function() {

		var tSheetName = this.props.dataset;

		var currentDataSheet = 
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

	componentDidMount: function() {

		let p = this.props,
			bG = p.barGraph,
			lG = p.lineGraph,
			t  = this.tip,
			chartTypeDisplay = this.chartTypeDisplay;

		
		bG.initializeAPad()
			.setChartSize()
			.setOutPadding(10)
			.setStep(10)
			.drawingData(
				this.state.sheetUrl, 
				this.state.chartAxes.xAxis,
				this.state.chartAxes.yAxis,
				this.state.dataTopic)
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
								).then(function(o) {

									lG.linePath = o.line;
									lG.lineDots = o.dots; 
									lG.areaUnderLine = o.area;
									// lG.hide().hideUnderArea();
									// whichDisplayed();
									chartTypeDisplay(p.chartType);


									t.appendDotMouseOver('本年執行人數');
									t.appendBarMouseOver('本年執行人數');
									
								});
			});

	},

	componentWillReceiveProps: function(nextProps) {
		console.log(nextProps);

		let i = 
			this.state.dataSheets
				.findIndex(
					function(d) {
						if (d.name === nextProps.dataset)
							return true
						});

		this.setState({
			sheetName: nextProps.dataset,
			dataTopic: nextProps.topic,
			chartType: nextProps.chartType,
			sheetUrl : this.state.dataSheets[i].url
		});
	},

	componentWillUpdate: function(nextProps, nextStates) {
		
		let lineGraph = this.props.lineGraph,
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
					lineGraph.plotBars(
							jsonOutput.data,
							jsonOutput.pad,
							jsonOutput.updatedBars, 
							jsonOutput.barWidth/2
						).then(function(o) {

							 lineGraph.linePath = o.line;
							 lineGraph.lineDots = o.dots;
							 lineGraph.areaUnderLine = o.area;

							 chartTypeDisplay(nextStates.chartType);
							 });
				});
				
	},

	chartTypeDisplay: function(chartType) {
		
		let b = this.props.barGraph,
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

	render: function() {
		return (
			<div id='DISPLAY_PANEL' className='b20-col-md-16'>

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
					chartRefresh={this.props.chartRefresh} 
					indexDB={this.props.indexDB} />
			</nav>
		)
	}
});


var StatFilter = React.createClass({

	getInitialState: function() {
		return {
			
			current: {
				dataset: '監獄人數概況',
				topic: '本年執行人數',
				filter: '總數',
				chartType: '長條圖'
			},
			filterNames: [
				'選擇主題',
				'選擇類別',
				'選擇成分',
				'選擇圖形'
			],
			menuDisplayedStatus: [
				false, false, false, false
			]
		}
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
			c = this.state.current,
			
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
				Object.keys(this.state.current)
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
		else return false
		
	},

	componentWillReceiveProps: function(nextProps) {
		
		this.setState({
			isMenuDisplayed: nextProps.menuIsDisplayed
		});
	},

	// Click for displaying the hidden menu
	toggleMenu: function(e) {
		console.log('toggle the menu');
		console.log(this.state.isMenuDisplayed);
		console.log(this.props);
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
								chartRefresh={this.props.chartRefresh}
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

		console.log('Menu render');
		console.log('Menu is displayed:' + this.props.displayed);

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