let JRConfHeader = React.createClass({

	render() {
		return (
			<header className="row jrcf-header">

				<div className="col-md-9 page-title">
					<span><h2>總統府司法改革國是會議觀測站</h2></span>
				</div>
				<div className="col-md-2 col-md-offset-1">
					<span><h2>籌備委員</h2></span>
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
					<JRConfNextPrevBar 
						is_first={ this.props.is_first }
						prev_evt={ this.props.prev_evt }
						is_last ={ this.props.is_last }
						next_evt={ this.props.next_evt }
						current_slide_index={ this.props.current_slide_index } />
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

		this.state.radar
			.importData(this.props.radar_data).draw().hightlightRadarArea(0);

	},


	componentWillUpdate(nextProps, nextState) {

		this.state.radar.hightlightRadarArea(nextProps.radar_index);

	},

	render() {

		return (
			<div className="canvas-container">
				<span className="ver-helper"></span>
				<div id="Radar-Canvas">
					<h3 className="canvas-title">{ this.props.fig_name }</h3>
				</div>
				
			</div>
		)
	}
})

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
			is_figure = null;

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
		}

		return (
			<div className="col-md-4 jrcf-article-cell">
				{
					is_figure ? 
						<JRConfBodyCellFigure
							fig_name={ fig_name } 
							img_path={ img_path } img_credit={ img_credit }
							title={ title } position={ position }/> : null 
				}
				{
					is_desc ?
						<JRConfBodyCellDesc 
							is_first={ this.props.is_first }
							prev_evt={ this.props.prev_evt }
							is_last ={ this.props.is_last }
							next_evt={ this.props.next_evt }
							current_slide_index={ this.props.current_slide_index }
							title={ title } context={ context }/> : null
				}
				{/*
					is_desc ?
						<JRConfNextPrevBar 
							is_first={ this.props.is_first }
							prev_evt={ this.props.prev_evt }
							is_last ={ this.props.is_last }
							next_evt={ this.props.next_evt }
							current_slide_index={ this.props.current_slide_index } /> : null
				*/}
				{
					is_radar ?
						<JRConfBodyCellRadar 
							fig_name={ fig_name }
							radar_index={ this.props.radar_index } 
							radar_data={ this.props.radar_data } /> : null
				}
			</div>
		)
	}
});

let JRConfPrevBtn = React.createClass({

	render() {

		return (
			<div className={ this.props.is_first ? "prev hidden" : "prev" } 
				 onClick={ this.props.clickEvt }>
				{ this.props.current_slide_index == 1? "返回介紹頁" : "上一位委員" }
			</div>
		)
	}

});

let JRConfNextBtn = React.createClass({

	render() {

		return (
			<div className={ this.props.is_last ? "next hidden" : "next" } 
				 onClick={ this.props.clickEvt }> 
				{ this.props.current_slide_index == 0 ? "瀏覽委員" : "下一位委員" }
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
				slide_index: 1,
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
				})
				.filter(function(d, i) { return d });

			this.setState({ 
				'slide_all_data': data,
				'slide_property': slide_data,
				'slide_max_number': slide_data.length,
				'radar_data': radar_data,
				'radar_index': 0
				// 'radar_ids': radar_ids
			});
		});
	},

	render() {

		let is_first = false,
			is_last  = false;

		if ( this.state.index === this.state.slide_max_number - 1)
			is_last = true
		else if ( this.state.slide_index === 0 )
			is_first = true

		return (
			<article className="row jrcf-article">
				<JRConfBodyCell 
					radar_data={ this.state.radar_data } 
					radar_index={ this.state.radar_index }
					data={ this.state.slide_property.left }/>
				<JRConfBodyCell data={ this.state.slide_property.middle }/>
				<JRConfBodyCell 
					is_first={ is_first }
					prev_evt={ this.prev_slide }
					is_last ={ is_last }
					next_evt={ this.next_slide }
					current_slide_index={ this.state.slide_index }
					data={ this.state.slide_property.right }/>
				{/*<JRConfNextPrevBar 
					is_first={ is_first }
					prev_evt={ this.prev_slide }
					is_last ={ is_last }
					next_evt={ this.next_slide }
					current_slide_index={ this.state.slide_index } />*/}
			</article>
		)
	}

});

let JRConfFooter = React.createClass({

	render() {
		return (
			<footer className="row">

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

