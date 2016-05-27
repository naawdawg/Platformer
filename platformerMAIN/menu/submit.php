<?php
if ($_POST) {
   $conn = new mysqli('localhost', 'pushpull88com_AD', 'Dalton0', 'pushpull88com_AD');
   if ($conn->connect_error) {
     die("Connection failed! " . $conn->connect_error);
   } else {
     echo "Connected Successfully"."<br/>";
   }
   //Probably going to fuck up
   $Level = $_POST['s_level'];

   $sql = "SELECT * FROM `level".$Level."`";
   $result = $conn->query($sql);

   $ID = $result->num_rows;

   $Name = mysqli_real_escape_string($conn, $_POST['s_name']);
   $Time = mysqli_real_escape_string($conn, $_POST['s_time']);
   
   $sql = "INSERT INTO `level".$Level."` (`ID`, `Name`, `Time`) VALUES ('$ID','$Name','$Time')";
   
   if (mysqli_query($conn, $sql)) {
      echo "Record added successfully.";
   } else {
      echo "ERROR: FAILED to add.";
      mysqli_error($conn);
   }
   $conn->close();
}   
?>
