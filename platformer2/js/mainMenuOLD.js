var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
canvas.width = 780;
canvas.height = 480;
document.body.appendChild(canvas);

var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');

var mouseX;
var mouseY;

var bgImage = new Image();
var logoImage = new Image();
var playImage = new Image();
var instructImage = new Image();
var settingsImage = new Image();
var creditsImage = new Image();
var shipImage = new Image();

var buttonX =		[337,258,304,268];
var buttonY =		[180,240,300,360];
var buttonWidth =	[106,264,172,244];
var buttonHeight =	[40 ,43 ,43 ,43];

var shipX = [0,0];
var shipY = [0,0];
var shipWidth = 35;
var shipHeight = 40;

var shipVisible = false;
var shipSize = shipWidth;
var shipRotate = 0;


//NOT SURE IF NEEDED
var frames = 30;
var timerId = 0;
var fadeId = 0;
var time = 0.0;

shipImage.src = "Images/Jump0.png";

playImage.onload = function(){
  context.drawImage(playImage, buttonX[0], buttonY[0]);
}
playImage.src = "Images/play.png";
instructImage.onload = function(){
  context.drawImage(instructImage, buttonX[1], buttonY[1]);
}
instructImage.src = "Images/instructions.png";
settingsImage.onload = function(){
  context.drawImage(settingsImage, buttonX[2], buttonY[2]);
}
settingsImage.src = "Images/settings.png";
creditsImage.onload = function(){
  context.drawImage(creditsImage, buttonX[3], buttonY[3]);
}
creditsImage.src = "Images/leaderboard.png";

var timerId = setInterval("update()", 1000/frames);

function removeListener() {
   canvas.removeEventListener("mousemove", checkPos);
   canvas.removeEventListener("mouseup", checkClick);
}

function addListener() {
   canvas.addEventListener("mousemove", checkPos);
   canvas.addEventListener("mouseup", checkClick);
}
addListener();

function update() {
  clear();
  animate();
  drawMain();
}

function clear() {
  context.clearRect(0, 0, width, height);
}

function animate(){
  if(shipSize == shipWidth){
      shipRotate = -1;
  }
  if(shipSize == 0){
      shipRotate = 1;
  }
  shipSize += shipRotate;
}

function drawMain(){
  context.drawImage(bgImage, 0, backgroundY, 780, 480);
  context.drawImage(logoImage, 225, 40, 330, 100);
  context.drawImage(playImage, buttonX[0], buttonY[0], buttonWidth[0], buttonHeight[0]);
  context.drawImage(instructImage, buttonX[1], buttonY[1], buttonWidth[1], buttonHeight[1]);
  context.drawImage(settingsImage, buttonX[2], buttonY[2], buttonWidth[2], buttonHeight[2]);
  context.drawImage(creditsImage, buttonX[3], buttonY[3], buttonWidth[3], buttonHeight[3]);
  if(shipVisible == true){
      context.drawImage(shipImage, shipX[0] - (shipSize/2), shipY[0], shipSize, shipHeight);
      context.drawImage(shipImage, shipX[1] - (shipSize/2), shipY[1], shipSize, shipHeight);
  }
}

function checkPos(mouseEvent){
     if(mouseEvent.pageX || mouseEvent.pageY == 0){
         mouseX = mouseEvent.pageX - this.offsetLeft;
         mouseY = mouseEvent.pageY - this.offsetTop;
     }else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
         mouseX = mouseEvent.offsetX;
         mouseY = mouseEvent.offsetY;
     }
     for(i = 0; i < buttonX.length; i++){
         if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
             if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
                 shipVisible = true;
                 shipX[0] = buttonX[i] - (shipWidth/2) - 2;
                 shipY[0] = buttonY[i] + 2;
                 shipX[1] = buttonX[i] + buttonWidth[i] + (shipWidth/2); 
                 shipY[1] = buttonY[i] + 2;
             }
         }else{
             shipVisible = false;
         }
     }
}

function checkClick(mouseEvent){
      if(mouseX > buttonX[0] && mouseX < buttonX[0] + buttonWidth[0]){
         if(mouseY > buttonY[0] && mouseY < buttonY[0] + buttonHeight[0]){
            clear();
            platformer();
            clearInterval(timerId);
            removeListener();
         }
      }
      if(mouseX > buttonX[1] && mouseX < buttonX[1] + buttonWidth[1]){
         if(mouseY > buttonY[1] && mouseY < buttonY[1] + buttonHeight[1]){
            clear();
            clearInterval(timerId);
            removeListener();
         }
      }
      if(mouseX > buttonX[2] && mouseX < buttonX[2] + buttonWidth[2]){
         if(mouseY > buttonY[2] && mouseY < buttonY[2] + buttonHeight[2]){
            clear();
            clearInterval(timerId);
            removeListener();
         }
      }
      if(mouseX > buttonX[3] && mouseX < buttonX[3] + buttonWidth[3]){
         if(mouseY > buttonY[3] && mouseY < buttonY[3] + buttonHeight[3]){
            clear();
            leaderMenu();
            clearInterval(timerId);
            removeListener();
         }
      }
 
}

function fadeOut(){
  context.fillStyle = "rgba(0,0,0, 0.2)";
  context.fillRect (0, 0, width, height);
  time += 0.1;
  if(time >= 2){
      clearInterval(fadeId);
      time = 0;
      timerId = setInterval("update()", 1000/frames);
  }
   return true;
}

function backMenu() {
   addListener();
   clear();
   animate();
   draw();
   
}