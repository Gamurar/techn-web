<?php
include("header.php"); 

if (!empty($_SESSION["userId"])) {
    include("html/add-cat.html");
} else {
    include("./login.php");
}
include("html/footer.html");
