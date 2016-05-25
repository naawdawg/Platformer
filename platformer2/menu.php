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
   $("#Board").hide();
   //REMOVE ACTION LISTENERS HERE
   
   
   $("#show_lv").click(function(){
      $("#Main").hide();
      $("#Level").show();
   });
   
   
   //==========================================================
   //BUTTON LEVEL SELECT FOR LEVEL 1
   $("#show_g").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 1;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 
   
   $("#show_g2").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 2;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 
   
   $("#show_g3").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 3;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 

   $("#show_g4").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 4;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 
   
   $("#show_g5").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 5;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 

   $("#show_g6").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 6;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 
   
   $("#show_g7").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 7;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 

   $("#show_g8").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 8;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 
   
   $("#show_g9").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 9;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 

   $("#show_g10").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 10;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 
   
   $("#show_g11").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 11;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 

   $("#show_g12").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 12;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 
   

   $("#show_g13").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 13;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 
   
   $("#show_g14").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 14;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 

   $("#show_g15").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 15;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
   }); 
   
   $("#show_g16").click(function(){
	  //ADD ACTION LISTENERS HERE
	  mapLevel = 16;
	  gameBool = true;
	  pauseBool = false;
	  reset();
      $("#Level").hide();
      $("#Game").show();
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
   });
   
   $(".show_b").click(function(){
      $("#Main").show();
      $("#Game").hide();
      $("#Instruction").hide();
      $("#Settings").hide();
      $("#Leader").hide();
      $("#Level").hide();
   });
});
</script>
</body>
</html>
