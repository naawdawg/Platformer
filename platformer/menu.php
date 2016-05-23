<?php include("header.php"); ?>
<div style="background-color: black">
   
<div style="margin-bottom: 75px"></div>
<div class="col-xs-12" id="Main" >

<div class="center" id="logo" ><img  src="images/platformer.png"/></div>
<div class="col-xs-12 center"><button class="btn-primary" id="show_g">Game</button></div>
<div class="col-xs-12 center"><button class="btn-primary" id="show_i">Instructions</button></div>
<div class="col-xs-12 center"><button class="btn-primary" id="show_s">Settings</button></div>
<div class="col-xs-12 center"><button class="btn-primary" id="show_l">LeaderBoards</button></div>



</div>


<div id="Game" class="center">
<canvas id="canvas"></canvas>
<script src = "js/game.js"></script>
   <div class="col-xs-12">
      <div class="col-xs-6" >
         <button id="Right" style="text-align: right">RIGHT</button>
         <button id="Left" style="text-align: right">LEFT</button>
      </div>
      <div class="col-xs-6">
         <button id="Up" style="text-align: left">SPACE</button>
      </div>
   </div>
<div class="col-xs-12 center"><button class="show_b">Back</button></div>
</div>
   
<div id="Instruction" class="center">
Instructions
<div class="col-xs-12 center"><button class="show_b">Back</button></div>
</div>
   
<div id="Settings" class="center">
Settings
<div class="col-xs-12 center"><button class="show_b">Back</button></div>
</div>
   
<div id="Leader">

<?php
//$servername = "localhost";
//$username = "pushpull88com_AD";
//$password = "Dalton0";
//$dbname = "pushpull88com_AD";

//create connection
//$conn = new mysqli($servername, $username, $password, $dbname);

//check connection
//if ($conn->connect_error) {
//   die("Connection failed! " . $conn->connect_error);
//} else {
//   echo "Connected Successfully"."<br/>";
//}

//$sql = "SELECT * FROM highscore`";
//$result = $conn->query($sql);

//if ($result->num_rows > 0) {
//   while($row = $result->fetch_assoc()) {
//        echo "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."<br/>";
//   }
//} else {
//   echo "0 Results";
//}

//$conn->close();
?>
   
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
   
   //DON"T WORK
   $("#Right").click(
      function(){
         sprite.x += sprite.speed * modifier;
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
         sprite.x -= sprite.speed * modifier;
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



</div>
<?php include("footer.php"); ?>