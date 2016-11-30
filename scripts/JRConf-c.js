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
					"看見思法司法改革國是會議觀測站－委員名單"
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
				this.props.is_right ? React.createElement(JRConfNextPrevBar, {
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
				this.props.is_right ? React.createElement(JRConfNextPrevBar, {
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
			),
			React.createElement(
				"span",
				{ className: "warning" },
				"雷達圖數據是小編們依照角色學經歷背景的粗估，方便諸位速讀並博君一笑，如此已矣。"
			)
		);
	}
});

// People Stat
var JRConfBodyCellPeopleStat = React.createClass({
	displayName: "JRConfBodyCellPeopleStat",
	generatePics: function generatePics(data) {

		// Classify the types
		var types = function () {

			var _types = data.map(function (d) {
				return d.type;
			}),
			    selectedTypes = [];

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = _types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var t = _step.value;

					if (!selectedTypes.includes(t)) selectedTypes.push(t);
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

			return selectedTypes.map(function (t) {
				return { typeName: t, data: [] };
			});
		}();

		// Classify the data according to the selected types
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			var _loop = function _loop() {
				var d = _step2.value;

				var t = types.find(function (type) {
					return type.typeName == d.type;
				});

				t.data.push(d);
			};

			for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				_loop();
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

		var sequences = types.map(function (type, i) {

			var r = [React.createElement(
				"span",
				{ key: 0, className: "catname" },
				type.typeName,
				"："
			)],
			    count = 0;

			var testStyle = { color: "blue" };

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = type.data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var td = _step3.value;

					if (td.type === 'female' || td.gender === 'female') {
						r.push(React.createElement(
							"span",
							{ key: count + 1, className: "ele" },
							React.createElement("span", { className: "ver-helper" }),
							React.createElement("img", { src: "./src/female.png" }),
							React.createElement(
								"span",
								null,
								td.name
							)
						));
					} else if (td.type === 'male' || td.gender === 'male') {
						r.push(React.createElement(
							"span",
							{ key: count + 1, className: "ele" },
							React.createElement("span", { className: "ver-helper" }),
							React.createElement("img", { src: "./src/male.png" }),
							React.createElement(
								"span",
								null,
								td.name
							)
						));
					}
					count++;
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			r.push(React.createElement(
				"span",
				{ className: "statvalue", key: count + 1 },
				count,
				"人"
			));

			return r;
		});

		return sequences;
	},
	render: function render() {
		var _this = this;

		// let seqs = this.generatePics(this.props.data);
		var seqs = function () {

			var wrappedSeq = [],
			    sequences = _this.generatePics(_this.props.data);

			var k = 0;

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = sequences[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var s = _step4.value;

					wrappedSeq.push(React.createElement(
						"div",
						{ key: k, className: "statrow" },
						React.createElement(
							"span",
							{ className: "ver-helper" },
							" ",
							s
						)
					));
					k++;
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			return wrappedSeq;
		}();

		return React.createElement(
			"div",
			{ className: "statpanel" },
			React.createElement(
				"div",
				{ className: "stat-context" },
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
				)
			),
			React.createElement(
				"div",
				{ className: "stat-canvas" },
				React.createElement("div", { className: "statrow" }),
				seqs
			),
			this.props.is_right ? React.createElement(JRConfNextPrevBar, {
				is_first: this.props.is_first,
				prev_evt: this.props.prev_evt,
				is_last: this.props.is_last,
				next_evt: this.props.next_evt,
				current_slide_index: this.props.current_slide_index }) : null
		);
	}
});

//
var JRConfBodyCellScore = React.createClass({
	displayName: "JRConfBodyCellScore",
	render: function render() {

		return React.createElement(
			"div",
			{ className: "scorepanel" },
			React.createElement("span", { className: "ver-helper" }),
			React.createElement(
				"div",
				{ className: "score" },
				React.createElement(
					"h1",
					null,
					this.props.score_value
				)
			)
		);
	}
});

