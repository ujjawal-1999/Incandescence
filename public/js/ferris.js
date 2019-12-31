function ferrisControl() {
    $ferris = $(".ferris-wheel--core");
    $base = $('.ferris-base--main');

    if($ferris.css("-webkit-animation-duration") == '30s'){
        $ferris.css("-webkit-animation-duration", "10000000000s");
        $ferris.css("-moz-animation-duration", "10000000000s");
        $ferris.css("animation-duration", "10000000000s");

        $ferris = $(".cabin--core");
        $ferris.css("-webkit-animation-duration", "10000000000s");
        $ferris.css("-moz-animation-duration", "10000000000s");
        $ferris.css("animation-duration", "10000000000s");

        $base.css("background","crimson");
    }
    else {
        $ferris.css("-webkit-animation-duration", "30s");
        $ferris.css("-moz-animation-duration", "30s");
        $ferris.css("animation-duration", "30s");

        $ferris = $(".cabin--core");
        $ferris.css("-webkit-animation-duration", "30s");
        $ferris.css("-moz-animation-duration", "30s");
        $ferris.css("animation-duration", "30s");

        
        $base.css("background","#ce5250");
    }

}