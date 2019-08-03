let canvas = document.getElementById("draw");
let c = canvas.getContext("2d");

let teta = 0;
let timer;
let x = 0;
let y = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;


function xEqualsY() {
	teta= teta + 0.1;
	x = x+teta;
	y = y+teta;
	c.fillStyle = '#f00';
	c.fillRect(400+x, 400+y, 4, 4);
	c.fillRect(400-x, 400-y, 4, 4);
	timer = setTimeout(xEqualsY, 100);
}

xEqualsY();

function yDoubleX() {
	teta= teta + 0.001;
	x1=(x1+teta);
	y1=(Math.pow(x1, 2));
	c.fillStyle = 'black';
	c.fillRect(400+x1, 400+y1, 4, 4);
	c.fillRect(400-x1, 400+y1, 4, 4);
	timer = setTimeout(yDoubleX, 100);
}

yDoubleX();

function xEqualsYPlusB() {
	let b = 100;
	teta= teta + 0.1;
	x2 = x2+teta;
	y2 = x2+b;
	c.fillStyle = 'green';
	c.fillRect(400+x2, 400+y2, 4, 4);
	c.fillRect(400-x2, 600-y2, 4, 4);
	timer = setTimeout(xEqualsYPlusB, 100);
}
xEqualsYPlusB();


c.beginPath();
c.moveTo(300, 200);
c.lineTo(500, 200);
c.lineTo(500, 800);
c.lineTo(300, 800);

c.closePath();
c.strokeStyle = "red";
c.stroke();
 
c.clip();