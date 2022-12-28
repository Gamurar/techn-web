window.onload = function () {
    addActions();
};

function addActions() {
    document.getElementById("login-btn").addEventListener("click", function (event) {
		const user_name = document.getElementById("user_name").value;
		const password = document.getElementById("password").value;
        fetch("login-api.php", {
			method: "POST",
			body: JSON.stringify({ user_name, password }),
		}).then((res) => {
			console.log(res.text);
		});
    });
}

function validate() {
    var $valid = true;
    document.getElementById("user_info").innerHTML = "";
    document.getElementById("password_info").innerHTML = "";

    var userName = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;
    if (userName == "") {
        document.getElementById("user_info").innerHTML = "required";
        $valid = false;
    }
    if (password == "") {
        document.getElementById("password_info").innerHTML = "required";
        $valid = false;
    }
    return $valid;
}
