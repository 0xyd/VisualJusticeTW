"use strict";

var JRConfHeader = React.createClass({
	displayName: "JRConfHeader",
	render: function render() {
		return React.createElement(
			"header",
			{ className: "row jrcf-header" },
			React.createElement(
				"div",
				{ className: "col-md-12 title" },
				React.createElement(
					"span",
					null,
					"總統府司法改革國是會議觀測站－委員名單"
				)
			)
		);
	}
});

// For the figure
var JRConfBodyCellFigure = React.createClass({
	displayName: "JRConfBodyCellFigure",
	render: function render() {

		return React.createElement(
			"div",
			{ className: "row-col-md-12 figure " },
			React.createElement("span", { className: "ver-helper" }),
			React.createElement(
				"div",
				{ className: "figure-context" },
				React.createElement(
					"div",
					{ className: "image" },
					React.createElement("img", { src: this.props.img_path })
				),
				React.createElement(
					"div",
					{ className: "image-info" },
					React.createElement(
						"h5",
						{ className: "credit" },
						" Photo Credit: ",
						this.props.img_credit,
						" "
					),
					React.createElement(
						"h2",
						null,
						this.props.fig_name
					),
					React.createElement(
						"h3",
						null,
						this.props.title
					),
					React.createElement(
						"h4",
						null,
						this.props.position
					)
				),
				this.props.is_left ? React.createElement(JRConfNextPrevBar, {
					is_first: this.props.is_first,
					prev_evt: this.props.prev_evt,
					is_last: this.props.is_last,
					next_evt: this.props.next_evt,
					current_slide_index: this.props.current_slide_index }) : null
			)
		);
	}
});

// For the description
var JRConfBodyCellDesc = React.createClass({
	displayName: "JRConfBodyCellDesc",
	render: function render() {
		return React.createElement(
			"div",
			{ className: "row-col-md-12 desc" },
			React.createElement(
				"div",
				{ className: "desc-context" },
				React.createElement(
					"div",
					{ className: "title" },
					React.createElement(
						"h2",
						null,
						this.props.title
					)
				),
				React.createElement(
					"div",
					{ className: "context" },
					this.props.context
				),
				this.props.is_left ? React.createElement(JRConfNextPrevBar, {
					is_first: this.props.is_first,
					prev_evt: this.props.prev_evt,
					is_last: this.props.is_last,
					next_evt: this.props.next_evt,
					current_slide_index: this.props.current_slide_index }) : null
			)
		);
	}
});

// For Radar data
var JRConfBodyCellRadar = React.createClass({
	displayName: "JRConfBodyCellRadar",
	getInitialState: function getInitialState() {

		return {
			radar: new Radar('#Radar-Canvas', 330, 330, 1.12)
		};
	},
	componentDidMount: function componentDidMount() {

		console.log('check:');
		console.log(this.props.radar_data);

		if (this.props.radar_data) {
			this.state.radar.importData(this.props.radar_data.filter(function (d) {
				return d;
			})).draw().hightlightRadarArea(0);
		}
	},
	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {

		if (this.props.radar_data) this.state.radar.hightlightRadarArea(nextProps.radar_index - 2);
	},
	render: function render() {

		return React.createElement(
			"div",
			{ className: "canvas-container" },
			React.createElement("span", { className: "ver-helper" }),
			React.createElement(
				"div",
				{ id: "Radar-Canvas" },
				React.createElement(
					"h3",
					{ className: "canvas-title" },
					this.props.fig_name
				)
			)
		);
	}
});

var JRConfBodyCell = React.createClass({
	displayName: "JRConfBodyCell",
	render: function render() {

		var data = this.props.data,
		   

		// The below are properties for data setting.
		title = null,
		    context = null,
		    img_path = null,
		    img_credit = null,
		    position = null,
		    fig_name = null,
		    is_radar = null,
		    is_desc = null,
		    is_figure = null;

		if (data) {

			title = data.title;
			context = data.context;
			img_path = data.img_path;
			img_credit = data.img_credit_by;
			position = data.position;
			fig_name = data.fig_name;
			is_radar = data.is_radar;
			is_desc = data.is_desc;
			is_figure = data.is_figure;
		}

		return React.createElement(
			"div",
			{ className: "col-md-4 jrcf-article-cell" },
			is_figure ? React.createElement(JRConfBodyCellFigure, {
				is_left: this.props.is_left,
				fig_name: fig_name,
				img_path: img_path, img_credit: img_credit,
				title: title, position: position }) : null,
			is_desc ? React.createElement(JRConfBodyCellDesc, {
				is_left: this.props.is_left,
				is_first: this.props.is_first,
				prev_evt: this.props.prev_evt,
				is_last: this.props.is_last,
				next_evt: this.props.next_evt,
				current_slide_index: this.props.current_slide_index,
				title: title, context: context }) : null,
			is_radar ? React.createElement(JRConfBodyCellRadar, {
				is_left: this.props.is_left,
				fig_name: fig_name,
				radar_index: this.props.radar_index,
				radar_data: this.props.radar_data }) : null
		);
	}
});

var JRConfPrevBtn = React.createClass({
	displayName: "JRConfPrevBtn",
	render: function render() {

		return React.createElement(
			"div",
			{ className: this.props.is_first ? "prev hidden" : "prev",
				onClick: this.props.clickEvt },
			this.props.current_slide_index == 1 ? "返回介紹頁" : "上一位委員"
		);
	}
});

