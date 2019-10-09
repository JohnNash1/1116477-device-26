const button = document.querySelector("#writeus");
const popup = document.querySelector(".feedback");
const feedback = popup.querySelector("#username");
const open = function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-show");
  feedback.focus();
};
const buttonClose = document.querySelector(".modal-close-button");
const close = function () {
  popup.classList.remove("feedback-show");
};
const escClose = function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("feedback-show")) {
      evt.preventDefault();
      popup.classList.remove("feedback-show");
    }
  }
};
button.addEventListener("click", open);
buttonClose.addEventListener("click", close);
window.addEventListener("keydown", escClose);
