/**
             Platformer
             
Description:

Author: Group #24
*/


/** 
Gobal Variables 
*/
var egg; //Easter Egg Variable
var canvas; //Used to get the elemtent type 'Canvas'
var ctx; //Speficies Demension
var spriteW; //Sprite Width
var spriteH; //Sprite Height

var bgReady; //Boolean, defines if background is ready
var bgImage; //Background image
var blockImageReady; //Boolean, defines if block/block's are ready
var blockImage; //Block image
var iceBlockImageReady; //Boolean, defines if iceblock's are ready
var iceBlockImage; //iceBlock image
var blocks; //Array, defines displayed blocks
var iceBlocks; //Array, defines displayed iceBlocks

var Timer; //Timer
var imageNum; //Determines sprite animation
var spriteReady; //Boolean, defines if sprite animation is ready
var spriteImage; //Sprite image
var sprite; //Sprite Game Object
var keysDown; //Determines if key is down
var facing; //Value define where the sprite is facing
var reset; //Resets the game if player dies

var gravity; //Gravity variable
var jumpAvailable; //Boolean, If sprite is on ground
var jumping; //In Jump
var jumpMax; //Maximum jump Y-axis
var jumpVelocity; //Jump Velocity

var update; //Updates the game
var render; //Renders all images 
var main; //Main function
var win; //window
var last; //the variable for then

/**

Creates the canvas using a canvas element. Also
Establishes variables related to the process

*/
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 600; //512
canvas.height = 400; //480
document.body.appendChild(canvas);
spriteW = 40;
spriteH = 40;

/**

Gets the image for the Background and displays it.

*/
bgReady = false;
bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.jpg";

/**

Block Images and variables

*/
blockImageReady = false;
blockImage = new Image();
blockImage.onload = function () {
	blockImageReady = true;
};
blockImage.src = "images/2.png";

/**
PROTOTYPE LEVEL

array of JSON objects

*/
blocks = [ 		{"id": "block1", "x":0, "y":325, "w":40, "h":40},
                {"id": "block2", "x":40, "y":325, "w":40, "h":40},
                {"id": "block3", "x":80, "y":325, "w":40, "h":40},
                {"id": "block4", "x":120, "y":325, "w":40, "h":40},
                {"id": "block5", "x":240, "y":325, "w":40, "h":40},

                {"id": "block4", "x":120, "y":400, "w":40, "h":40},
                {"id": "block4", "x":120, "y":440, "w":40, "h":40},
                {"id": "block4", "x":280, "y":500, "w":40, "h":40},
                {"id": "block4", "x":320, "y":300, "w":40, "h":40},
                {"id": "block4", "x":480, "y":325, "w":40, "h":40}
];

/**

IceBlock image

*/
iceBlockImageReady = false;
iceBlockImage = new Image();
iceBlockImage.onload = function () {
	iceBlockImageReady = true;
};
iceBlockImage.src = "images/18.png";

/**
PROTOTYPE ICEBLOCKS FOR LEVEL

array of iceblocks

*/
iceBlocks = [ 	{"id": "iceblock1", "x":80, "y":440, "w":40, "h":40},
                {"id": "iceblock2", "x":120, "y":440, "w":40, "h":40},
                {"id": "iceblock3", "x":160, "y":440, "w":40, "h":40},
                {"id": "iceblock4", "x":200, "y":440, "w":40, "h":40}
];

/**

Sprite Animation Variables and Movement

*/
Timer = null;
imageNum = 0;
spriteReady = false;
spriteImage = new Image();
spriteImage.onload = function () {
	spriteReady = true;
};
spriteImage.src = "images/Walk0.png";
sprite = {
	speed: 150 // movement in pixels per second
};

/**

KeyBoard Handler

*/
keysDown = {};
facing = true;//true if facing right

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

/**

Reset the game whne the player falls off-screen

*/
reset = function () {
   sprite.x = 120;
   sprite.y = 100;
}

