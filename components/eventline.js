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
		this.timeSpace  = 50;

		this.textPointer = null;

		// Time scale
		this.timeScale = null;

		/* Peak Related Properties */
		this.peakScale = null;
		this.peakGroupNames = null;

		/* Group Colors */
		this.groupColors = [
			{
				"fill"  : '#FF8723',
				"stroke": '#FE7300'
			},
			{
				"fill"  : '#095EA4',
				"stroke": '#4789C0'
			},
			{
				"fill"  : '#D9479A',
				"stroke": '#C5006F'
			},
			{
				"fill"  : '#42A74E',
				"stroke": '#157120'
			}
		];

		// peak path generator
		this.peakPathG = 
			d3.svg.line()
				.x((d) => { return parseFloat(d.x) })
				.y((d) => { return parseFloat(d.y) })
				.interpolate('basis');

		// TODO: Use area to draw path instead.
		this.areaG = 
			d3.svg.area()
				.x((d) => { return parseFloat(d.x) })
				.y1((d) => { return parseFloat(d.y) })
				.interpolate('monotone');
		

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

				let p = new Promise((resolve, reject) => {

					let reformedRows = this._dateSerial(rows);

					this
						.initialize(
							this._calSvgWidth(reformedRows));

					resolve(reformedRows);

				});


				p.then((r) => {
					this.drawChart(r, peakStatPath);
				});

				// this
				// 	.initialize(
				// 		this._calSvgWidth(
				// 			this._dateSerial(rows)))
				// 	.drawChart(rows, peakStatPath);
				
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

			let eventData = 
				data
					.map((d) => { if (d.Event.length > 0) return d })
					.filter((d) => { if(d) return d });

			for (let d of eventData) {

				// Check the date change.
				// Once the date change, push the weight value to array
				if (n && (d.dateObj.getDate() !== eventData[n-1].dateObj.getDate())) {
					_.push(w);
					w = 1;

					// When the element is the last, push it anyway.
					if (n === eventData.length-1) _.push(w);
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
				250

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
						this._plotPeak(peakStatPath);

					});
			});
	}


	// Marke the circles on the lines
	_markCircles(data) {

		let colorScale = 
				d3.scale.category20c(),
			prevCirclePos = 125;

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

									let pos = 0

									if (i === 0)
										pos += prevCirclePos

									else if (
										this.evtsData[i-1].Event.length !== 0 && 
										this.evtsData[i].Event.length !== 0)
										pos += prevCirclePos + 250
									
									else if (this.evtsData[i-1].Event === this.evtsData[i].Event)
										pos += prevCirclePos + 50

									else pos += prevCirclePos + 150

									prevCirclePos = pos;

									return pos 
								},
								cy: this.evtLineY,
								fill: (d, i) => { return colorScale(i) },
								r: (d) => { 
									if (d.Event === '') return 5 
									else return 12
								} 
							})
			)
	}

	// Plot peaks
	_plotPeak(path) {

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

					


					let classifiedData = 
						this._classifyPeak(rows);


					// Flatten the group data.
					let flattenData = ((data) => {

						let flatten = [],
							keys = Object.keys(data);

						for ( let key of keys ) 
							for (let d of data[key])
								flatten.push(d)
						
						return flatten

					})(classifiedData);

					this.peakScale = 
						d3.scale.linear()
							.domain([
								d3.min(flattenData, (d) => { return parseFloat(d) }),
								d3.max(flattenData, (d) => { return parseFloat(d) })
							])
							.range([h-50, 0]);

					/* Flatten events data because some data share the same date.*/
					let flattenEvtData = ((evtsData) => {

						let newEvtData = [];

						for ( let i = 0; i < evtsData.length; ) {
							
							let j = i,
								skip = 1,
								replica = {};

							// Compress the events with same date 
							// and calculate the mid point as the new x
							if (i < evtsData.length-1) {
								while ( evtsData[j].dateObj.getTime() === 
										evtsData[j+1].dateObj.getTime() ) {
									++j; ++skip;
								}
							}
							

							// New x position is the middle point of sequent event dots.
							let new_x = 
								(parseFloat(evtsData[j].x) + 
									parseFloat(evtsData[i].x)) / 2;

							// Retrieve the keys of event data 
							// which is not equal to "x"
							let keys = Object.keys(evtsData[i]).filter((d) => { return d !== 'x' })
							
							// Replicate the event data and set the x with new evaluated result.
							for ( let k of keys )
								replica[k] = evtsData[i][k]
							replica['x'] = new_x;

							newEvtData.push(replica);

							if (skip) i+=skip;
							else i++;
							
						}

						return newEvtData

					})(this.evtsData);

					// Compress the data because these two dataset are not always with the same length.
					let dataLength = 
						d3.min([
							rows.length,
							flattenEvtData.length
						]);

					this._plotPeakGroupData(classifiedData, flattenEvtData, dataLength);

				})

	}


	/* Group the peaks by the according to the keywords */
	_classifyPeak(rowData) {

		let googleSearch = /^google_search_results/,
			groupData = {};

		/* List the keywords of the search result  */
		let names = Object.keys(rowData[0])
			.filter((d)=> {
				return d.match(googleSearch)
			});

		/* Initialize the data */
		for ( let name of names )
			groupData[name] = [];
		

		/* Put the data inside the groupData */
		for ( let row of rowData )
			for ( let name of names )
				groupData[name].push(row[name])
			
		return groupData
	}

	/* Plot the grouping peak data by bounding the related data. */
	_plotPeakGroupData(peakData, evtsData, dataNumber) {

		// Set up x0 and y0 for area generator
		console.log('check:');
		console.log(parseFloat(this.pad.style('height').replace('px', '')));
		this.areaG.y0(this.evtLineY - 20);

		let dataset = {};

		// Assign the group names
		this.peakGroupNames = Object.keys(peakData);
		
		// Group the event data and bind the y information.
		for ( let group of this.peakGroupNames ) {

			dataset[group] = [];

			for ( let i = 0; i < dataNumber; i++ ) {

				// Create the replicas of event data
				let d = ((evtData) => {
					
					let _ = {},
					   keys = Object.keys(evtData); // Keys in the data

					for ( let k of keys ) _[k] = evtData[k];

					// Calculate the y value according to search results.
					_['y'] = this.peakScale(parseFloat(peakData[group][i]))

					return _

				})(evtsData[i]);

				dataset[group].push(d);
			}

		}

		// Testing
		console.log("==========================");
		for ( let group of this.peakGroupNames ) {
			console.log(dataset[group]);
		}


		/* Draw the peaks */
		for ( let i = 0; i < this.peakGroupNames.length; i++ ) {

			let group = this.peakGroupNames[i];

			this.pad.append('g')
				.classed('peak-group-' + group, true)
					.append('path')
						.datum(dataset[group])
						.attr({
							d: this.areaG,
							stroke: '#000',
							'stroke-width': 1,
							fill:   this.groupColors[i].fill,
							stroke: this.groupColors[i].stroke,
							opacity: 0.3
						});
					/* TODO: Hover event. */
					// .on('mouseenter', (d) => {

					// 	let x = window.event.pageX;

					// 	// Return the 
					// 	let currentDate = this.events.find((d, i, ary) => {

					// 		return x > parseInt(d.x)

					// 	});

					// 	console.log(currentDate);


					// });

			
			

		}

		// Ploting for testing purpose
			// this.pad.append('g').classed('test-google_search_results#輔大性侵', true)
			// 	.selectAll('circle')
			// 	.data(dataset['google_search_results#輔大性侵']).enter()
			// 		.append('circle')
			// 			.attr({
			// 				r: 5,
			// 				cx: (d) => { return parseFloat(d.x) },
			// 				cy: (d) => { return parseFloat(d.y) },
			// 				// fill: this.groupColors[i].fill
			// 			});

			// this.pad.append('g')
			// 	.classed('peak-group-google_search_results#輔大性侵', true)
			// 		.append('path')
			// 			.datum(dataset['google_search_results#輔大性侵'])
			// 			.attr({
			// 				d: this.areaG,
			// 				stroke: '#000',
			// 				'stroke-width': 1,
			// 				// fill:   this.groupColors[i].fill,
			// 				// stroke: this.groupColors[i].stroke,
			// 				fill: '#000',
			// 				stroke: '#000',
			// 				opacity: 0.8
			// 			});
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

			// Only mark the events with event content
			let reformedData = 
				data
					.map((d) => {
						if (d.Event.length !== 0) return d
					})
					.filter((d) => { if (d) return d });


			this.evtInfoBoard.selectAll('div')
				.data(reformedData).enter()
					.append('div')
						.classed('event-info', true)
							.style({
								left: (d, i) => { 
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

	// Add the event's date object according to events.
	_dateSerial(data) {

		let l  = data.length;
		
		// Generate the date objects for events
		for (let d of data) {

			let parsedTime = d['Time'].match(this.timeRegExp);
				
			// Date(year, month, date)
			d.dateObj = 
				new Date(parsedTime[1], parsedTime[2]-1, parsedTime[3]);
		}

		// Sort the event in ascending order.
		data.sort((a, b) => {
			return a.dateObj.getTime() - b.dateObj.getTime()
		});

		/*
			Adding the dates that does not have any events.
		*/
		for ( let j = 1; j < l; j++ ) {

			this.evtsData.push(data[j-1]);

			// Add new eventPeaks if the two peaks are not sequential.
			if (data[j].dateObj > data[j-1].dateObj) {

				let endDate = data[j].dateObj,
					startDate = data[j-1].dateObj,
					diffDays = (endDate - startDate) / ( 24 * 60 * 60 * 1000) - 1,
					_ = [];

				for ( let k = 0; k < Math.abs(diffDays); k++ ) {

					_.push({
						// 'x': parseFloat(data[j-1].x) + 125 + 50*(k+1),
						'Event': '',
						'dateObj':
							new Date(
								startDate.getFullYear(), 
									startDate.getMonth(), startDate.getDate() + 1+k)
						})
					
				}
				this.evtsData = this.evtsData.concat(_);
			}
		}

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