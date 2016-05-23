<?php include("header.php"); ?>
<div style="background-color: black">
   
<div style="margin-bottom: 100px"></div>
<div class="col-xs-12" id="Main" >

<div class="center" id="logo" ><img  src="images/platformer.png"/></div>
<div class="col-xs-12 center"><button class="btn-primary" id="show_g">Game</button></div>
<div class="col-xs-12 center"><button class="btn-primary" id="show_i">Instructions</button></div>
<div class="col-xs-12 center"><button class="btn-primary" id="show_s">Settings</button></div>
<div class="col-xs-12 center"><button class="btn-primary" id="show_l">LeaderBoards</button></div>



</div>


<div id="Game">
<canvas id="canvas" class="center"></canvas>
<script src = "js/testing.js"></script>
<div class="col-xs-12 center"><button class="show_b">Back</button></div>
</div>
   
<div id="Instruction" class="center">
Instructions
<div class="col-xs-12 center"><button class="show_b">Back</button></div>
</div>
   
<div id="Settings">
Settings
<div class="col-xs-12 center"><button class="show_b">Back</button></div>
</div>
   
<div id="Leader">
Leaderboards
<div class="col-xs-12 center"><button class="show_b">Back</button></div>
</div>

<script>
$(document).ready(function(){
   $("#Game").hide();
   $("#Instruction").hide();
   $("#Settings").hide();
   $("#Leader").hide();
   

   $("#show_g").click(function(){
      $("#Main").hide();
      $("#Game").show();
   });
   $("#show_i").click(function(){
      $("#Main").hide();
      $("#Instruction").show();
   });
   $("#show_s").click(function(){
      $("#Main").hide();
      $("#Settings").show();
   });
   $("#show_l").click(function(){
      $("#Main").hide();
      $("#Leader").show();
   });
   
   $(".show_b").click(function(){
      $("#Main").show();
      $("#Game").hide();
      $("#Instruction").hide();
      $("#Settings").hide();
      $("#Leader").hide();
   });

});
</script>



</div>
<?php include("footer.php"); ?>
