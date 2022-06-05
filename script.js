// Make sure that all inputs are filled out 
var submitBtn = document.getElementById("submit-input");
var nameField = document.getElementById("name-input");
var emailField = document.getElementById("email-input");
var messageField = document.getElementById("message-input");

function validateFormInputs() {
    console.log("validating")
    if (nameField.value.trim() && emailField.value.trim() && messageField.value.trim()) {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "disabled");
    }
}
nameField.addEventListener("change", validateFormInputs);
emailField.addEventListener("change", validateFormInputs);
messageField.addEventListener("change", validateFormInputs);

