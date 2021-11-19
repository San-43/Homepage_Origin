let nav = document.getElementById('nav');
let menu = document.getElementById('links');
let icon = document.getElementById('open');
let buttons = document.getElementsByClassName('btn-header');
let closed = true;

function menus() {
    let Desplazamiento_Actual = window.pageYOffset;

    if (Desplazamiento_Actual <= 300) {
        nav.classList.remove('nav2');
        nav.className = ('nav1 navbar navbar-expand-sm fixed-top navbar-dark');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        icon.style.color = '#fff';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2 navbar navbar-expand-sm fixed-top navbar-light');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        icon.style.color = '#000';
    }
}

window.addEventListener('load', function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});