'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radar = function () {
	function Radar(id, options) {
		_classCallCheck(this, Radar);

		this.cfg = {
			w: 600, //Width of the circle
			h: 600, //Height of the circle
			margin: { top: 20, right: 20, bottom: 20, left: 20 }, //The margins of the SVG
			levels: 5, //How many levels or inner circles should there be drawn
			maxValue: 0, //What is the value that the biggest circle will represent
			labelFactor: 1.25, //How much farther than the radius of the outer circle should the labels be placed
			wrapWidth: 60, //The number of pixels after which a label needs to be given a new line
			opacityArea: 0.35, //The opacity of the area of the blob
			dotRadius: 4, //The size of the colored circles of each blog
			opacityCircles: 0.1, //The opacity of the circles of each blob
			strokeWidth: 2, //The width of the stroke around each blob
			roundStrokes: false, //If true the area and stroke will follow a round path (cardinal-closed)
			color: d3.scale.category10() //Color function
		};

		//Put all of the options into a variable called cfg
		if ('undefined' !== typeof options) {
			for (var i in options) {
				if ('undefined' !== typeof options[i]) {
					this.cfg[i] = options[i];
				}
			} //for i
		} //if

		this.containerId = id;
	}

	_createClass(Radar, [{
		key: 'importData',
		value: function importData(dataPath) {
			var _this = this;

			// The promise to control asychronous data import
			this.dataImport = new Promise(function (resolve, reject) {

				d3.json(dataPath).get(function (errors, data) {

					//If the supplied maxValue is smaller than the actual one, replace by the max in the data
					_this.maxValue = Math.max(_this.cfg.maxValue, d3.max(data, function (i) {
						return d3.max(i.map(function (o) {
							return o.value;
						}));
					}));

					_this.allAxis = data[0].map(function (i, j) {
						return i.axis;
					}); //Names of each axis
					_this.total = _this.allAxis.length; //The number of different axes
					_this.radius = Math.min(_this.cfg.w / 2, _this.cfg.h / 2); //Radius of the outermost circle
					_this.Format = d3.format('%'); //Percentage formatting
					_this.angleSlice = Math.PI * 2 / _this.total; //The width in radians of each "slice"

					//Scale for the radius
					_this.rScale = d3.scale.linear().range([0, _this.radius]).domain([0, _this.maxValue]);

					_this.svg = d3.select(_this.containerId).append("svg").attr("width", _this.cfg.w + _this.cfg.margin.left + _this.cfg.margin.right).attr("height", _this.cfg.h + _this.cfg.margin.top + _this.cfg.margin.bottom).attr("class", "radar" + _this.containerId);

					_this.g = _this.svg.append("g").attr("transform", "translate(" + (_this.cfg.w / 2 + _this.cfg.margin.left) + "," + (_this.cfg.h / 2 + _this.cfg.margin.top) + ")");

					//Filter for the outside glow
					_this.filter = _this.g.append('defs').append('filter').attr('id', 'glow');

					_this.feGaussianBlur = _this.filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur');
					_this.feMerge = _this.filter.append('feMerge');

					_this.feMergeNode_1 = _this.feMerge.append('feMergeNode').attr('in', 'coloredBlur');

					_this.feMergeNode_2 = _this.feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

					//Wrapper for the grid & axes
					_this.axisGrid = _this.g.append("g").attr("class", "axisWrapper");

					resolve(data);
				});
			});

			return this;
		}
	}, {
		key: 'draw',
		value: function draw() {
			var _this2 = this;

			var self = this;

			this.dataImport.then(function (data) {

				//Draw the background circles
				_this2.axisGrid.selectAll(".levels").data(d3.range(1, _this2.cfg.levels + 1).reverse()).enter().append("circle").attr("class", "gridCircle").attr("r", function (d, i) {
					return _this2.radius / _this2.cfg.levels * d;
				}).style("fill", "#CDCDCD").style("stroke", "#CDCDCD").style("fill-opacity", _this2.cfg.opacityCircles).style("filter", "url(#glow)");

				//Text indicating at what % each level is
				_this2.axisGrid.selectAll(".axisLabel").data(d3.range(1, _this2.cfg.levels + 1).reverse()).enter().append("text").attr("class", "axisLabel").attr("x", 4).attr("y", function (d) {
					return -d * _this2.radius / _this2.cfg.levels;
				}).attr("dy", "0.4em").style("font-size", "10px").attr("fill", "#737373").text(function (d, i) {
					return _this2.Format(_this2.maxValue * d / _this2.cfg.levels);
				});

				// Create the straight lines radiating outward from the center
				_this2.axis = _this2.axisGrid.selectAll(".axis").data(_this2.allAxis).enter().append("g").attr("class", "axis");

				_this2.axis.append("line").attr("x1", 0).attr("y1", 0).attr("x2", function (d, i) {
					return _this2.rScale(_this2.maxValue * 1.1) * Math.cos(_this2.angleSlice * i - Math.PI / 2);
				}).attr("y2", function (d, i) {
					return _this2.rScale(_this2.maxValue * 1.1) * Math.sin(_this2.angleSlice * i - Math.PI / 2);
				}).attr("class", "line").style("stroke", "white").style("stroke-width", "2px");

				//Append the labels at each axis
				_this2.axis.append("text").attr("class", "legend").style("font-size", "11px").attr("text-anchor", "middle").attr("dy", "0.35em").attr("x", function (d, i) {
					return _this2.rScale(_this2.maxValue * _this2.cfg.labelFactor) * Math.cos(_this2.angleSlice * i - Math.PI / 2);
				}).attr("y", function (d, i) {
					return _this2.rScale(_this2.maxValue * _this2.cfg.labelFactor) * Math.sin(_this2.angleSlice * i - Math.PI / 2);
				}).text(function (d) {
					return d;
				}).call(wrap, _this2.cfg.wrapWidth);

				//The radial line function
				_this2.radarLine = d3.svg.line.radial().interpolate("linear-closed").radius(function (d) {
					return _this2.rScale(d.value);
				}).angle(function (d, i) {
					return i * _this2.angleSlice;
				});

				if (_this2.cfg.roundStrokes) {
					_this2.radarLine.interpolate("cardinal-closed");
				}

				//Create a wrapper for the blobs	
				_this2.blobWrapper = _this2.g.selectAll(".radarWrapper").data(data).enter().append("g").attr("class", "radarWrapper");

				//Append the backgrounds	
				_this2.blobWrapper.append("path").attr("class", "radarArea").attr("d", function (d, i) {
					return _this2.radarLine(d);
				}).style("fill", function (d, i) {
					return _this2.cfg.color(i);
				}).style("fill-opacity", _this2.cfg.opacityArea).on('mouseover', function (d, i) {
					//Dim all blobs
					d3.selectAll(".radarArea").transition().duration(200).style("fill-opacity", 0.1);
					//Bring back the hovered over blob
					d3.select(this).transition().duration(200).style("fill-opacity", 0.7);
				}).on('mouseout', function () {
					//Bring back all blobs
					d3.selectAll(".radarArea").transition().duration(200).style("fill-opacity", _this2.cfg.opacityArea);
				});

				//Create the outlines	
				_this2.blobWrapper.append("path").attr("class", "radarStroke").attr("d", function (d, i) {
					return _this2.radarLine(d);
				}).style("stroke-width", _this2.cfg.strokeWidth + "px").style("stroke", function (d, i) {
					return _this2.cfg.color(i);
				}).style("fill", "none").style("filter", "url(#glow)");

				//Append the circles
				_this2.blobWrapper.selectAll(".radarCircle").data(function (d, i) {
					return d;
				}).enter().append("circle").attr("class", "radarCircle").attr("r", _this2.cfg.dotRadius).attr("cx", function (d, i) {
					return _this2.rScale(d.value) * Math.cos(_this2.angleSlice * i - Math.PI / 2);
				}).attr("cy", function (d, i) {
					return _this2.rScale(d.value) * Math.sin(_this2.angleSlice * i - Math.PI / 2);
				}).style("fill", function (d, i, j) {
					return _this2.cfg.color(j);
				});

				/////////////////////////////////////////////////////////
				//////// Append invisible circles for tooltip ///////////
				/////////////////////////////////////////////////////////

				//Wrapper for the invisible circles on top
				_this2.blobCircleWrapper = _this2.g.selectAll(".radarCircleWrapper").data(data).enter().append("g").attr("class", "radarCircleWrapper");

				//Append a set of invisible circles on top for the mouseover pop-up
				_this2.blobCircleWrapper.selectAll(".radarInvisibleCircle").data(function (d, i) {
					return d;
				}).enter().append("circle").attr("class", "radarInvisibleCircle").attr("r", _this2.cfg.dotRadius * 1.5).attr("cx", function (d, i) {
					return _this2.rScale(d.value) * Math.cos(_this2.angleSlice * i - Math.PI / 2);
				}).attr("cy", function (d, i) {
					return _this2.rScale(d.value) * Math.sin(_this2.angleSlice * i - Math.PI / 2);
				}).style("fill", "none").style("pointer-events", "all").on("mouseover", function (d, i) {

					newX = parseFloat(d3.select(this).attr('cx')) - 10;
					newY = parseFloat(d3.select(this).attr('cy')) - 10;

					self.tooltip.attr('x', newX).attr('y', newY).text(Format(d.value)).transition().duration(200).style('opacity', 1);
				}).on("mouseout", function () {
					self.tooltip.transition().duration(200).style("opacity", 0);
				});

				//Set up the small tooltip for when you hover over a circle
				_this2.tooltip = _this2.g.append("text").attr("class", "tooltip").style("opacity", 0);

				//Wraps SVG text	
				function wrap(text, width) {
					text.each(function () {
						var text = d3.select(this),
						    words = text.text().split(/\s+/).reverse(),
						    word,
						    line = [],
						    lineNumber = 0,
						    lineHeight = 1.4,
						    // ems
						y = text.attr("y"),
						    x = text.attr("x"),
						    dy = parseFloat(text.attr("dy")),
						    tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

						while (word = words.pop()) {
							line.push(word);
							tspan.text(line.join(" "));
							if (tspan.node().getComputedTextLength() > width) {
								line.pop();
								tspan.text(line.join(" "));
								line = [word];
								tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
							}
						}
					});
				} //wrap	
			});
		}
	}]);

	return Radar;
}();
