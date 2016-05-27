<div id="Game" class="div-container center">

<canvas id="canvas"></canvas>
<script src = "js/game.js"></script>
	<button class="scoreTime btn-danger" id="Left">LEFT</button>
	<button id="Right" class="btn-danger">RIGHT</button>
	<button id="Up" class="btn-danger">SPACE</button>
	<button id="Pause" id="LevelComplete" class="btn-danger">PAUSE</button>
</div>

<script>
$(document).ready(function(){
	
	//-------------------------NOTES: CHANGES------------------------------------------
	/*
	 * Everything should work
	 *
	 * Pause button works with functions - Resume, Reset, Level Selection, Back to Menu
	 * Changes to gameview buttons with media iPad, iPhone6, iphone5 and lower
	 * Level Completion page with locked textbox with time posted when you finish a level
	 * 3 New images sign.png, snowman.png, crystal.png
	 */

	//menu.php
	//style.css - removed bottom: 0 left:0 from #div-container - causes the errors
	//levelcompletion.php
	//game.js completion change - search up DALTON / might be easier if you just use my game.js
	//pause.php
	//style.css - media #(left right up pause)
	
	
	//-------------------------PAUSE CHANGES------------------------------------------
   $("#Pause").click(
      function(){
		$("#PauseMenu").show();
		$("#Game").hide();
		// REMOVE LISTENERS HERE PLEASE
		if (gameBool == true) {
			gameBool = false;
			pauseBool = true;
		} 
      }
   );
	//-------------------------------------------------------------------------------------------
});
</script>