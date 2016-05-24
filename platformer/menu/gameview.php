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
   $("#Right").click(
      function(){
         sprite.x += sprite.speed;
         if(animateTimer == null) {
            animateTimer = setInterval('move();', 10);
         } else {
            clearInterval(animateTimer);
            animateTimer = null;
         }
      }
   );
   //DON"T WORK
   $("#Left").click(
      function(){
         sprite.x -= sprite.speed;
         if(animateTimer == null) {
            animateTimer = setInterval('move();', 10);
         } else {
            clearInterval(animateTimer);
            animateTimer = null;
         }
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