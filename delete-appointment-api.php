<?php

$entityBody = json_decode(file_get_contents('php://input'));

$id = $entityBody->{"id"};

require("db.php");

$sql = "DELETE FROM appointments WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "1";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
