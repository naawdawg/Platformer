/**
Platformer
             
Description:

Author: Group #24
*/

//=======================Global Variables=========================

var mapArray = [];
var menuBool = false;
var gameBool = true;
var leaderBool = false;
var settingBool = false;
var pauseBool = false;

var canvas = document.getElementById("canvas"); //Used to get the element type 'Canvas'
var div = document.getElementById("Game");
var ctx = canvas.getContext("2d"); //Specifies Demension
var egg = ""; //Easter Egg Variable
var keysDown = {}; //Key listener, Determines if key is down
var gameTime = 0;

//------------------------------Images------------------------------


var bgImage = new Image(); //Background image

var snow1 = new Image(); //Snow Surface Edge
var snow2 = new Image(); //Snow Surface Center
var snow3 = new Image(); //Snow Surface Right Edge
var dirt4 = new Image(); //Dirt Left Side
var dirt5 = new Image(); //Dirt Center
var dirt6 = new Image(); //Dirt Right Side
var ds7 = new Image(); //Dirt/Snow Left Side
var corner8 = new Image(); //Dirt Left Corner
var bottom9 = new Image(); //Dirt Bottom Side
var corner10 = new Image(); //Dirt Right Corner
var ds11 = new Image(); //Dirt/Snow Right Side
var edge12 = new Image(); //Left Edge
var edge13 = new Image(); //Right Edge
var float14 = new Image(); //Floating Block Left Side
var float15 = new Image(); //Floating Block Center 
var float16 = new Image(); //Floating Block Right Side
var water17 = new Image(); //Water Surface
var water18 = new Image(); //Water Block
var frozen = new Image(); //Frozen Finish Sign
var finish = new Image(); //Finish Sign

var menuImage = new Image(); //Background image

var blockW = 40;
var blockH = 40;

var iceBlockImage = new Image(); //iceBlock image

var animateTimer = null; //Animation timer
var facing = true; //Value define where the sprite is facing

var imageNum = 0; //Determines sprite animation

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

var instructImage = new Image();
var settingsImage = new Image();
var creditsImage = new Image();

var buttonX =		[337, 258, 304, 268];
var buttonY =		[180, 240, 300, 360];
var buttonWidth =	[106, 264, 172, 244];
var buttonHeight =	[40, 43, 43, 43];

var logoImage = new Image();
logoImage.onload = function(){}
logoImage.src = "images/platformer.png";

var playImage = new Image();
playImage.onload = function(){}
playImage.src = "images/play.png";

//===============================================================

//------------------------Canvas----------------------------
canvas.width = 720;
canvas.height = 480;
div.appendChild(canvas);

//------------------------Timer----------------------------
setInterval(function() {
	if (gameBool == true) {
		gameTime += 1 
	}
}, 100);

//------------------------Images----------------------------

iceBlockImage.src = "images/IceBox.png";
snow1.src = 'images/1.png';
snow2.src = 'images/2.png';
snow3.src = 'images/3.png';
dirt4.src = 'images/4.png';
dirt5.src = 'images/5.png';
dirt6.src = 'images/6.png';
ds7.src = 'images/7.png';
corner8.src = 'images/8.png';
bottom9.src = 'images/9.png';
corner10.src = 'images/10.png';
ds11.src = 'images/11.png';
edge12.src = 'images/12.png';
edge13.src = 'images/13.png';
float14.src = 'images/14.png';
float15.src = 'images/15.png';
float16.src = 'images/16.png';
water17.src = 'images/17.png';
water18.src = 'images/18.png';
frozen.src = 'images/Crystal.png';
finish.src = 'images/Sign.png';
	
bgImage.src = "images/background.jpg";
menuImage.src = "images/menu.jpg";

//Displays background when image is ready
bgImage.onload = function () {}

menuImage.onload = function () {}

