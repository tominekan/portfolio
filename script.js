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


function sendMail() {
    if (validateFormInputs()) {
        let subject = "Message from " + nameField.value;
        let email = emailField.value;
        let message = messageField.value;
        emaijs.init("tpSKAIqpao8K6bz2R");
        emailjs.sendForm('contact_service', 'contact-form', 12);
    }
}


