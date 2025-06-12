document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset all error states
  const formGroups = document.querySelectorAll(".form-group");
  formGroups.forEach((group) => {
    group.classList.remove("error", "success");
  });

  // Validate inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  let isValid = true;

  // Name validation
  if (name.value.trim().length < 3) {
    name.parentElement.classList.add("error");
    isValid = false;
  } else {
    name.parentElement.classList.add("success");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.parentElement.classList.add("error");
    isValid = false;
  } else {
    email.parentElement.classList.add("success");
  }

  // Password validation
  if (password.value.length < 8) {
    password.parentElement.classList.add("error");
    isValid = false;
  } else {
    password.parentElement.classList.add("success");
  }

  // Confirm password validation
  if (
    password.value !== confirmPassword.value ||
    confirmPassword.value === ""
  ) {
    confirmPassword.parentElement.classList.add("error");
    isValid = false;
  } else if (password.value.length >= 8) {
    confirmPassword.parentElement.classList.add("success");
  }

  // If form is valid, submit it
  if (isValid) {
    // Here you would typically send the data to a server
    alert("Form submitted successfully!");
    this.reset();

    // Remove success classes after submission
    formGroups.forEach((group) => {
      group.classList.remove("success");
    });
  }
});

// Add real-time validation on input change
document.querySelectorAll(".form-control").forEach((input) => {
  input.addEventListener("input", function () {
    const formGroup = this.parentElement;

    // Remove error/success classes when user starts typing
    if (this.value.trim() !== "") {
      formGroup.classList.remove("error", "success");
    }
  });
});
