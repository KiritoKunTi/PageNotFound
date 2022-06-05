const nodeMenu = document.querySelector('.menu');
const showMenuBtn = document.querySelector('.menu-icon');
const closeMenuBtn = document.querySelector('.close-icon');

showMenuBtn.addEventListener('click', () => {
    nodeMenu.style.top = "0";
});

closeMenuBtn.addEventListener('click', () => {
    nodeMenu.style.top = "-100%";
})