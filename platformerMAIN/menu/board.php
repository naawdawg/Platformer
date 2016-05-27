<div id="Board" class="div-container center col-xs-12">
   <div class="col-xs-12">
      
      
      <div id="Leader1">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level1` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader2">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level2` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader3">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level3` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader4">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level4` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader5">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level5` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader6">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level6` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader7">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level7` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader8">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level8` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader9">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level9` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader10">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level10` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader11">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level11` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader12">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level12` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader13">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level13` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader14">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level14` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader15">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level15` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader16">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level16` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader17">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level17` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader18">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level18` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader19">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level19` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader20">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level20` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader21">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level21` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader22">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level22` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader23">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level23` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader24">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level24` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      <div id="Leader25">
         <?php
            $servername = "localhost";
            $username = "pushpull88com_AD";
            $password = "Dalton0";
            $dbname = "pushpull88com_AD";

            //create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //check connection
            if ($conn->connect_error) {
               die("Connection failed! " . $conn->connect_error);
            } else {
               echo "Connected Successfully"."<br/>";
            }

            $sql = "SELECT * FROM `level25` WHERE `ID` < 11 ORDER BY `Time` ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
               echo "<ol>";
               while($row = $result->fetch_assoc()) {
                    echo "<li>". "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."</li>" ;
               }
               echo "</ol>";
            } else {
               echo "0 Results";
            }

            $conn->close();
         ?>
      </div>
      
      
   </div>
   
   <div class="col-xs-12 center">
      <button id="show_sl" class="btn-primary">Select Level</button>
      <button class="btn-primary show_m">Main Menu</button>
   </div>
</div>


<script>
$(document).ready(function(){
   $("#show_sl").click(function(){
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
});
</script>