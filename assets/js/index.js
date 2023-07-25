let btnMenu = document.getElementById('btn-menu');
let btnClose = document.getElementById('btn-close');
let showMenu = false;
let nav = document.getElementById('nav');

btnMenu.addEventListener('click',()=>{
    nav.style.display = 'flex';
    btnMenu.style.display = 'none';
    btnClose.style.display = 'flex'

});

btnClose.addEventListener('click',()=>{
    nav.style.display = 'none';
    btnMenu.style.display = 'flex';
    btnClose.style.display = 'none'
})
