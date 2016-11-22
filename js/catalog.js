var link_buy = document.querySelectorAll(".buy");
var popup_plus = document.querySelector(".modal-content-cart-plus");
var close_plus = document.querySelector(".close-plus");
var close_continue = document.querySelector(".continue-btn");
var i;
for (i = 0; i < link_buy.length; i++) link_buy[i].addEventListener("click", function (event) {
  event.preventDefault();
  popup_plus.classList.add("modal-go");
});
close_plus.addEventListener("click", function (event) {
  event.preventDefault();
  popup_plus.classList.remove("modal-go");
});
close_continue.addEventListener("click", function (event) {
  event.preventDefault();
  popup_plus.classList.remove("modal-go");
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup_plus.classList.contains("modal-go")) {
      popup_plus.classList.remove("modal-go");
    }
  }
});