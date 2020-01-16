function resizer() {
    let intViewportHeight = window.innerHeight;
    var road = parseFloat(document.getElementById('road-container').clientHeight);
    console.log(road);
    document.getElementById('map').style.top = road + 0.85 * intViewportHeight + 'px';
    document.getElementById('footer').style.top = road + 0.85 * intViewportHeight + 300 + 'px';
}