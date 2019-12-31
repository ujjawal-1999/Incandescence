function playMusic1(){
    var music1 =  document.getElementById("music1");
    var music2 =  document.getElementById("music2");
    music1.play();
    music2.pause();
    if($ferris.css("-webkit-animation-duration") != '30s') ferrisControl();
}
function playMusic2(){
    var music1 =  document.getElementById("music1");
    var music2 =  document.getElementById("music2");
    music2.play();
    music1.pause();
    if($ferris.css("-webkit-animation-duration") != '30s') ferrisControl();
}
function pauseMusic(){
    var music1 =  document.getElementById("music1");
    var music2 =  document.getElementById("music2");
    music1.pause();
    music2.pause();
    ferrisControl();
}