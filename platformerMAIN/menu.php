<?php include("header.php"); ?>
<body style="height: 100%; overflow: hidden"> 
   
<?php include("menu/main.php"); ?>
<?php include("menu/levelselect.php"); ?>
<?php include("menu/gameview.php"); ?>
<?php include("menu/instructions.php"); ?>
<?php include("menu/settings.php"); ?>
<?php include("menu/leaderboard.php"); ?>
<?php include("menu/pause.php"); ?>
<?php include("menu/levelcompletion.php"); ?>
   
<script>
$(document).ready(function(){
   removeKeyListener();
   $("#Game").hide();
   $("#Instruction").hide();
   $("#Settings").hide();
   $("#Leader").hide();
   $("#Level").hide();
   $("#PauseMenu").hide();
   $("#LevelComplete").hide();
   
      //Resume function
    $("#Resume").click(function(){
      $("#PauseMenu").hide();
      $("#Game").show();
	  gameBool = true;
	  pauseBool = false;
   });
   
   //Reset function
    $("#Reset").click(function(){
      $("#PauseMenu").hide();
      $("#Game").show();
	  reset();
	  gameBool = true;
	  pauseBool = false;
   });
   
   // Show level: from level completion
    $("#Cancel").click(function(){
      $("#LevelComplete").hide();
      $("#Level").show();
   });
   
   // Show level: from level pause menu
    $("#Pause_s").click(function(){
      $("#PauseMenu").hide();
      $("#Level").show();
   });
   
   $("#show_lv").click(function(){
      $("#Main").hide();
      $("#Level").show();
      for (i = 0; i < unlock+1; i++) {
         $("#show_g" + i).removeClass("btn-danger");
         $("#show_g" + i).addClass("btn-primary");
      }
   });
   
   //==========================================================
   
   $("#show_s").click(function(){
      $("#Main").hide();
      $("#Settings").show();
   });
   $("#show_i").click(function(){
      $("#Main").hide();
      $("#Instruction").show();
   });
   $("#show_l").click(function(){
      $("#Main").hide();
      $("#Leader").show();
      $("#Board").hide();
      $("#Board_Select").show();
      $("#Leader1").hide();
      $("#Leader2").hide();
      $("#Leader3").hide();
      $("#Leader4").hide();
      $("#Leader5").hide();
      $("#Leader6").hide();
      $("#Leader7").hide();
      $("#Leader8").hide();
      $("#Leader9").hide();
      $("#Leader10").hide();
      $("#Leader11").hide();
      $("#Leader12").hide();
      $("#Leader13").hide();
      $("#Leader14").hide();
      $("#Leader15").hide();
      $("#Leader16").hide();
      $("#Leader17").hide();
      $("#Leader18").hide();
      $("#Leader19").hide();
      $("#Leader20").hide();
      $("#Leader21").hide();
      $("#Leader22").hide();
      $("#Leader23").hide();
      $("#Leader24").hide();
      $("#Leader25").hide();
   });
   
   $(".show_m").click(function(){
      $("#Main").show();
      $("#Game").hide();
      $("#Instruction").hide();
      $("#Settings").hide();
      $("#Leader").hide();
      $("#Level").hide();
	  $("#PauseMenu").hide();
	  $("#LevelComplete").hide();
   });
});
</script>
</body>
</html>
