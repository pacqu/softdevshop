d3.selectAll("p").style("color", "white");
//d3.select("body").style("background-color", "black");
d3.selectAll("p").style("color", function() {
	return "hsl(" + Math.random() * 360 + ",100%,50%)";
    });
d3.selectAll("p").style("color", function(d, i) {
	return i % 2 ? "#fff" : "#eee";
    });