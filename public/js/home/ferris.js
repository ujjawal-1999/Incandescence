function ferrisControl() {
    $ferris = $(".ferris-wheel--core");
    $base = $('.ferris-base--main');
    $cabin = $('.cabin--core');
    if ($ferris.css('-webkit-animation-play-state') == 'paused') {
        $ferris.css('-webkit-animation-play-state', 'running');
        $ferris.css('animation-play-state', 'running');
        $cabin.css('-webkit-animation-play-state', 'running');
        $cabin.css('animation-play-state', 'running');
        $base.css("background", "crimson");
    } else {
        $ferris.css('-webkit-animation-play-state', 'paused');
        $ferris.css('animation-play-state', 'paused');
        $cabin.css('-webkit-animation-play-state', 'paused');
        $cabin.css('animation-play-state', 'paused');
        $base.css("background", "#ce5250");
    }
}