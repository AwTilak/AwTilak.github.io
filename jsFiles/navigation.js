const navMenu = document.getElementById('nav-menu');
let navOpen = document.getElementById('toggle-open');
let navClose = document.getElementById('toggle-close');

navOpen.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
})