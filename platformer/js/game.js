/**
Platformer
             
Description:
Author: Group #24
*/
 
//=======================Global Variables=========================
var canvas = document.createElement("canvas"); //Used to get the element type 'Canvas'
var ctx = canvas.getContext("2d"); //Speficies Demension

var egg = ""; //Easter Egg Variable
var eggtate; //Secret Egg Workings
var debugging = false; //Debug variable, boolean; true for debug mode
var debugTimer; 

var keysDown = {}; //Key listener, Determines if key is down

//------------------------------Images------------------------------

var bgReady = false; //Boolean, defines if background is ready
var bgImage = new Image(); //Background image

var blockImageReady = false; //Boolean, defines if block/block's are ready
var blockImage = new Image(); //Block image
var blocks; //Array, defines displayed blocks

var iceBlockImageReady = false; //Boolean, defines if iceblock's are ready
var iceBlockImage = new Image(); //iceBlock image
var iceBlocks; //Array, defines displayed iceBlocks

var animateTimer = null; //Animation timer
var facing = true; //Value define where the sprite is facing

var imageNum = 0; //Determines sprite animation
var spriteReady = false; //Boolean, defines if sprite animation is ready
var spriteImage = new Image(); //Sprite image
var sprite = {
	speed: 150 // movement in pixels per second
}; 				//Sprite Game Object
var spriteW = 34; //Sprite Width
var spriteH = 34; //Sprite Height

//----------------------Movement Variables--------------------------

var gravity = 3; //Gravity variable
var jumpAvailable = false; //Boolean, If sprite is on ground
var jumping = false; //In Jump
var jumpMax = 5; //Maximum jump Y-axis
var jumpVelocity = 2; //Jump Velocity
var spriteW = 32; //Sprite Width
var spriteH = 32; //Sprite Height
var velocityX;
var velocityY;
var friction = 0.92;
var maxVelocityX = 2;
var maxVelocityY = 6;
var startPointX = 200; //Player starting pixels
var startPointY = 240; //Player starting pixels

//----------------------Collision Variables--------------------------

var blockW = 40;
var blockH = 40;
var spriteObject; 
var blockObjects = [];
var iceBlockObjects = [];
var V = SAT.Vector; //Global SAT Vector function variable
var P = SAT.Polygon; //Global SAT Polygon function variable
var response = new SAT.Response();
var collision;

//===============================================================


//------------------------Canvas----------------------------
canvas.width = 720;
canvas.height = 480;
document.body.appendChild(canvas);

//------------------------Timer----------------------------
var time = 0;
setInterval(function() { 
		time += 1 
}, 100);

//------------------------Images----------------------------

//Displays background when image is ready
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

//Displays blocks when image is ready
blockImage.onload = function () {
	blockImageReady = true;
};
blockImage.src = "images/2.png";

//Displays ice blocks when image is ready
iceBlockImage.onload = function () {
	iceBlockImageReady = true;
};
iceBlockImage.src = "images/IceBox.png";

//Sprite Animation display
spriteImage.onload = function () {
	spriteReady = true;
};
spriteImage.src = "images/Walk0.png";
sprite = {
	speed: 150 // movement in pixels per second
};

//Arrays of JSON objects for blocks
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

blocks1 = [  {"id": "block1", "x":0, "y":325, "w":40, "h":40},
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
            {"id": "block634", "x":360, "y":285, "w":40, "h":40}

];

blocks2 = [  {"id": "block1", "x":0, "y":325, "w":40, "h":40},
            {"id": "block2", "x":40, "y":325, "w":40, "h":40},
            {"id": "block3", "x":80, "y":325, "w":40, "h":40},
            {"id": "block4", "x":120, "y":325, "w":40, "h":40},
            {"id": "block46", "x":160, "y":325, "w":40, "h":40},
            {"id": "block5", "x":320, "y":325, "w":40, "h":40},
            {"id": "block8", "x":440, "y":325, "w":40, "h":40},
            {"id": "block9", "x":480, "y":325, "w":40, "h":40},
            {"id": "block44", "x":520, "y":325, "w":40, "h":40},
            {"id": "block425", "x":160, "y":285, "w":40, "h":40},
            {"id": "block576", "x":320, "y":285, "w":40, "h":40},
            {"id": "block634", "x":360, "y":285, "w":40, "h":40},
            {"id": "block763", "x":400, "y":285, "w":40, "h":40},
            {"id": "block853", "x":440, "y":285, "w":40, "h":40}

];

