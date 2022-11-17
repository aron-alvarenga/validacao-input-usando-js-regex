const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = "That username is valid!";
    // feedback.style.color = "#2a6592	";
    feedback.style.color = "limegreen";
    feedback.style.textAlign = "center";
  } else {
    // feedback help info
    feedback.textContent =
      "Username must contain letters only & be between 6 & 12 characters long!";
    feedback.style.color = "crimson";
    feedback.style.textAlign = "center";
  }
});

// Live feedback
form.username.addEventListener("keyup", (e) => {
  // console.log(e);
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    // console.log("passed");
    form.username.setAttribute("class", "success");
  } else {
    // console.log("failed");
    form.username.setAttribute("class", "error");
  }
});
