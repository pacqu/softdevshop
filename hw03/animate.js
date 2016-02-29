console.log("js linked!");

var p = document.getElementById("playground");
var ctx = p.getContext("2d");
ctx.fillStyle = "#FF6C6C";

var radius = 0;
var grow = true;

var logo = new Image();
logo.src = "logo_dvd.jpg";
var dvdx = Math.random() * 400;
var dvdy = Math.random() * 400;
var down = true;
var right = true;

var dotid;
var dvdid;

var createDots = function(){ 
    ctx.clearRect(0,0,500,500);
    //console.log(radius);
    if (grow)
	radius += 1;
    else
	radius -= 1;
    //console.log(radius);
    if (radius >= 250)
	grow = false;
    else if (radius <= 0)
	grow = true;

    ctx.beginPath();
    ctx.arc(250,250,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
  
    dotid = window.requestAnimationFrame(createDots);
    //console.log(id);
};
var slope = Math.random();

var dvdgo = function(){
    ctx.clearRect(0,0,500,500);
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

    ctx.beginPath();
    ctx.drawImage(logo, dvdx, dvdy, 100, 100);
    
    dvdid = window.requestAnimationFrame(dvdgo);
    //console.log(id);
};

var str = document.getElementById("start");
var stp = document.getElementById("stop");
var dvd = document.getElementById("dvd");

var stop = function(e) {
    e.preventDefault();
    window.cancelAnimationFrame(dotid);
    window.cancelAnimationFrame(dvdid);
    //ctx.clearRect(0,0,500,500);
    //radius = 0;
    //grow = true;
}

str.addEventListener("click",createDots);
stp.addEventListener("click",stop);
dvd.addEventListener("click",dvdgo);

