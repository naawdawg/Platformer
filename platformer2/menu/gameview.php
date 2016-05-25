<div id="Game" class="div-container center">

<canvas id="canvas"></canvas>
<script src = "js/game.js"></script>
	<button class="bottomLeft" id="Left">LEFT</button>
	<button id="Right">RIGHT</button>
	<button id="Up">SPACE</button>
	<button id="Pause">PAUSE</button>
	<button id="back" class="show_b">Back</button>
   
   
</div>

<script>
$(document).ready(function(){
   
   //DON"T WORK
   $("#Pause").click(
      function(){
		if (gameBool == true) {
			gameBool = false;
			pauseBool = true;
		} else {
			gameBool = true;
			pauseBool = false;
		}
      }
   );
   
   //RIGHT DOWN CLICK
   $("#Right").mousedown(
      function(){
		  moveRight = true;
      }
   );
   
    $("#Right").mouseup(
      function(){
		  moveRight = false;
      }
   );
   
   $("#Right").mouseleave(
      function(){
		  moveRight = false;
      }
   );
   
   //LEFT DOWN CLICK
   $("#Left").mousedown(
      function(){
		moveLeft = true;
      }
   );
   
   $("#Left").mouseup(
      function(){
		moveLeft = false;
      }
   );
   
   $("#Left").mouseleave(
      function(){
		  moveLeft = false;
      }
   );
   
   $("#Up").click(
      function(){
         if(jumpAvailable) {
            jumping = true;
            jumpVelocity = maxVelocityY;
         }

         if(animateTimer == null) {
            move();
         } else {
            clearInterval(animateTimer);
            animateTimer = null;
         }
      }
   );
});
</script>