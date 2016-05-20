/**
             Platformer
             
Description:

Author: Group #24
*/

/** 
Gobal Variables 
*/
var egg; //Easter Egg Variable
var canvas; //Used to get the element type 'Canvas'
var ctx; //Specifies Dimension
var spriteW = 40; //Sprite Width
var spriteH = 40; //Sprite Height
var velocityX;
var velocityY;
var friction = 0.92;
var maxVelocityX = 2;
var maxVelocityY = 6;
var startPointX = 120; //Player starting pixels
var startPointY = 290; //Player starting pixels
var blockW = 40; //Block Width
var blockH = 40; //Block Height

var V = SAT.Vector; //Global SAT Vector function variable
var P = SAT.Polygon; //Global SAT Polygon function variable
var response = new SAT.Response();
var collision;

var collisionTimer;

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
var facing; //Value define where the sprite is facing; true if right
var reset; //Resets the game if player 'dies'

var gravity; //Gravity variable
var jumpAvailable; //Boolean, If sprite is on ground
var jumping; //Boolean, In Jump
var jumpMax; //Maximum jump Y-axis
var jumpVel; //Jump Velocity

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
blockW = 40;
blockH = 40;


/**

Gets the image for the Background and displays it.

*/
bgReady = false;
bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

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
blocks = [  {"id": "block1", "x":0, "y":325, "w":40, "h":40},
            {"id": "block2", "x":40, "y":325, "w":40, "h":40},
            {"id": "block3", "x":80, "y":325, "w":40, "h":40},
            {"id": "block4", "x":120, "y":325, "w":40, "h":40},
            {"id": "block46", "x":160, "y":325, "w":40, "h":40},
            {"id": "block5", "x":320, "y":325, "w":40, "h":40},
            {"id": "block6", "x":360, "y":325, "w":40, "h":40},
            {"id": "block7", "x":400, "y":325, "w":40, "h":40},
            {"id": "block8", "x":440, "y":325, "w":40, "h":40},
            {"id": "block9", "x":480, "y":325, "w":40, "h":40},
            {"id": "block44", "x":520, "y":325, "w":40, "h":40},
            {"id": "block425", "x":160, "y":285, "w":40, "h":40},
            {"id": "block576", "x":320, "y":285, "w":40, "h":40},
            {"id": "block634", "x":360, "y":285, "w":40, "h":40},
            {"id": "block763", "x":400, "y":285, "w":40, "h":40},
            {"id": "block853", "x":440, "y":285, "w":40, "h":40}

];

/**

IceBlock image

*/
iceBlockImageReady = false;
iceBlockImage = new Image();
iceBlockImage.onload = function () {
	iceBlockImageReady = true;
};
iceBlockImage.src = "images/IceBox.png";

/**
PROTOTYPE ICEBLOCKS FOR LEVEL

array of iceblocks

*/
iceBlocks = [   {"id": "iceblock1", "x":240, "y":125, "w":40, "h":40},
                {"id": "iceblock2", "x":280, "y":85, "w":40, "h":40},
                {"id": "iceblock3", "x":320, "y":125, "w":40, "h":40},
                {"id": "iceblock4", "x":380, "y":165, "w":40, "h":40},
                {"id": "iceblock4", "x":420, "y":165, "w":40, "h":40}
];

//*************************************************************
//*************************************************************
P.prototype.drawBounds = function(ctx){
    var points = this.points;
    var x = points[points.length-1].x;
    var y = points[points.length-1].y
    var min = x > y ? x : y;
    var bounds = {
        x: points[0].x + this.pos.x,
        y: points[0].y + this.pos.y,
        w: points[0].x + min,
        h: points[0].y + min
    };
    
    ctx.strokeStyle = "red";
    ctx.strokeRect(bounds.x, bounds.y, bounds.w, bounds.h);
};

//Block Polygons
var blockObjects = [];
for (var i = 0; i < blocks.length; i++) {
	blockObjects[i] = new P(new V(blocks[i].x, blocks[i].y), 
	[	new V(0, 0),
		new V(blockW, 0),
		new V(blockW, blockH),
		new V(0, blockH),
	]);
//    console.log(blockObjects[i].points);
}
//Ice Block Polygons
var iceBlockObjects = [];
for (var i = 0; i < iceBlocks.length; i++) {
	iceBlockObjects[i] = new P(new V(iceBlocks[i].x, iceBlocks[i].y), 
	[	new V(0, 0),
		new V(blockW, 0),
		new V(blockW, blockH),
		new V(0, blockH),
	]);
//    console.log("Ice Block pos = ");
//    console.log(iceBlockObjects[i].points);
}
//Sprite Polygon
spriteObject = new P(new V(startPointX, startPointY),  
	[	new V(0, 0),
		new V(spriteW, 0),
		new V(spriteW, spriteH),
		new V(0, spriteH)
    ]);
console.log(spriteObject.pos);

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
	speed: 200 // movement in pixels per second
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
    spriteObject.pos.x = startPointX;
	spriteObject.pos.y = startPointY;
	velocityY = 0;
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
gravity = 0.18;
jumpAvailable = false;
jumping = false;
jumpVel = 6;
velocityX = 0;
velocityY = 0;

