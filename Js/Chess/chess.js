var canvas  = document.getElementById("chess");
var ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;
ctx.fillStyle = "#000";
ctx.fillRect(0,0, canvas.width, canvas.height);
ctx.strokeStyle = "#fff";

var plate = {
	pos: canvas.width/2
}

function drawKubik(x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, 50, 25);
	ctx.rect(x, y, 50, 25);
	ctx.stroke();
}

function drawBall() {
	ctx.clearRect(0, 0, 500, 500);
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	x += dx;
	y += dy;
}

function init() {
	
}

function drawTarget() {
	for (var row = 0; row < 8; row++)
	 for (var col = 0; col < 8; col++) {
	 	var color = (row + col) % 2 == 0 ? 'red' : 'green'; 
		drawKubik(50 + col * 50, 25 + row * 25, color);
	}
}

function drawBoard() {
	ctx.fillStyle = 'blue';
	ctx.fillRect(plate.pos, 490, 75, 10);
	ctx.rect(plate.pos, 490, 75, 10);
	ctx.stroke();
}

drawTarget();
drawBoard();


