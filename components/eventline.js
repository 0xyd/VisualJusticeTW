class EventLine {

	constructor() {

		this.pad = d3.select('#TimeLineBoard');

		this.evtsData = [];
		this.evtlineG = null;
		this.evtLineY = null; // The Y position of the event line.
		this.eventNodes = null;

		// this.line = null;
		this.evtInfoBoard = null;

		// The date weight for putting date in position.
		this.timeWeight = null;
		this.timeSpace  = 5;

		this.textPointer = null;

		// Time scale
		this.timeScale = null;

		this.timeRegExp = new RegExp('^(\\d+)\/(\\d+)\/(\\d+)$');

	}

	initialize(svgWidth) {
		this.evtlineG = 
			// d3.select('svg')
			this.pad			
				.attr('width', svgWidth)
				.append('g')
					.attr('id', 'EvtLine');

		this.evtInfoBoard = 
			d3.select('#TimeLineInfo')
				.style('width', svgWidth + 'px');

		return this
	}

	csvImport(path) {

		d3.csv(path)
			.row((d, i) => { return d })
			.get((error, rows) => {

				this
					.initialize(
						this._calSvgWidth(
							this._eventSerial(rows)))
					.drawChart(rows);
				
			});

		return this
	}

	// Compress the data which has the same date.
	_calSvgWidth(data) {

		let last = data.length - 1;

		/*
			Calculate the weight of each date.
			For instance, if there are two events on the data.
			The weight of date is 2.
		*/
		this.timeWeight = ((data) => {

			let _ = [],
				c = 0 ;

			let n = 0, // The index of the data element
				w = 1; // The weight of date

			for (let d of data) {

				// Check the date change. 
				// Once the date change, push the weight value to array
				if (n && (d.dateObj.getDate() !== data[n-1].dateObj.getDate())) {
					_.push(w);
					w = 1;

					// When the element is the last, push it anyway.
					if (n === data.length-1) _.push(w);
				} 

				// Increment the weight of the date.
				else if (n) w++;

				n++;
			}
			return _;
		})(data);


		// The period of time that the event starts to now (or to end.)
		let period = 
			Math
				.abs(data[last].dateObj - data[0].dateObj) /
					( 24 * 60 * 60 * 1000 );
		
		return (

			250 * this.timeWeight
				.reduce((p, c) => { // Reduce the array into a weight summary value.
				return p+c
				}) + 
				( period -  this.timeWeight.length ) * this.timeSpace // Time slots for the dates without events. 
		)
			
	}

	drawChart(data) {

		this._markCircles(data)
			.call((circles) => {
				this._drawPath(circles)
					.call((circles) => {

						// Mark the events on the line.
						this._markEvts(circles);	
						
					});
			});
	}

	_markCircles(data) {

		let colorScale = d3.scale.category20c();

		this._calY();
		
		return (
			this.evtlineG
			.append('g').classed('event-group', true)
				.selectAll('circles')
						.data(this.evtsData)
						.enter().append('circle')
							.classed('event-node', true)
							.attr({
								cx: (d, i) => { 
									
									let pDiff = 0,    // the pixels length between two event. 
										diffDays = 0; // The diff of days.

									for (let k = 0 ; k <= i; k ++) {

										// Calculate the diff days from the time starts
										let d = 
											k > 0 ?
												Math.abs(
													this.evtsData[k].dateObj - this.evtsData[k-1].dateObj) / 
										 				( 24 * 60 * 60 * 1000 ) - 1 : 0;
										diffDays += d;
									}

									// The serial time is not count
									if (diffDays >= 2) 
										pDiff = this.timeSpace * diffDays;

									return 125 + 250 * i + pDiff
								},
								// cy: 50,
								cy: this.evtLineY,
								fill: (d, i) => { return colorScale(i) },
								r : 12
							})
			)
	}

	_calY() {

		console.log(this.pad.style('height'));

		this.evtLineY =  
			parseFloat(this.pad.style('height').replace('px', '')) - 30;
	}

	_drawPath(circles) {

		let cPoses = [];

		this.line = 
			d3.svg.line()
				.x((d)=>{ return d.cx })
				.y((d)=>{ return d.cy });

		return (
			circles
				.each((d, i) => {
					cPoses.push({
						cx: parseInt(d3.select(circles[0][i]).attr('cx').replace('px', '')),
						// cy: 50
						cy: this.evtLineY
					});
				})
				.call((circles) => {
					this.evtlineG
						.insert('g', ':first-child')
							.classed('path-group', true)
								.append('path')
									.attr('d', this.line(cPoses))
									.attr('stoke-width', '2')
									.attr('stroke', '#000');
				})
		)
	}

	// Mark the events below the lines
	_markEvts(circles) {

		let data = [];

		circles.each((d, i) => {

			let c = d3.select(circles[0][i]);

			d.x = c.attr('cx');
			d.y = c.attr('cy');
			
			data.push(d);
		})
		.call(() => {

			let pl = 
				parseFloat(
					d3.select('svg').style('padding-left').replace('px', ''));

			this.evtInfoBoard.selectAll('div')
				.data(data).enter()
					.append('div')
						.classed('event-info', true)
							.style({
								left: (d, i) => { 
									// return pl+125+(250 * i)+-100 + 'px' 
									return pl+parseFloat(d.x)+(-100) + 'px'
								}
							})
							.html((d) => {

								let time = d['Time'],
									event = d['Event'];

								return (
									'<div class="date"><span>' + time + '</span></div>' +
									'<div class="context">'+ event + '</div>'
									)
							});
		});

	}

	// Transfer the event's time value to date object.
	_eventSerial(data) {

		let l  = data.length;
		
		for (let d of data) {
			let parsedTime = d['Time'].match(this.timeRegExp);
				
				// Date(year, month, date)
				d.dateObj = 
					new Date(parsedTime[1], parsedTime[2]-1, parsedTime[3]);

			this.evtsData.push(d);
		}


		// Sort the event in ascending order.
		this.evtsData.sort((a, b) => {
			return a.dateObj.getTime() - b.dateObj.getTime()
		});

		this.timeScale = 
			d3.scale.linear()
				.domain([
					this.evtsData[0].dateObj.getTime(),
					this.evtsData[l-1].dateObj.getTime()
				])
				.range([
					0,
					(() => {
						let svg = d3.select('svg'),
							w = parseInt(svg.style('width').replace('px', '')),
							// Value of Padding right and left
							pl = parseInt(svg.style('padding-left').replace('px', '')),
							pr = parseInt(svg.style('padding-right').replace('px', ''));
						
						return w-pl-pr
					})()
				]);
		
		return this.evtsData

	}

}