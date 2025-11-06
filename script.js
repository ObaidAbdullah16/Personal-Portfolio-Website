// Simple console message
console.log("Welcome to Obaid's Portfolio!");

// Simple button click effect
const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log("Button clicked!");
  });
});
