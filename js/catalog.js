
var link = document.querySelector(".js-btn");
var link_map = document.querySelector(".js-map");
var link_buy = document.querySelectorAll(".buy");
var popup = document.querySelector(".modal-content-write-us");
var popup_map = document.querySelector(".modal-content-map");
var popup_plus = document.querySelector(".modal-content-cart-plus");
var close = document.querySelector(".close-write");
var close_map = document.querySelector(".close-map");
var close_plus = document.querySelector(".close-plus");
var close_continue = document.querySelector(".continue-btn");

for(i=0;i<link_buy.length;i++)

  link_buy[i].addEventListener("click",function(event) {
    event.preventDefault(),
    popup_plus.classList.add("modal-go");
  });

  close_plus.addEventListener("click", function(event) {
    event.preventDefault();
    popup_plus.classList.remove("modal-go");
  });

  close_continue.addEventListener("click", function(event) {
    event.preventDefault();
    popup_plus.classList.remove("modal-go");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup_plus.classList.contains("modal-go")) {
        popup_plus.classList.remove("modal-go");   

    }
	}
  });