//Array of JSON objects for ice blocks
iceBlocks = [ 	{"id": "iceblock1", "x":80, "y":440, "w":40, "h":40},
                {"id": "iceblock2", "x":120, "y":440, "w":40, "h":40}
];

//Block Polygons
for (var i = 0; i < blocks.length; i++) {
	blockObjects[i] = new P(new V(blocks[i].x, blocks[i].y), 
	[	new V(0, 0),
		new V(blockW, 0),
		new V(blockW, blockH),
		new V(0, blockH),
	]);
}
//Ice Block Polygons
for (var i = 0; i < iceBlocks.length; i++) {
	iceBlockObjects[i] = new P(new V(iceBlocks[i].x, iceBlocks[i].y), 
	[	new V(0, 0),
		new V(blockW, 0),
		new V(blockW, blockH),
		new V(0, blockH),
	]);
}
//Sprite Polygon
spriteObject = new P(new V(startPointX, startPointY),  
[	new V(0, 0),
	new V(spriteW, 0),
	new V(spriteW, spriteH),
	new V(0, spriteH)
]);
console.log(spriteObject.pos);

//------------------------Key Handlers----------------------------

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

//----------------------------Functions--------------------------------

//Reset the game when the player falls off-screen
function reset() {
   spriteObject.pos.x = startPointY;
   spriteObject.pos.y = startPointY;
};

//Sprite Movement Animation function
function move() {
	if(39 in keysDown) {//right    
		gameBoolean = true;
        facing = true;
		if(jumpAvailable) {
			imageNum = (imageNum + 1) % 4;
			spriteImage.src = "images/Walk" + imageNum + ".png";
		} else if(jumping) {
			spriteImage.src = "images/Jump1.png";
		} else {
            spriteImage.src = "images/Jump2.png";
        }
	} else if(37 in keysDown) { //left   
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

function easterEgg() {
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
			egg = "0";
		}
	}
};

function debug() {
	//Pressing Shift - D
	if (16 in keysDown && 68 in keysDown) {
		if (debugging == true && debugTimer != null) 
			debugTimer = setTimeout(debugging = false, 250);
		else 
			debugTimer = setTimeout(debugging = true, 250);
	}
};

function blockCollision() {
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
};

function iceBlockCollision() {
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
};

