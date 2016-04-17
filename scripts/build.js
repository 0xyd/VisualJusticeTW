
var Index = React.createClass({
	render: function() {
		return (
			<div id="HOME">
				<IndexHeader />
				<IndexSection />
			</div>
		)
	}
});

/* Header for the index page. */
var IndexHeader = React.createClass({

	render: function() {
		return (
			<header id="HDR" className="b20-col-md-4 b12-row-md-12 bd-right">
				<div id="LOGO-WRAPPER" className="b12-col-md-12 b15-row-md-5">
					<div id="LOGO" className="b12-col-md-12 b12-row-md-12"></div>
				</div>
				<IndexHeaderNavList />
				<IndexHeaderFoot />
				<IndexHeaderSign />
			</header>
		)
	}
});

var IndexHeaderNavList = React.createClass({


	getInitialState: function() {

		return {
			nav: [
				<a><img src="./src/aboutus.png" /></a>,
				<a><img src="./src/see.png" /></a>,
				<a><img src="./src/issue.png" /></a>,
				<a><img src="./src/work.png" /></a>
			]
		}
	},

	render: function() {

		var listItems = [],
			l = this.state.nav.length;

		for ( var i=0; i<l; i++ ) 
			listItems.push(
				<IndexHeaderNavListItem 
					key={i}
					link={this.state.nav[i]} />
				);

		return (
			<nav id="NAV" className="b12-col-md-12 b15-row-md-9">
				<ul className="b12-col-md-12 b15-row-md-15">
					{ listItems }
				</ul>
			</nav>
		)

	}
});

var IndexHeaderNavListItem = React.createClass({

	render: function() {
		return (
			<li className="nav-option b12-col-md-12 b12-row-md-2">
				{ this.props.link }
			</li>
		)
	}
});

var IndexHeaderFoot = React.createClass({

	render: function() {
		return (
			<div id="HDR-FOOTER" className="b12-col-md-12 b15-row-md-1">
				<a id="HOME-LINK" href="">vjtw.org</a>
			</div>
		)
		
	}
});

var IndexHeaderSign = React.createClass({

	render: function() {
		return (
			<div id="SIGN">
				<img src="./src/sign.png" />
			</div>
		)
	}
});

var IndexSection = React.createClass({

	getInitialState: function() {

		return {
			divs: [
				{
					style: { 
						zIndex: 1000
					},
					img: "./src/police.png",
					btnTxtImg: "./src/policeStatBtnName.png",
					infoTxtImg: "./src/police-2.png"
				},
				{
					style: {
						zIndex: 900
					},
					img: "./src/prosecutor.png",
					btnTxtImg: "./src/proStatBtnName.png",
					infoTxtImg: "./src/justiceLaw86.png"
				},
				{
					style: {
						zIndex: 800
					},
					img: "./src/justice.png",
					btnTxtImg: "./src/justiceStatBtnName.png",
					infoTxtImg: "./src/constitution-80.png"
				},
				{
					style: {
						zIndex: 700
					},
					img: "./src/correction.png",
					btnTxtImg: "./src/corrStatBtnName.png",
					infoTxtImg: "./src/prison-1.png"
				}
			]
		}
		
	},

	render: function() {

		let divs = [],
			key = 0;

		for (let div of this.state.divs) {
			divs.push(
				<IndexSectionDiv 
					key={++key} 
					info={div.infoTxtImg}
					style={div.style}
					themeImg={div.img}
					btnTxt={div.btnTxtImg}
				/>);
		}

		return (
			<section id="BODY" className="b20-col-md-16 b12-row-md-12">
				{ divs }
			</section>
		)
	}
});

var IndexSectionDiv = React.createClass({

	// getInitialState: function() {

	// },

	render: function() {

		return (
			<div id="" className="b12-col-md-3 b12-row-md-12 sect-part sect-part--box bd-right ">
				<div className="b12-col-md-12 b12-row-md-8 sect-part-imgwrapper">
					<img className="sect-part-img" src={this.props.themeImg} />
				</div>
				<div className="b12-col-md-12 b12-row-md-1 sect-part-btnwrapper">
					<span className="ver-helper"></span>
					<div className="sect-part-btn" href="">
						<a><img className="sect-part-btn-img" src={this.props.btnTxt} /> </a>
					</div>
				</div>
				<div className="b12-col-md-12 b12-row-md-3 sect-part-imgwrapper">
					<span className="ver-helper"></span>
					<div className="imgtxt-wrapper">
						<img className="imgtxt" src={this.props.info} />
					</div>
				</div>
			</div>
		)
	}
});

ReactDOM.render(
	<Index />, 
	document.getElementById('CONTAINER'));