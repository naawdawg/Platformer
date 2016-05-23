/**
Platformer
             
Description:

Author: Group #24
*/
var mapArray=[];

var menuBol = false;
var gameBol = true;
var leaderBol = false;
var settingBol = false;
var pauseBol = false;

//=======================Global Variables=========================
var canvas = document.createElement("canvas"); //Used to get the element type 'Canvas'
var ctx = canvas.getContext("2d"); //Speficies Demension

var egg = ""; //Easter Egg Variable

var keysDown = {}; //Key listener, Determines if key is down

//------------------------------Images------------------------------

var bgReady = false; //Boolean, defines if background is ready
var bgImage = new Image(); //Background image

var menuReady = false; //Boolean, defines if background is ready
var menuImage = new Image(); //Background image

var blockImageReady = false; //Boolean, defines if block/block's are ready
var blockImage = new Image(); //Block image
var blocks; //Array, defines displayed blocks
var blockW = 40;
var blockH = 40;

var iceBlockImageReady = false; //Boolean, defines if iceblock's are ready
var iceBlockImage = new Image(); //iceBlock image
var iceBlocks; //Array, defines displayed iceBlocks

var animateTimer = null; //Animation timer
var facing = true; //Value define where the sprite is facing

var imageNum = 0; //Determines sprite animation
var spriteReady = false; //Boolean, defines if sprite animation is ready
var spriteImage = new Image(); //Sprite image
var sprite; //Sprite Game Object
var spriteW = 35; //Sprite Width
var spriteH = 35; //Sprite Height

//----------------------Movement Variables--------------------------

var gravity = 3; //Gravity variable ***BUGS OUT IF HIGHER THAN 3 >.>***
var jumpAvailable = false; //Boolean, If sprite is on ground
var jumping = false; //In Jump
var jumpMax = 4; //Maximum jump Y-axis
var jumpVelocity = 0; //Jump Velocity

//===============================================================
var instructImage = new Image();
var settingsImage = new Image();
var creditsImage = new Image();
var shipImage = new Image();

var buttonX =		[337,258,304,268];
var buttonY =		[180,240,300,360];
var buttonWidth =	[106,264,172,244];
var buttonHeight =	[40 ,43 ,43 ,43];

var logoImage = new Image();
logoImage.onload = function(){}
logoImage.src = "images/platformer.png";

var playImage = new Image();
playImage.onload = function(){}
playImage.src = "images/play.png";

//------------------------Canvas----------------------------
canvas.width = 720;
canvas.height = 480;
document.body.appendChild(canvas);

//------------------------Timer----------------------------
var gameTime = 0;
setInterval(function(){
	if (gameBol == true) {
		gameTime+=1 
	}
}, 100);

//------------------------Images----------------------------

//Displays background when image is ready
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.jpg";

menuImage.onload = function () {
	menuReady = true;
};
menuImage.src = "images/menu.jpg";

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

