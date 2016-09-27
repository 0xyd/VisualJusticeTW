'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventLine = function () {
	function EventLine() {
		_classCallCheck(this, EventLine);

		this.evtlineG = null;
		this.eventNodes = null;

		this.line = null;

		// Time scale
		this.timeScale = null;

		this.timeRegExp = new RegExp('^(\\d+)\/(\\d+)\/(\\d+)$');
	}

	_createClass(EventLine, [{
		key: 'initialize',
		value: function initialize() {
			this.evtlineG = d3.select('svg').append('g').attr('id', 'EvtLine');

			return this;
		}
	}, {
		key: 'csvImport',
		value: function csvImport(path) {
			var _this = this;

			d3.csv(path).row(function (d, i) {
				if (i !== 0) return d;
			}).get(function (error, rows) {

				var colorScale = d3.scale.category20c();

				_this.evtlineG.append('g').classed('event-group', true).selectAll('circles').data(_this._eventSerial(rows)).enter().append('circle').classed('event-node', true).attr({
					cx: function cx(d, i) {
						return _this.timeScale(d.dateObj.getTime());
					},
					cy: 100,
					fill: function fill(d, i) {
						return colorScale(i);
					},
					r: 12
				}).call(function (circles) {
					_this.eventNodes = circles;
					_this.connectCircles(circles);
				});
			});

			return this;
		}
	}, {
		key: 'connectCircles',
		value: function connectCircles(circles) {
			var _this2 = this;

			var cPoses = [];

			this.line = d3.svg.line().x(function (d) {
				return d.cx;
			}).y(function (d) {
				return d.cy;
			});

			circles.each(function (d) {

				cPoses.push({
					cx: _this2.timeScale(d.dateObj.getTime()),
					cy: 100
				});
			}).call(function (circles) {

				_this2.evtlineG.select('g.event-group').insert('g', ':first-child').classed('path-group', true).append('path').attr('d', _this2.line(cPoses)).attr('stoke-width', '2').attr('stroke', '#000');
			});

			return this;
		}
	}, {
		key: '_eventSerial',
		value: function _eventSerial(data) {

			var evts = [],
			    l = data.length;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var d = _step.value;

					var parsedTime = d['Time'].match(this.timeRegExp);

					// Date(year, month, date)
					d.dateObj = new Date(parsedTime[1], parsedTime[2] - 1, parsedTime[3]);

					evts.push(d);
				}

				// Sort the event in ascending order.
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

			evts.sort(function (a, b) {
				return a.dateObj.getTime() - b.dateObj.getTime();
			});

			this.timeScale = d3.scale.linear().domain([evts[0].dateObj.getTime(), evts[l - 1].dateObj.getTime()]).range([0,
			// parseInt(d3.select('svg').style('width').replace('px', ''))
			function () {
				var w = parseInt(d3.select('svg').style('width').replace('px', ''));
				return 0.95 * w;
			}()]);

			return evts;
		}
	}]);

	return EventLine;
}();
