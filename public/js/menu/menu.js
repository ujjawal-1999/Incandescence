var menuClicked = 0;
var menuAdjust = 1;

function resizeLogo() {
    // size of device screen
    var xsize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var ysize = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // landscape
    if (xsize > ysize) {
        // alert(xsize+" landscape "+ysize);

        // logo
        document.getElementById('logo').style.top = '4vh';
        document.getElementById('logo').style.width = '20vw';
        document.getElementById('logo').style.height = '8.5vh';

    } else { // portrait

        // size of device screen
        var xsize = window.screen.width;
        var ysize = window.screen.height;

        // logo
        document.getElementById('logo').style.top = '0vh';
        document.getElementById('logo').style.width = '90vw';
        document.getElementById('logo').style.height = '' + 90 * 8.5 / 20 + 'vw';
    }
}

function adaptMenu() {
    if (menuAdjust == 0 || menuClicked == 1) return;
    resizeLogo();

    var xsize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var ysize = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // landscape
    if (xsize > ysize) {
        $('#cld4').css("animation", "cld both 2s 0s");
        $('#cld5').css("animation", "cld both 2s 0s");
        $('#cld6').css("animation", "cld both 2s 0s");
        $('#cld7').css("animation", "cld both 2s 0s");
        $('#cld8').css("animation", "cld both 2s 0s");
        $('#cld9').css("animation", "cld both 2s 0s");
        $('#cld10').css("animation", "cld both 2s 0s");
        $('#cld11').css("animation", "cld both 2s 0s");
        $('#cld1').css("animation", "cldf both 2s 0s");
        $('#cld2').css("animation", "cldf both 2s 0s");
        $('#cld3').css("animation", "cldf both 2s 0s");
    } else {
        $('#cld4').css("animation", "cldf both 2s 0s");
        $('#cld5').css("animation", "cldf both 2s 0s");
        $('#cld6').css("animation", "cldf both 2s 0s");
        $('#cld7').css("animation", "cldf both 2s 0s");
        $('#cld8').css("animation", "cldf both 2s 0s");
        $('#cld9').css("animation", "cldf both 2s 0s");
        $('#cld10').css("animation", "cldf both 2s 0s");
        $('#cld11').css("animation", "cldf both 2s 0s");
        $('#cld1').css("animation", "cld both 2s 0s");
        $('#cld2').css("animation", "cld both 2s 0s");
        $('#cld3').css("animation", "cld both 2s 0s");
    }
}

function collapseMenu() {
    $('#menu').css('z-index', '2');
    $('#menu a').css("fontSize", "1.1em");
    $('#cld4').css("animation", "cld4i both 2s 0.5s");
    $('#cld5').css("animation", "cld5i both 2s 0.5s");
    $('#cld6').css("animation", "cld6i both 2s 0.5s");
    $('#cld7').css("animation", "cld7i both 2s 0.5s");
    $('#cld8').css("animation", "cld8i both 2s 0.5s");
    $('#cld9').css("animation", "cld9i both 2s 0.5s");
    $('#cld10').css("animation", "cld10i both 2s 0.5s");
    $('#cld11').css("animation", "cld11i both 2s 0.5s");
    $('#menu a').css('fontSize', '1vw');
    document.getElementById('overlay').remove();
    document.getElementById('closeMenu').remove();
    $('#cld1').css("animation", "cld both 2s 0s");
    $('#cld2').css("animation", "cld both 2s 0s");
    $('#cld3').css("animation", "cld both 2s 0s");
    menuClicked = 0;
    adaptMenu();
}

function expandMenu() {
    menuClicked = 1;

    $('#cld1').css("animation", "cldf both 2s 0s");
    $('#cld2').css("animation", "cldf both 2s 0s");
    $('#cld3').css("animation", "cldf both 2s 0s");

    // create overlay for displaying menu item
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0px';
    overlay.style.left = '0px';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '100';
    overlay.style.background = '#f99245';
    overlay.id = 'overlay';
    document.getElementsByTagName('body')[0].appendChild(overlay);
    $('#menu a').css('fontSize', '1.5vh');
    $('#cld4').css("animation", "cld4m both 2s 0.5s");
    $('#cld5').css("animation", "cld5m both 2s 0.5s");
    $('#cld6').css("animation", "cld6m both 2s 0.5s");
    $('#cld7').css("animation", "cld7m both 2s 0.5s");
    $('#cld8').css("animation", "cld8m both 2s 0.5s");
    $('#cld9').css("animation", "cld9m both 2s 0.5s");
    $('#cld10').css("animation", "cld10m both 2s 0.5s");
    $('#cld11').css("animation", "cld11m both 2s 0.5s");

    $('#menu').css('z-index', '101');
    $('#menu a').css("font-size", "2vh");

    var closeMenu = document.createElement('div');
    closeMenu.style.position = 'fixed';
    closeMenu.style.width = '50px';
    closeMenu.style.height = '50px';
    closeMenu.style.borderRadius = '50%';
    closeMenu.innerHTML = '&times;';
    closeMenu.style.display = 'flex';
    closeMenu.style.textAlign = 'center';
    closeMenu.style.fontSize = '50px';
    closeMenu.style.lineHeight = '50px';
    closeMenu.style.fontWeight = 'bold';
    closeMenu.style.color = 'red';
    closeMenu.style.zIndex = '104';
    closeMenu.style.top = '47vh';
    closeMenu.style.left = '48vw';
    closeMenu.id = 'closeMenu';
    closeMenu.addEventListener('click', collapseMenu);
    document.getElementsByTagName('body')[0].appendChild(closeMenu);
}
document.getElementById('cld1').addEventListener('click', expandMenu);