snow1.onload = function (){}
snow2.onload = function (){}
snow3.onload = function (){}
dirt4.onload = function (){}
dirt5.onload = function (){}
dirt6.onload = function (){}
ds7.onload = function (){}
corner8.onload = function (){}
bottom9.onload = function (){}
corner10.onload = function (){}
ds11.onload = function (){}
edge12.onload = function (){}
edge13.onload = function (){}
float14.onload = function (){}
float15.onload = function (){}
float16.onload = function (){}
water17.onload = function (){}
water18.onload = function (){}
frozen.onload = function () {}
finish.onload = function () {}

//Displays ice blocks when image is ready
iceBlockImage.onload = function () {}

//Sprite Animation Variables and Movement
spriteImage.onload = function () {}
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
   sprite.x = 0;
   sprite.y = 250;
   gameTime = 0;
   mapArray = [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,15,16,16,17,0,0,15,16,16,17,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0],
		[0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,20,0],
		[3,3,3,3,3,4,0,0,0,0,0,0,2,3,3,3,3,3],
		[6,6,6,6,6,7,0,0,0,0,0,0,5,6,6,6,6,6],
		[6,6,6,6,6,7,0,0,0,0,0,0,5,6,6,6,6,6],
		[10,10,10,10,10,14,0,0,0,0,0,0,13,10,10,10,10,10],
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

function checkCollision() {
	var posX = 0; //Position x in the grid 
	var posY = 0; //Position y in the grid
	// 2D Grid
	for(var rowX = 0; rowX < mapArray.length; rowX++){
		for(var colY = 0; colY < mapArray[rowX].length; colY++) {
			if(mapArray[rowX][colY] == 1) {
				if (sprite.y > posY - spriteH && sprite.y < posY && sprite.x > posX - spriteW + 5 && sprite.x < posX + blockW - 5) { //up side block
					sprite.y = posY - spriteH;
					var curRow = rowX;
					var curCol = colY;
					setTimeout(function() { mapArray[curRow][curCol] = 0; }, 500);
				}
				if (sprite.x > posX - spriteW && sprite.x < posX && sprite.y > posY - spriteH + 3 && sprite.y < posY + spriteH - 3) { //left side block
					sprite.x = posX - spriteW;
				}
				if (sprite.x < posX + blockW && sprite.x > posX && sprite.y > posY - spriteH + 3 && sprite.y < posY + spriteH - 3) {
					sprite.x = posX + blockW;
				}
				if (sprite.y < posY + spriteH + 3 && sprite.y > posY && sprite.x > posX - spriteW + 3 && sprite.x < posX + blockW - 3) {
					sprite.y = posY + spriteH + 3;
				}
				if (sprite.y > posY - spriteH && sprite.y < posY && sprite.x > posX - spriteW + 3 && sprite.x < posX + blockW - 3 
					&& sprite.y == posY - spriteH) {
					break;
				} else {
					jumpAvailable = false;
				}
			}
			for (var i = 2; i < 18; i++) {
				if(mapArray[rowX][colY] == i) {
					if (sprite.y > posY - spriteH && sprite.y < posY && sprite.x > posX - spriteW + 5 && sprite.x < posX + blockW - 5) { //up side block
						sprite.y = posY - spriteH;
					}
					if (sprite.x > posX - spriteW && sprite.x < posX && sprite.y > posY - spriteH + 3 && sprite.y < posY + spriteH - 3) { //left side block
						sprite.x = posX - spriteW;
					}
					if (sprite.x < posX + blockW && sprite.x > posX && sprite.y > posY - spriteH + 3 && sprite.y < posY + spriteH - 3) {
						sprite.x = posX + blockW;
					}
					if (sprite.y < posY + spriteH + 3 && sprite.y > posY && sprite.x > posX - spriteW + 3 && sprite.x < posX + blockW - 3) {
						sprite.y = posY + spriteH + 3;
					}
					if (sprite.y > posY - spriteH && sprite.y < posY && sprite.x > posX - spriteW + 3 && sprite.x < posX + blockW - 3 
						&& sprite.y == posY - spriteH) {
						break;
					} else {
						jumpAvailable = false;
					}
				}
			}
			posX += 40; //Increments column position
		}
		if (sprite.y == posY - spriteH) {
			jumpAvailable = true;
			break;
		} else {
			jumpAvailable = false;
		}
		posY += 40; //Increments row position
		posX = 0; //Resets column for the new row
	}
}

