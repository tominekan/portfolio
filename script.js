// Make sure that all inputs are filled out 
var submitBtn = document.getElementById("submit-input");
var nameField = document.getElementById("name-input");
var emailField = document.getElementById("email-input");
var messageField = document.getElementById("message-input");
var formInput = document.getElementsByClassName("contact-form")[0]

// Make sure that everything is filled out properly
// Block submitting if it's not okay
function validateFormInputs() {
    if (nameField.value.trim() && emailField.value.trim() && messageField.value.trim()) {
        submitBtn.removeAttribute("disabled");
        return true;
    } else {
        submitBtn.setAttribute("disabled", "disabled");
        return false;
    }
}

// Validate when the form is changed
nameField.addEventListener("change", validateFormInputs);
emailField.addEventListener("change", validateFormInputs);
messageField.addEventListener("change", validateFormInputs);
submitBtn.addEventListener("onclick", () => alert("Clicked"))

var mailData = {
    "access_token": "bekgf5t95omyqd34grnu679n"
};

function showSuccess() {
    alert("Successfully sent!");
}

function showError(error) {
    alert("Could not send mail, please try again. \nError Code: " + error);
}

function sendEmail() {
    submitBtn.setAttribute("disabled", "disabled");
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            showSuccess();
        } else
        if(request.readyState == 4) {
            showError(request.response);
        }
    }

    // Subject and message for email
    var subject = `From ${nameField.value}: email ${emailField.value}`
    var message = messageField.value

    mailData['subject'] = subject;
    mailData['text'] = message;
    var params = toParams(mailData);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}


submitBtn.onclick = sendEmail;

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}
