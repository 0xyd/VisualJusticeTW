'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventLine = function () {
	function EventLine() {
		_classCallCheck(this, EventLine);

		this.pad = d3.select('#TimeLineBoard');

		this.evtsData = [];
		this.evtlineG = null;
		this.evtLineY = null; // The Y position of the event line.
		this.eventNodes = null;

		// TODO
		this.groupSearchResults = {};

		// this.line = null;
		this.evtInfoBoard = null;

		// The date weight for putting date in position.
		this.timeWeight = null;
		this.timeSpace = 50;

		this.textPointer = null;

		// Time scale
		this.timeScale = null;

		/* Peak Related Properties */
		this.peakScale = null;
		this.peakGroupNames = null;

		// peak path generator
		this.peakPathG = d3.svg.line().x(function (d) {
			return parseFloat(d.x);
		}).y(function (d) {
			return parseFloat(d.y);
		}).interpolate('basis');

		this.timeRegExp = new RegExp('^(\\d+)\/(\\d+)\/(\\d+)$');
	}

	_createClass(EventLine, [{
		key: 'initialize',
		value: function initialize(svgWidth) {
			this.evtlineG = this.pad.attr('width', svgWidth).append('g').attr('id', 'EvtLine');

			this.evtInfoBoard = d3.select('#TimeLineInfo').style('width', svgWidth + 'px');

			return this;
		}
	}, {
		key: 'csvImport',
		value: function csvImport(eventPaths, peakStatPath) {
			var _this = this;

			d3.csv(eventPaths).row(function (d, i) {
				return d;
			}).get(function (error, rows) {

				var p = new Promise(function (resolve, reject) {

					var reformedRows = _this._dateSerial(rows);

					_this.initialize(_this._calSvgWidth(reformedRows));

					resolve(reformedRows);
				});

				p.then(function (r) {
					_this.drawChart(r, peakStatPath);
				});

				// this
				// 	.initialize(
				// 		this._calSvgWidth(
				// 			this._dateSerial(rows)))
				// 	.drawChart(rows, peakStatPath);
			});

			return this;
		}

		// Compress the data which has the same date.

	}, {
		key: '_calSvgWidth',
		value: function _calSvgWidth(data) {

			var last = data.length - 1;

			/*
   	Calculate the weight of each date.
   	For instance, if there are two events on the data.
   	The weight of date is 2.
   */
			this.timeWeight = function (data) {

				var _ = [],
				    c = 0;

				var n = 0,
				    // The index of the data element
				w = 1; // The weight of date

				var eventData = data.map(function (d) {
					if (d.Event.length > 0) return d;
				}).filter(function (d) {
					if (d) return d;
				});

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = eventData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var d = _step.value;

						// Check the date change.
						// Once the date change, push the weight value to array
						if (n && d.dateObj.getDate() !== eventData[n - 1].dateObj.getDate()) {
							_.push(w);
							w = 1;

							// When the element is the last, push it anyway.
							if (n === eventData.length - 1) _.push(w);
						}

						// Increment the weight of the date.
						else if (n) w++;

						n++;
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

				return _;
			}(data);

			// The period of time that the event starts to now (or to end.)
			var period = Math.abs(data[last].dateObj - data[0].dateObj) / (24 * 60 * 60 * 1000);

			return 250 * this.timeWeight.reduce(function (p, c) {
				// Reduce the array into a weight summary value.
				return p + c;
			}) +
			// Time slots for the dates without events.
			(period - this.timeWeight.length) * this.timeSpace +
			// 100 pixels are left for tail.
			250;
		}
	}, {
		key: 'drawChart',
		value: function drawChart(data, peakStatPath) {
			var _this2 = this;

			this._markCircles(data).call(function (circles) {
				_this2._drawPath(circles).call(function (circles) {

					// Mark the events on the line.
					_this2._markEvts(circles);

					// Peaks' x positions
					_this2._plotPeak(peakStatPath);

					// this.pad.append('path')
					// 	.data(data)
					// 		.attr('d', this.peakPathG)
					// 		.attr('fill', '#000');
				});
			});
		}

		// Marke the circles on the lines

	}, {
		key: '_markCircles',
		value: function _markCircles(data) {
			var _this3 = this;

			var colorScale = d3.scale.category20c(),
			    prevCirclePos = 125;

			this._calY();

			return this.evtlineG.append('g').classed('event-group', true).selectAll('circles').data(this.evtsData).enter().append('circle').classed('event-node', true).attr({
				cx: function cx(d, i) {

					var pos = 0;

					if (i === 0) pos += prevCirclePos;else if (_this3.evtsData[i - 1].Event.length !== 0 && _this3.evtsData[i].Event.length !== 0) pos += prevCirclePos + 250;else if (_this3.evtsData[i - 1].Event === _this3.evtsData[i].Event) pos += prevCirclePos + 50;else pos += prevCirclePos + 150;

					prevCirclePos = pos;

					return pos;
				},
				cy: this.evtLineY,
				fill: function fill(d, i) {
					return colorScale(i);
				},
				r: function r(d) {
					if (d.Event === '') return 5;else return 12;
				}
			});
		}

		// Create the plots (Depreciated)
		// _peaksProducer(circles) {

		// 	let eventPeaks = [],
		// 		circleData = circles[0].map((c, i) => { return c.__data__ }),
		// 		compound = [circleData[0]]; 

		// 	/*
		// 		Get the circles' x position and
		// 		calculate the average x position if there are multiple circles having the same date.
		// 	*/
		// 	// for ( let i = 1; i < circleData.length; i++ ) {

		// 	// 	// Move the element in compund out once its Time property is different from the next one.
		// 	// 	if (compound.length === 1 && circleData[i-1].Time !== circleData[i].Time) {

		// 	// 		let popEle = compound.shift();

		// 	// 		eventPeaks.push({
		// 	// 			x: popEle.x,
		// 	// 			dateObj: popEle.dateObj
		// 	// 		});

		// 	// 	}
		// 	// 	else if (compound.length > 1 && circleData[i-1].Time !== circleData[i].Time) {

		// 	// 		eventPeaks.push({
		// 	// 			x: (
		// 	// 				parseFloat(compound[0].x) +
		// 	// 					parseFloat(compound[compound.length-1].x)) / 2,
		// 	// 			dateObj: compound[0].dateObj
		// 	// 		});
		// 	// 		compound = [];
		// 	// 	}

		// 	// 	compound.push(circleData[i]);

		// 	// }

		// 	let datePeaks = [];

		// 	/*
		// 		Adding the dates that does not have any events.
		// 	*/
		// 	for ( let j = 1; j < eventPeaks.length; j++ ) {

		// 		datePeaks.push(eventPeaks[j-1]);

		// 		// Add new eventPeaks if the two peaks are not sequential.
		// 		if (eventPeaks[j].dateObj !== eventPeaks[j-1].dateObj) {

		// 			let endDate = eventPeaks[j].dateObj,
		// 				startDate = eventPeaks[j-1].dateObj,
		// 				diffDays = (endDate - startDate) / ( 24 * 60 * 60 * 1000) - 1,
		// 				_ = [];

		// 			for ( let k = 0; k < Math.abs(diffDays); k++ ) {

		// 				_.push({
		// 					'x': parseFloat(eventPeaks[j-1].x) + 125 + 50*(k+1),
		// 					'dateObj':
		// 						new Date(
		// 							startDate.getYear(),
		// 								startDate.getMonth(), startDate.getDate() + 1+k)
		// 					})

		// 			}
		// 			datePeaks = datePeaks.concat(_);
		// 		}
		// 	}

		// 	return datePeaks
		// }

		// Plot peaks

	}, {
		key: '_plotPeak',
		value: function _plotPeak(path) {
			var _this4 = this;

			d3.csv(path).row(function (d) {
				if (d.Time === "") return null;else if (d.search_results === "") {
					d.search_results = 0;
					return d;
				} else {
					d.search_results = parseInt(d.search_results);
					return d;
				}
			}).get(function (error, rows) {

				var h = parseInt(_this4.pad.style('height').replace('px', ''));

				var classifiedData = _this4._classifyPeak(rows);

				// Flatten the group data.
				var flattenData = function (data) {

					var flatten = [],
					    keys = Object.keys(data);

					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var key = _step2.value;
							var _iteratorNormalCompletion3 = true;
							var _didIteratorError3 = false;
							var _iteratorError3 = undefined;

							try {
								for (var _iterator3 = data[key][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var d = _step3.value;

									flatten.push(d);
								}
							} catch (err) {
								_didIteratorError3 = true;
								_iteratorError3 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion3 && _iterator3.return) {
										_iterator3.return();
									}
								} finally {
									if (_didIteratorError3) {
										throw _iteratorError3;
									}
								}
							}
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					return flatten;
				}(classifiedData);

				_this4.peakScale = d3.scale.linear().domain([d3.min(flattenData, function (d) {
					return parseFloat(d);
				}), d3.max(flattenData, function (d) {
					return parseFloat(d);
				})]).range([h - 50, 0]);

				// Compress the data because these two dataset are not with the same length.
				var dataLength = d3.min([rows.length, _this4.evtsData.length]);

				_this4._plotPeakGroupData(classifiedData, dataLength);

				/* The below snippet is going to be replaced. */
				// Calculate the y position of each peak by the scale function.
				// for ( let i = 0; i < dataLength; i++ ) {
				// 	this.evtsData[i].y = this.peakScale(rows[i].search_results);
				// }

				// this.pad.append('g').classed('peak-group', true)
				// 	.append('path')
				// 	.datum(this.evtsData.slice(0, dataLength))
				// 	.attr('d', this.peakPathG)
				// 	.attr('stroke', '#000')
				// 	.attr('stroke-width', '3')
				// 	.attr('fill', 'none');
			});
		}

		/* Group the peaks by the according to the keywords */

	}, {
		key: '_classifyPeak',
		value: function _classifyPeak(rowData) {

			var googleSearch = /^google_search_results/,
			    groupData = {};

			/* List the keywords of the search result  */
			var names = Object.keys(rowData[0]).filter(function (d) {
				return d.match(googleSearch);
			});

			/* Initialize the data */
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = names[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var name = _step4.value;

					groupData[name] = [];
				} /* Put the data inside the groupData */
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = rowData[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var row = _step5.value;
					var _iteratorNormalCompletion6 = true;
					var _didIteratorError6 = false;
					var _iteratorError6 = undefined;

					try {
						for (var _iterator6 = names[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
							var name = _step6.value;

							groupData[name].push(row[name]);
						}
					} catch (err) {
						_didIteratorError6 = true;
						_iteratorError6 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion6 && _iterator6.return) {
								_iterator6.return();
							}
						} finally {
							if (_didIteratorError6) {
								throw _iteratorError6;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			return groupData;
		}

		/* Group the peak data */

	}, {
		key: '_plotPeakGroupData',
		value: function _plotPeakGroupData(groupedData, dataNumber) {

			// Assign the group names
			this.peakGroupNames = Object.keys(groupedData);

			// console.log(groupedData);

			// Group the event data and bind the y information.
			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = this.peakGroupNames[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var group = _step7.value;

					this.groupSearchResults[group] = [];

					for (var i = 0; i < dataNumber; i++) {

						var d = this.evtsData[i];

						d['y'] = this.peakScale(parseFloat(groupedData[group][i]));

						this.groupSearchResults[group].push(d);
					}
				}
			} catch (err) {
				_didIteratorError7 = true;
				_iteratorError7 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion7 && _iterator7.return) {
						_iterator7.return();
					}
				} finally {
					if (_didIteratorError7) {
						throw _iteratorError7;
					}
				}
			}

			console.log(this.groupSearchResults);

			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = this.peakGroupNames[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var group = _step8.value;

					this.pad.append('g').classed('peak-group-' + group, true).append('path').datum(this.groupSearchResults[group]).attr({
						d: this.peakPathG,
						stroke: '#000',
						'stroke-width': 1,
						fill: 'none'
					});
				}

				// Depreciate the below code
				// for ( let i = 0; i < dataNumber; i++ ) {

				// 	for ( let gName of this.peakGroupNames ) {

				// 		this.evtsData[i][gName] = {
				// 			y: this.peakScale(parseFloat(groupedData[gName][i]))
				// 		};
				// 	}
				// }

				// for ( let gName of this.peakGroupNames ) {

				// 	console.log('bound data check:', this.evtsData.slice(0, dataNumber));

				// 	this.pad.append('g')
				// 		.classed('peak-group-' + gName, true)
				// 			.append('path')
				// 				.datum(this.evtsData.slice(0, dataNumber))
				// 					.attr('d', this.peakPathG)
				// 					.attr('stroke', '#000')
				// 					.attr('stroke-width', '3')
				// 					.attr('fill', 'none');

				// }
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8.return) {
						_iterator8.return();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}
		}

		// Calculate y postion of the line.

	}, {
		key: '_calY',
		// display: 'none'
		value: function _calY() {

			this.evtLineY = parseFloat(this.pad.style('height').replace('px', '')) - 30;
		}
	}, {
		key: '_drawPath',
		value: function _drawPath(circles) {
			var _this5 = this;

			var cPoses = [];

			// Set up the arrow.
			this.pad.append('defs').append('marker').attr({
				id: 'Continue',
				refX: 0,
				refY: 3,
				markerWidth: 10,
				markerHeight: 10
			}).append('path').attr({
				d: 'M0,0 L0,6 L9,3 z',
				fill: '#f00'
			});

			this.line = d3.svg.line().x(function (d) {
				return d.cx;
			}).y(function (d) {
				return d.cy;
			});

			return circles.each(function (d, i) {
				cPoses.push({
					cx: parseInt(d3.select(circles[0][i]).attr('cx').replace('px', '')),
					cy: _this5.evtLineY
				});

				// Append a last point for tailing.
				if (i === circles[0].length - 1) {

					var l = cPoses.length,
					    lastCPos = cPoses[l - 1];

					cPoses.push({
						cx: lastCPos.cx + 100,
						cy: lastCPos.cy
					});
				}
			}).call(function (circles) {
				_this5.evtlineG.insert('g', ':first-child').classed('path-group', true).append('path').attr('d', _this5.line(cPoses)).attr('stroke-width', '2').attr('stroke', '#000').attr('marker-end', 'url(#Continue)');
			});
		}

		// Mark the events below the lines

	}, {
		key: '_markEvts',
		value: function _markEvts(circles) {
			var _this6 = this;

			var data = [];

			circles.each(function (d, i) {

				var c = d3.select(circles[0][i]);

				d.x = c.attr('cx');
				d.y = c.attr('cy');

				data.push(d);
			}).call(function () {

				var pl = parseFloat(d3.select('svg').style('padding-left').replace('px', ''));

				// Only mark the events with event content
				var reformedData = data.map(function (d) {
					if (d.Event.length !== 0) return d;
				}).filter(function (d) {
					if (d) return d;
				});

				_this6.evtInfoBoard.selectAll('div').data(reformedData).enter().append('div').classed('event-info', true).style({
					left: function left(d, i) {
						return pl + parseFloat(d.x) + -100 + 'px';
					}
				}).html(function (d) {

					var time = d['Time'],
					    event = d['Event'];

					return '<div class="date"><span>' + time + '</span></div>' + '<div class="context">' + event + '</div>';
				});
			});
		}

		// Add the event's date object according to events.

	}, {
		key: '_dateSerial',
		value: function _dateSerial(data) {

			var l = data.length;

			// Generate the date objects for events
			var _iteratorNormalCompletion9 = true;
			var _didIteratorError9 = false;
			var _iteratorError9 = undefined;

			try {
				for (var _iterator9 = data[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
					var d = _step9.value;

					var parsedTime = d['Time'].match(this.timeRegExp);

					// Date(year, month, date)
					d.dateObj = new Date(parsedTime[1], parsedTime[2] - 1, parsedTime[3]);
				}

				// Sort the event in ascending order.
			} catch (err) {
				_didIteratorError9 = true;
				_iteratorError9 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion9 && _iterator9.return) {
						_iterator9.return();
					}
				} finally {
					if (_didIteratorError9) {
						throw _iteratorError9;
					}
				}
			}

			data.sort(function (a, b) {
				return a.dateObj.getTime() - b.dateObj.getTime();
			});

			/*
   	Adding the dates that does not have any events.
   */
			// let reproducedData = [];
			for (var j = 1; j < l; j++) {

				this.evtsData.push(data[j - 1]);

				// Add new eventPeaks if the two peaks are not sequential.
				if (data[j].dateObj > data[j - 1].dateObj) {

					var endDate = data[j].dateObj,
					    startDate = data[j - 1].dateObj,
					    diffDays = (endDate - startDate) / (24 * 60 * 60 * 1000) - 1,
					    _ = [];

					for (var k = 0; k < Math.abs(diffDays); k++) {

						_.push({
							// 'x': parseFloat(data[j-1].x) + 125 + 50*(k+1),
							'Event': '',
							'dateObj': new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1 + k)
						});
					}
					this.evtsData = this.evtsData.concat(_);
				}
			}

			this.timeScale = d3.scale.linear().domain([this.evtsData[0].dateObj.getTime(), this.evtsData[l - 1].dateObj.getTime()]).range([0, function () {
				var svg = d3.select('svg'),
				    w = parseInt(svg.style('width').replace('px', '')),
				   
				// Value of Padding right and left
				pl = parseInt(svg.style('padding-left').replace('px', '')),
				    pr = parseInt(svg.style('padding-right').replace('px', ''));

				return w - pl - pr;
			}()]);

			return this.evtsData;
		}
	}]);

	return EventLine;
}();
