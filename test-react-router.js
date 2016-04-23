var r  = React,
	rd = ReactDOM,
	rr = ReactRouter;

var About = r.createClass({
	render: function() {
		return (
			<div>About</div>
		)
	}
});

var Repos = r.createClass({
	render: function() {
		return (       
			<div>         
				<h2>Repos</h2>         
				{/* add some links */}         
				<ul>           
					<li>
						<rr.Link to="/repos/reactjs/react-router">React Router</rr.Link>
					</li>           
					<li>
						<rr.Link to="/repos/facebook/react">React</rr.Link>
					</li> 
					<li>
						<rr.Link to="/repos/test/12345">Test</rr.Link>
					</li>        
				</ul>       
				{/* The route nested beneath are the children. */}
				{this.props.children}
			</div>     
		)
	}
});

var Repo = r.createClass({
	render: function() {
		return (
			<div>
				<h2>{this.props.params.repoName}</h2>
			</div>
		)
	}
});

var Home = r.createClass({
	render() {
		return <div>Home</div>
	}
});

// Link has a magic connection with Route.
var App = r.createClass({
	render: function() {
		console.log(this.props.children);
		return(
			<div>
				<h1>React Router</h1>
				<ul role='nav'>
					<li><rr.Link to='/about' activeClassName='active'>About</rr.Link></li>
					<li><rr.Link to='/repos' activeClassName='active'>Repos</rr.Link></li>
				</ul>
				{/*Children contain the components*/}

				{ this.props.children }

				{/* We had made the Home element decoupled. */}
				{ this.props.children || <Home />} 
			</div>
		)
	}
});
		
rd.render((
	<rr.Router history={rr.hashHistory}>
		<rr.Route path="/" component={App}>

			{/* Decouple the Home element from App and make it become one of the child route. */}
			<rr.IndexRoute component={Home} />

			{/* The parent route will exist even the child route starts running. */}
			<rr.Route path="/repos" component={Repos}>
				<rr.Route path="/repos/:userName/:repoName" component={Repo} />
			</rr.Route> 

			{/* Once the child path starts routing, the parent route will be replaced.*/}
			{/*<rr.Route path="/repos" component={Repos} />
			<rr.Route path="/repos/:userName/:repoName" component={Repo} />*/}
			<rr.Route path="/about" component={About} />
		</rr.Route>
	</rr.Router>
), document.getElementById('app'))