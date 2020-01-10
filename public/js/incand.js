var menuAdjust = 1;

function hideMenu() {
    menuAdjust = 0;
    $('#cld1').css("animation", "cldf both 2s 0s");
    $('#cld2').css("animation", "cldf both 2s 0s");
    $('#cld3').css("animation", "cldf both 2s 0s");
    $('#cld4').css("animation", "cldf both 2s 0s");
    $('#cld5').css("animation", "cldf both 2s 0s");
    $('#cld6').css("animation", "cldf both 2s 0s");
    $('#cld7').css("animation", "cldf both 2s 0s");
    $('#cld8').css("animation", "cldf both 2s 0s");
    $('#cld9').css("animation", "cldf both 2s 0s");
}

function fontChange() {
    // size of device screen
    var xsize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var ysize = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    /* Incandescence text */
    if (xsize > ysize) {
        var textScaleX = Math.max(0.1, xsize / 1368);
        var textScaleY = Math.max(0.1, ysize / 685);
        textScale = Math.min(textScaleX, textScaleY);
        document.getElementById('incand').style.top = '3vh';
        document.getElementById('incand').style.transform = 'scale(' + textScale + ',' + textScale + ')';
    } else {
        var textScaleX = Math.max(0.1, (window.screen.width / 800));
        var textScaleY = Math.max(0.1, ysize / 685);
        // textScaleX = Math.min(textScaleX, textScaleY);
        // textScaleY = textScaleX;
        document.getElementById('incand').style.transform = 'scale(' + textScaleX + ',' + textScaleY + ')';

        document.getElementById('incand').style.top = '' + 0.05 * ysize + 'px';
        document.getElementById('incand').style.left = (window.screen.width * 2 / 15) - (300 * xsize / 695) + 'px';
    }

    setTimeout(
        function changef() {
            document.getElementById("i").style.backgroundImage = "url(fonts/i.png)";
            document.getElementById("i").style.height = "120px";
            document.getElementById("i").style.width = "50px";
            document.getElementById("i").style.marginLeft = "10px";
            document.getElementById("i").style.marginTop = "-440px";
            document.getElementById("i").style.animation = " ease-in-out, fontdisappear 5s 0s";


        }, 2200);


    setTimeout(
        function changef() {
            document.getElementById("n").style.backgroundImage = "url(fonts/n.png)";
            document.getElementById("n").style.marginLeft = "5px";
            document.getElementById("n").style.marginTop = "-400px";
            document.getElementById("n").style.animation = "ease-in-out, fontdisappear 5s 0s";

        }, 2500);
    setTimeout(
        function changef() {
            document.getElementById("c").style.backgroundImage = "url(fonts/c.png)";
            document.getElementById("c").style.marginLeft = "10px";
            document.getElementById("c").style.marginTop = "-400px";
            document.getElementById("c").style.animation = "ease-in-out, fontdisappear 5s 0s";


        }, 3000);
    setTimeout(
        function changef() {
            document.getElementById("a").style.backgroundImage = "url(fonts/a.png)";
            document.getElementById("a").style.marginTop = "-400px";
            document.getElementById("a").style.animation = " ease-in-out, fontdisappear 5s 0s";

        }, 3200);
    setTimeout(
        function changef() {
            document.getElementById("n2").style.backgroundImage = "url(fonts/n.png)";
            document.getElementById("n2").style.marginTop = "-400px";
            document.getElementById("n2").style.animation = "ease-in-out, fontdisappear 5s 0s";

        }, 3300);
    setTimeout(
        function changef() {
            document.getElementById("d").style.backgroundImage = "url(fonts/d.png)";
            document.getElementById("d").style.marginTop = "-400px";
            document.getElementById("d").style.animation = " ease-in-out, fontdisappear 5s 0s";

        }, 4000);
    setTimeout(
        function changef() {
            document.getElementById("e").style.backgroundImage = "url(fonts/e.png)";
            document.getElementById("e").style.marginTop = "-400px";
            document.getElementById("e").style.animation = "ease-in-out, fontdisappear 5s 0s";

        }, 4400);
    setTimeout(
        function changef() {
            document.getElementById("s").style.backgroundImage = "url(fonts/s.png)";
            document.getElementById("s").style.marginTop = "-400px";
            document.getElementById("s").style.animation = " ease-in-out, fontdisappear 5s 0s";


        }, 5400);
    setTimeout(
        function changef() {
            document.getElementById("c2").style.backgroundImage = "url(fonts/c.png)";
            document.getElementById("c2").style.marginTop = "-400px";
            document.getElementById("c2").style.animation = "ease-in-out, fontdisappear 5s 0s";

        }, 5900);
    setTimeout(
        function changef() {
            document.getElementById("e2").style.backgroundImage = "url(fonts/e.png)";
            document.getElementById("e2").style.marginTop = "-400px";
            document.getElementById("e2").style.animation = " ease-in-out, fontdisappear 5s 0s";

        }, 6400);
    setTimeout(
        function changef() {
            document.getElementById("n3").style.backgroundImage = "url(fonts/n.png)";
            document.getElementById("n3").style.marginTop = "-400px";
            document.getElementById("n3").style.animation = "ease-in-out, fontdisappear 5s 0s";


        }, 6500);
    setTimeout(
        function changef() {
            document.getElementById("c3").style.backgroundImage = "url(fonts/c.png)";
            document.getElementById("c3").style.marginTop = "-400px";
            document.getElementById("c3").style.animation = " ease-in-out, fontdisappear 5s 0s";

        }, 6900);
    setTimeout(
        function changef() {
            document.getElementById("e3").style.backgroundImage = "url(fonts/e.png)";
            document.getElementById("e3").style.marginTop = "-400px";
            document.getElementById("e3").style.animation = "ease-in-out, fontdisappear 5s 0s";

        }, 7300);

    setTimeout(
        function showMenu() {
            menuAdjust = 1;
            adaptMenu();
        }, 8000);
}

