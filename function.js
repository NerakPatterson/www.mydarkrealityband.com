//Validate form submission on contact page
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //This ensures the email has characters before and after the @ symbol.
  return regex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {//Waits until the HTML page has loaded before running JavaScript.
  const form = document.querySelector("form"); 

  if (!form) return;

  form.addEventListener("submit", function (e) { //Gets the value of the name, email, and message fields.
    const nameField = form.querySelector('input[type="text"]'); //validates name
    const emailField = form.querySelector('input[type="email"]'); //validates emails
    const messageField = form.querySelector("textarea"); //validates message 

    let errors = []; //If anything is invalid it prevents the form from submitting and shows an alert.

    // Validate name
    if (!nameField.value.trim()) {
      errors.push("Name is required.");
    }

    // Validate email
    if (!validateEmail(emailField.value.trim())) {
      errors.push("Please enter a valid email address.");
    }

    // Validate message
    if (!messageField.value.trim()) {
      errors.push("Message cannot be empty.");
    }

    if (errors.length > 0) {
      e.preventDefault(); // Stop form submission if errors are present
      alert(errors.join("\n")); // Shows all errors
    }
  });
});
