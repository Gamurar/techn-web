window.onload = function () {
    fetch('getcats-api.php')
    .then((response) => response.text())
    .then((data) => document.getElementById("kittens").innerHTML = data);
};

function addAppointment() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const kitten = document.getElementById("kittens").value;
    const date = document.getElementById("date").value;
    const data = { firstName, lastName, kitten, date };

    fetch('add-appointment-api.php', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then((response) => response.text())
    .then((response) => console.log(response));
    // .then((data) => document.getElementById("kittens").innerHTML = data);
}
