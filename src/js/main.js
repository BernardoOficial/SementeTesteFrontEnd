// Javascript aqui
const iconMenu = document.querySelector("[data-icon]");
const overlay = document.querySelector("[data-overlay]");
const menuMobile = document.querySelector("[data-menu-mobile]");

const toggleIcon = () => {
    iconMenu.classList.add("header__icon-toggle--ativo");
    overlay.classList.add('header__overlay--ativo');
    menuMobile.classList.add('header__menu-mobile--ativo');
}

const hideOverlay = evento => {
    evento.stopPropagation();
    iconMenu.classList.remove("header__icon-toggle--ativo");
    overlay.classList.remove('header__overlay--ativo');
    menuMobile.classList.remove("header__menu-mobile--ativo");
}

menuMobile.addEventListener('click', evento => evento.stopPropagation());

iconMenu.addEventListener('click', toggleIcon);
overlay.addEventListener('click', hideOverlay);