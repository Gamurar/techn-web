<?php

require("db.php");

$sql = "SELECT * FROM cats";

$result = $conn->query($sql);

while($row = $result->fetch_array()) {
  echo "<option value='$row[2]'>$row[0]</option>";
}

$conn->close();

?>
