<?php

$cat_name = $_REQUEST["name"];
$cat_age = $_REQUEST["age"];


require("db.php");

$sql = "INSERT INTO Cats(name, age)
VALUES ('$cat_name', '$cat_age')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully.\nINSERT INTO Cats(name, age)
    VALUES ('$cat_name', '$cat_age')";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
?>
