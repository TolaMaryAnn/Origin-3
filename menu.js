const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
// const navlogo = document.querySelector('navbar_logo')


// display Mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);