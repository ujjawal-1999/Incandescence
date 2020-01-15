var bx = document.getElementById('carj');
var tx = document.getElementById('trainj');
var i = 0;

function fun() {
    const scrolled = window.scrollY;
    if (scrolled > 500) {
        bx.className = 'car';
        i += 1;
    } else if (scrolled < 500 && i >= 1) {
        bx.className = "carj";
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    let query = window.matchMedia("(min-width:768px)");
    if (query.matches) {
        window.addEventListener('scroll', fun);
    }
}