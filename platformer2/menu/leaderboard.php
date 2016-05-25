<div id="Leader" class="div-container center">
   <div class="center col-xs-12">
      <h1 id="leader_header">Leader Boards</h1>
   </div>

   <div id="Board_Select" class="center">
      <div class="col-xs-12">
         <h1 id="leader_subheader">Select Your Level</h1>
      </div>
      <div class="col-xs-12">
         <div>
            <button id="show_board" class="btn-lvl btn-primary">1</button>
            <button class="btn-lvl btn-primary">2</button>
            <button class="btn-lvl btn-primary">3</button>
            <button class="btn-lvl btn-primary">4</button>
            <button class="btn-lvl btn-primary">5</button>
         </div>
         <div>
            <button class="btn-lvl btn-primary">6</button>
            <button class="btn-lvl btn-primary">7</button>
            <button class="btn-lvl btn-primary">8</button>
            <button class="btn-lvl btn-primary">9</button>
            <button class="btn-lvl btn-primary">10</button>
         </div>
         <div>
            <button class="btn-lvl btn-primary">10</button>
            <button class="btn-lvl btn-primary">12</button>
            <button class="btn-lvl btn-primary">13</button>
            <button class="btn-lvl btn-primary">14</button>
            <button class="btn-lvl btn-primary">15</button>
         </div>
         <div>
            <button class="btn-lvl btn-primary">16</button>
            <button class="btn-lvl btn-primary">17</button>
            <button class="btn-lvl btn-primary">18</button>
            <button class="btn-lvl btn-primary">19</button>
            <button class="btn-lvl btn-primary">20</button>
         </div>
         <div>
            <button class="btn-lvl btn-primary">21</button>
            <button class="btn-lvl btn-primary">22</button>
            <button class="btn-lvl btn-primary">23</button>
            <button class="btn-lvl btn-primary">24</button>
            <button class="btn-lvl btn-primary">25</button>
         </div>
      </div>
   </div>
   <?php include("menu/board.php"); ?>
</div>

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
//   echo "<ol>";
//   while($row = $result->fetch_assoc()) {
//        echo "<ul>";
//        echo "Name: " . $row["Name"]. " - Time: " .$row["Time"];
//        echo "</ul>";
//   }
//   echo "</ol>";
//} else {
//   echo "0 Results";
//}

//$conn->close();
?>
   

<script>
$(document).ready(function(){
   $("#show_board").click(function(){
      $("#Board_Select").hide();
      $("#Board").show();
   });
});
</script>