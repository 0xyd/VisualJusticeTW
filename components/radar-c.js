'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radar = function () {
	function Radar(id, radar_width, radar_height, label_factor, options) {
		_classCallCheck(this, Radar);

		this.cfg = {

			w: //Width of the circle
			radar_width ? radar_width : getD3CSSStyle(d3.select(id), 'width'),
			h: //Height of the circle
			radar_height ? radar_height : getD3CSSStyle(d3.select(id), 'height'),
			margin: { top: 25, right: 25, bottom: 25, left: 25 }, //The margins of the SVG
			levels: 10, //How many levels or inner circles should there be drawn
			maxValue: 0, //What is the value that the biggest circle will represent
			labelFactor: label_factor ? label_factor : 1.25, //How much farther than the radius of the outer circle should the labels be placed
			wrapWidth: 60, //The number of pixels after which a label needs to be given a new line
			opacityArea: 0.1, //The opacity of the area of the blob
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
		value: function importData(inputData) {
			var _this = this;

			// When inputData is the path of the data
			if (typeof inputData === 'string') {
				// The promise to control asychronous data import
				this.dataImportPromise = new Promise(function (resolve, reject) {

					d3.json(inputData).get(function (errors, data) {

						initialGraphSetting.call(_this, data);
						resolve(data);
					});
				});
			} else {

				this.dataImportPromise = new Promise(function (resolve, reject) {

					initialGraphSetting.call(_this, inputData);
					resolve(inputData);
				});
			}

			function initialGraphSetting(data) {

				//If the supplied maxValue is smaller than the actual one, replace by the max in the data
				this.maxValue = Math.max(this.cfg.maxValue, d3.max(data, function (i) {
					return d3.max(i.map(function (o) {
						return o.value;
					}));
				}));

				this.allAxis = data[0].map(function (i, j) {
					return i.axis;
				}); //Names of each axis
				this.total = this.allAxis.length; //The number of different axes
				this.radius = Math.min(this.cfg.w / 2, this.cfg.h / 2); //Radius of the outermost circle
				this.Format = d3.format('%'); //Percentage formatting
				this.angleSlice = Math.PI * 2 / this.total; //The width in radians of each "slice"

				//Scale for the radius
				this.rScale = d3.scale.linear().range([0, this.radius]).domain([0, this.maxValue]);

				this.svg = d3.select(this.containerId).append("svg").attr("width", this.cfg.w + this.cfg.margin.left + this.cfg.margin.right).attr("height", this.cfg.h + this.cfg.margin.top + this.cfg.margin.bottom).attr("class", "radar" + this.containerId);

				this.g = this.svg.append("g").attr("transform", "translate(" + (this.cfg.w / 2 + this.cfg.margin.left) + "," + (this.cfg.h / 2 + this.cfg.margin.top) + ")");

				//Filter for the outside glow
				this.filter = this.g.append('defs').append('filter').attr('id', 'glow');
				this.feGaussianBlur = this.filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur');
				this.feMerge = this.filter.append('feMerge');
				this.feMergeNode_1 = this.feMerge.append('feMergeNode').attr('in', 'coloredBlur');
				this.feMergeNode_2 = this.feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

				//Wrapper for the grid & axes
				this.axisGrid = this.g.append("g").attr("class", "axisWrapper");
			}

			return this;
		}
	}, {
		key: 'draw',
		value: function draw() {
			var _this2 = this;

			this.drawDataPromise = new Promise(function (resolve, reject) {

				_this2.dataImportPromise.then(function (data) {

					drawBackgroundCircles.call(_this2);
					drawRadarAxes.call(_this2);
					drawblopWrapper.call(_this2, data);

					//Set up the small tooltip for when you hover over a circle
					_this2.tooltip = _this2.g.append("text").attr("class", "tooltip").style("opacity", 0);

					resolve();
				});
			});

			function drawBackgroundCircles() {
				var _this3 = this;

				//Draw the background circles
				this.axisGrid.selectAll(".levels").data(d3.range(1, this.cfg.levels + 1).reverse()).enter().append("circle").attr("class", "gridCircle").attr("r", function (d, i) {
					return _this3.radius / _this3.cfg.levels * d;
				}).style("fill", "#CDCDCD").style("stroke", "#CDCDCD").style("fill-opacity", this.cfg.opacityCircles).style("filter", "url(#glow)");

				//Text indicating at what % each level is
				this.axisGrid.selectAll(".axisLabel").data(d3.range(1, this.cfg.levels + 1).reverse()).enter().append("text").attr("class", "axisLabel").attr("x", 4).attr("y", function (d) {
					return -d * _this3.radius / _this3.cfg.levels;
				}).attr("dy", "0.4em").style("font-size", "10px").attr("fill", "#737373").text(function (d, i) {
					return _this3.Format(_this3.maxValue * d / _this3.cfg.levels);
				});
			}

			function drawRadarAxes() {
				var _this4 = this;

				// Create the straight lines radiating outward from the center
				this.axis = this.axisGrid.selectAll(".axis").data(this.allAxis).enter().append("g").attr("class", "axis");

				this.axis.append("line").attr("x1", 0).attr("y1", 0).attr("x2", function (d, i) {
					return _this4.rScale(_this4.maxValue * 1.1) * Math.cos(_this4.angleSlice * i - Math.PI / 2);
				}).attr("y2", function (d, i) {
					return _this4.rScale(_this4.maxValue * 1.1) * Math.sin(_this4.angleSlice * i - Math.PI / 2);
				}).attr("class", "line").style("stroke", "white").style("stroke-width", "2px");

				//Append the labels at each axis
				this.axis.append("text").attr("class", "legend").style("font-size", "11px").attr("text-anchor", "middle").attr("dy", "0.35em").attr("x", function (d, i) {
					return _this4.rScale(_this4.maxValue * _this4.cfg.labelFactor) * Math.cos(_this4.angleSlice * i - Math.PI / 2);
				}).attr("y", function (d, i) {
					return _this4.rScale(_this4.maxValue * _this4.cfg.labelFactor) * Math.sin(_this4.angleSlice * i - Math.PI / 2);
				}).text(function (d) {
					return d;
				}).call(wrap, this.cfg.wrapWidth);

				//The radial line function
				this.radarLine = d3.svg.line.radial().interpolate("linear-closed").radius(function (d) {
					return _this4.rScale(d.value);
				}).angle(function (d, i) {
					return i * _this4.angleSlice;
				});

				if (this.cfg.roundStrokes) {
					this.radarLine.interpolate("cardinal-closed");
				}
			}

			function drawblopWrapper(data) {
				var _this5 = this;

				//Create a wrapper for the blobs	
				this.blobWrapper = this.g.selectAll(".radarWrapper").data(data).enter().append("g").attr("class", "radarWrapper");

				//Append the backgrounds	
				this.blobWrapper.append("path").attr("class", "radarArea").attr("d", function (d, i) {
					return _this5.radarLine(d);
				}).style("fill", function (d, i) {
					return _this5.cfg.color(i);
				});
				// Y.D. 20161126: Hover animation is pending.
				// .style("fill-opacity", this.cfg.opacityArea)
				// .on('mouseover', function (d,i){
				// 	//Dim all blobs
				// 	d3.selectAll(".radarArea")
				// 		.transition().duration(200)
				// 		.style("fill-opacity", 0.1);
				// 		//Bring back the hovered over blob
				// 	d3.select(this)
				// 		.transition().duration(200)
				// 		.style("fill-opacity", 0.7);	
				// })
				// .on('mouseout', () => {
				// 	//Bring back all blobs
				// 	d3.selectAll(".radarArea")
				// 		.transition().duration(200)
				// 		.style("fill-opacity", this.cfg.opacityArea);
				// });

				//Create the outlines	
				this.blobWrapper.append("path").attr("class", "radarStroke").attr("d", function (d, i) {
					return _this5.radarLine(d);
				}).style("stroke-width", this.cfg.strokeWidth + "px").style("stroke", function (d, i) {
					return _this5.cfg.color(i);
				}).style("fill", "none").style("filter", "url(#glow)");

				//Append the circles
				this.blobWrapper.selectAll(".radarCircle").data(function (d, i) {
					return d;
				}).enter().append("circle").attr("class", "radarCircle").attr("r", this.cfg.dotRadius).attr("cx", function (d, i) {
					return _this5.rScale(d.value) * Math.cos(_this5.angleSlice * i - Math.PI / 2);
				}).attr("cy", function (d, i) {
					return _this5.rScale(d.value) * Math.sin(_this5.angleSlice * i - Math.PI / 2);
				}).style("fill", function (d, i, j) {
					return _this5.cfg.color(j);
				});

				/////////////////////////////////////////////////////////
				//////// Append invisible circles for tooltip ///////////
				/////////////////////////////////////////////////////////

				//Wrapper for the invisible circles on top
				this.blobCircleWrapper = this.g.selectAll(".radarCircleWrapper").data(data).enter().append("g").attr("class", "radarCircleWrapper");

				//Append a set of invisible circles on top for the mouseover pop-up
				this.blobCircleWrapper.selectAll(".radarInvisibleCircle").data(function (d, i) {
					return d;
				}).enter().append("circle").attr("class", "radarInvisibleCircle").attr("r", this.cfg.dotRadius * 1.5).attr("cx", function (d, i) {
					return _this5.rScale(d.value) * Math.cos(_this5.angleSlice * i - Math.PI / 2);
				}).attr("cy", function (d, i) {
					return _this5.rScale(d.value) * Math.sin(_this5.angleSlice * i - Math.PI / 2);
				}).style("fill", "none").style("pointer-events", "all").on("mouseover", function (d, i) {

					var newX = parseFloat(d3.select(this).attr('cx')) - 10;
					var newY = parseFloat(d3.select(this).attr('cy')) - 10;

					self.tooltip.attr('x', newX).attr('y', newY).text(self.Format(d.value)).transition().duration(200).style('opacity', 1);
				}).on("mouseout", function () {
					self.tooltip.transition().duration(200).style("opacity", 0);
				});

				//Set up the small tooltip for when you hover over a circle
				this.tooltip = this.g.append("text").attr("class", "tooltip").style("opacity", 0);
			}

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
			}

			return this;
		}
	}, {
		key: 'hightlightRadarArea',
		value: function hightlightRadarArea(by_index, by_id) {

			this.drawDataPromise.then(function () {

				// Dishighlight all radar area.
				d3.selectAll('.highlighted').classed('highlighted', false);

				if (by_id) d3.select(by_id).classed('highlighted', true);else if (by_index !== undefined) {

					d3.selectAll('.radarWrapper').each(function (d, i) {

						if (i === by_index) d3.select(this).classed('highlighted', true);
					});
				}
			});
		}
	}]);

	return Radar;
}();
