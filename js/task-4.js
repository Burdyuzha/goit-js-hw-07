const form = document.querySelector(".login-form");
const values = {};
form.addEventListener("submit", event => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();
  
  const missingFields = [];
  if (email.length === 0) {
    missingFields.push("email");
  }
  if (password.length === 0) {
    missingFields.push("password");
  }
  if (missingFields.length > 0) {
    alert(`All form fields must be filled in ${missingFields.join(", ")}`);
  } else {
    values.email = email;
  values.password = password;
  for (let key in values) {
    console.log(`${key}:${values[key]}`);
  }
  form.reset();
  }
  
});
