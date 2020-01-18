function resizer() {
    var xsize = document.documentElement.clientWidth;
    var ysize = document.documentElement.clientHeight;
    $('.svg-background').css('transform', 'scale(' + (xsize * 0.7 / 200) + ',' + (ysize * 0.95 / 200));
}