var JRSocialSocialPage = React.createClass({
	displayName: "JRSocialSocialPage",
	render: function render() {

		var facebookSocialPageStyle = { border: "none", overflow: "hidden" };

		return React.createElement(
			"div",
			{ className: "socialpage" },
			React.createElement("span", { className: "ver-helper" }),
			React.createElement(
				"div",
				{ className: "context" },
				React.createElement(
					"div",
					{ className: "title" },
					React.createElement(
						"h2",
						null,
						"請多關注我們：）"
					)
				),
				React.createElement("iframe", {
					src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvizjust&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=487648844706858",
					width: "340", height: "400", style: facebookSocialPageStyle, scrolling: "no",
					frameborder: "0", allowTransparency: "true" }),
				this.props.is_right ? React.createElement(JRConfNextPrevBar, {
					is_first: this.props.is_first,
					prev_evt: this.props.prev_evt,
					is_last: this.props.is_last,
					next_evt: this.props.next_evt,
					current_slide_index: this.props.current_slide_index }) : null
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
		    is_figure = null,
		    is_people_stat = null,
		    people_data = null,
		    is_score = null,
		    score_value = null,
		    is_social_page = null;

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
			is_people_stat = data.is_people_stat;
			people_data = data.people_data;
			is_score = data.is_score;
			score_value = data.score_value;
			is_social_page = data.is_social_page;
		}

		// The stack reorder: When the slide's type is person's slide.
		// If it is the radar cell, it should be pull down.
		// The figure, instead, should be push up.
		var cellClassName = "";

		if (this.props.is_person_slide && is_figure) cellClassName = "col-md-4 col-md-push-4 jrcf-article-cell";else if (this.props.is_person_slide && is_radar) cellClassName = "col-md-4 col-md-pull-4 jrcf-article-cell";else cellClassName = "col-md-4 jrcf-article-cell";

		return React.createElement(
			"div",
			{ className: cellClassName },
			is_figure ? React.createElement(JRConfBodyCellFigure, {
				is_right: this.props.is_right,
				fig_name: fig_name,
				img_path: img_path, img_credit: img_credit,
				title: title, position: position }) : null,
			is_desc ? React.createElement(JRConfBodyCellDesc, {
				is_right: this.props.is_right,
				is_first: this.props.is_first,
				prev_evt: this.props.prev_evt,
				is_last: this.props.is_last,
				next_evt: this.props.next_evt,
				current_slide_index: this.props.current_slide_index,
				title: title, context: context }) : null,
			is_radar ? React.createElement(JRConfBodyCellRadar, {
				is_right: this.props.is_right,
				fig_name: fig_name,
				radar_index: this.props.radar_index,
				radar_data: this.props.radar_data }) : null,
			is_people_stat ? React.createElement(JRConfBodyCellPeopleStat, {
				data: people_data,
				title: title,
				context: context,
				is_right: this.props.is_right,
				fig_name: fig_name,
				is_first: this.props.is_first,
				is_last: this.props.is_last,
				prev_evt: this.props.prev_evt,
				next_evt: this.props.next_evt,
				current_slide_index: this.props.current_slide_index }) : null,
			is_score ? React.createElement(JRConfBodyCellScore, {
				score_value: score_value }) : null,
			is_social_page ? React.createElement(JRSocialSocialPage, {
				is_right: this.props.is_right,
				is_first: this.props.is_first,
				is_last: this.props.is_last,
				prev_evt: this.props.prev_evt,
				next_evt: this.props.next_evt }) : null
		);
	}
});

var JRConfPrevBtn = React.createClass({
	displayName: "JRConfPrevBtn",
	render: function render() {

		var displayWords = '',
		    current_slide_index = this.props.current_slide_index;

		if (current_slide_index == 1 || current_slide_index == 2) displayWords = '上一篇概要';
		// else if (this.props.current_slide_index == 2)
		// 	displayWords = '';
		else displayWords = '上一位委員';

		return React.createElement(
			"div",
			{ className: this.props.is_first ? "prev hidden" : "prev",
				onClick: this.props.clickEvt },
			displayWords
		);
	}
});

var JRConfNextBtn = React.createClass({
	displayName: "JRConfNextBtn",
	render: function render() {

		var displayWords = '',
		    is_last = this.props.is_last;

		if (this.props.is_first) displayWords = '下一篇概要';else if (this.props.current_slide_index == 1) displayWords = '第一位委員';else if (is_last) displayWords = '最終頁';
		// else if (this.props.current_slide_index == )
		else displayWords = '下一位委員';

		return React.createElement(
			"div",
			{ className: is_last ? "next hidden" : "next",
				onClick: is_last ? null : this.props.clickEvt },
			displayWords
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
		var _this2 = this;

		this.loadJson(this.state.data_path).then(function (data) {

			var slide_data = data[_this2.state.slide_index],
			    radar_data = data.map(function (d, i) {

				if (d.left.is_radar) return d.left.radar_data;else return null;
			});

			_this2.setState({
				'slide_all_data': data,
				'slide_property': slide_data,
				'slide_max_number': data.length,
				'radar_data': radar_data,
				'radar_index': 0
			});
		});
	},
	render: function render() {

		var is_first = false,
		    is_last = false,
		    is_person_slide = false,
		    slide_index = this.state.slide_index,
		    slide_all_data = this.state.slide_all_data;

		if (slide_index === this.state.slide_max_number - 1) {
			is_last = true;
		} else if (slide_index === 0) {
			is_first = true;
		}

		// Check if the slide is for person introduction
		if (slide_all_data) if (slide_all_data[slide_index].type == 'person_slide') is_person_slide = true;

		return React.createElement(
			"article",
			{ className: "row jrcf-article" },
			React.createElement(JRConfBodyCell, {
				is_person_slide: is_person_slide,
				data: is_person_slide ? this.state.slide_property.middle : this.state.slide_property.left }),
			React.createElement(JRConfBodyCell, {
				is_person_slide: is_person_slide,
				radar_data: this.state.radar_data,
				radar_index: this.state.radar_index,
				data: is_person_slide ? this.state.slide_property.left : this.state.slide_property.middle }),
			React.createElement(JRConfBodyCell, {
				is_person_slide: is_person_slide,
				is_first: is_first,
				prev_evt: this.prev_slide,
				is_last: is_last,
				next_evt: this.next_slide,
				current_slide_index: this.state.slide_index,
				is_right: true,
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
					{ href: "https://www.facebook.com/yude.lin.754" },
					"Y.D. Lin"
				),
				",    ",
				React.createElement(
					"a",
					{ href: "https://www.facebook.com/profile.php?id=100000497148567&fref=ts" },
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
