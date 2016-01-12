/* Graph is the mother of the charts */
var graphClass = function() {

	this.panel = (function() {
		return d3.select('#DISPLAY_PANEL')
			.append('svg')
			.attr('id', 'SKETCHPAD')
			.style({
				'padding-top':    '5%',
				'padding-left':   '5%',
				'padding-right':  '5%',
				'padding-bottom': '5%'
			})
			.style('height', '100%').style('width', '100%')
			})(),

	this.panelWidth = 
		parseInt(this.panel.style('width').replace('px', '')),

	this.panelHeight = 
		parseInt(this.panel.style('height').replace('px', '')),

	this.panelPadding = {
		top:     this.panel.style('padding-top').replace('px', ''),
		bottom:  this.panel.style('padding-bottom').replace('px', ''),
		left:    this.panel.style('padding-left').replace('px', ''),
		right:   this.panel.style('padding-right').replace('px', '')
	}
}

graphClass.prototype.readCSV = function(path) {
	return d3.csv(path)
}

var barGraphClass = function() {

	graphClass.call(this);

	this.chartHeight = 
		this.panelHeight - 
			this.panelPadding.top - this.panelPadding.bottom;
	this.chartWidth = 
		this.panelWidth - 
			this.panelPadding.left - this.panelPadding.right;

	this.barWidth = null;

	this.outPadding = null;

	this.step = null;

	this.xScale = null;
	this.xAxis = null;

	this.yScale = null;
	this.yAxis = null;

	// this.dataset = null;
}

/* Inherit the barGraphClass from the graph */
barGraphClass.prototype = Object.create(graphClass.prototype);
barGraphClass.prototype.constructor = barGraphClass;

barGraphClass.prototype.setOutPadding = function(val) {
	this.outPadding = val;
}

barGraphClass.prototype.setStep = function(val) {
	this.step = val;
}

barGraphClass.prototype._setBarWidth = function(dataset) {
	this.barWidth = 
		parseInt((this.chartWidth-this.outPadding-this.step*dataset.length) / dataset.length);
}

barGraphClass.prototype._setOrdinalXScale = function(dataset, xLabel) {
	this.xScale = d3.scale.ordinal()
		.domain(
			dataset.map(
				function(d){ return xLabel? d[xLabel]: d }))
		.rangeBands([0, this.chartWidth]);
}

barGraphClass.prototype._setXAxis = function(pos) {

	if ( typeof pos === 'string' && 
		pos === 'right' || 'left' || 'bottom' || 'top' ) {

		this.xAxis = d3.svg.axis()
			.scale(this.xScale).orient(pos);		
	} 
}

barGraphClass.prototype._setLinearYScale = function(dataset, dOption) {

	this.yScale = d3.scale.linear()
		.domain(
			[0, d3.max(
					dataset, 
					function(d) { return dOption? parseInt(d[dOption]): d})
			])
		.rangeRound([this.chartHeight, 0]);

}

barGraphClass.prototype._setYAxis = function(pos, tickFormater) {

	if ( typeof pos === 'string' && 
		pos === 'right' || 'left' || 'bottom' || 'top' ) {

		this.yAxis = d3.svg.axis()
			.scale(this.yScale).orient(pos).tickFormat(tickFormater);

	} 
}

barGraphClass.prototype._createXAxis = function(dataset, xLabel) {

	var self = this;
	
	this.panel
		.append('g')
			.attr('class', 'x-axis')
			.attr('transform', 'translate(0,' + this.chartHeight + ')')
			.call(this.xAxis)
			.call(c_pinLbl2XAxisBarMidPt, this.barWidth, this.step, this.outPadding)
		.append('text')
			.attr('class', 'axis-name')
			.attr('x', function() {
				return dataset.length*(self.barWidth+self.step)+self.outPadding-40
			})
			.attr('y', '40')
		.text(xLabel);
}

barGraphClass.prototype._createYAxis = function(dataset, yLabel) {
	this.panel
		.append('g')
			.attr('class', 'y-axis')
			.call(this.yAxis)
		.append('text')
			.attr('class', 'axis-name')
			.attr('transform', 'rotate(90) translate(0, -10)')
			.text(yLabel);
}

barGraphClass.prototype._createBars = function(dataset, dOption) {

	var self = this;

	this.panel.selectAll('rect')
		.data(dataset)
		.enter()
		.append('rect')
			.attr('x', function(d, i) {
				return self.outPadding + 
					i * (self.barWidth + self.step)
			})
			.attr('y', function(d) {
				return self.yScale(d[dOption])
			})
			.attr('width', self.barWidth)
			.attr('height', function(d) {
				return self.chartHeight - self.yScale(parseInt(d[dOption]))
			})
			.attr('fill', function(d) {
				return '#C41F3A'
			});
}

