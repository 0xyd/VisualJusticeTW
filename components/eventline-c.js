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
		value: function csvImport(path) {
			var _this = this;

			d3.csv(path).row(function (d, i) {
				return d;
			}).get(function (error, rows) {

				_this.initialize(_this._calSvgWidth(_this._eventSerial(rows))).drawChart(rows);
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
			(period - this.timeWeight.length) * this.timeSpace + 100;
		}
	}, {
		key: 'drawChart',
		value: function drawChart(data) {
			var _this2 = this;

			this._markCircles(data).call(function (circles) {
				_this2._drawPath(circles).call(function (circles) {

					// Mark the events on the line.
					_this2._markEvts(circles);
				});
			});
		}
	}, {
		key: '_markCircles',
		value: function _markCircles(data) {
			var _this3 = this;

			var colorScale = d3.scale.category20c();

			this._calY();

			return this.evtlineG.append('g').classed('event-group', true).selectAll('circles').data(this.evtsData).enter().append('circle').classed('event-node', true).attr({
				cx: function cx(d, i) {

					var pDiff = 0,
					    // the pixels length between two event.
					diffDays = 0; // The diff of days.

					for (var k = 0; k <= i; k++) {

						// Calculate the diff days from the time starts
						var _d = k > 0 ? Math.abs(_this3.evtsData[k].dateObj - _this3.evtsData[k - 1].dateObj) / (24 * 60 * 60 * 1000) - 1 : 0;
						diffDays += _d;
					}

					// The serial time is not count
					if (diffDays >= 2) pDiff = _this3.timeSpace * diffDays;

					return 125 + 250 * i + pDiff;
				},
				cy: this.evtLineY,
				fill: function fill(d, i) {
					return colorScale(i);
				},
				r: 12
			});
		}
	}, {
		key: '_calY',
		value: function _calY() {

			this.evtLineY = parseFloat(this.pad.style('height').replace('px', '')) - 30;
		}
	}, {
		key: '_drawPath',
		value: function _drawPath(circles) {
			var _this4 = this;

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
					cy: _this4.evtLineY
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
				_this4.evtlineG.insert('g', ':first-child').classed('path-group', true).append('path').attr('d', _this4.line(cPoses)).attr('stroke-width', '2').attr('stroke', '#000').attr('marker-end', 'url(#Continue)');
			});
		}

		// Mark the events below the lines

	}, {
		key: '_markEvts',
		value: function _markEvts(circles) {
			var _this5 = this;

			var data = [];

			circles.each(function (d, i) {

				var c = d3.select(circles[0][i]);

				d.x = c.attr('cx');
				d.y = c.attr('cy');

				data.push(d);
			}).call(function () {

				var pl = parseFloat(d3.select('svg').style('padding-left').replace('px', ''));

				_this5.evtInfoBoard.selectAll('div').data(data).enter().append('div').classed('event-info', true).style({
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

		// Transfer the event's time value to date object.

	}, {
		key: '_eventSerial',
		value: function _eventSerial(data) {

			var l = data.length;

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var d = _step2.value;

					var parsedTime = d['Time'].match(this.timeRegExp);

					// Date(year, month, date)
					d.dateObj = new Date(parsedTime[1], parsedTime[2] - 1, parsedTime[3]);

					this.evtsData.push(d);
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

			this.evtsData.sort(function (a, b) {
				return a.dateObj.getTime() - b.dateObj.getTime();
			});

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
