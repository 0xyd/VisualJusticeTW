"use strict";

var Index = React.createClass({
	displayName: "Index",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "HOME" },
			React.createElement(IndexHeader, null),
			React.createElement(IndexSection, null)
		);
	}
});

/* Header for the index page. */
var IndexHeader = React.createClass({
	displayName: "IndexHeader",

	render: function render() {
		return React.createElement(
			"header",
			{ id: "HDR", className: "b20-col-md-4 b12-row-md-12 bd-right" },
			React.createElement(
				"div",
				{ id: "LOGO-WRAPPER", className: "b12-col-md-12 b15-row-md-5" },
				React.createElement("div", { id: "LOGO", className: "b12-col-md-12 b12-row-md-12" })
			),
			React.createElement(IndexHeaderNavList, null),
			React.createElement(IndexHeaderFoot, null),
			React.createElement(IndexHeaderSign, null)
		);
	}
});

var IndexHeaderNavList = React.createClass({
	displayName: "IndexHeaderNavList",

	getInitialState: function getInitialState() {

		return {
			nav: [React.createElement(
				"a",
				null,
				React.createElement("img", { src: "./src/aboutus.png" })
			), React.createElement(
				"a",
				null,
				React.createElement("img", { src: "./src/see.png" })
			), React.createElement(
				"a",
				null,
				React.createElement("img", { src: "./src/issue.png" })
			), React.createElement(
				"a",
				null,
				React.createElement("img", { src: "./src/work.png" })
			)]
		};
	},

	render: function render() {

		var listItems = [],
		    l = this.state.nav.length;

		for (var i = 0; i < l; i++) {
			listItems.push(React.createElement(IndexHeaderNavListItem, {
				key: i,
				link: this.state.nav[i] }));
		}return React.createElement(
			"nav",
			{ id: "NAV", className: "b12-col-md-12 b15-row-md-9" },
			React.createElement(
				"ul",
				{ className: "b12-col-md-12 b15-row-md-15" },
				listItems
			)
		);
	}
});

var IndexHeaderNavListItem = React.createClass({
	displayName: "IndexHeaderNavListItem",

	render: function render() {
		return React.createElement(
			"li",
			{ className: "nav-option b12-col-md-12 b12-row-md-2" },
			this.props.link
		);
	}
});

var IndexHeaderFoot = React.createClass({
	displayName: "IndexHeaderFoot",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "HDR-FOOTER", className: "b12-col-md-12 b15-row-md-1" },
			React.createElement(
				"a",
				{ id: "HOME-LINK", href: "" },
				"vjtw.org"
			)
		);
	}
});

var IndexHeaderSign = React.createClass({
	displayName: "IndexHeaderSign",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "SIGN" },
			React.createElement("img", { src: "./src/sign.png" })
		);
	}
});

var IndexSection = React.createClass({
	displayName: "IndexSection",

	getInitialState: function getInitialState() {

		return {
			divs: [{
				style: {
					zIndex: 1000
				},
				img: "./src/police.png",
				btnTxtImg: "./src/policeStatBtnName.png",
				infoTxtImg: "./src/police-2.png"
			}, {
				style: {
					zIndex: 900
				},
				img: "./src/prosecutor.png",
				btnTxtImg: "./src/proStatBtnName.png",
				infoTxtImg: "./src/justiceLaw86.png"
			}, {
				style: {
					zIndex: 800
				},
				img: "./src/justice.png",
				btnTxtImg: "./src/justiceStatBtnName.png",
				infoTxtImg: "./src/constitution-80.png"
			}, {
				style: {
					zIndex: 700
				},
				img: "./src/correction.png",
				btnTxtImg: "./src/corrStatBtnName.png",
				infoTxtImg: "./src/prison-1.png"
			}]
		};
	},

	render: function render() {

		var divs = [],
		    key = 0;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = this.state.divs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var div = _step.value;

				divs.push(React.createElement(IndexSectionDiv, {
					key: ++key,
					info: div.infoTxtImg,
					style: div.style,
					themeImg: div.img,
					btnTxt: div.btnTxtImg
				}));
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
			"section",
			{ id: "BODY", className: "b20-col-md-16 b12-row-md-12" },
			divs
		);
	}
});

var IndexSectionDiv = React.createClass({
	displayName: "IndexSectionDiv",

	// getInitialState: function() {

	// },

	render: function render() {

		return React.createElement(
			"div",
			{ id: "", className: "b12-col-md-3 b12-row-md-12 sect-part sect-part--box bd-right " },
			React.createElement(
				"div",
				{ className: "b12-col-md-12 b12-row-md-8 sect-part-imgwrapper" },
				React.createElement("img", { className: "sect-part-img", src: this.props.themeImg })
			),
			React.createElement(
				"div",
				{ className: "b12-col-md-12 b12-row-md-1 sect-part-btnwrapper" },
				React.createElement("span", { className: "ver-helper" }),
				React.createElement(
					"div",
					{ className: "sect-part-btn", href: "" },
					React.createElement(
						"a",
						null,
						React.createElement("img", { className: "sect-part-btn-img", src: this.props.btnTxt }),
						" "
					)
				)
			),
			React.createElement(
				"div",
				{ className: "b12-col-md-12 b12-row-md-3 sect-part-imgwrapper" },
				React.createElement("span", { className: "ver-helper" }),
				React.createElement(
					"div",
					{ className: "imgtxt-wrapper" },
					React.createElement("img", { className: "imgtxt", src: this.props.info })
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Index, null), document.getElementById('CONTAINER'));