/**

Sprite Movement Animation function

*/
function move() {
    var ground = true;
	if(39 in keysDown) {//right    
        facing = true;
		if(jumpAvailable) {
			imageNum = (imageNum + 1) % 4;
			spriteImage.src = "images/Walk" + imageNum + ".png";
		} else if(jumping) {
			spriteImage.src = "images/Jump1.png";
		} else {
            spriteImage.src = "images/Jump2.png";
        }
	} else if(37 in keysDown) {//left   
        facing = false;
		if(jumpAvailable) {
			imageNum = (imageNum + 1) % 4;
            spriteImage.src = "images/WalkL" + imageNum + ".png";
		} else if(jumping) {
			spriteImage.src = "images/JumpL1.png";
		} else {
            spriteImage.src = "images/JumpL2.png";
        }
	} else if(38 in keysDown && 39 in keysDown && facing) {//up right
        if(jumping) {
            spriteImage.src = "images/Jump1.png";
        } else {
            spriteImage.src = "images/Jump2.png";
        }
        if(jumpAvailable) {
            spriteImage.src = "images/Walk0.png";
        }
	} else if(38 in keysDown && 37 in keysDown && !facing) {//up left        
        if(jumping) {
            spriteImage.src = "images/JumpL1.png";
        } else {
            spriteImage.src = "images/JumpL2.png";
        }
        if(jumpAvailable) {
            spriteImage.src = "images/WalkL0.png";
        }
    } else if(38 in keysDown) {//up
        if(facing && jumping) {
            spriteImage.src = "images/Jump1.png";
        } else if(facing && !jumping) {
            spriteImage.src = "images/Jump2.png";
        } else if(!facing && jumping) {
            spriteImage.src = "images/JumpL1.png";
        } else if(!facing && !jumping) {
            spriteImage.src = "images/JumpL2.png";
        }
    }
};

/** 

Movement Variables

*/
gravity = 3;
jumpAvailable = false;
jumping = false;
jumpMax = 5;
jumpVel = 2;

/**

Update During Gameplay

*/
update = function (modifier) {
	if(jumping) {
		sprite.y -= jumpVel;
		jumpVel -= 0.1;
		if(jumpVel <= 0) {
			jumping = false;
		}
	} else {
		sprite.y += gravity;
	}
	
   //Easter Egg
   //Pressing down 1
   if (49 in keysDown) {
      egg = "1";
   }
   //Pressing down 9
   if (57 in keysDown) {
      if (egg == "1") {
         egg = "19";
      }
   }
   //Pressing down 8
   if (56 in keysDown) {
      if (egg == "19") {
         egg = "198";
      }
   }
   //Pressing down 6
   if (54 in keysDown) {
      if (egg == "198") {
         document.getElementById('alarm').play();
         egg = "";
      } else {
         egg = "";
      }
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
		if (sprite.y > blocks[j].y - spriteH 
			&& sprite.x < blocks[j].x + blocks[j].w 
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

/**

Renders all images onto the screen

*/
render = function () {
   	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, 600, 400);
	}
	
	// Draws json objects
	if(blockImageReady) for (var i = 0; i < blocks.length; i++) {
		ctx.drawImage(blockImage, blocks[i].x, blocks[i].y, blocks[i].w, blocks[i].h);
	}
	
	if(iceBlockImageReady) for (var i = 0; i < iceBlocks.length; i++) {
		ctx.drawImage(iceBlockImage, iceBlocks[i].x, iceBlocks[i].y, iceBlocks[i].w, iceBlocks[i].h);
	}
	
	if (spriteReady) {
		ctx.drawImage(spriteImage, sprite.x, sprite.y, spriteW, spriteH);
	}
// ------------------------------------------------------------------------------------------------------------
	for (var i=0; i < grid.rows;i++) {
		for (var n=0; n < grid.cols;n++) {
			var colPos = n*grid.width;
			var rowPos = i*grid.height;
			ctx.strokeRect(colPos,rowPos,40,40);
		}
	}
	
	for (var row1=0; row1 < 4;row1++) {
		for (var col1=0; col1 < 4;col1++) {
			var colPos2 = col1*grid.width;
			var rowPos2 = row1*grid.height;
			ctx.drawImage(iceBlockImage, colPos2, rowPos2, 40, 40);
		}
	}
// ------------------------------------------------------------------------------------------------------------
}
// ------------------------------------------------------------------------------------------------------------
var grid = {
	rows: 12,
	cols: 18,
	width:40,
	height:40
};
// ------------------------------------------------------------------------------------------------------------

/**
The Main game loop on Platformer

url: http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
*/
main = function () {
   var now = Date.now();
   var delta = now - last;
   
   update(delta / 1000);
   render();
   last = now;
   
   //Requests to do this again ASAP
   requestAnimationFrame(main);
}

/**

Establishes a Cross-browser support for requestAnimationFrame

*/
win = window;
requestAnimationFrame = win.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

/**

When First ran... PLAY

*/
last = Date.now();
reset();
main();
