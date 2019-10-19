var button = document.querySelector(".writeus");
var popup = document.querySelector(".feedback");
var feedback = popup.querySelector("#username");
var open = function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-show");
  feedback.focus();
};
var buttonClose = document.querySelector(".modal-close-button");
var close = function () {
  popup.classList.remove("feedback-show");
};
var escClose = function (evt) {
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

var map = document.querySelector(".map-img");
var popupMap = document.querySelector(".modal-map");
var mapFrame = popupMap.querySelector("iframe");
var mapOpen = function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-map-show");
};
var buttonMapClose = document.querySelector(".map-close-button");
var mapClose = function () {
  popupMap.classList.remove("modal-map-show");
};
var mapEscClose = function (evt) {
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
