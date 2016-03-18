/*
d3.selectAll("p").style("color", "white");
//d3.select("body").style("background-color", "black");
d3.selectAll("p").style("color", function() {
	return "hsl(" + Math.random() * 360 + ",100%,50%)";
    });
/*d3.selectAll("p").style("color", function(d, i) {
	return i % 2 ? "#fff" : "#eee";
	}); /
//d3.select("body").transition().style("background-color", "black");
d3.selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px"; });

d3.selectAll(".bar").style("height", "50px");
d3.selectAll(".bar").style("font", "48px");
d3.selectAll(".bar").style("text-align", "right");
d3.selectAll(".bar").style("background-color", "blue");
d3.selectAll(".bar")
    .data([50, 150, 320])
    .style("width", function(d) {return d + "px";} );
*/

var data = [4, 8, 15,16,23, 42];
var chart = d3.select(".chart");
var bar =  chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter =  barUpdate.enter().append("div");
barEnter.style("width", function(d){
	return d * 10 + "px";});