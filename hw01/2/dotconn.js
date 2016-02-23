console.log("js linked!");

var p = document.getElementById("playground");
var ctx = p.getContext("2d");
ctx.fillStyle = "#FF8200";
ctx.beginPath();

var x;
var y;

//function creates dots and connections where clicked on canvas
var createDots = function(e){
    
    //gets x/y coor of click
    x = e.offsetX;
    y = e.offsetY;
    
    //Draws Connection between Dots
    //move path to (x,y), draws line if path previously defined
    ctx.lineTo(x,y);
    //makes sure extra fill/lines are not drawn when arc is drawn
    ctx.moveTo(x,y);
    ctx.stroke();
    

    //Draws Dots
    ctx.arc(x,y,20,0,7);
    //also makes sure extra fill/lines are not drawn
    ctx.moveTo(x,y);
    ctx.fill();
      
};

var clr = document.getElementById("clear");

var clear = function(e) {
    e.preventDefault();
    ctx.closePath();
    ctx.clearRect(0,0,538,538);
    ctx.beginPath();
}

p.addEventListener("click",createDots);
clr.addEventListener("click",clear);

