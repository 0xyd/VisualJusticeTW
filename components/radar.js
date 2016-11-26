class Radar {

	constructor(id, radar_width, radar_height, label_factor, options) {

		this.cfg = {

			w:  //Width of the circle
				radar_width ? radar_width :  getD3CSSStyle(d3.select(id), 'width'),	
	 		h:  //Height of the circle
	 			radar_height ? radar_height :  getD3CSSStyle(d3.select(id), 'height'),	
	 		margin: {top: 25, right: 25, bottom: 25, left: 25}, //The margins of the SVG
			levels: 10,				//How many levels or inner circles should there be drawn
			maxValue: 0, 			//What is the value that the biggest circle will represent
			labelFactor: label_factor ? label_factor : 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
			wrapWidth: 60, 			//The number of pixels after which a label needs to be given a new line
	 		opacityArea: 0.1, 		//The opacity of the area of the blob
	 		dotRadius: 4, 			//The size of the colored circles of each blog
	 		opacityCircles: 0.1, 	//The opacity of the circles of each blob
	 		strokeWidth: 2, 		//The width of the stroke around each blob
	 		roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
	 		color: d3.scale.category10()	//Color function
		};
	
		//Put all of the options into a variable called cfg
		if('undefined' !== typeof options){
		  for(var i in options){
			if('undefined' !== typeof options[i]){ this.cfg[i] = options[i]; }
		  }
		}

		this.containerId = id;


		function getD3CSSStyle(d3_obj, style_name) {
			return parseInt(d3_obj.style(style_name))
		}

	}

	importData(inputData) {

		// When inputData is the path of the data
		if (typeof inputData === 'string') {
			// The promise to control asychronous data import
			this.dataImportPromise = new Promise((resolve, reject) => {

				d3.json(inputData)
					.get((errors, data) => {

						initialGraphSetting.call(this, data);
						resolve(data);

				});
			})
		} else {

			this.dataImportPromise = new Promise((resolve, reject) => {

				initialGraphSetting.call(this, inputData);
				resolve(inputData)
			});

		}


		function initialGraphSetting(data) {

			//If the supplied maxValue is smaller than the actual one, replace by the max in the data
			this.maxValue = 
				Math.max(
					this.cfg.maxValue, 
					d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))})
				);
					
			this.allAxis = (data[0].map(function(i, j) {return i.axis})); //Names of each axis
			this.total = this.allAxis.length;			//The number of different axes
			this.radius = Math.min(this.cfg.w/2, this.cfg.h/2); 	//Radius of the outermost circle
			this.Format = d3.format('%');		 		//Percentage formatting
			this.angleSlice = Math.PI * 2 / this.total;			//The width in radians of each "slice"

			//Scale for the radius
			this.rScale = d3.scale.linear()
				.range([0, this.radius])
				.domain([0, this.maxValue]);

			this.svg = d3.select(this.containerId).append("svg")
				.attr("width",  
					this.cfg.w + this.cfg.margin.left + this.cfg.margin.right)
				.attr("height", 
					this.cfg.h + this.cfg.margin.top + this.cfg.margin.bottom)
				.attr("class", "radar"+this.containerId);

			this.g = 
				this.svg.append("g")
					.attr(
						"transform", 
						"translate(" + 
						(this.cfg.w/2 + this.cfg.margin.left) + "," + 
						 (this.cfg.h/2 + this.cfg.margin.top) + ")"
					);

			//Filter for the outside glow
			this.filter = 
				this.g.append('defs').append('filter').attr('id','glow')
			this.feGaussianBlur = 
				this.filter
					.append('feGaussianBlur')
						.attr('stdDeviation','2.5')
							.attr('result','coloredBlur');
			this.feMerge =
				this.filter.append('feMerge')
			this.feMergeNode_1 = 
				this.feMerge.append('feMergeNode').attr('in','coloredBlur');
			this.feMergeNode_2 = 
				this.feMerge.append('feMergeNode').attr('in','SourceGraphic');

			//Wrapper for the grid & axes
			this.axisGrid = this.g.append("g").attr("class", "axisWrapper");

		}

		return this
		
	}

	draw() {

		let self = this;

		this.drawDataPromise = new Promise((resolve, reject) => {

			this.dataImportPromise.then((data) => {

				drawBackgroundCircles.call(this);
				drawRadarAxes.call(this);
				drawblopWrapper.call(this, data);
		
				//Set up the small tooltip for when you hover over a circle
				this.tooltip = this.g.append("text")
					.attr("class", "tooltip")
					.style("opacity", 0);

				resolve();
			});
		})

	function drawBackgroundCircles() {

		//Draw the background circles
		this.axisGrid.selectAll(".levels")
	   		.data(d3.range(1,(this.cfg.levels+1)).reverse())
	   		.enter()
				.append("circle")
				.attr("class", "gridCircle")
				.attr("r", (d, i) => {return this.radius/this.cfg.levels*d;})
				.style("fill", "#CDCDCD")
				.style("stroke", "#CDCDCD")
				.style("fill-opacity", this.cfg.opacityCircles)
				.style("filter" , "url(#glow)");

		//Text indicating at what % each level is
		this.axisGrid.selectAll(".axisLabel")
	   		.data(d3.range(1,(this.cfg.levels+1)).reverse())
	   		.enter().append("text")
	   		.attr("class", "axisLabel")
	   		.attr("x", 4)
	   		.attr("y", (d) => {return -d*this.radius/this.cfg.levels;})
	   		.attr("dy", "0.4em")
	   		.style("font-size", "10px")
	   		.attr("fill", "#737373")
	   		.text((d,i)  => { return this.Format(this.maxValue * d/this.cfg.levels); });

	}

	function drawRadarAxes() {

		// Create the straight lines radiating outward from the center
	   	this.axis = this.axisGrid.selectAll(".axis")
			.data(this.allAxis)
			.enter()
			.append("g")
			.attr("class", "axis");

		this.axis.append("line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", (d, i) => { 
				return this.rScale(this.maxValue*1.1) * Math.cos(this.angleSlice*i - Math.PI/2); })
			.attr("y2", (d, i) => { 
				return this.rScale(this.maxValue*1.1) * Math.sin(this.angleSlice*i - Math.PI/2); })
			.attr("class", "line")
			.style("stroke", "white")
			.style("stroke-width", "2px");

		//Append the labels at each axis
		this.axis.append("text")
			.attr("class", "legend")
			.style("font-size", "11px")
			.attr("text-anchor", "middle")				
			.attr("dy", "0.35em")
			.attr("x", 
				(d, i) => { 
					return this.rScale(this.maxValue * this.cfg.labelFactor) * Math.cos(this.angleSlice*i - Math.PI/2); 
				})
			.attr("y", 
				(d, i) => { 
					return this.rScale(this.maxValue * this.cfg.labelFactor) * Math.sin(this.angleSlice*i - Math.PI/2); 
				})
			.text(function(d){return d})
			.call(wrap, this.cfg.wrapWidth);

		//The radial line function
		this.radarLine = d3.svg.line.radial()
			.interpolate("linear-closed")
			.radius((d)  =>{ return this.rScale(d.value); })
			.angle((d,i) => { return i*this.angleSlice; });
	
		if(this.cfg.roundStrokes) {
			this.radarLine.interpolate("cardinal-closed");
		}

	}

	function drawblopWrapper(data) {

		//Create a wrapper for the blobs	
		this.blobWrapper = this.g.selectAll(".radarWrapper")
			.data(data)
			.enter().append("g")
			.attr("class", "radarWrapper");
			
		//Append the backgrounds	
		this.blobWrapper
			.append("path")
			.attr("class", "radarArea")
			.attr("d", (d,i) => { return this.radarLine(d); })
			.style("fill", (d,i) => { return this.cfg.color(i); });
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
		this.blobWrapper.append("path")
			.attr("class", "radarStroke")
			.attr("d", (d,i) => { return this.radarLine(d); })
			.style("stroke-width", this.cfg.strokeWidth + "px")
			.style("stroke", (d,i) => { return this.cfg.color(i); })
			.style("fill", "none")
			.style("filter" , "url(#glow)");		
	
		//Append the circles
		this.blobWrapper.selectAll(".radarCircle")
			.data(function(d,i) { return d; })
			.enter().append("circle")
			.attr("class", "radarCircle")
			.attr("r", this.cfg.dotRadius)
			.attr("cx", (d,i) => { return this.rScale(d.value) * Math.cos(this.angleSlice*i - Math.PI/2); })
			.attr("cy", (d,i) => { return this.rScale(d.value) * Math.sin(this.angleSlice*i - Math.PI/2); })
			.style("fill", (d,i,j) => { return this.cfg.color(j); });


		/////////////////////////////////////////////////////////
		//////// Append invisible circles for tooltip ///////////
		/////////////////////////////////////////////////////////

		//Wrapper for the invisible circles on top
		this.blobCircleWrapper = this.g.selectAll(".radarCircleWrapper")				
			.data(data)
			.enter().append("g")
			.attr("class", "radarCircleWrapper");			

		//Append a set of invisible circles on top for the mouseover pop-up
		this.blobCircleWrapper.selectAll(".radarInvisibleCircle")
			.data(function(d,i) { return d; })
				.enter().append("circle")
				.attr("class", "radarInvisibleCircle")
				.attr("r", this.cfg.dotRadius*1.5)
				.attr("cx", (d,i) => { return this.rScale(d.value) * Math.cos(this.angleSlice*i - Math.PI/2); })
				.attr("cy", (d,i) => { return this.rScale(d.value) * Math.sin(this.angleSlice*i - Math.PI/2); })
				.style("fill", "none")
				.style("pointer-events", "all")
				.on("mouseover", function(d,i) {
					
					let newX =  parseFloat(d3.select(this).attr('cx')) - 10;
					let newY =  parseFloat(d3.select(this).attr('cy')) - 10;
							
					self.tooltip
						.attr('x', newX)
						.attr('y', newY)
						.text(self.Format(d.value))
						.transition().duration(200)
						.style('opacity', 1);
				})
				.on("mouseout", function(){
					self.tooltip.transition().duration(200)
						.style("opacity", 0);
				});

	}

	//Wraps SVG text	
	function wrap(text, width) {

		text.each(function() {

			var text = d3.select(this),
				words = text.text().split(/\s+/).reverse(),
				word,
				line = [],
				lineNumber = 0,
				lineHeight = 1.4, // ems
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

	return this

	}


	hightlightRadarArea(by_index, by_id) {

		this.drawDataPromise.then(() => {

			// Dishighlight all radar area.
			d3.selectAll('.highlighted').classed('highlighted', false);

			if (by_id) 
				d3.select(by_id).classed('highlighted', true)
		
			else if (by_index !== undefined) {

				d3.selectAll('.radarWrapper').each(function(d, i) {

					if (i === by_index)
						d3.select(this).classed('highlighted', true);

				});
			}
		});

	}


}