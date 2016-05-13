// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 600; //512
canvas.height = 400; //480
document.body.appendChild(canvas);
var spriteW = 40;
var spriteH = 40;

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.jpg";

// Block images
// array of JSON objects
var blocks = [ {"id": "block1", "x":0, "y":325, "w":40, "h":40},
				{"id": "block2", "x":40, "y":325, "w":40, "h":40},
				{"id": "block3", "x":80, "y":325, "w":40, "h":40},
				{"id": "block4", "x":120, "y":325, "w":40, "h":40},
				{"id": "block5", "x":240, "y":325, "w":40, "h":40}
];

// sprite image
var Timer = null;
var imageNum = 0;
var spriteReady = false;
var spriteImage = new Image();
spriteImage.onload = function () {
	spriteReady = true;
};
spriteImage.src = "images/Walk0.gif";

// Game objects
var sprite = {
	speed: 150 // movement in pixels per second
};

// Handle keyboard controls
var keysDown = {};
var facing = true;//true if facing right

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player falls off-screen
var reset = function () {
	sprite.x = 120
	sprite.y = 100;
};

//animation of sprite
function move() {
    var ground = true;
	if(39 in keysDown) {//right    
        facing = true;
		if(jumpAvailable) {
			imageNum = (imageNum + 1) % 4;
			spriteImage.src = "images/Walk" + imageNum + ".gif";
		} else if(jumping) {
			spriteImage.src = "images/Jump1.gif";
		} else {
            spriteImage.src = "images/Jump2.gif";
        }
	} else if(37 in keysDown) {//left   
        facing = false;
		if(jumpAvailable) {
			imageNum = (imageNum + 1) % 4;
            spriteImage.src = "images/WalkL" + imageNum + ".gif";
		} else if(jumping) {
			spriteImage.src = "images/JumpL1.gif";
		} else {
            spriteImage.src = "images/JumpL2.gif";
        }
	} else if(38 in keysDown && 39 in keysDown && facing) {//up right
        if(jumping) {
            spriteImage.src = "images/Jump1.gif";
        } else {
            spriteImage.src = "images/Jump2.gif";
        }
        if(jumpAvailable) {
            spriteImage.src = "images/Walk0.gif";
        }
	} else if(38 in keysDown && 37 in keysDown && !facing) {//up left        
        if(jumping) {
            spriteImage.src = "images/JumpL1.gif";
        } else {
            spriteImage.src = "images/JumpL2.gif";
        }
        if(jumpAvailable) {
            spriteImage.src = "images/WalkL0.gif";
        }
    } else if(38 in keysDown) {//up
        if(facing && jumping) {
            spriteImage.src = "images/Jump1.gif";
        } else if(facing && !jumping) {
            spriteImage.src = "images/Jump2.gif";
        } else if(!facing && jumping) {
            spriteImage.src = "images/JumpL1.gif";
        } else if(!facing && !jumping) {
            spriteImage.src = "images/JumpL2.gif";
        }
    }
};

// Update game objects
var gravity = 3;
var jumpAvailable = false;
var jumping = false;
var jumpMax = 5;
var jumpVel = 2;

var update = function (modifier) {
	if(jumping) {
		sprite.y -= jumpVel;
		jumpVel -= 0.1;
		if(jumpVel <= 0) {
			jumping = false;
		}
	} else {
		sprite.y += gravity;
	}
	
	if (38 in keysDown) { // Player holding up
		//sprite.y -= sprite.speed * modifier;
		
		if(jumpAvailable) {
			jumping = true;
			jumpVel = jumpMax;
		}
		
		if(Timer == null) {
			move();
		} else {
			clearInterval(Timer);
			Timer = null;
		}
	}
	if (40 in keysDown) { // Player holding down
		sprite.y += sprite.speed * modifier;
		if(Timer == null) {
			Timer = setInterval('move();', 10);
		} else {
			clearInterval(Timer);
			Timer = null;
		}
	}
	if (37 in keysDown) { // Player holding left
		sprite.x -= sprite.speed * modifier;
		if(Timer == null) {
			Timer = setInterval('move();', 10);
		} else {
			clearInterval(Timer);
			Timer = null;
		}
	}
	if (39 in keysDown) { // Player holding right
		sprite.x += sprite.speed * modifier;
		if(Timer == null) {
			Timer = setInterval('move();', 10);
		} else {
			clearInterval(Timer);
			Timer = null;
		}
	}
	
	// left boundary
	if(sprite.x < 0) {
		sprite.x = 0;
	}
	// right boundary
	if(sprite.x > canvas.width - spriteW) {
		sprite.x = canvas.width - spriteW;
	}
	
	// Block collision
	// ***NEEDS FIX***
	for (var j = 0; j < blocks.length; j++) {
		if (sprite.y > blocks[j].y - spriteH && sprite.x < blocks[j].x + blocks[j].w 
				&& sprite.x + spriteW > blocks[j].x) {
			sprite.y = blocks[j].y - spriteH;
		}
		if (sprite.y == blocks[j].y - spriteH) {
			jumpAvailable = true;
		} else {
			jumpAvailable = false;
		}
	}
	//Resets the game when sprite falls off-screem
	if (sprite.y > canvas.height) {
		reset();
	}
};
	
window.onkeydown = move;

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, 600, 400);
	}
	
	// Draws json objects
	for (var i = 0; i < blocks.length; i++) {
		ctx.fillStyle = "pink";
		ctx.fillRect(blocks[i].x, blocks[i].y, blocks[i].w, blocks[i].h);
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

// Play
var then = Date.now();
reset();
main();
