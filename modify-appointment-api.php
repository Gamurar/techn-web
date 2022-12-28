<?php

$entityBody = json_decode(file_get_contents('php://input'));

$id = $entityBody->{"id"};
$newDate = $entityBody->{"newDate"};

require("db.php");

$sql = "UPDATE appointments 
SET 
    visit_date = '$newDate'
WHERE
    id = $id";

if ($conn->query($sql) === TRUE) {
    echo "1";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
