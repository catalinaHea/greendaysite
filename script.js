const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const slidebar = document.querySelector('.container .slidebar');

menuOpen.addEventListener('click', () => slidebar.style.left = '0');
menuClose.addEventListener('click', () => slidebar.style.left = '-100%');