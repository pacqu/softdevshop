console.log("js linked!");

var p = document.getElementById("playground");
var ctx = p.getContext("2d");
ctx.fillStyle = "#FF8200";

var radius = 0;
var grow = true;

var createDots = function(){ 
    ctx.clearRect(0,0,600,600);
    console.log(radius);
    if (grow)
	radius += 1;
    else
	radius -= 1;
    console.log(radius);
    if (radius >= 300)
	grow = false;
    else if (radius <= 0)
	grow = true;

    ctx.beginPath();
    ctx.arc(300,300,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
  
    anid = window.requestAnimationFrame(createDots);
};


var str = document.getElementById("start");
var clr = document.getElementById("clear");

var clear = function(e) {
    e.preventDefault();
    window.cancelAnimationFrame(anid);
    ctx.clearRect(0,0,600,600);
    radius = 0;
    grow = true;
}

str.addEventListener("click",createDots);
clr.addEventListener("click",clear);

