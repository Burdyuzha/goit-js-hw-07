
const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("input", () => {
  const userName = input.value.trim();
  output.textContent = userName ? userName : "Anonymous";
})
