function resizer() {
    var xsize = document.documentElement.clientWidth;
    var ysize = document.documentElement.clientHeight;

    var ferrisScaleX = Math.max(0.55,0.7*xsize/1368);
    var ferrisScaleY = Math.max(0.55,0.7*ysize/700);
    var ferrisScale = Math.min(ferrisScaleX, ferrisScaleY);
    var ferrisPosX = 1000*xsize/1368;
    var ferrisPosY = 320;
    var textScaleX = Math.max(0.1,xsize/1368);
    var textScaleY = Math.max(0.1,ysize/700);

    if(xsize > 1368) {
        document.getElementById('background').style.width = ''+xsize+'px';
        document.getElementById('cloud').style.width = ''+xsize+'px';
        document.getElementById('mountain').style.width = ''+xsize+'px';
    }
    if(ysize > 700) {
        document.getElementById('background').style.height = ''+ysize+'px';
        document.getElementById('mountain').style.height = ''+0.9*ysize+'px';
        document.getElementById('cloud').style.height = ''+0.5*ysize+'px';
        document.getElementById('mountain').style.top = ''+ysize*30/700+'px';
        document.getElementById('guitarguy').style.top = ''+ysize*385/700+'px';
        document.getElementById('musicControl').style.top = ''+ysize*450/700+'px';
        document.getElementById('fire').style.top = ''+ysize*280/700+'px';
        document.getElementById('tent1').style.top = ''+ysize*318/700+'px';
        document.getElementById('tent2').style.top = ''+ysize*338/700+'px';
        document.getElementById('plank').style.top = ''+ysize*328/700+'px';
        ferrisPosY = 320*ysize/700;
    }
    if(ysize < 640) document.getElementById('textContainer').style.top = '200px';
    if(ysize > 900) ferrisPosY += 50;

    if(xsize < 900) {
        document.getElementById('tent1').style.left = '108px';
        document.getElementById('tent2').style.left = '0px';
        document.getElementById('tent1').style.transform = 'scale(0.7,0.7)';
        document.getElementById('tent2').style.transform = 'scale(0.7,0.7)';
    }
    else{
        document.getElementById('tent1').style.left = '268px';
        document.getElementById('tent2').style.left = '378px';
        document.getElementById('tent1').style.transform = 'scale(1,1)';
        document.getElementById('tent2').style.transform = 'scale(1,1)';
    }
    if(xsize < 900) ferrisPosX -= 380;
    if(xsize < 900) ferrisPosX += (900-xsize)*(xsize/1368);
    for(let i=850; i>xsize; i-=25) ferrisPosX += 7;

    if(xsize > 1100 && xsize<1500)
    document.getElementById('plank').style.left = ''+1500*528/1368+'px';
    if(ysize > 700)
    document.getElementById('plank').style.top = ''+ysize*328/700+'px';

    if(xsize < 600) document.getElementById('plank').style.visibility='hidden';
    else document.getElementById('plank').style.visibility='visible';

    document.getElementById('ferris').style.transform='translate('+ferrisPosX+'px,'+ferrisPosY+'px) scale('+ferrisScale+','+ferrisScale+')';
    document.getElementById('incand').style.transform='scale('+textScaleX+','+textScaleY+')';
    document.getElementById('incand').style.left='5%';

};