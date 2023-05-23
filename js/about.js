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