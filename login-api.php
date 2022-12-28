<?php

$entityBody = json_decode(file_get_contents('php://input'));

$user_name = $entityBody->{"user_name"};
$password = $entityBody->{"password"};
$passwordHash = md5($password);

require("db.php");

$sql = "SELECT * FROM registered_users WHERE user_name = '$user_name' AND password = '$passwordHash'";
$result = $conn->query($sql);
echo "hello";
session_start();
while($row = $result->fetch_array()) {
    $_SESSION["userId"] = $row[0];
    $myfile = fopen("auth_logs.txt", "a") or die("Unable to open file!");
    $txt = "New login - username: $user_name, date: " . date(DATE_ATOM) . "\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}
