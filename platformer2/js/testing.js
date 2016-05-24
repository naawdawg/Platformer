/**
Platformer
             
Description:

Author: Group #24
*/
 
//=======================Global Variables=========================
var canvas = document.getElementById("canvas"); //Used to get the element type 'Canvas'
var div = document.getElementById("Game");
var ctx = canvas.getContext("2d"); //Speficies Demension

var egg = ""; //Easter Egg Variable

var keysDown = {}; //Key listener, Determines if key is down



var gameBol = true;// Set to change when right click is pressed!
var mainBol = false;
var timeBol = true;

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
var sprite; //Sprite Game Object
var spriteW = 40; //Sprite Width
var spriteH = 40; //Sprite Height

//----------------------Movement Variables--------------------------

var gravity = 3; //Gravity variable
var jumpAvailable = false; //Boolean, If sprite is on ground
var jumping = false; //In Jump
var jumpMax = 5; //Maximum jump Y-axis
var jumpVelocityocity = 2; //Jump Velocity

//===============================================================
var flakes = []; //empty array for flakes
var addFlake = function() {
	//random x position within the canvas
	var x = Math.floor(Math.random() * canvas.width) + 1;
	var y = 0;
	var s = Math.floor(Math.random() * 5) + 1; //random flake size
	flakes.push({"x": x,"y": y,"s":s});
};

//Let it rain!
var snow = function() {
	addFlake();
	for (var i = 0; i < flakes.length; i++) {
		ctx.fillStyle = "rgba(255,255,255,.75)";
		ctx.beginPath();
		ctx.arc(flakes[i].x, flakes[i].y+=flakes[i].s*.5, flakes[i].s*.5, 0, Math.PI*2, false);
		ctx.fill();
		if(flakes[i].y > canvas.height) {
			flakes.splice(i,1); //remove snowflakes out of bounds
		}
	}
}

//------------------------Canvas----------------------------
canvas.width = 720;
canvas.height = 480;
div.appendChild(canvas);

//------------------------Timer----------------------------
var time = 0;
setInterval(function(){ 
   if (timeBol == true) {
		time+=1 
   }
}, 100);

//------------------------Images----------------------------

//Displays background when image is ready
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.jpg";

//Displays blocks when image is ready
blockImage.onload = function () {
	blockImageReady = true;
};
blockImage.src = "images/2.png";

//Array of JSON objects for blocks
blocks = [ 		{"id": "block1", "x":0, "y":325, "w":40, "h":40},
                {"id": "block2", "x":40, "y":325, "w":40, "h":40},
                {"id": "block3", "x":80, "y":325, "w":40, "h":40},
                {"id": "block4", "x":120, "y":325, "w":40, "h":40},
				{"id": "block4", "x":160, "y":325, "w":40, "h":40},
				{"id": "block4", "x":200, "y":325, "w":40, "h":40},
                {"id": "block5", "x":240, "y":325, "w":40, "h":40},
				{"id": "block4", "x":480, "y":325, "w":40, "h":40},
				{"id": "block4", "x":520, "y":325, "w":40, "h":40},
				{"id": "block4", "x":560, "y":325, "w":40, "h":40},
                {"id": "block5", "x":600, "y":325, "w":40, "h":40},
				{"id": "block4", "x":640, "y":325, "w":40, "h":40},
                {"id": "block5", "x":680, "y":325, "w":40, "h":40}
];

//Displays ice blocks when image is ready
iceBlockImage.onload = function () {
	iceBlockImageReady = true;
};
iceBlockImage.src = "images/IceBox.png";

//Array of JSON objects for ice blocks
iceBlocks = [ 	{"id": "iceblock1", "x":80, "y":440, "w":40, "h":40},
                {"id": "iceblock2", "x":120, "y":440, "w":40, "h":40}
];


