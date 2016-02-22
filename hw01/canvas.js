var ctx = document.getElementById("ftb2maga").getContext("2d");

//Sets color that fills shape drawn when fill() is called
ctx.fillStyle = "#FF0000";

//Sets font style of text
font = "30px arial";


//Draws rectangle given (x,y,width,height) colored according to fillStyle
ctx.fillRect(50,50,100,25);
//Draws outline of rectangle given (x,y,width,height) 
ctx.strokeRect(55,45,100,20);


//signifies where methods to draw a certain shape start
ctx.beginPath();

//tells canvas where to start drawing shape
ctx.moveTo(100,100);

//point in path changes from current point to given point, invisible line drawn between
ctx.lineTo(150,100);
//point in path changes from current point to given point, without line drawn
ctx.moveTo(125,125);

ctx.lineTo(150,150);
ctx.lineTo(100,150);
ctx.lineTo(125,125);

//reveals lines drawn by lineTo
ctx.stroke();
//fills in shapes formed by multiple lineTo's
ctx.fill();
//signifies where methods to draw a certain shape end
ctx.closePath();


ctx.fillStyle = "#090230";
ctx.beginPath();
ctx.lineTo(100,200);
ctx.lineTo(300,200);
ctx.lineTo(300,250);
ctx.lineTo(100,250);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.fillStyle = "#09AB30";
ctx.beginPath();
//draws an arc given (x of origin, y of origin, radius, start angle, end angle)
ctx.arc(100,350,50,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.fillStyle = "#987A10";
ctx.beginPath();
//draws out text in canvas give (string, x, y)
ctx.fillText("wow wow wowee",200,350);
ctx.stroke();
ctx.fill();
ctx.closePath();