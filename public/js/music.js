function playAnimation() {
    $('#cap').css("animation", "headmove 2s linear both infinite");
    $('#guitarguyhd').css("animation", "headmove 2s linear both infinite");
    $('#guitarguyhnd').css("animation", "handmove 2s linear both infinite");
    $('#cap').css("animation", "headmove 2s linear both infinite");
    $('#guitarguyhd').css("animation", "headmove 2s linear both infinite");
    $('#guitarguyhnd').css("animation", "handmove 2s linear both infinite");
    if ($('.ferris-wheel--core').css("animation-duration") != '30s') ferrisControl();
    animateText();
}

function stopAnimation() {
    $('#cap').css("animation", "none");
    $('#guitarguyhd').css("animation", "none");
    $('#guitarguyhnd').css("animation", "none");
    $('#cap').css("-webkit-animation", "none");
    $('#guitarguyhd').css("-webkit-animation", "none");
    $('#guitarguyhnd').css("-webkit-animation", "none");
    if ($('.ferris-wheel--core').css("animation-duration") == '30s') ferrisControl();
    hideText();
}

function playMusic1() {
    var music1 = document.getElementById("music1");
    var music2 = document.getElementById("music2");
    music2.pause();
    music1.play();
    playAnimation();
}

function playMusic2() {
    var music1 = document.getElementById("music1");
    var music2 = document.getElementById("music2");
    music1.pause();
    music2.play();
    playAnimation();
}

function pauseMusic() {
    var music1 = document.getElementById("music1");
    var music2 = document.getElementById("music2");
    music1.pause();
    music2.pause();
    stopAnimation();
}