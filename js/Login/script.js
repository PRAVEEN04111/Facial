document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const toggleButton = document.getElementById("toggleButton");
  const nameField = document.getElementById("nameField");
  const title = document.getElementById("title");
  const submitButton = loginForm.querySelector(".submit-button");

  let isSignUp = false;

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted!");
  });

  toggleButton.addEventListener("click", () => {
    isSignUp = !isSignUp;
    if (isSignUp) {
      title.textContent = "Create Account";
      nameField.style.display = "block";
      submitButton.textContent = "Sign Up";
      toggleButton.textContent = "Already have an account? Login";
    } else {
      title.textContent = "Welcome Back";
      nameField.style.display = "none";
      submitButton.textContent = "Login";
      toggleButton.textContent = "Don't have an account? Sign Up";
    }
  });
});