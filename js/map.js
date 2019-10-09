const map = document.querySelector(".map-img");
const popupMap = document.querySelector(".modal-map");
const mapFrame = popupMap.querySelector("iframe");
const mapOpen = function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-map-show");
  mapFrame.focus();
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
