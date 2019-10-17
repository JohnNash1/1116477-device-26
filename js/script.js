const button = document.querySelector(".writeus");
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

const map = document.querySelector(".map-img");
const popupMap = document.querySelector(".modal-map");
const mapFrame = popupMap.querySelector("iframe");
const mapOpen = function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-map-show");
};
const buttonMapClose = document.querySelector(".map-close-button");
const mapClose = function () {
  popupMap.classList.remove("modal-map-show");
};
const mapEscClose = function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-map-show")) {
      evt.preventDefault();
      popupMap.classList.remove("modal-map-show");
    }
  }
};
map.addEventListener("click", mapOpen);
buttonMapClose.addEventListener("click", mapClose);
window.addEventListener("keydown", mapEscClose);
