const nodeMenu = document.querySelector('.menu');
const showMenuBtn = document.querySelector('.menu-icon');
const closeMenuBtn = document.querySelector('.close-icon');

showMenuBtn.addEventListener('click', () => {
    nodeMenu.style.top = "0";
});

closeMenuBtn.addEventListener('click', () => {
    nodeMenu.style.top = "-100%";
})

const scr = ScrollReveal({
    distance: '90px',
    duration: 3000,
});

scr.reveal(`.content`, {origin: 'top', delay: '100'});
scr.reveal(`.ghost-picture`, {origin: 'bottom', delay: '200'});
scr.reveal(`.footer`, {origin: 'bottom', delay: '200'});