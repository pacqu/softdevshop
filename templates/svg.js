var pic = document.getElementById("vimage");

var c = document.createElementNS("http://www.w3.org/svg", "circle");
c.setAttribute("cx", "50");
c.setAttribute("cy", "50");
c.setAttribute("r", "100");
c.setAttribute("fill", "red");
c.setAttribute("stroke", "black");

pic.appendChild(c);