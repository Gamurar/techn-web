<?php

$entityBody = json_decode(file_get_contents('php://input'));

$first_name = $entityBody->{"firstName"};
$last_name = $entityBody->{"lastName"};
$kitten = $entityBody->{"kitten"};
$appointmentDate = $entityBody->{"date"};

require("db.php");

$sql = "INSERT INTO clients(first_name, last_name)
VALUES ('$first_name', '$last_name')";

$client_id;
if ($conn->query($sql) === TRUE) {
  $client_id = $conn->insert_id;
  echo "Client has been created, his id: " . $client_id . "\n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$sql = "INSERT INTO appointments(client_id, cat_id, visit_date, created_at)
VALUES ($client_id, $kitten, '$appointmentDate', '" . date("Y-m-d") . "')";

if ($conn->query($sql) === TRUE) {
  echo "Appointment has been created, its id: " . $conn->insert_id . "\n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
