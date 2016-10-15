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

		// this.line = null;
		this.evtInfoBoard = null;

		// The date weight for putting date in position.
		this.timeWeight = null;
		this.timeSpace = 5;

		this.textPointer = null;

		// Time scale
		this.timeScale = null;

		// peak scale
		this.peakScale = null;

		// peak path generator
		this.peakPathG = d3.svg.line().x(function (d) {
			return parseFloat(d.x);
		}).y(function (d) {
			return parseFloat(d.y);
		});

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

				_this.initialize(_this._calSvgWidth(_this._dateSerial(rows))).drawChart(rows, peakStatPath);
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

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var d = _step.value;

						// Check the date change.
						// Once the date change, push the weight value to array
						if (n && d.dateObj.getDate() !== data[n - 1].dateObj.getDate()) {
							_.push(w);
							w = 1;

							// When the element is the last, push it anyway.
							if (n === data.length - 1) _.push(w);
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
			100;
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
					// this._plotPeak(
					// 	this._peaksXProducer(circles),
					// 	peakStatPath
					// );

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
			    prevCirclePos = 0;

			this._calY();

			return this.evtlineG.append('g').classed('event-group', true).selectAll('circles').data(this.evtsData).enter().append('circle').classed('event-node', true).attr({
				cx: function cx(d, i) {
					console.log('prev position: ', prevCirclePos);
					var pDiff = 0,
					    // the pixels length between two event.
					diffDays = 0; // The diff of days.

					for (var k = 0; k <= i; k++) {

						// Calculate the diff days from the time starts
						var _d = k > 0 ? Math.abs(_this3.evtsData[k].dateObj - _this3.evtsData[k - 1].dateObj) / (24 * 60 * 60 * 1000) - 1 : 0;
						diffDays += _d;
					}

					console.log('check diffDays: ', diffDays);

					// The serial time is not count
					if (diffDays >= 2) pDiff = _this3.timeSpace * diffDays;
					prevCirclePos = 125 + 250 * i + pDiff;
					return 125 + 250 * i + pDiff;

					// if (i === 0)
					// 	return 125
					// if (d.Event.length === 0)
				},
				cy: this.evtLineY,
				fill: function fill(d, i) {
					return colorScale(i);
				},
				// working
				// r : 12
				r: function r(d) {
					if (d.Event === '') return 1;else return 12;
				}
			});
		}

		// Create the plots

	}, {
		key: '_peaksXProducer',
		value: function _peaksXProducer(circles) {

			var eventPeaks = [],
			    circleData = circles[0].map(function (c, i) {
				return c.__data__;
			}),
			    compound = [circleData[0]];

			/*
   	Get the circles' x position and 
   	calculate the average x position if there are multiple circles having the same date.
   */
			for (var i = 1; i < circleData.length; i++) {

				// Move the element in compund out once its Time property is different from the next one.
				if (compound.length === 1 && circleData[i - 1].Time !== circleData[i].Time) {

					var popEle = compound.shift();

					eventPeaks.push({
						x: popEle.x,
						dateObj: popEle.dateObj
					});
				} else if (compound.length > 1 && circleData[i - 1].Time !== circleData[i].Time) {

					eventPeaks.push({
						x: (parseFloat(compound[0].x) + parseFloat(compound[compound.length - 1].x)) / 2,
						dateObj: compound[0].dateObj
					});
					compound = [];
				}

				compound.push(circleData[i]);
			}

			var datePeaks = [];

			/*
   	Adding the dates that does not have any events.
   */
			for (var j = 1; j < eventPeaks.length; j++) {

				datePeaks.push(eventPeaks[j - 1]);

				// Add new eventPeaks if the two peaks are not sequential.
				if (eventPeaks[j].dateObj !== eventPeaks[j - 1].dateObj) {

					var endDate = eventPeaks[j].dateObj,
					    startDate = eventPeaks[j - 1].dateObj,
					    diffDays = (endDate - startDate) / (24 * 60 * 60 * 1000) - 1,
					    _ = [];

					for (var k = 0; k < Math.abs(diffDays); k++) {

						_.push({
							'x': parseFloat(eventPeaks[j - 1].x) + 125 + 50 * (k + 1),
							'dateObj': new Date(startDate.getYear(), startDate.getMonth(), startDate.getDate() + 1 + k)
						});
					}
					datePeaks = datePeaks.concat(_);
				}
			}

			return datePeaks;
		}

		// Plot peaks

	}, {
		key: '_plotPeak',
		value: function _plotPeak(peaks, path) {
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

				_this4.peakScale = d3.scale.linear().domain([d3.min(rows, function (d) {
					return d.search_results;
				}), d3.max(rows, function (d) {
					return d.search_results;
				})]).range([h - 50, 0]);

				// Compress the data
				var dataLength = d3.min([rows.length, peaks.length]);

				// Calculate the y position of each peak by the scale function.
				for (var i = 0; i < dataLength; i++) {
					peaks[i].y = _this4.peakScale(rows[i].search_results);
				}_this4.pad.append('g').classed('peak-group', true).append('path').datum(peaks.slice(0, dataLength)).attr('d', _this4.peakPathG).attr('fill', '#000');
			});
		}

		// Calculate y postion of the line.

	}, {
		key: '_calY',
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

				_this6.evtInfoBoard.selectAll('div').data(data).enter().append('div').classed('event-info', true).style({
					left: function left(d, i) {
						// return pl+125+(250 * i)+-100 + 'px'
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
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var d = _step2.value;

					var parsedTime = d['Time'].match(this.timeRegExp);

					// Date(year, month, date)
					d.dateObj = new Date(parsedTime[1], parsedTime[2] - 1, parsedTime[3]);

					// this.evtsData.push(d);
				}

				// Sort the event in ascending order.
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
				if (data[j].dateObj !== data[j - 1].dateObj) {

					var endDate = data[j].dateObj,
					    startDate = data[j - 1].dateObj,
					    diffDays = (endDate - startDate) / (24 * 60 * 60 * 1000) - 1,
					    _ = [];

					for (var k = 0; k < Math.abs(diffDays); k++) {

						_.push({
							// 'x': parseFloat(data[j-1].x) + 125 + 50*(k+1),
							'Event': '',
							'dateObj': new Date(startDate.getYear(), startDate.getMonth(), startDate.getDate() + 1 + k)
						});
					}
					this.evtsData = this.evtsData.concat(_);
				}
			}

			console.log('check evtsData: ', this.evtsData);

			// this.evtsData.sort((a, b) => {
			// 	return a.dateObj.getTime() - b.dateObj.getTime()
			// });

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