var JRConfNextBtn = React.createClass({
	displayName: "JRConfNextBtn",
	render: function render() {

		return React.createElement(
			"div",
			{ className: this.props.is_last ? "next hidden" : "next",
				onClick: this.props.clickEvt },
			this.props.current_slide_index == 0 ? "瀏覽委員" : "下一位委員"
		);
	}
});

var JRConfNextPrevBar = React.createClass({
	displayName: "JRConfNextPrevBar",
	render: function render() {

		return React.createElement(
			"div",
			{ id: "PrevNextBtnBar" },
			React.createElement(JRConfPrevBtn, {
				is_first: this.props.is_first,
				clickEvt: this.props.prev_evt,
				current_slide_index: this.props.current_slide_index }),
			React.createElement(JRConfNextBtn, {
				is_last: this.props.is_last,
				is_first: this.props.is_first,
				clickEvt: this.props.next_evt,
				current_slide_index: this.props.current_slide_index })
		);
	}
});

var JRConfBody = React.createClass({
	displayName: "JRConfBody",
	next_slide: function next_slide() {

		var index = this.state.slide_index;

		this.setState({
			'slide_index': index + 1,
			'radar_index': this.state.radar_index + 1,
			'slide_property': this.state.slide_all_data[index + 1]
		});
	},
	prev_slide: function prev_slide() {

		var index = this.state.slide_index;

		this.setState({
			'slide_index': index - 1,
			'radar_index': this.state.radar_index - 1,
			'slide_property': this.state.slide_all_data[index - 1]
		});
	},
	loadJson: function loadJson(data_path) {

		var p = new Promise(function (resolve, reject) {

			d3.json(data_path).get(function (error, data) {
				resolve(data);
			});
		});

		return p;
	},
	getInitialState: function getInitialState() {

		return {
			slide_index: 0,
			slide_all_data: null,
			slide_max_number: null,
			slide_property: '',
			radar_data: null,
			radar_index: null,
			data_path: './JRConf/commitee.json'
		};
	},
	componentDidMount: function componentDidMount() {
		var _this = this;

		this.loadJson(this.state.data_path).then(function (data) {

			var slide_data = data[_this.state.slide_index],
			    radar_data = data.map(function (d, i) {

				if (d.left.is_radar) return d.left.radar_data;else return null;
			});
			// .filter(function(d, i) { return d });

			console.log(radar_data);

			_this.setState({
				'slide_all_data': data,
				'slide_property': slide_data,
				'slide_max_number': slide_data.length,
				'radar_data': radar_data,
				'radar_index': 0
			});
		});
	},
	render: function render() {

		var is_first = false,
		    is_last = false;

		if (this.state.index === this.state.slide_max_number - 1) is_last = true;else if (this.state.slide_index === 0) is_first = true;

		return React.createElement(
			"article",
			{ className: "row jrcf-article" },
			React.createElement(JRConfBodyCell, {
				radar_data: this.state.radar_data,
				radar_index: this.state.radar_index,
				data: this.state.slide_property.left }),
			React.createElement(JRConfBodyCell, {
				data: this.state.slide_property.middle }),
			React.createElement(JRConfBodyCell, {
				is_first: is_first,
				prev_evt: this.prev_slide,
				is_last: is_last,
				next_evt: this.next_slide,
				current_slide_index: this.state.slide_index,
				is_left: true,
				data: this.state.slide_property.right })
		);
	}
});

var JRConfFooter = React.createClass({
	displayName: "JRConfFooter",
	render: function render() {

		var facebookLikeStyle = {
			border: 'none',
			overflow: 'hidden'
		};

		return React.createElement(
			"footer",
			{ className: "row" },
			React.createElement("span", { className: "ver-helper" }),
			React.createElement("iframe", {
				src: "https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fvizjust%2F&width=117&layout=button_count&action=like&size=small&show_faces=true&share=true&height=46&appId=487648844706858",
				width: "150", height: "20", style: facebookLikeStyle,
				scrolling: "no", frameborder: "0", allowTransparency: "true" }),
			React.createElement(
				"a",
				{ className: "github-button",
					href: "https://github.com/yudazilian/VisualJusticeTW",
					"data-icon": "octicon-star", "data-style": "mega",
					"data-count-href": "/yudazilian/VisualJusticeTW/stargazers",
					"data-count-api": "/repos/yudazilian/VisualJusticeTW#stargazers_count",
					"data-count-aria-label": "# stargazers on GitHub",
					"aria-label": "Star yudazilian/VisualJusticeTW on GitHub" },
				"Star"
			),
			React.createElement(
				"span",
				{ className: "signature" },
				"Credit BY:    ",
				React.createElement(
					"a",
					null,
					"Y.D. Lin"
				),
				",    ",
				React.createElement(
					"a",
					null,
					"陳乃瑜"
				),
				" & 成員們 @",
				React.createElement(
					"a",
					{ href: "http://vizjust.tw" },
					"看見思法"
				)
			)
		);
	}
});

// let JRSocialSocialPage = React.createClass({

// });

var JRConf = React.createClass({
	displayName: "JRConf",
	render: function render() {
		return React.createElement(
			"div",
			{ id: "JRCF-root", className: "row" },
			React.createElement(JRConfHeader, null),
			React.createElement(JRConfBody, null),
			React.createElement(JRConfFooter, null)
		);
	}
});

ReactDOM.render(React.createElement(JRConf, null), document.getElementById('volume'));
