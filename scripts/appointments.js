window.onload = function () {
    addActions();
};

function addActions() {
    document.querySelectorAll('[data-action="delete"]').forEach((item) => {
        item.addEventListener("click", function (event) {
            const parent = item.parentNode.parentNode.parentNode.parentNode;
            if (confirm("Are you sure you want to delete this appointment?")) {
                const { id } = item.dataset;
                fetch("delete-appointment-api.php", {
                    method: "DELETE",
                    body: JSON.stringify({ id }),
                }).then(() => parent.remove());
            }
        });
    });

    document.querySelectorAll('[data-action="modify"]').forEach((item) => {
        item.addEventListener("click", function (event) {
            const parent = item.parentNode.parentNode.parentNode.parentNode;
            parent.classList.add("modify-state");
        })
    })

    document.querySelectorAll('[data-action="save"]').forEach((item) => {
        item.addEventListener("click", function (event) {
            const parent = item.parentNode.parentNode.parentNode.parentNode;
            const newDate = parent.getElementsByClassName("date-selector")[0].value;
            if (confirm("Are you sure you want to delete this appointment?")) {
                const { id } = item.dataset;
                fetch("modify-appointment-api.php", {
                    method: "PUT",
                    body: JSON.stringify({ id, newDate }),
                }).then(() => {
                    parent.getElementsByClassName("current-visit-date")[0].innerText = newDate;
                    parent.classList.remove("modify-state");
                })
            }
        })
    })
}
