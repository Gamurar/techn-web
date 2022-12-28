<?php
include("header.php");

if (!empty($_SESSION["userId"])) {
    include("./appointments-content.php");;
} else {
    include("./login.php");
}

include("html/footer.html");
