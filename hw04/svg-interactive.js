var pic = document.getElementById("vimage");

//init for growing dot 
var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
c.setAttribute("cx", "250");
c.setAttribute("cy", "250");
c.setAttribute("r", "0");
c.setAttribute("stroke", "black");
c.setAttribute("fill", "yellow");
pic.appendChild(c);
var radius = 0;
var grow = true;

var dvdx = Math.random() * 400;
var dvdy = Math.random() * 400;

var d = document.createElementNS("http://www.w3.org/2000/svg","image");
d.setAttribute("xlink:href","logo_dvd.jpg");
d.setAttribute("x",(dvdx).toString());
d.setAttribute("y",(dvdy).toString());
d.setAttribute("height","100");
d.setAttribute("width","100");
var down = true;
var right = true;


var change = function(e){
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var drawDot = function(x, y){
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("stroke", "black");
    c.setAttribute("fill", "yellow");
    c.addEventListener("click",change);
    pic.appendChild(c);
};

var growDots = function(){
    var animateCode = function(){
	c = document.getElementsByTagName("circle")[0];
	//increment or decrement radius
	if (grow)
	    radius += 1;
	else
	    radius -= 1;
	if (radius >= 250)
	    grow = false;
	else if (radius <= 0)
	    grow = true;
	c.setAttribute("r", radius.toString());
    }
    
    var intervalID = window.setInterval(animateCode,16);
};

var dvdgo = function(){
    //pic.removeChild(c);
    pic.appendChild(d);
    var dvdmove = function(){
	var slope = Math.random();
	if (dvdy <=0){
	    slope = Math.random();
	    down = true; 
	}
	else if (dvdy >= 400){
	    slope = Math.random();
	    down = false; 
	}
	
	if (dvdx <=0){
	    slope = Math.random();
	    right = true; 
	}
	else if (dvdx >= 400){
	    slope = Math.random();
	    right = false;
	}
	
	if (down)
	    dvdy += 1;
	else
	    dvdy -= 1;
	
	if (right)
	    dvdx += slope;
	else
	    dvdx -= slope;
	d.setAttribute("x",(dvdx).toString());
	d.setAttribute("y",(dvdy).toString());
    };
    var intervalID = window.setInterval(dvdmove,16);
};

var clicked = function(e){
    if (e.toElement == t1his){
	drawDot(e.offsetX, e.offsetY);
    }
};
var stop = function(){
    window.clearInterval(intervalID);
};

var str = document.getElementById("start");
var stp = document.getElementById("stop");
var dvd = document.getElementById("dvd");

str.addEventListener("click",growDots);
stp.addEventListener("click",stop);
dvd.addEventListener("click", dvdgo);
//pic.addEventListener("click", clicked);