//Sprite Animation Variables and Movement
spriteImage.onload = function () {
	spriteReady = true;
};
spriteImage.src = "images/Walk0.png";
sprite = {
	speed: 150 // movement in pixels per second
};

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
   sprite.x = 210;
   sprite.y = 200;
}

//Sprite Movement Animation function
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

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("Name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}

//Update function
function update(modifier) {
   
   if (sprite.x > 660) {
      timeBol = false;
      var player = prompt("Please Enter your name:");
      var playertime = prompt("Please Enter your name:");;
      
      post('',{name: 'hello'});
      
      
      
      reset();
   }
   
	easterEgg(); //Call easter egg function
	
	if (38 in keysDown) { // Player holding up
		if(jumpAvailable) {
			jumping = true;
			jumpVelocity = jumpMax;
		}
		
		if(animateTimer == null) {
			move();
		} else {
			clearInterval(animateTimer);
			animateTimer = null;
		}
	}
	
	if(jumping) { //if 38 is pressed when jump is available 
		sprite.y -= jumpVelocity; 
		jumpVelocity -= 0.1; //Jump physics
		if(jumpVelocity <= 0) {
			jumping = false;
		}
	} else { // Apply gravity
		sprite.y += gravity;
	}
	
	if (40 in keysDown) { // Player holding down
		if(animateTimer == null) {
			animateTimer = setInterval('move();', 10);
		} else {
			clearInterval(animateTimer);
			animateTimer = null;
		}
	}
	if (37 in keysDown) { // Player holding left
		sprite.x -= sprite.speed * modifier;
		if(animateTimer == null) {
			animateTimer = setInterval('move();', 10);
		} else {
			clearInterval(animateTimer);
			animateTimer = null;
		}
	}
	if (39 in keysDown) { // Player holding right
		sprite.x += sprite.speed * modifier;
		if(animateTimer == null) {
			animateTimer = setInterval('move();', 10);
		} else {
			clearInterval(animateTimer);
			animateTimer = null;
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
	for (var j = 0; j < blocks.length; j++) {
		if (sprite.y > blocks[j].y - spriteH 
			&& sprite.x < blocks[j].x + blocks[j].w 
			&& sprite.x + spriteW > blocks[j].x) {
				sprite.y = blocks[j].y - spriteH;
			}
		if (sprite.y == blocks[j].y - spriteH) {
			jumpAvailable = true;
			break;
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

//Renders all images onto screen
function playRender() {
   	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, 780, 480);
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
	
	//Renders timer
	ctx.font="40px Lato";
	ctx.fillStyle="green";
	ctx.fillText(time,40,70);
	
// -------------------------------GRID------------------------------------------
	var posX = 0; //Position x in the grid 
	var posY = 0; //Position y in the grid
	// 2D Grid
	for(var rowX=0; rowX < mapArray.length; rowX++){
		for(var colY=0; colY < mapArray[rowX].length; colY++){
			if(mapArray[rowX][colY]==1){ //Draw iceblocks
				ctx.drawImage(iceBlockImage, posX, posY, 40, 40);
			}
			if(mapArray[rowX][colY]==2){ //Draw blocks
				ctx.drawImage(blockImage, posX, posY, 40, 40);
			}
			posX+=40; //Increments column position
		}
		posY+=40; //Increments row position
		posX=0; //Resets column for the new row
	}
// -------------------------------------------------------------------------------
}
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
   playRender();
   last = now;
}



// -------------------------------------------------------------------------------------------


function main() {
   if (mainBol == true) {
      ctx.drawImage(bgImage, 0, 0, 780, 480);
      snow();
   } else if (gameBol == true) {
      play();
   }
	
	//Requests to do this again ASAP
    requestAnimationFrame(main);
}
// -------------------------------------------------------------------------------------------

//Establishes a Cross-browser support for requestAnimationFrame
requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame 
						|| window.msRequestAnimationFrame || window.mozRequestAnimationFrame;

//Play game
var last = Date.now();
reset();
main();