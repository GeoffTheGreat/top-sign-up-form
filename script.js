const form = document.getElementById("form");
const pw1 = document.getElementById("password");
const pw2 = document.getElementById("confirm-password");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userName = document.getElementById("username");
const canSubmit = false;

form.addEventListener("submit", (e) => {
  validateInputs();
  e.preventDefault();
});
const validateInputs = () => {
  const pw1Value = pw1.value;
  const pw2Value = pw2.value;
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const userNameValue = userName.value;

  if (firstNameValue.trim() === "") {
    errorMessage(firstName, "First Name can't be empty");
  } else {
    success(firstName);
  }
  if (lastNameValue.trim() === "") {
    errorMessage(lastName, "Last Name can't be empty");
  } else {
    success(lastName);
  }
  if (userNameValue.length < 6) {
    errorMessage(
      userName,
      `Username is too short, needs to be 6 characters and more `
    );
  } else {
    success(userName);
  }

  if (pw1Value.length < 6) {
    errorMessage(
      pw1,
      `Password is too short, needs to be 6 characters and more `
    );
  } else {
    success(pw1);
  }
  if (pw1Value !== pw2Value) {
    errorMessage(pw2, `Passwords don't match`);
  } else {
    success(pw1);
    success(pw2);
  }
};

const errorMessage = (element, message) => {
  const inputControl = element.parentElement;
  const err = inputControl.querySelector(".error");
  err.textContent = message;
  element.classList.add("error-input");
  element.classList.remove("success-input");
};
const success = (element) => {
  const inputControl = element.parentElement;
  const err = inputControl.querySelector(".error");
  err.textContent = "";
  element.classList.add("success-input");
  element.classList.remove("error-input");
};

console.log(document.getElementById("email"));
