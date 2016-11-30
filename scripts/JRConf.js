let JRConfHeader = React.createClass({

	render() {
		return (
			<header className="row jrcf-header">
				<div className="col-md-12 title">
					<span>看見思法司法改革國是會議觀測站－委員名單</span>
				</div>
			</header>
		)
	}

});

// For the figure
let JRConfBodyCellFigure = React.createClass({

	render() {

		return (
			<div className="row-col-md-12 figure ">
				<span className="ver-helper"></span>
				<div className="figure-context">
					<div className="image">
						<img src={ this.props.img_path } />
					</div>
					<div className="image-info">
						<h5 className="credit"> Photo Credit: { this.props.img_credit } </h5>
						<h2>{ this.props.fig_name }</h2>
						<h3>{ this.props.title }</h3>
						<h4>{ this.props.position }</h4>
					</div>
					{
						this.props.is_right ? 
							<JRConfNextPrevBar 
								is_first={ this.props.is_first }
								prev_evt={ this.props.prev_evt }
								is_last ={ this.props.is_last }
								next_evt={ this.props.next_evt }
								current_slide_index={ this.props.current_slide_index } /> : null 
					}
				</div>
			</div>
		)
	}
})

// For the description
let JRConfBodyCellDesc = React.createClass({

	render() {
		return (
			<div className="row-col-md-12 desc">
				<div className="desc-context">
					<div className='title'>
						<h2>{ this.props.title }</h2>
					</div>
					<div className="context">
						{ this.props.context }
					</div>
					{
						this.props.is_right ? 
							<JRConfNextPrevBar 
								is_first={ this.props.is_first }
								prev_evt={ this.props.prev_evt }
								is_last ={ this.props.is_last }
								next_evt={ this.props.next_evt }
								current_slide_index={ this.props.current_slide_index } /> : null 
					}
				</div>
			</div>
		)
	}
})


// For Radar data
let JRConfBodyCellRadar = React.createClass({

	getInitialState() {

		return { 
			radar: new Radar('#Radar-Canvas', 330, 330, 1.12)
		}
	},

	componentDidMount() {

		if (this.props.radar_data) {
			this.state.radar
				.importData(this.props.radar_data
					.filter((d) => { return d }))
				.draw().hightlightRadarArea(0);
		}
	},


	componentWillUpdate(nextProps, nextState) {

		if (this.props.radar_data)
			this.state.radar.hightlightRadarArea(nextProps.radar_index-2);

	},

	render() {

		return (
			<div className="canvas-container">
				<span className="ver-helper"></span>
				<div id="Radar-Canvas">
					<h3 className="canvas-title">{ this.props.fig_name }</h3>
				</div>
				<span className="warning">
					雷達圖數據是小編們依照角色學經歷背景的粗估，方便諸位速讀並博君一笑，如此已矣。
				</span>
			</div>
		)
	}
})

// People Stat
let JRConfBodyCellPeopleStat = React.createClass({

	generatePics(data) {

		// Classify the types
		let types = (() => {

			let _types = data.map((d) => { return d.type }),
				selectedTypes = [];

			for (let t of _types) {
				
				if (!selectedTypes.includes(t))
					selectedTypes.push(t);
			}
			
			return selectedTypes.map((t)=> { return { typeName: t, data: [] } })

		})();


		// Classify the data according to the selected types
		for ( let d of data ) {

			let t = types.find((type) => { return type.typeName == d.type });

			t.data.push(d);

		}

		
		let sequences = types.map((type, i) => {

			let r = [<span key={0} className="catname">{ type.typeName }：</span>],
				count = 0;

			let testStyle = { color: "blue" };

			for ( let td of type.data ) {
				if (td.type === 'female' || td.gender === 'female') {
					r.push(<span key={count+1} className="ele">
						<span className="ver-helper"></span>
						<img src="./src/female.png" />
						<span>{ td.name }</span>
					</span>)
				}
				else if (td.type === 'male' || td.gender === 'male') {
					r.push(<span key={count+1} className="ele">
						<span className="ver-helper"></span>
						<img src="./src/male.png" />
						<span>{ td.name }</span>
					</span>)
				}
				count ++;
			}

			r.push(<span className="statvalue" key={count+1}>{ count }人</span>)

			return r

		});

		return sequences

	},

	render() {

		// let seqs = this.generatePics(this.props.data);
		let seqs = (() => {

			let wrappedSeq = [],
				sequences  = this.generatePics(this.props.data);

			let k = 0;

			for ( let s of sequences ){

				wrappedSeq.push(
					<div key={k} className="statrow">
						<span className="ver-helper"> {s}</span>
					</div>);
				k++;

			}

			return wrappedSeq

		})();

		return (
			<div className="statpanel">
				<div className="stat-context">
					<div className="title"><h2>{ this.props.title }</h2></div>
					<div className="context">{ this.props.context }</div>
				</div>
				<div className="stat-canvas">
					<div className="statrow"></div>
					{ seqs }
				</div>
				{
					this.props.is_right ? 
						<JRConfNextPrevBar 
							is_first={ this.props.is_first }
							prev_evt={ this.props.prev_evt }
							is_last ={ this.props.is_last }
							next_evt={ this.props.next_evt }
							current_slide_index={ this.props.current_slide_index } /> : null 
				}
			</div>
		)
	}

});

