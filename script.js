// Data for menu
var data = {
    menu: [
        {
            name: "Node 1",
            link: "#",
            submenu: [
                { name: "Node 1", link: "#", submenu: null },
                { name: "Node 2", link: "#", submenu: null },
                { name: "Node 3", link: "#", submenu: null },
                { name: "Node 4", link: "#", submenu: null },
                { name: "Node 5", link: "#", submenu: null },
            ],
        },
        {
            name: "Node 2",
            link: "#",
            submenu: [
                { name: "Node 1", link: "#", submenu: null },
                { name: "Node 2", link: "#", submenu: null },
                { name: "Node 3", link: "#", submenu: null },
                { name: "Node 4", link: "#", submenu: null },
                { name: "Node 5", link: "#", submenu: null },
            ],
        },
        {
            name: "Node 3",
            link: "#",
            submenu: [
                { name: "Node 1", link: "#", submenu: null },
                { name: "Node 2", link: "#", submenu: null },
                { name: "Node 3", link: "#", submenu: null },
                { name: "Node 4", link: "#", submenu: null },
                { name: "Node 5", link: "#", submenu: null },
            ],
        },
        {
            name: "Node 4",
            link: "#",
            submenu: [
                { name: "Node 1", link: "#", submenu: null },
                { name: "Node 2", link: "#", submenu: null },
                { name: "Node 3", link: "#", submenu: null },
                { name: "Node 4", link: "#", submenu: null },
                { name: "Node 5", link: "#", submenu: null },
            ],
        },
        {
            name: "Node 5",
            link: "#",
            submenu: [
                { name: "Node 1", link: "#", submenu: null },
                { name: "Node 2", link: "#", submenu: null },
                { name: "Node 3", link: "#", submenu: null },
                { name: "Node 4", link: "#", submenu: null },
                { name: "Node 5", link: "#", submenu: null },
            ],
        },
    ],
};

// Parses the data and creates the menu
function parseMenu(element, menu) {
    for (var i = 0; i < menu.length; i++) {
        var nestedli = document.createElement("li");
        nestedli.setAttribute("style", "display:none;");
        nestedli.setAttribute("onmouseenter", "showNodes(this)");
        nestedli.setAttribute("onmouseleave", "hideNodes(this)");
        var link = document.createElement("a");
        link.setAttribute("href", menu[i].link);
        link.appendChild(document.createTextNode(menu[i].name));
        nestedli.appendChild(link);
        if (menu[i].submenu != null) {
            var subul = document.createElement("ul");
            nestedli.appendChild(subul);
            parseMenu(subul, menu[i].submenu);
        }
        element.appendChild(nestedli);
    }
}
// Shows the drop down elements
function showNodes(element) {
    var menu = document.getElementById("drop-down");
    menu.style.display = "block";
    var lis = element.querySelectorAll("ul > li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "block";
    }
}

// Hides the drop down elements
function hideNodes(element) {
    var lis = element.querySelectorAll("ul > li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }
}

// Shows the drop down
function showMenu() {
    var menu = document.getElementById("drop-down");
    menu.style.display = "block";
    var lis = document.querySelectorAll("#drop-down > li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "block";
    }
}

// Hide the drop down
function hideMenu() {
    var menu = document.getElementById("drop-down");
    menu.style.display = "none";
}

function startDateTimer() {
    interavalID = setInterval(() => {
        const data = new Date();
        dateEl.innerText = data;
    }, 1000);
}

function onTimerBtnClick() {
    if (!timerIsRunning) {
        startDateTimer();
        timerBtn.innerText = "Stop timer";
        timerIsRunning = true;
    } else {
        clearInterval(interavalID);
        interavalID = null;
        timerBtn.innerText = "Start timer";
        timerIsRunning = false;
    }
}

let interavalID;
let timerIsRunning = false;
let timerBtn;
let dateEl;
window.onload = function () {
    var menu = document.getElementById("drop-down");
    timerBtn = document.getElementById("stop-timer");
    dateEl = document.getElementById("date");
    parseMenu(menu, data.menu);
    timerBtn.addEventListener("click", onTimerBtnClick);
};



// Run function when DOM Content has loaded
document.addEventListener('DOMContentLoaded', init);

// Function to run when DOM Content has loaded
function init(event) {

	// Get registration form and keep in global scope
	regForm = document.forms['registration'];

	// Listen for form submit
	regForm['register'].onclick = validateForm; 
}

// Function to validate form elements
function validateForm(event) {

	// Array to contain all error messages
	var errorMessages = Array();

	// If username is empty
	if(!regForm['username'].value) {
		errorMessages.push('* Please enter Username');
	}

	// If password1 is empty
	if(!regForm['password1'].value) {
		errorMessages.push('* Please enter Password1');
	}

	// If password2 is empty
	if(!regForm['password2'].value) {
		errorMessages.push('* Please enter Password2');
	}

	// If both passwords have values
	if(regForm['password1'].value && regForm['password2'].value) {
		// If passwords don't match
		if(regForm['password1'].value != regForm['password2'].value) {
			errorMessages.push('* Passwords do not match');
		}
	}

	// Find out if a gender has been selected
	var isChecked = false;
	for(var i=0; i < regForm['gender'].length; i++) {
		if(regForm['gender'][i].checked) {
			isChecked = true; // Found a checked radio button!
			break; // No need to continue the search
		}
	}

	// If a gender selection was not found
	if(!isChecked) {
		errorMessages.push('* Please choose your gender');
	}
  
  // If selection has no value
  if(!regForm['continent'].value) {
      errorMessages.push('* Please select your location');
  }

	// If description is empty
	if(!regForm['description'].value) {
		errorMessages.push('* Please enter a description about you');
	}

  // Show error messages
	displayErrors(errorMessages);
  
	// If there are errors
	if(errorMessages.length) {
		// Stop the form from submitting
		return false;
	}
  
  
}

function displayErrors(errors) {
	var errorBox = document.getElementById('errorMessages');
  
  // If there aren't any errors
	if(!errors.length) {
		errorBox.innerHTML = '';
    return false;
	}

	// Get reference to error box
	var errorBox = document.getElementById('errorMessages');

	// Prepare a container to hold the completed error message string
	var messageString = '<ul>';

	// Loop through each error to display
	for(var i=0; i<errors.length; i++) {
		messageString += '<li>' + errors[i] + '</li>';
	}

	messageString += '</ul>';

	errorBox.innerHTML = messageString;
}