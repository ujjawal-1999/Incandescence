var menuClicked = 0;

function adaptMenu() {
    if (menuAdjust == 0 || menuClicked == 1) return;

    var xsize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var ysize = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // landscape
    if (xsize > ysize) {
        $('#cld1').css("animation", "cld both 2s 0s");
        $('#cld2').css("animation", "cld both 2s 0s");
        $('#cld3').css("animation", "cld both 2s 0s");
        $('#cld4').css("animation", "cld both 2s 0s");
        $('#cld5').css("animation", "cld both 2s 0s");
        $('#cld6').css("animation", "cld both 2s 0s");
        $('#cld7').css("animation", "cldf both 2s 0s");
        $('#cld8').css("animation", "cldf both 2s 0s");
        $('#cld9').css("animation", "cldf both 2s 0s");
    } else {
        $('#cld1').css("animation", "cldf both 2s 0s");
        $('#cld2').css("animation", "cldf both 2s 0s");
        $('#cld3').css("animation", "cldf both 2s 0s");
        $('#cld4').css("animation", "cldf both 2s 0s");
        $('#cld5').css("animation", "cldf both 2s 0s");
        $('#cld6').css("animation", "cldf both 2s 0s");
        $('#cld7').css("animation", "cld both 2s 0s");
        $('#cld8').css("animation", "cld both 2s 0s");
        $('#cld9').css("animation", "cld both 2s 0s");
    }
}

function collapseMenu() {
    $('#cld1').css("animation", "cld1i both 2s 0.5s");
    $('#cld2').css("animation", "cld2i both 2s 0.5s");
    $('#cld3').css("animation", "cld3i both 2s 0.5s");
    $('#cld4').css("animation", "cld4i both 2s 0.5s");
    $('#cld5').css("animation", "cld5i both 2s 0.5s");
    $('#cld6').css("animation", "cld6i both 2s 0.5s");
    $('#menu a').css('fontSize', '1vw');
    document.getElementById('overlay').remove();
    document.getElementById('closeMenu').remove();
    $('#cld7').css("animation", "cld both 2s 0s");
    $('#cld8').css("animation", "cld both 2s 0s");
    $('#cld9').css("animation", "cld both 2s 0s");
    menuClicked = 0;
}

function expandMenu() {
    menuClicked = 1;

    $('#cld7').css("animation", "cldf both 2s 0s");
    $('#cld8').css("animation", "cldf both 2s 0s");
    $('#cld9').css("animation", "cldf both 2s 0s");

    // create overlay for displaying menu item
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '2';
    overlay.style.background = 'rgba(10,200,200,0.8)';
    overlay.id = 'overlay';
    document.getElementsByTagName('body')[0].appendChild(overlay);
    $('#menu a').css('fontSize', '1.5vh');
    $('#cld1').css("animation", "cld1m both 2s 0.5s");
    $('#cld2').css("animation", "cld2m both 2s 0.5s");
    $('#cld3').css("animation", "cld3m both 2s 0.5s");
    $('#cld4').css("animation", "cld4m both 2s 0.5s");
    $('#cld5').css("animation", "cld5m both 2s 0.5s");
    $('#cld6').css("animation", "cld6m both 2s 0.5s");

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
    closeMenu.style.zIndex = '6';
    closeMenu.style.top = '47vh';
    closeMenu.style.left = '48vw';
    closeMenu.id = 'closeMenu';
    closeMenu.addEventListener('click', collapseMenu);
    document.getElementsByTagName('body')[0].appendChild(closeMenu);
}
document.getElementById('cld7').addEventListener('click', expandMenu);