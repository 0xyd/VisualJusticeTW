"use strict";

var r = React,
    rd = ReactDOM,
    rr = ReactRouter;

var About = r.createClass({
	render: function render() {
		return React.createElement(
			"div",
			null,
			"About"
		);
	}
});

var Repos = r.createClass({
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h2",
				null,
				"Repos"
			),
			React.createElement(
				"ul",
				null,
				React.createElement(
					"li",
					null,
					React.createElement(
						rr.Link,
						{ to: "/repos/reactjs/react-router" },
						"React Router"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						rr.Link,
						{ to: "/repos/facebook/react" },
						"React"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						rr.Link,
						{ to: "/repos/test/12345" },
						"Test"
					)
				)
			),
			this.props.children
		);
	}
});

var Repo = r.createClass({
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h2",
				null,
				this.props.params.repoName
			)
		);
	}
});

var Home = r.createClass({
	render: function render() {
		return React.createElement(
			"div",
			null,
			"Home"
		);
	}
});

// Link has a magic connection with Route.
var App = r.createClass({
	render: function render() {
		console.log(this.props.children);
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"React Router"
			),
			React.createElement(
				"ul",
				{ role: "nav" },
				React.createElement(
					"li",
					null,
					React.createElement(
						rr.Link,
						{ to: "/about", activeClassName: "active" },
						"About"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						rr.Link,
						{ to: "/repos", activeClassName: "active" },
						"Repos"
					)
				)
			),
			this.props.children || React.createElement(Home, null)
		);
	}
});

rd.render(React.createElement(
	rr.Router,
	{ history: rr.hashHistory },
	React.createElement(
		rr.Route,
		{ path: "/", component: App },
		React.createElement(
			rr.Route,
			{ path: "/repos", component: Repos },
			React.createElement(rr.Route, { path: "/repos/:userName/:repoName", component: Repo })
		),
		React.createElement(rr.Route, { path: "/about", component: About })
	)
), document.getElementById('app'));
