<?php include("header.php"); ?>
<div style="margin-top: 500px;">
<p>PHP DATA</p>

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

$sql = "SELECT * FROM highscore`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["Name"]. " - Time: " .$row["Time"] ."<br/>";
   }
} else {
   echo "0 Results";
}

$conn->close();
?>

</div>

<div>
<?php

   
if (!empty($_POST) ) {
   $conn = new mysqli('localhost', 'pushpull88com_AD', 'Dalton0', 'pushpull88com_AD');
   if ($conn->connect_error) {
     die("Connection failed! " . $conn->connect_error);
   } else {
     echo "Connected Successfully"."<br/>";
   }

   $sql = "SELECT * FROM highscore`";
   $result = $conn->query($sql);
   //$ID = mysqli_real_escape_string($conn, $_POST['ID']);
   
   $ID = $result->num_rows;
   $Name = mysqli_real_escape_string($conn, $_POST['Name']);
   $Time = mysqli_real_escape_string($conn, $_POST['Time']);
   
   $sql = "INSERT INTO `highscore`(`ID`, `Name`, `Time`) VALUES ('$ID','$Name','$Time')";
   if (mysqli_query($conn, $sql)) {
      
      echo "Record added successfully.";
   } else {
      echo "ERROR: FAILED to add.";
      mysqli_error($conn);
   }
   $conn->close();
}   
?>

<script>
function submitForm() {
   var form = document.getElementById('input')[0];
   form.submit();
   form.reset();
   return false;
}
</script>
   
<form name="input" method="post" action="">
   <input name="Name" type="text">
   <input name="Time" type="number" min="0" max="100">
   <input type="submit" value="Submit" onclick="submitForm()">
</form>



</div>
<?php include("footer.php"); ?>