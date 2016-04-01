//republican allotted delegates per state
var ralot = [30, 23, 50, 30 , 50 , 28, 40 , 76, 
	    42, 38 , 43, 58, 155, 16, 49, 40,
	    46, 46, 23, 23, 19, 32, 59, 40, 29,
	    9, 19, 99, 69, 52, 72, 9, 66];
//state names corresponding to repub allotted delegates
var ralot_name = ["iowa","new hampshire","south carolina","nevada","alabama",
		 "alaska","arkansas","georgia","massachusetts",
		 "minnesota","oklahoma","tenessee","texas","vermont",
		 "virginia","kansas","kentucky","louisiana",
		 "maine","puerto rico","hawaii","idaho","michigan",
		 "mississippi","wyoming","guam","washington dc", "florida",
		 "illinois", "missouri", "north carolina", "marianas", "ohio"
		 ];
//republican unallotted delegates per state
var rulot = [37, 9, 9, 58, 40, 28, 42, 95, 28, 16, 38, 71,
	    19, 57, 36, 34, 28, 44, 172, 27, 51, 24, 29
	    ];
//state names corresponding to repub unallotted delegates
var rulot_name= ["colorado","virg isld","samoa","arizona","utah",
		"north dakota","wisconsin","new york","connecticut",
		"delaware","maryland","pennsylvania","rhode island","indiana",
		"nebraska","west virginia","oregon","washington",
		 "california", "montana", "new jersey", "new mexico", "south dakota"];

var dalot = [44, 24, 35, 53, 53, 32, 66, 102, 91, 77, 38, 67, 222, 16, 95, 33, 51,
	     25, 25, 127, 34, 198, 135, 64, 104, 141];
var dalot_name = ["iowa","new hampshire", "nevada", "south carolina", "alabama",
		  "arkansas", "colorado", "georgia", "massachusetts", "minnesota",
		  "oklahoma", "tennessee", "texas", "vermont", "virginia", "kansas",
		  "louisiana", "maine", "nebraska", "michigan", "mississippi", "florida",
		  "illinois", "missouri", "north carolina", "ohio"
		  ];

var dulot = [20, 34, 45, 18, 85, 27, 291, 70, 31, 118, 210, 33, 92, 37, 61, 74, 546,
	     27, 142, 43, 23, 25];
var dulot_name = ["alaska", "hawaii", "washington dc", "wyoming", "arizona", "idaho",
		  "utah", "washington", "wisconsin", "new york", "connecticut", 
		  "delaware", "maryland", "pennsylvania", "rhode island", "indiana",
		  "west virginia", "kentucky", "oregan", "california", "montana",
		  "new jersey", "new mexico", "north dakota", "south dakota"
		  ];

var rasum = 0;
var rusum = 0;
for (i = 0; i < ralot.length; i++)
    rasum += ralot[i];
for (j = 0; j < rulot.length; j++)
    rusum += rulot[j];

var dasum = 0; 
var dusum = 0;
for (k = 0; k < dalot.length; k++)
    dasum += dalot[k];
for (m = 0; m < dulot.length; m++)
    dusum += dulot[m];

var repub_allotted = function repub_allotted() {
    d3.select("#allotted")
    .transition()
    .style("background-color","#FFA3A3")
    .style("color","#B03838")
    d3.select("#allotted")
    .selectAll("div")
    .data(ralot)
    .enter().append("div")
    .style("width", function(d){
	    return d*3.98 + "px";})
    .attr("class","rabar")
    .data(ralot_name)
    .insert("span")
    .style("font-size", "7px")
    .text(function(d){
	    return d; })
    .data(ralot)
    .insert("span")
    .style("font-size","15px")
    .text(function(d){
	    return d; });
};

var repub_unallotted = function repub_unallotted() {
    d3.select("#unallotted")
    .transition()
    .style("background-color","#B03838")
    .style("color", "#FFA3A3")
    d3.select("#unallotted")
    .selectAll("div")
    .data(rulot)
    .enter().append("div")
    .style("width", function(d){
	    return d*3.6 + "px";})
    .attr("class","rubar")
    .insert("span")
    .style("font-size", "15px")
    .text(function(d){
            return d; })
    .data(rulot_name)
    .insert("span")
    .style("font-size","8px")
    .text(function(d){
            return d; });
};

var dem_allotted = function dem_allotted() {
    d3.select("#allotted")
    .transition()
    .style("background-color","#6684C8")
    .style("color","#0A296F");
    d3.select("#allotted")
    .selectAll("div")
    .data(dalot)
    .enter().append("div")
    .style("width", function(d){
            if (d * 2 < 300)
                return d*2 + "px";
            else
                return d + "px";
        })
    .attr("class","dabar")
    .data(dalot_name)
    .insert("span")
    .style("font-size", "6px")
    .text(function(d){
            return d; })
    .data(dalot)
    .insert("span")
    .style("font-size","12px")
    .text(function(d){
            return d; });
    d3.select("#allotted")
    .selectAll("div")
    .transition();
};

var dem_unallotted = function dem_unallotted() {
    d3.select("#unallotted")
    .transition()
    .style("background-color","#0A296F")
    .style("color","#6684C8")
    d3.select("#unallotted")
    .selectAll("div")
    .data(dulot)
    .enter().append("div")
    .style("width", function(d){
            if (d * 2 <= 300)
		return d*2 + "px";
	    else
		return d + "px";
	})
    .attr("class","dubar")
    .insert("span")
    .style("font-size", "10px")
    .text(function(d){
            return d; })
    .data(dulot_name)
    .insert("span")
    .style("font-size","6px")
    .text(function(d){
            return d; });
    d3.select("#unallotted")
    .selectAll("div")
    .transition();
};

repub_allotted();
repub_unallotted();

var curr_party = "repub";

document.getElementById("party").addEventListener("click", function() {
	d3.select("#unallotted")
	    .selectAll("div")
	    .remove();
	d3.select("#allotted")
	    .selectAll("div")
	    .remove();
	    if (curr_party ==  "dem"){
		d3.select("#title").
		    html('the <img src="gop.png" height="4%"></img> in the room');
		d3.select("#sub-title").text("republican delegate allotment");
		d3.select("#atot").text("allotted delegate total: " + rasum);
		d3.select("#utot").text("unallotted delegate total: " + rusum);
		repub_allotted();                                                                                                                         
		repub_unallotted();                                                                                                                                 
		curr_party = "repub";                                                                                                                                             
	    }                                                                                                                                                                 
	    
	    else {
		d3.select("#title").
                    html('kick <img src="dem.png" height="4%"></img> and chew bubblegum');
		d3.select("#sub-title").text("democratic delegate allotment");
		d3.select("#atot").text("allotted delegate total: " + dasum);
                d3.select("#utot").text("unallotted delegate total: " + dusum);
		dem_allotted();                                                                                                                                                   
		dem_unallotted();                                                                                                                                                 
		curr_party = "dem";
	    }  
    } );



