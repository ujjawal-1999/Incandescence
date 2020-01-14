function resizer() {
    var xsize = document.documentElement.clientWidth;
    var ysize = document.documentElement.clientHeight;
    // document.querySelector('.svg-background').style.transform = 'scale(' + (xsize * 70 / (100 * 200)) + ',' + (ysize * 95 / (100 * 200)) + ')';
    // document.getElementById('svg').style.transform = ;
    // document.querySelector('.svg-background').style.display = 'fixed';
    // document.querySelector('.svg-background').style.top = '50vh';
    // document.querySelector('.svg-background').style.left = '50vw';
    var a = document.querySelectorAll('.svg-background');
    for (var j = 0; j <= 15; j++) {
        a[j].style.transform = 'scale(' + (xsize * 70 / (100 * 200)) + ',' + (ysize * 95 / (100 * 200)) + ')';
        a[j].style.display = 'fixed';
        a[j].style.top = '50vh';
        a[j].style.left = '50vw';
    }
}