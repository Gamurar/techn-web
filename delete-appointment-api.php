<?php

$entityBody = json_decode(file_get_contents('php://input'));

$id = $entityBody->{"id"};
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gamurar";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM appointments WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "1";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
