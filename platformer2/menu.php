<?php include("header.php"); ?>
<body style="height: 100%; overflow: hidden"> 
   
<?php include("menu/main.php"); ?>
<?php include("menu/levelselect.php"); ?>
<?php include("menu/gameview.php"); ?>
<?php include("menu/instructions.php"); ?>
<?php include("menu/settings.php"); ?>
<?php include("menu/leaderboard.php"); ?>

<script>
$(document).ready(function(){
   $("#Game").hide();
   $("#Instruction").hide();
   $("#Settings").hide();
   $("#Leader").hide();
   $("#Level").hide();
   //REMOVE ACTION LISTENERS HERE
   
   $("#show_lv").click(function(){
      $("#Main").hide();
      $("#Level").show();
   });
   
   $("#show_g").click(function(){
	  //ADD ACTION LISTENERS HERE
	  reset();
      $("#Level").hide();
      $("#Game").show();
   });
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
</body>
</html>