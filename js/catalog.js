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

  burger.addEventListener("click", () => {
      menu.classList.add("header__nav_active");
      menuCloseItem.style.display = "block";
      burger.style.display = "none";
  });
  menuCloseItem.addEventListener("click", () => {
      menu.classList.remove("header__nav_active");
      menuCloseItem.style.display = "none";
      burger.style.display = "block";
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
  });
});


close.forEach(function(item) {
  item.onclick = function() {
    modalWindow.style.display = "none";
  }
});


window.onclick = function(event) {
  if(event.target == modalWindow) {
      modalWindow.style.display = "none";
  }
}