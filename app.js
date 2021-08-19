// variables

const button = document.querySelector(".submit");
const wrapper = document.querySelectorAll(".wraper");
const inputs = document.querySelectorAll(".input");

button.addEventListener("click", () => {
  inputs.forEach((input) => {
    if (!input.patternMismatch) {
      console.log("fuck");
    }
  });
});
