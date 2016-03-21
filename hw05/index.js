var alot = [30, 23, 50, 30 , 50 , 28, 40 , 76, 
	    42, 38 , 43, 58, 155, 16, 49, 40,
	    46, 46, 23, 23, 19, 32, 59, 40, 29,
	    9, 19, 99, 69, 52, 72, 9, 66];
var alot_name = ["iowa","new hampshire","south carolina","nevada","alabama",
		 "alaska","arkansas","georgia","massachusetts",
		 "minnesota","oklahoma","tenessee","texas","vermont",
		 "virginia","kansas","kentucky","louisiana",
		 "maine","puerto rico","hawaii","idaho","michigan",
		 "mississippi","wyoming","guam","washington dc", "florida",
		 "illinois", "missouri", "north carolina", "marianas", "ohio"
		 ];

var ulot = [37, 9, 9, 58, 40, 28, 42, 95, 28, 16, 38, 71,
	    19, 57, 36, 34, 28, 44, 172, 27, 51, 24, 29
	    ];
var ulot_name= ["colorado","virg isld","samoa","arizona","utah",
		"north dakota","wisconsin","new york","connecticut",
		"delaware","maryland","pennsylvannia","rhode island","indiana",
		"nebraska","west virginia","oregon","washington",
		"california", "montana", "new jersey", "new mexico", "south dakota"]

d3.select("#allotted")
    .selectAll("div")
    .data(alot)
    .enter().append("div")
    .style("width", function(d){
	    return d*3.98 + "px";})
    .attr("class","abar")
    .data(alot_name)
    .insert("span")
    .style("font-size", "7px")
    .text(function(d){
	    return d; })
    .data(alot)
    .insert("span")
    .style("font-size","15px")
    .text(function(d){
	    return d; });

d3.select("#unallotted")
    .selectAll("div")
    .data(ulot)
    .enter().append("div")
    .style("width", function(d){
            return d*3.6 + "px";})
    .attr("class","ubar")
    .insert("span")
    .style("font-size", "15px")
    .text(function(d){
            return d; })
    .data(ulot_name)
    .insert("span")
    .style("font-size","8px")
    .text(function(d){
            return d; });