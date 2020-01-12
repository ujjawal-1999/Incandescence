var bx = document.getElementById('carj');
var sx = document.getElementById('sign1j');
var tx = document.getElementById('trainj');
var i = 0;
var j = 0;

function fun() {
    const scrolled = window.scrollY;
    // console.log(scrolled);
    if (scrolled > 500) {
        bx.className = 'car';
        sx.className = 'sign1'


        i += 1;
    } else if (scrolled < 500 && i >= 1) {
        bx.className = "carj";
        sx.className = "sign1r"

    }
}

// function funt() {
// const scrolled= window.scrollY;
// console.log(scrolled);
// if (scrolled>400) {

// 	tx.className='train'

// 	j+=1;
// }else if(scrolled<400 && j>=1) {

// 	tx.className='trainj'
// }
// }


window.addEventListener('scroll', fun);
// window.addEventListener('scroll',funt);