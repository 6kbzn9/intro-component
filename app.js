// variables

const button = document.querySelector(".submit");
const wrapper = document.querySelectorAll(".wrapper");

button.addEventListener("click", (e) => {
  wrapper.forEach((item) => {
    const input = document.querySelector(".input");
    if (!input.checkValidity()) {
      item.classList.add("invalid");
    }
  });
});
