<?php
include("header.php"); 

if (!empty($_SESSION["userId"])) {
    include("html/contact-us.html");
} else {
    include("./login.php");
}

include("html/footer.html");

