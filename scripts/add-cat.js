function addCat() {
    var catName = document.getElementById("name").value;
    var catAge = document.getElementById("age").value;
    var queryString = `?name=${catName}&age=${catAge}`;

    var ajaxRequest = new XMLHttpRequest();

    ajaxRequest.open("POST", "add-cat-api.php" + queryString, true);
    ajaxRequest.send(null);

    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState == 4) {
            console.log(ajaxRequest.responseText);
        }
    };
}