// 
let JRConfBodyCellScore = React.createClass({

	render() {

		return (
			<div className="scorepanel">
				<span className="ver-helper"></span>
				<div className="score">
					<h1>{ this.props.score_value }</h1>
				</div>
			</div>
		)

	}

});

let JRSocialSocialPage = React.createClass({

	render() {

		let facebookSocialPageStyle = { border: "none", overflow: "hidden" };

		return (
			<div className="socialpage">
				<span className="ver-helper"></span>
				<div className="context">
					<div className="title">
						<h2>請多關注我們：）</h2>
					</div>
					<iframe 
						src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvizjust&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=487648844706858" 
						width="340" height="400" style={ facebookSocialPageStyle } scrolling="no" 
						frameborder="0" allowTransparency="true"></iframe>
					{
					this.props.is_right ? 
						<JRConfNextPrevBar 
							is_first={ this.props.is_first }
							prev_evt={ this.props.prev_evt }
							is_last ={ this.props.is_last }
							next_evt={ this.props.next_evt }
							current_slide_index={ this.props.current_slide_index } /> : null 
					}
				</div>
			</div>
		)
	}

});


let JRConfBodyCell = React.createClass({

	render() {

		let data = this.props.data,

			// The below are properties for data setting.
			title = null,
			context = null,
			img_path = null,
			img_credit = null,
			position = null,
			fig_name = null,
			is_radar = null,
			is_desc  = null,
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
			is_desc  = data.is_desc;
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
		let cellClassName = "";

		if (this.props.is_person_slide && is_figure)
			cellClassName = "col-md-4 col-md-push-4 jrcf-article-cell"
		else if (this.props.is_person_slide && is_radar)
			cellClassName = "col-md-4 col-md-pull-4 jrcf-article-cell"
		else
			cellClassName = "col-md-4 jrcf-article-cell"

		return (
			<div className={ cellClassName }>
				{
					is_figure ? 
						<JRConfBodyCellFigure
							is_right={ this.props.is_right }
							fig_name={ fig_name } 
							img_path={ img_path } img_credit={ img_credit }
							title={ title } position={ position }/> : null 
				}
				{
					is_desc ?
						<JRConfBodyCellDesc 
							is_right={ this.props.is_right }
							is_first={ this.props.is_first }
							prev_evt={ this.props.prev_evt }
							is_last ={ this.props.is_last }
							next_evt={ this.props.next_evt }
							current_slide_index={ this.props.current_slide_index }
							title={ title } context={ context }/> : null
				}
				{
					is_radar ?
						<JRConfBodyCellRadar 
							is_right={ this.props.is_right }
							fig_name={ fig_name }
							radar_index={ this.props.radar_index } 
							radar_data={ this.props.radar_data } /> : null
				}
				{
					is_people_stat ?
						<JRConfBodyCellPeopleStat
							data={ people_data }
							title={ title }
							context={ context }
							is_right={ this.props.is_right }
							fig_name={ fig_name }
							is_first={ this.props.is_first }
							is_last ={ this.props.is_last }
							prev_evt={ this.props.prev_evt }
							next_evt={ this.props.next_evt } 
							current_slide_index={ this.props.current_slide_index }/> : null
				}
				{
					is_score ?
						<JRConfBodyCellScore 
							score_value={ score_value } /> : null
				}
				{
					is_social_page ?
						<JRSocialSocialPage 
							is_right={ this.props.is_right }
							is_first={ this.props.is_first }
							is_last ={ this.props.is_last }
							prev_evt={ this.props.prev_evt }
							next_evt={ this.props.next_evt } /> : null
				}
			</div>
		)
	}
});



let JRConfPrevBtn = React.createClass({

	render() {

		let displayWords = '',
			current_slide_index = this.props.current_slide_index;
			
		if (current_slide_index == 1 || current_slide_index == 2)
			displayWords = '上一篇概要';
		// else if (this.props.current_slide_index == 2)
		// 	displayWords = '';
		else
			displayWords = '上一位委員'

		return (
			<div className={ this.props.is_first ? "prev hidden" : "prev" } 
				 onClick={ this.props.clickEvt }>
				 { displayWords }
			</div>
		)
	}

});

let JRConfNextBtn = React.createClass({

	render() {

		let displayWords = '',
			is_last = this.props.is_last;

		if (this.props.is_first)
			displayWords = '下一篇概要';
		else if (this.props.current_slide_index == 1)
			displayWords = '第一位委員';
		else if (is_last)
			displayWords = '最終頁'
		// else if (this.props.current_slide_index == )
		else
			displayWords = '下一位委員'

		return (
			<div className={ is_last ? "next hidden" : "next" } 
				 onClick={ is_last ? null : this.props.clickEvt }> 
				{ displayWords }
			</div>
		)
	}
});