//Update function
function update(modifier) {
	easterEgg(); //Call easter egg function
	debug();
	
	if (38 in keysDown) { // Player holding up
		//if(jumpAvailable) {
			jumping = true;
			jumpVelocity = maxVelocityY;
		//}
		
		if(animateTimer == null) {
			move();
		} else {
			clearInterval(animateTimer);
			animateTimer = null;
		}
	}
	
	if(jumping) { //if 38 is pressed when jump is available 
		velocityY = -jumpVelocity; 
		jumpVelocity -= 0.2; //Jump physics
		if(jumpVelocity <= 0) {
			jumping = false;
		} else { // Apply gravity
		 	velocityY += gravity;
		}
	}
	if (40 in keysDown) { // Player holding down
		velocityY += gravity;
		if(animateTimer == null) {
			animateTimer = setInterval('move();', 10);
		} else {
			clearInterval(animateTimer);
			animateTimer = null;
		}
	}
	if (37 in keysDown) { // Player holding left
		velocityX -= sprite.speed * modifier;
		if(animateTimer == null) {
			animateTimer = setInterval('move();', 10);
		} else {
			clearInterval(animateTimer);
			animateTimer = null;
		}
	}
	if (39 in keysDown) { // Player holding right
		velocityX += sprite.speed * modifier;
		if(animateTimer == null) {
			animateTimer = setInterval('move();', 10);
		} else {
			clearInterval(animateTimer);
			animateTimer = null;
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

	//Detect collisions
	blockCollision();
	iceBlockCollision();

	//Resets the game when sprite falls off-screem
	if (spriteObject.pos.y > canvas.height) {
		reset();
	}
};

window.onkeydown = move;
eggtate = 0;

//*************http://jsfiddle.net/ARTsinn/FpEZf/**************
//***************draws neat red rectangle*********************
P.prototype.drawBounds = function(ctx) {
    var points = this.points;
    var x = points[points.length - 1].x;
    var y = points[points.length - 1].y
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
//*************************************************************

//Renders all images onto screen
function render() {
   	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, 780, 480);
	}
	
	// Draws json objects
	if(blockImageReady) for (var i = 0; i < blocks.length; i++) {
		ctx.drawImage(blockImage, blocks[i].x, blocks[i].y, blocks[i].w, blocks[i].h);
		if (debugging == true) 
			blockObjects[i].drawBounds(ctx);
	}
    
	if(iceBlockImageReady) for (var i = 0; i < iceBlocks.length; i++) {
		ctx.drawImage(iceBlockImage, iceBlocks[i].x, iceBlocks[i].y, iceBlocks[i].w, iceBlocks[i].h);
		if (debugging == true)
			iceBlockObjects[i].drawBounds(ctx);
	}
	
	if (spriteReady) {
		ctx.drawImage(spriteImage, sprite.x, sprite.y, spriteW, spriteH);
		console.log();
		if (debugging == true)
			spriteObject.drawBounds(ctx);
	}
	
	//Debug info & Demonstration
	ctx.fillStyle = 'rgba(179, 179, 204, 0.4)';
	if (debugging == true) {
	    ctx.fillRect(570, 10, 135, 150);
		if (time > 500 && time < 1000) {
	    	ctx.save();
	    	eggtate++;
	    	ctx.rotate(eggtate / (velocityY * time));
			ctx.drawImage(spriteImage, 200, 10, 400, 400);
			ctx.restore();
			ctx.fillRect(30, 30, 60, 60);
		}
	}

    if (time < 10)
		ctx.fillRect(30, 30, 45, 60);
    else if (time > 10 && time < 100) 
    	ctx.fillRect(30, 30, 60, 60);
	else if (time > 100 & time < 1000) 
		ctx.fillRect(30, 30, 85, 60);
	else if (time > 1000 & time < 10000)
		ctx.fillRect(30, 30, 100, 60);	
	
	//Renders timer
	ctx.font = "40px Lato";
	ctx.fillStyle = "#2B0F06";
	ctx.fillText(time, 40, 70);
	if (debugging == true) {
		ctx.font = "16px Arial";
	    ctx.fillText("yVel: " + velocityY, 615, 40);
	    ctx.fillText("xVel: " + velocityX, 615, 60);

	    ctx.fillText("overlapY: " + response.overlapV.y, 590, 80);
	    ctx.fillText("overlapX: " + response.overlapV.x, 590, 100);
	    ctx.fillText("jumping: " + jumping, 580, 120);
	}
}

// // -------------------------------GRID------------------------------------------
// 	var posX = 0; //Position x in the grid 
// 	var posY = 0; //Position y in the grid
// 	// 2D Grid
// 	for(var rowX = 0; rowX < mapArray.length; rowX++) {
// 		for(var colY = 0; colY < mapArray[rowX].length; colY++) {
// 			if(mapArray[rowX][colY] == 1) { //Draw iceblocks
// 				ctx.drawImage(iceBlockImage, posX, posY, 40, 40);
// 			}
// 			if(mapArray[rowX][colY] == 2) { //Draw blocks
// 				ctx.drawImage(blockImage, posX, posY, 40, 40);
// 			}
// 			posX += 40; //Increments column position
// 		}
// 		posY += 40; //Increments row position
// 		posX = 0; //Resets column for the new row
// 	}
// }
// -------------------------------------------------------------------------------
// Map prototype
var mapArray=[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
	[0,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 ];
// ----------------------------PLAY------------------------------------------------------------------------
function play() {
	var now = Date.now();
	var delta = now - last;
    update(delta / 1000);
    render();
    last = now;
};
// -------------------------------------------------------------------------------------------
var gameBoolean = true;// Set to change when right click is pressed!

function main() {
	if (gameBoolean) {
		play();
	} else {
		//leaderboard or anything
		ctx.drawImage(bgImage, 0, 0, 780, 480);
	}
	
	//Requests to do this again ASAP
    requestAnimationFrame(main);
};
// -------------------------------------------------------------------------------------------

//Establishes a Cross-browser support for requestAnimationFrame
requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame 
						|| window.msRequestAnimationFrame || window.mozRequestAnimationFrame;

//Play game
var last = Date.now();
reset();
main();