barGraphClass.prototype._markValOnBar = function(dataset, dOption) {

	var self = this;

	this.panel.append('g')
		.attr('id', 'TXTGROUP')
		.selectAll('text')
		.data(dataset)
		.enter()
		.append('text')
			.text(function(d) {
				console.log(d);
				return dOption ? d[dOption]: d
			})
			.attr('class', 'mark')
			.attr('x', function(d, i) {
				return self.outPadding + i*(self.barWidth+self.step)
			})
			.attr('y', function(d) {
				return dOption? 
					self.yScale(d[dOption]) : self.yScale(d)
			})
			.call(c_placeValOnBarHdV, 10, this.barWidth, this.step, this.outPadding);
}

barGraphClass.prototype.drawing = function(path, xLabel, yLabel, dOption) {

	var self = this;

	this.readCSV(path)
		.row(function(d) { return d })
		.get(function(errors, rows) {

			self._setBarWidth(rows);

			// Set the scale
			self._setOrdinalXScale(rows, xLabel);
			self._setLinearYScale(rows, dOption);

			// Set the axes
			self._setYAxis('left', kTick);
			self._setXAxis('bottom');

			// Draw the axes
			self._createXAxis(rows, xLabel);
			self._createYAxis(rows, yLabel);

			self._createBars(rows, dOption);
			self._markValOnBar(rows, dOption);
		});
}

barGraphClass.prototype.update = function(path, xLabel, yLabel, dOption) {

	var self = this;

	this.readCSV(path)
		.row(function(d) { return d })
		.get(function(error, rows) {

			var _bars = self.panel.selectAll('rect'),
				_txts = self.panel.selectAll('.mark'),

				// Former x value of bars
				f_Pos = (function() {
					var posAry = [];
					for ( var i = 0; i < _bars[0].length; i++ ) {
						posAry.push({
						x: _bars[0][i].getAttribute('x'),
						y: _bars[0][i].getAttribute('y')
					});
				};
				return posAry
			})(),

			// The positions of bars after update
			c_Pos = [];

			self._setLinearYScale(rows, dOption);
			self._setYAxis('left', kTick);

			_bars
				.transition()
					.attr('y', function(d, i) { 
					// get current positions of 
					c_Pos.push(
						{
							x: this.getAttribute('x'),
							y: self.yScale(d[dOption])
						}
					);
					return c_Pos[i].y })
				.attr('height', 
					function(d) { 
						return self.chartHeight - self.yScale(parseInt(d[dOption])) 
					});

			_txts
				.transition()
				// The text has been rotated about 90 degree
				.attr('x', function(d, i) {
					var deltaX = c_Pos[i]['y'] - f_Pos[i]['y'];
					return parseInt(this.getAttribute('x')) + deltaX })
				.text(function(d) { return d[dOption] });

			// Update Y axis
			self.panel
					.selectAll('.y-axis')
					.call(self.yAxis);
		});
}


/* Additional Functions */
function kTick(tick) {
	return Math.round(tick/1e3) + 'K'
}


/* 
	A function for pinnig label at the middle bottom of the bar 
	barW: The width of bar
	inPad: 
		The abbreviation about "innerPadding", 
		The padding between each bar
		outPad:
		The abbreviation about "outPadding"
		meaning the padding space between the first bar and the y axis.
*/
function c_pinLbl2XAxisBarMidPt(xAxis, barW, inPad, outPad) {
	// xAxis is the same as "this" 
	xAxis.selectAll('.tick').attr('transform', function(d, i) {
		return 'translate(' + (outPad+(2*i+1)*barW/2+i*inPad) + ',0)'
	});
}

/*  
	A function for putting label with data value on each bar.
	bars: 
		the bars selected by previous defined seletor function
	d:
		displacement from the head position
*/
function c_placeValOnBarHdV(txt, d, barW, inPad, outPad) {

	var _txt = txt[0];

	for ( var i=0 ; i<_txt.length; i++ ) {

		var bWMidPt = _txt[i].offsetWidth/2,
				bHMidPt = _txt[i].offsetHeight/2,
				// Displacement in X direction
				xd = parseInt(_txt[i].getAttribute('x')),
				// Displacement in Y direction
				yd = parseInt(_txt[i].getAttribute('y')),
				delta = ( barW/2 < 2*bHMidPt ) ? (barW/2-0.5*bHMidPt*2): (barW/2-bHMidPt/2);

		_txt[i].setAttribute(
			'transform', 
			'rotate(90, ' + xd + ', ' + yd+ ')' +
			'translate(' + d + ',' + (-1 * delta) + ')'); 
	}
}



/* Graph Operation */

var barGraph = new barGraphClass();

barGraph.setOutPadding(10);
barGraph.setStep(10);
barGraph.drawing('/correction/監獄人數概況.csv', '民國', '人數(仟人)', '本年執行人數');
barGraph.update('/correction/監獄人數概況.csv', '民國', '人數(仟人)', '本年入監人數');


