// header 

(function () {
  const header = document.querySelector(".header");
  let logo = document.querySelector(".logo__img");
  window.onscroll = () => {
      if (window.pageYOffset > 50) {
          header.classList.add("header_fixed");
          logo.style.width = "50px";
      } else {
          header.classList.remove("header_fixed");
          logo.style.width = "70px";
      }
  };
}());



// burger handler

(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__content");
  const menuCloseItem = document.querySelector(".header__nav-close");
  let body = document.querySelector(".body");

  burger.addEventListener("click", () => {
      menu.classList.add("header__nav_active");
      menuCloseItem.style.display = "block";
      burger.style.display = "none";
      body.classList.add("no-scroll");
  });
  menuCloseItem.addEventListener("click", () => {
      menu.classList.remove("header__nav_active");
      menuCloseItem.style.display = "none";
      burger.style.display = "block";
      body.classList.remove("no-scroll");
  });
}());


/* modal card */

const modalWindow = document.querySelector(".catalog__card");
const close = document.querySelectorAll(".close");
const cards = document.querySelectorAll(".places__card");
let imageDefault = document.querySelector(".catalog__item__thumb");
let titleDefault = document.querySelector(".catalog__item__title");
let descriptionDefault = document.querySelector(".catalog__item__desc");
let priceDefault = document.querySelector(".catalog__price");
let body = document.querySelector(".body")

cards.forEach(function(item) {
  item.addEventListener("click", function() {
    let currentCard = item;
    let srcImage = currentCard.querySelector("img").getAttribute("src");
    let title = currentCard.querySelector(".places__card-title").innerHTML;
    let description = currentCard.querySelector(".places__card-desc").innerHTML;
    let price = currentCard.querySelector(".places__card-price").innerHTML;
    
    imageDefault.src = srcImage;
    titleDefault.innerHTML = title;
    descriptionDefault.innerHTML = description;
    priceDefault.innerHTML = price;

    modalWindow.style.display = "block";
    body.classList.add("no-scroll");
  });
});


close.forEach(function(item) {
  item.onclick = function() {
    modalWindow.style.display = "none";
    body.classList.remove("no-scroll");
  }
});


window.onclick = function(event) {
  if(event.target == modalWindow) {
      modalWindow.style.display = "none";
      body.classList.remove("no-scroll");
  }
}