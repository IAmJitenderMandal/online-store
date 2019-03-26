let burger_nav_icon = document.querySelector('.ion-md-menu');
let menu_mobile = document.querySelector('.mob-navigation');


burger_nav_icon.addEventListener('click', function () {
    menu_mobile.classList.toggle('active');
})