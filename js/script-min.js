var button=document.querySelector(".writeus"),popup=document.querySelector(".feedback"),feedback=popup.querySelector("#username"),open=function(e){e.preventDefault(),popup.classList.add("feedback-show"),feedback.focus()},buttonClose=document.querySelector(".modal-close-button"),close=function(){popup.classList.remove("feedback-show")},escClose=function(e){27===e.keyCode&&popup.classList.contains("feedback-show")&&(e.preventDefault(),popup.classList.remove("feedback-show"))};button.addEventListener("click",open),buttonClose.addEventListener("click",close),window.addEventListener("keydown",escClose);var map=document.querySelector(".map-img"),popupMap=document.querySelector(".modal-map"),mapFrame=popupMap.querySelector("iframe"),mapOpen=function(e){e.preventDefault(),popupMap.classList.add("modal-map-show")},buttonMapClose=document.querySelector(".map-close-button"),mapClose=function(){popupMap.classList.remove("modal-map-show")},mapEscClose=function(e){27===e.keyCode&&popupMap.classList.contains("modal-map-show")&&(e.preventDefault(),popupMap.classList.remove("modal-map-show"))};map.addEventListener("click",mapOpen),buttonMapClose.addEventListener("click",mapClose),window.addEventListener("keydown",mapEscClose);