var grounded = false;


var blockCollision = function() {
	for (var i = 0; i < blockObjects.length; i++) {
		response.clear();
	 	collision = SAT.testPolygonPolygon(blockObjects[i], spriteObject, response);
	 	if (collision) {
	 		velocityY = response.overlapV.y * friction;

	 	}
	}
	for (var i = 0; i < blockObjects.length; i++) {
		response.clear();
	 	collision = SAT.testPolygonPolygon(blockObjects[i], spriteObject, response);
	 	if (collision) {

	 		velocityX = response.overlapV.x;
		}
   	}
}
var iceBlockCollision = function() {
	for (var i = 0; i < iceBlockObjects.length; i++) {
		response.clear()
	 	collision = SAT.testPolygonPolygon(iceBlockObjects[i], spriteObject, response);
	 	if (collision) {
	 		
	 		velocityY = response.overlapV.y * friction;
	 		velocityX = response.overlapV.x / 2;		
	 	}
	    if (collision) {
	 		velocityY = response.overlapV.y * friction;
	 		velocityX = response.overlapV.x / 2;
	 	}
   }
}
var iceBlockDestroy = function(iceBlockObject) {

}

/**

Update During Gameplay

*/
update = function (modifier) {

	

	//Jumping 
	if (38 in keysDown) { // Player holding up
		
		//if(jumpAvailable) {
			jumping = true;
			jumpVel = maxVelocityY;
		//}
		if(Timer == null) {
			move();
		} else {
			clearInterval(Timer);
			Timer = null;
		}
	}

	if(jumping) {
        velocityY = -jumpVel;
		jumpVel -= 0.2;
		if(jumpVel <= 0) {
			jumping = false;
		}
	} else if (grounded) {
		velocityY -= gravity;
	} else {
        velocityY += gravity;
	}

	//Left Movement
	if (37 in keysDown) { // Player holding left
        velocityX -= sprite.speed * modifier;
		if(Timer == null) {
			Timer = setInterval('move();', 10);
		} else {
			clearInterval(Timer);
			Timer = null;
		}
	}

	//Right Movement
	if (39 in keysDown) { // Player holding right
        velocityX += sprite.speed * modifier;
		if(Timer == null) {
			Timer = setInterval('move();', 10);
		} else {
			clearInterval(Timer);
			Timer = null;
		}
	}

	//Downwards Movement
	if (40 in keysDown) { // Player holding down
		velocityY += gravity;
		if(Timer == null) { 
			Timer = setInterval('move();', 10);
		} else {
		clearInterval(Timer);
		Timer = null;
		}
	}

	// left boundary
	if(spriteObject.pos.x < 0) {
        spriteObject.pos.x = 0;
	}
	// right boundary
	if(spriteObject.pos.x > canvas.width - spriteW) {
		spriteObject.pos.x = canvas.width - spriteW;
        spriteObject.pos.x = canvas.width - spriteW;
	}

	//friction
	velocityX *= friction;

	//character acceleration
	spriteObject.pos.x += velocityX;
	spriteObject.pos.y += velocityY;
	sprite.x = spriteObject.pos.x;
	sprite.y = spriteObject.pos.y;

    //Check velocities and assign to max if higher than max
    if (velocityY > maxVelocityY)
		velocityY = maxVelocityY;
	if (velocityY < -maxVelocityY)
		velocityY = -maxVelocityY;
	if (velocityX > maxVelocityX)
		velocityX = maxVelocityX;
	if (velocityX < -(maxVelocityX))
		velocityX = -maxVelocityX;

	blockCollision();
	iceBlockCollision();

	//Resets the game when sprite falls off-screem
	if (sprite.y > canvas.height) {
		reset();
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
		blockObjects[i].drawBounds(ctx);
	}
    
	if(iceBlockImageReady) for (var i = 0; i < iceBlocks.length; i++) {
		ctx.drawImage(iceBlockImage, iceBlocks[i].x, iceBlocks[i].y, iceBlocks[i].w, iceBlocks[i].h);
		iceBlockObjects[i].drawBounds(ctx);
	}
	
	if (spriteReady) {
		ctx.drawImage(spriteImage, sprite.x, sprite.y, spriteW, spriteH);
		spriteObject.drawBounds(ctx);
	}
};

/**
The Main game loop on Platformer

url: http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
*/
main = function () {
   var now = Date.now();
   var delta = now - last;
   
   update(delta / 1000);
   render();


   ctx.font = "18px Arial";
   ctx.fillText("yVel: " + velocityY, 500, 30);
   ctx.fillText("xVel: " + velocityX, 500, 50);

   ctx.fillText("overlapY: " + response.overlapV.y, 460, 70);
   ctx.fillText("overlapX: " + response.overlapV.x, 460, 90);
   ctx.fillText("grounded: " + grounded, 450, 110);
   ctx.fillText("jumping: " + jumping, 463, 130);

   last = now;
   
   requestAnimationFrame(main);
};

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