function resizer() {
    var xsize = document.documentElement.clientWidth;
    var ysize = document.documentElement.clientHeight;
    if (xsize > ysize) {
        $(".modalLeft").css("background", "url(/image/Events/banner5.png)");
        $(".modalRight").css("background", "url(/image/Events/banner5.png)");
        $(".modalLeft").css("background-repeat", "no-repeat");
        $(".modalRight").css("background-repeat", "no-repeat");
        $(".modalLeft").css("background-size", "contain");
        $(".modalRight").css("background-size", "contain");
        $(".modal-content").css("left", "" + ((xsize / 70) + 5) + 'vw');
        $(".modal-content").css("width", "" + ((xsize / 100) + 20) + 'vw');

        // $(".modal-content").css("top","10vh");
        // $(".modal-content").css("height","60vh");

    } else {
        $(".modalLeft").css("background", "url(/image/Events/banner2.png)");
        $(".modalRight").css("background", "url(/image/Events/banner2.png)");
        $(".modalLeft").css("background-repeat", "no-repeat");
        $(".modalRight").css("background-repeat", "no-repeat");
        $(".modalLeft").css("background-size", "contain");
        $(".modalRight").css("background-size", "contain");
        $(".modal-content").css("top", "12vh");
        $(".modal-content").css("height", "70vh");
    }

}