function iceDestruction(iceBlock) {

}

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
	
	checkCollision();

	//Resets the game when sprite falls off-screem
	if (sprite.y > canvas.height) {
		reset();
	}
};
window.onkeydown = move;

//Renders all images onto screen
function render() {
  
	ctx.drawImage(bgImage, 0, 0, 780, 480);
	ctx.drawImage(spriteImage, sprite.x, sprite.y, spriteW, spriteH);
		
	ctx.font = "40px Lato";
	ctx.fillStyle = "green";
	
	//Renders timer
	ctx.font = "40px Lato";
	ctx.fillStyle = "green";
	ctx.fillText(gameTime,40,70);
	
	// -------------------------------GRID------------------------------------------
	var posX = 0; //Position x in the grid 
	var posY = 0; //Position y in the grid
	// 2D Grid
	for(var rowX = 0; rowX < mapArray.length; rowX++){
		for(var colY = 0; colY < mapArray[rowX].length; colY++){
			if(mapArray[rowX][colY] == 1){
					ctx.drawImage(iceBlockImage,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 2){
					ctx.drawImage(snow1,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 3){
					ctx.drawImage(snow2,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 4){
					ctx.drawImage(snow3,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 5){
					ctx.drawImage(dirt4,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 6){
					ctx.drawImage(dirt5,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 7){
					ctx.drawImage(dirt6,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 8){
					ctx.drawImage(ds7,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 9){
					ctx.drawImage(corner8,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 10){
					ctx.drawImage(bottom9,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 11){
					ctx.drawImage(corner10,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 12){
					ctx.drawImage(ds11,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 13){
					ctx.drawImage(edge12,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 14){
					ctx.drawImage(edge13,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 15){
					ctx.drawImage(float14,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 16){
					ctx.drawImage(float15,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 17){
					ctx.drawImage(float16,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 18){
					ctx.drawImage(water17,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 19){
					ctx.drawImage(water18,posX,posY,40,40);
				}
				if(mapArray[rowX][colY] == 20){
					ctx.drawImage(frozen,posX,posY,40,40);
				}
				posX += 40;
			}
			posY += 40;
			posX = 0;
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
	if (menuBool == true) {
		clear();
		ctx.drawImage(menuImage, 0, 0, canvas.width, canvas.height);
		drawMain();
		
		menuListener();
		addMouseListener();
	} else if (gameBool == true) { // X to pause
		play();
		gameListener();
	} else if (pauseBool == true) {
		ctx.font = "40px Lato";
		ctx.fillStyle = "yellow";
		ctx.fillText("Resume - Z",250,200);
		ctx.fillText("Back to Menu - C",250,250);
		
		pauseListener();
	} else if (leaderBool == true) {
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
		menuBool = false;
		gameBool = true;
	}
	if (86 in keysDown) { // V to leaderboard
		menuBool = false;
		leaderBool = true;
	}
}

function gameListener() {
	if (88 in keysDown) { //X to pause
		gameBool = false;
		pauseBool = true;
		addMouseListener();
	}
}

function pauseListener() {
	if (90 in keysDown) { // Z to play
		pauseBool = false;
		gameBool = true;
	}
	if (67 in keysDown) { // C to go back to menu
		reset();
		pauseBool = false;
		menuBool = true;
	}
}

function leaderListener() {
	if (67 in keysDown) { // C to go back to menu
		leaderBool = false;
		menuBool = true;
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
			menuBool = false;
			gameBool = true;
			removeMouseListener();
        }
    }
}