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
    const body = document.querySelector(".body");

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

// map

ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map("map", {
            center: [54.981133, 83.101503],
            zoom: 12
        });
       
    myMap.geoObjects
        .add(new ymaps.Placemark([54.981133, 83.101503], {
            balloonContent: 'Производственное подразделение. Ул. андреева, д. 2а',
            iconCaption: 'ООО «СИБТЭК»'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6',
            iconCaptionMaxWidth: '150',
        }))
        .add(new ymaps.Placemark([54.988267, 83.043849], {
            balloonContent: 'Административно-управленческое подразделение. Ул. Ключ-Камышенское Плато, 14/1, офис 175',
            iconCaption: 'ООО «СИБТЭК»'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6',
            iconCaptionMaxWidth: '150',
        }));

}