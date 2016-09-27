class EventLine {

	constructor() {
		this.evtlineG = null;
		this.eventNodes = null;

		this.line = null;

		// Time scale
		this.timeScale = null;

		this.timeRegExp = new RegExp('^(\\d+)\/(\\d+)\/(\\d+)$');

	}

	initialize() {
		this.evtlineG = 
			d3.select('svg')
				.append('g').attr('id', 'EvtLine');

		return this
	}

	csvImport(path) {

		d3.csv(path)
			.row((d, i) => { if (i !== 0) return d })
			.get((error, rows) => {
				
				let colorScale = d3.scale.category20c();

				this.evtlineG
					.append('g').classed('event-group', true)
						.selectAll('circles')
							.data(this._eventSerial(rows))
								.enter().append('circle')
									.classed('event-node', true)
								.attr({
									cx: (d, i) => { 
										return this.timeScale(d.dateObj.getTime()) 
									},
									cy: 100,
									fill: (d, i) => { return colorScale(i) },
									r : 12
								})
								.call((circles) => {
									this.eventNodes = circles;
									this.connectCircles(circles);
								});

			});

		return this
	}


	connectCircles(circles) {

		let cPoses = [];

		this.line = 
			d3.svg.line()
				.x((d)=>{ return d.cx })
				.y((d)=>{ return d.cy });

		circles
			.each((d) => {
				
				cPoses.push({
					cx: this.timeScale(d.dateObj.getTime()) , 
					cy: 100
				});
			})
			.call((circles) => {
				
				this.evtlineG
					.select('g.event-group')
						.insert('g', ':first-child')
						.classed('path-group', true)
							.append('path')
								.attr('d', this.line(cPoses))
								.attr('stoke-width', '2')
								.attr('stroke', '#000');
			});

		return this

	}

	_eventSerial(data) {

		let evts = [],
			l    = data.length;
		
		for (let d of data) {
			let parsedTime = d['Time'].match(this.timeRegExp);
				
				// Date(year, month, date)
				d.dateObj = 
					new Date(parsedTime[1], parsedTime[2]-1, parsedTime[3]);

			evts.push(d);
		}

		// Sort the event in ascending order.
		evts.sort((a, b) => {
			return a.dateObj.getTime() - b.dateObj.getTime()
		});


		this.timeScale = 
			d3.scale.linear()
				.domain([
					evts[0].dateObj.getTime(),
					evts[l-1].dateObj.getTime()
				])
				.range([
					0,
					(() => {
						let w = parseInt(d3.select('svg').style('width').replace('px', ''));
						return 0.95*w
					})()
				]);

		return evts

	}

}