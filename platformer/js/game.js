// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 600; //512
canvas.height = 400; //480
document.body.appendChild(canvas);
var spriteW = 51;
var spriteH = 57.5;

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.jpg";

// sprite image
var spriteReady = false;
var spriteImage = new Image();
spriteImage.onload = function () {
	spriteReady = true;
};
spriteImage.src = "images/walk1.gif";

// Game objects
var sprite = {
	speed: 256 // movement in pixels per second
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	sprite.x = canvas.width / 2;
	sprite.y = canvas.height / 2;
};

// Update game objects
var gravity = 3;
var jumpAvailable = false;
var jumping = false;
var jumpMax = 5;
var jumpVelocity = 2;

var update = function (modifier) {
	if (sprite.y == canvas. height - spriteH) {
		jumpAvailable = true;
	} else {
		jumpAvailable = false
	}
	
	if (jumping) {
		sprite.y -= jumpVelocity;
		jumpVelocity -= 0.1;
		if (jumpVelocity <= 0) {
			jumping = false;
			jumpAvailable = true;
		}
 	} else {
		sprite.y += gravity;
	}
	if (38 in keysDown) { // Player holding up
		//sprite.y -= sprite.speed * modifier;
		if (jumpAvailable) {
			jumping = true;
			jumpVelocity = jumpMax;
		}
	}
	if (40 in keysDown) { // Player holding down
		sprite.y += sprite.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		sprite.x -= sprite.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		sprite.x += sprite.speed * modifier;
	}
	
	if (sprite.x < 0) {
		sprite.x = 0;
	}
	if (sprite.y < 0) {
		sprite.y = 0;
	}
	if (sprite.x > canvas.width - spriteW) {
		sprite.x = canvas.width - spriteW; 
	}
	if (sprite.y > canvas.height - spriteH) {
		sprite.y = canvas. height - spriteH;
	}
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, 600, 400);
	}

	if (spriteReady) {
		ctx.drawImage(spriteImage, sprite.x, sprite.y, spriteW, spriteH);
	}
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();