//Sprite Animation Variables and Movement
spriteImage.onload = function () {
	spriteReady = true;
};
spriteImage.src = "images/Walk0.png";
sprite = {
	speed: 100 // movement in pixels per second
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
   sprite.x = 100;
   sprite.y = 250;
   gameTime = 0;
   mapArray=[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
	[0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
	[0,0,0,0,0,0,0,1,0,0,0,2,0,1,0,0,0,0],
	[0,0,0,0,0,2,0,1,0,1,0,0,0,1,0,0,0,0],
	[0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
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

//Update function
function update(modifier) {
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
	/**
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
	*/
	
	// ========================FIXED - MAKE THIS A FUNCTION - COLLISION/JUMPER===========================================
	var jumpReady = false; //true if on a block, needs to reinitialize to false every time, DONT MOVE!.
	var posX = 0; //Position x in the grid 
	var posY = 0; //Position y in the grid
	// Scan 2D Grid
	for(var rowX = 0; rowX < mapArray.length; rowX++){
		for(var colY = 0; colY < mapArray[rowX].length; colY++){
			if(mapArray[rowX][colY] == 1){
				// The +3/-3 is to take account of movement
				if (sprite.x > posX - spriteW && sprite.x < posX && sprite.y > posY - spriteH + 3 
						&& sprite.y < posY + spriteH - 3) { //left side block boundary
					sprite.x = posX - spriteW;
				}
				if (sprite.x < posX + blockW && sprite.x > posX && sprite.y > posY - spriteH + 3 
						&& sprite.y < posY + spriteH - 3) { //right side block boundary
					sprite.x = posX + blockW;
				}
				if (sprite.y < posY + spriteH + 3 && sprite.y > posY && sprite.x > posX - spriteW + 3 
						&& sprite.x < posX + blockW - 3) { //down side block boundary
					sprite.y = posY + spriteH + 3;
				}
				if (sprite.y > posY - spriteH && sprite.y < posY && sprite.x > posX - spriteW + 5 
						&& sprite.x < posX + blockW - 5) { //up side block boundary 
					//---------Ice Block Collision - Make a function for setTimeout---------
					var curRow = rowX;
					var curCol = colY;
					setTimeout(function() { mapArray[curRow][curCol] = 0; }, 500);
					//-----------------------------------------------------------------------
					sprite.y = posY - spriteH;
					jumpReady = true;
					break;
				} else {
					jumpReady = false;
				}
			}
			if(mapArray[rowX][colY] == 2){
				if (sprite.x > posX - spriteW && sprite.x < posX && sprite.y > posY - spriteH + 3 
						&& sprite.y < posY + spriteH - 3) { //left side block boundary
					sprite.x = posX - spriteW;
				}
				if (sprite.x < posX + blockW && sprite.x > posX && sprite.y > posY - spriteH + 3 
						&& sprite.y < posY + spriteH - 3) { //right side block boundary
					sprite.x = posX + blockW;
				}
				if (sprite.y < posY + spriteH + 3 && sprite.y > posY && sprite.x > posX - spriteW + 3 
						&& sprite.x < posX + blockW - 3) { //down side block boundary
					sprite.y = posY + spriteH + 3;
				}
				if (sprite.y > posY - spriteH && sprite.y < posY && sprite.x > posX - spriteW + 5 
						&& sprite.x < posX + blockW - 5) { //up side block boundary 
					sprite.y = posY - spriteH;
					jumpReady = true;
					break;
				} else {
					jumpReady = false;
				}
			}
			posX+=40; //Increments column position
		}
		posY+=40; //Increments row position
		posX=0; //Resets column for the new row	
		if(jumpReady) {
			break;
		} else {
			jumpReady = false;
		}
	}
	if (jumpReady) {
		jumpAvailable = true;
	} else {
		jumpAvailable = false;
	}
	// ========================================================================================================
	
	//Resets the game when sprite falls off-screem
	if (sprite.y > canvas.height) {
		reset();
	}
};
window.onkeydown = move;

//Renders all images onto screen
function render() {
   	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, 780, 480);
	}
	
	
	if (spriteReady) {
		ctx.drawImage(spriteImage, sprite.x, sprite.y, spriteW, spriteH);
	}
	
	ctx.font="40px Lato";
	ctx.fillStyle="green";
	
	//Renders timer
	ctx.font="40px Lato";
	ctx.fillStyle="green";
	ctx.fillText(gameTime,40,70);
	
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

 // ----------------------------Clear------------------------------------------------
function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
 
// ----------------------------PLAY------------------------------------------------------------------------
function play() {
	var now = Date.now();
	var delta = now - last;
	update(delta / 1000);
	render();
	last = now;
}
// -------------------------------------------------------------------------------------------

function main() {
	if (menuBol == true) {
		clear();
		ctx.drawImage(menuImage, 0, 0, canvas.width, canvas.height);
		drawMain();
		
		menuListener();
		addMouseListener();
	} else if (gameBol == true) { // X to pause
		play();
		gameListener();
	} else if (pauseBol == true) {
		ctx.font="40px Lato";
		ctx.fillStyle="yellow";
		ctx.fillText("Resume - Z",250,200);
		ctx.fillText("Back to Menu - C",250,250);
		
		pauseListener();
	} else if (leaderBol == true) {
		clear();
		ctx.drawImage(menuImage, 0, 0, canvas.width, canvas.height);
		ctx.font="40px Lato";
		ctx.fillStyle="yellow";
		ctx.fillText("LEADERBOARD",250,90);
		
		ctx.fillText("Back to Menu - C",250,350);
		
		leaderListener();
	}
	
	//Requests to do this again ASAP
    requestAnimationFrame(main);
}

// -----------------------------Key Listeners for Menu--------------------------------------------
function menuListener() {
	if (90 in keysDown) { // Z to play
		menuBol = false;
		gameBol = true;
	}
	if (86 in keysDown) { // V to leaderboard
		menuBol = false;
		leaderBol = true;
	}
}

function gameListener() {
	if (88 in keysDown) { //X to pause
		gameBol = false;
		pauseBol = true;
		addMouseListener();
	}
}

function pauseListener() {
	if (90 in keysDown) { // Z to play
		pauseBol = false;
		gameBol = true;
	}
	if (67 in keysDown) { // C to go back to menu
		reset();
		pauseBol = false;
		menuBol = true;
	}
}

function leaderListener() {
	if (67 in keysDown) { // C to go back to menu
		leaderBol = false;
		menuBol = true;
	}
}

// -------------------------------------------------------------------------------------------

//Establishes a Cross-browser support for requestAnimationFrame
requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame 
						|| window.msRequestAnimationFrame || window.mozRequestAnimationFrame;

//Play game
var last = Date.now();
reset();
main();

// -------------------------------------------------------------------------------------------

var shipX = [0,0];
var shipY = [0,0];
var shipWidth = 35;
var shipHeight = 40;

var shipVisible = false;
var shipSize = shipWidth;
var shipRotate = 0;

shipImage.src = "images/Jump0.png";
instructImage.src = "Images/instructions.png";
settingsImage.src = "Images/settings.png";
creditsImage.src = "Images/leaderboard.png";

function removeMouseListener() {
   ctx.canvas.removeEventListener("mousemove", checkPos);
   ctx.canvas.removeEventListener("mouseup", checkClick);
}

function addMouseListener() {
   ctx.canvas.addEventListener("mousemove", checkPos);
   ctx.canvas.addEventListener("mouseup", checkClick);
}

function drawMain(){
	ctx.drawImage(bgImage, 0, 0, 780, 480);
	ctx.drawImage(logoImage, 225, 40, 330, 100);
	ctx.drawImage(playImage, buttonX[0], buttonY[0], buttonWidth[0], buttonHeight[0]);
	ctx.drawImage(instructImage, buttonX[1], buttonY[1], buttonWidth[1], buttonHeight[1]);
    ctx.drawImage(settingsImage, buttonX[2], buttonY[2], buttonWidth[2], buttonHeight[2]);
    ctx.drawImage(creditsImage, buttonX[3], buttonY[3], buttonWidth[3], buttonHeight[3]);
}

function checkPos(event){
	var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;
    var status = document.getElementById('status');
    status.innerHTML = mouseX+" | "+mouseY;
}

function checkClick(event){
	var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;

	if(mouseX > buttonX[0] && mouseX < buttonX[0] + buttonWidth[0]){
        if(mouseY > buttonY[0] && mouseY < buttonY[0] + buttonHeight[0]){
			menuBol = false;
			gameBol = true;
			removeMouseListener();
        }
    }
}