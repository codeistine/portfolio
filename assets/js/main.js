// toggle

const navToggle = document.querySelector('.toggle');
const sideMenu = document.querySelector('.sideMenu');

navToggle.addEventListener('click', () => {
    sideMenu.classList.toggle("show-links");
})  