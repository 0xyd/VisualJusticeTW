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

		// peak scale
		this.peakScale = null;

		// peak path generator
		this.peakPathG = 
			d3.svg.line()
				.x((d) => { return console.log('d.x: ', d.x); parseFloat(d.x) }).y((d) => { /*console.log(d);*/return parseFloat(d.y) });

		this.timeRegExp = new RegExp('^(\\d+)\/(\\d+)\/(\\d+)$');

	}

	initialize(svgWidth) {
		this.evtlineG = 
			this.pad			
				.attr('width', svgWidth)
				.append('g')
					.attr('id', 'EvtLine');

		this.evtInfoBoard = 
			d3.select('#TimeLineInfo')
				.style('width', svgWidth + 'px');

		return this
	}

	csvImport(eventPaths, peakStatPath) {

		d3.csv(eventPaths)
			.row((d, i) => { return d })
			.get((error, rows) => {

				this
					.initialize(
						this._calSvgWidth(
							this._eventSerial(rows)))
					.drawChart(rows, peakStatPath);
				
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
				// Time slots for the dates without events.
				( period -  this.timeWeight.length ) * this.timeSpace +
				// 100 pixels are left for tail.
				100

		)
			
	}

	drawChart(data, peakStatPath) {

		this._markCircles(data)
			.call((circles) => {
				this._drawPath(circles)
					.call((circles) => {

						// Mark the events on the line.
						this._markEvts(circles);

						// Peaks' x positions
						this._plotPeak(
							this._peaksXProducer(circles),
							peakStatPath
						);
						
						this.pad.append('path')
							.data(data)
								.attr('d', this.peakPathG)
								.attr('fill', '#000');


					});
			});
	}


	// Marke the circles on the lines
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
								cy: this.evtLineY,
								fill: (d, i) => { return colorScale(i) },
								r : 12
							})
			)
	}

	// Create the plots 
	_peaksXProducer(circles) {

		let eventPeaks = [],
			circleData = circles[0].map((c, i) => { return c.__data__ }),
			compound = [circleData[0]];  

		/*
			Get the circles' x position and 
			calculate the average x position if there are multiple circles having the same date.
		*/
		for ( let i = 1; i < circleData.length; i++ ) {

			// Move the element in compund out once its Time property is different from the next one.
			if (compound.length === 1 && circleData[i-1].Time !== circleData[i].Time) {
				
				let popEle = compound.shift();

				eventPeaks.push({
					x: popEle.x,
					dateObj: popEle.dateObj
				});
				
			} 
			else if (compound.length > 1 && circleData[i-1].Time !== circleData[i].Time) {
				
				eventPeaks.push({
					x: (
						parseFloat(compound[0].x) + 
							parseFloat(compound[compound.length-1].x)) / 2,
					dateObj: compound[0].dateObj
				});
				compound = [];
			}

			compound.push(circleData[i]);

		}

		let datePeaks = [];

		/*
			Adding the dates that does not have any events.
		*/
		for ( let j = 1; j < eventPeaks.length; j++ ) {

			datePeaks.push(eventPeaks[j-1]);

			// Add new eventPeaks if the two peaks are not sequential.
			if (eventPeaks[j].dateObj !== eventPeaks[j-1].dateObj) {

				let endDate = eventPeaks[j].dateObj,
					startDate = eventPeaks[j-1].dateObj,
					diffDays = (endDate - startDate) / ( 24 * 60 * 60 * 1000) - 1,
					_ = [];

				for ( let k = 0; k < Math.abs(diffDays); k++ ) {

					_.push({
						'x': parseFloat(eventPeaks[j-1].x) + 125 + 50*(k+1),
						'dateObj':
							new Date(
								startDate.getYear(), 
									startDate.getMonth(), startDate.getDate() + 1+k)
						})
					
				}
				datePeaks = datePeaks.concat(_);
			}
		}

		return datePeaks
	}

	// Plot peaks
	_plotPeak(peaks, path) {

		d3.csv(path)
			.row((d) => { 
				if (d.Time === "") return null
				else if (d.search_results === "") {
					d.search_results = 0
					return d
				}
				else {
					d.search_results = 
						parseInt(d.search_results);
					return d
				}
				})
				.get((error, rows) => {

					let h = 
						parseInt(this.pad.style('height').replace('px', ''));

					this.peakScale = 
						d3.scale.linear()
							.domain([
								d3.min(rows, (d) => { return d.search_results }),
								d3.max(rows, (d) => { return d.search_results })
							])
							.range([h-50, 0]);

					// Compress the data
					let dataLength = 
						d3.min([
							rows.length,
							peaks.length
						]);

					// Calculate the y position of each peak by the scale function.
					for ( let i = 0; i < dataLength; i++ )
						peaks[i].y = this.peakScale(rows[i].search_results);
					
					this.pad.append('g').classed('peak-group', true)
						.append('path')
						.datum(peaks.slice(0, dataLength))
						.attr('d', this.peakPathG)
						.attr('fill', '#000');

				})

	}


	// Calculate y postion of the line.
	_calY() {

		this.evtLineY =  
			parseFloat(this.pad.style('height').replace('px', '')) - 30;
	}

	_drawPath(circles) {

		let cPoses = [];

		// Set up the arrow.
		this.pad.append('defs')
			.append('marker')
				.attr({
					id: 'Continue',
					refX: 0,
					refY: 3,
					markerWidth:  10,
					markerHeight: 10 
				})
				.append('path')
					.attr({
						d: 'M0,0 L0,6 L9,3 z',
						fill: '#f00'
					});

		this.line = 
			d3.svg.line()
				.x((d)=>{ return d.cx })
				.y((d)=>{ return d.cy });

		return (
			circles
				.each((d, i) => {
					cPoses.push({
						cx: parseInt(d3.select(circles[0][i]).attr('cx').replace('px', '')),
						cy: this.evtLineY
					});
					
					// Append a last point for tailing.
					if (i === circles[0].length-1) {

						let l = cPoses.length,
							lastCPos = cPoses[l-1];

						cPoses.push({
							cx: lastCPos.cx + 100,
							cy: lastCPos.cy
						});
					}
				})
				.call((circles) => {
					this.evtlineG
						.insert('g', ':first-child')
							.classed('path-group', true)
								.append('path')
									.attr('d', this.line(cPoses))
									.attr('stroke-width', '2')
									.attr('stroke', '#000')
									.attr('marker-end', 'url(#Continue)');

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