let JRConfNextPrevBar = React.createClass({

	render() {

		return (
			<div id="PrevNextBtnBar">
				<JRConfPrevBtn 
					is_first={ this.props.is_first } 
					clickEvt={ this.props.prev_evt } 
					current_slide_index={ this.props.current_slide_index } />
				<JRConfNextBtn 
					is_last={ this.props.is_last }
					is_first={ this.props.is_first }
					clickEvt={ this.props.next_evt } 
					current_slide_index={ this.props.current_slide_index } />
			</div>
		)
	}

});

let JRConfBody = React.createClass({

	next_slide() {

		let index = this.state.slide_index;

		this.setState({ 
			'slide_index': 
				index + 1,
			'radar_index':
				this.state.radar_index + 1,
			'slide_property': 
				this.state.slide_all_data[index + 1],
		})

	},


	prev_slide() {

		let index = this.state.slide_index;

		this.setState({ 
			'slide_index': 
				index - 1,
			'radar_index':
				this.state.radar_index - 1,
			'slide_property': 
				this.state.slide_all_data[index - 1] 
		})
		

	},

	loadJson(data_path) {

		let p = new Promise(function(resolve, reject) {

			d3.json(data_path).get(function(error, data) {
				resolve(data);
			});

		});

		return p

	},

	getInitialState() {

		return (
			{
				slide_index: 0,
				slide_all_data: null,
				slide_max_number: null,
				slide_property: '',
				radar_data: null,
				radar_index: null,
				data_path : './JRConf/commitee.json',
			}
		)
	},

	componentDidMount() {

		this.loadJson(this.state.data_path).then((data) => {

			let slide_data = 
				data[this.state.slide_index],

				radar_data = 
				data.map(function(d, i) {
					
					if (d.left.is_radar)
						return d.left.radar_data
					else
						return null
				});

			this.setState({ 
				'slide_all_data': data,
				'slide_property': slide_data,
				'slide_max_number': data.length,
				'radar_data': radar_data,
				'radar_index': 0
			});
		});
	},

	render() {

		let is_first = false,
			is_last  = false,
			is_person_slide = false,
			slide_index = this.state.slide_index,
			slide_all_data = this.state.slide_all_data;

		if ( slide_index === this.state.slide_max_number - 1){
			is_last = true
		}
		else if ( slide_index === 0 ) {
			is_first = true
		}

		// Check if the slide is for person introduction
		if (slide_all_data) 
			if ( slide_all_data[slide_index].type == 'person_slide' ) 
				is_person_slide = true;
		

		return (
			<article className="row jrcf-article">
					<JRConfBodyCell 
						is_person_slide={ is_person_slide }
						data={ is_person_slide ? this.state.slide_property.middle : this.state.slide_property.left}/>
					<JRConfBodyCell
						is_person_slide={ is_person_slide }
						radar_data={ this.state.radar_data } 
						radar_index={ this.state.radar_index }
						data={ is_person_slide ? this.state.slide_property.left : this.state.slide_property.middle}/>
					<JRConfBodyCell 
						is_person_slide={ is_person_slide }
						is_first={ is_first }
						prev_evt={ this.prev_slide }
						is_last ={ is_last }
						next_evt={ this.next_slide }
						current_slide_index={ this.state.slide_index }
						is_right={ true }
						data={ this.state.slide_property.right }/>
			</article>
		)
	}

});

let JRConfFooter = React.createClass({

	render() {

		let facebookLikeStyle = {
			border: 'none',
			overflow: 'hidden'
		};

		return (
			<footer className="row">
				<span className="ver-helper"></span>
				<iframe 
					src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fvizjust%2F&width=117&layout=button_count&action=like&size=small&show_faces=true&share=true&height=46&appId=487648844706858" 
					width="150" height="20" style={ facebookLikeStyle } 
					scrolling="no" frameborder="0" allowTransparency="true"></iframe>
				<a className="github-button" 
				   href="https://github.com/yudazilian/VisualJusticeTW" 
				   data-icon="octicon-star" data-style="mega" 
				   data-count-href="/yudazilian/VisualJusticeTW/stargazers" 
				   data-count-api="/repos/yudazilian/VisualJusticeTW#stargazers_count" 
				   data-count-aria-label="# stargazers on GitHub" 
				   aria-label="Star yudazilian/VisualJusticeTW on GitHub">Star</a>
				<span className="signature">
					Credit BY: &nbsp;&nbsp;&nbsp;
					<a href="https://www.facebook.com/yude.lin.754">Y.D. Lin</a>, &nbsp;&nbsp;&nbsp;
					<a href="https://www.facebook.com/profile.php?id=100000497148567&fref=ts">陳乃瑜</a> & 成員們 @
					<a href="http://vizjust.tw">看見思法</a></span>
			</footer>
		)
	}

});


let JRConf = React.createClass({

	render() {
		return (
			<div id="JRCF-root" className="row">
				<JRConfHeader></JRConfHeader>			
				<JRConfBody></JRConfBody>
				<JRConfFooter></JRConfFooter>
			</div>
		)
	}
});

ReactDOM.render(
	<JRConf />,
	document.getElementById('volume'));

