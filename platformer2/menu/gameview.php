<div id="Game" class="div-container center">
<canvas id="canvas"></canvas>
<script src = "js/game.js"></script>
   <div class="col-xs-12">
      <div class="col-xs-3" >
         <button id="Right" class="mobile-button">RIGHT</button>
      </div>
      <div class="col-xs-3">
         <button id="Left" class="mobile-button">LEFT</button>
      </div>
      <div class="col-xs-6">
         <button id="Up" class="mobile-button">SPACE</button>
      </div>
   </div>
<div class="col-xs-12 center"><button class="show_b">Back</button></div>
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
            jumpVelocity = jumpMax;
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