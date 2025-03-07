// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function () {
  // Prevent form from submitting
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");

  // Retrieve the input field value
  const errorMessage = document.createElement("span");
  errorMessage.style.color = "red";
  errorMessage.style.display = "block";
  inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);

  // Regular expression pattern for alphanumeric input
  const alphanumericPattern = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve input value
    const inputValue = inputField.value.trim();

    // Validate input against the regular expression
    if (alphanumericPattern.test(inputValue)) {
      // Valid input: clear error message, show confirmation
      errorMessage.textContent = "";
      alert("Form submitted successfully!");
    } else {
      // Invalid input: display error message
      errorMessage.textContent = "Error: Please enter only alphanumeric characters.";
    }
  });
});