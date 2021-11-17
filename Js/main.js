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

window.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
    menus();
});

window.addEventListener('load', function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

window.addEventListener('click', function (e) {
    if (closed == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== icon) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            closed = true;
        }
    }

})

window.addEventListener('resize', function () {
    if (screen.width >= 700) {
        closed = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

icon.addEventListener('click', function () {
    opening();
})