function animateText() {
    hideText();

    var itext = document.createElement('div');
    itext.id = 'itext';
    itext.innerHTML = `
    <div id='incand'>

      <div id='idis'>
        <div id='irotate'>
          <div id='ic'>
            <div id='i'></div>
          </div>
        </div>
      </div>

      <div id='ndis'>
        <div id='nrotate'>
          <div id='nc'>
            <div id='n'></div>
          </div>
        </div>
      </div>

      <div id='cd'>
        <div id='cc'>
          <div id='c'></div>
        </div>
      </div>

      <div id='adis'>
        <div id='arotate'>
          <div id='ac'>
            <div id='a'></div>
          </div>
        </div>
      </div>

      <div id='n2dis'>
        <div id='n2c'>
          <div id='n2'></div>
        </div>
      </div>

      <div id='ddis'>
        <div id='dc'>
          <div id='d'></div>
        </div>
      </div>

      <div id='edis'>
        <div id='ec'>
          <div id='e'></div>
        </div>
      </div>

      <div id='sdis'>
        <div id='sc'>
          <div id='s'></div>
        </div>
      </div>

      <div id='c2dis'>
        <div id='c2c'>
          <div id='c2'></div>
        </div>
      </div>


      <div id='e2dis'>
        <div id='jump'>
          <div id='e2c'>
            <div id='e2'></div>
          </div>
        </div>
      </div>

      <div id='n3dis'>
        <div id='n3c'>
          <div id='n3'></div>
        </div>
      </div>

      <div id='c3dis'>
        <div id='c3c'>
          <div id='c3'></div>
        </div>
      </div>

      <div id='e3dis'>
        <div id='e3c'>
          <div id='e3'></div>
        </div>
      </div>

    </div>`;

    document.getElementsByTagName('body')[0].appendChild(itext).onload = fontChange();
}

function hideText() {
    var elem = document.getElementById('itext');
    if (elem != null) elem.remove();
}