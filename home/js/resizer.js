function resizer() {
    
    // size of device screen
    var xsize = Math.max(document.documentElement.clientWidth ,window.innerWidth || 0);
    var ysize = Math.max(document.documentElement.clientHeight ,window.innerHeight || 0);

    // landscape
    if(xsize > ysize) {
        // alert(xsize+" landscape "+ysize);

        /* background */
        // width
        document.getElementById('background').style.width = ''+xsize+'px';
        document.getElementById('cloud').style.width = ''+xsize+'px';
        document.getElementById('mountain').style.width = ''+xsize+'px';

        // height
        document.getElementById('background').style.height = ''+ysize+'px';
        document.getElementById('mountain').style.height = ''+0.9*ysize+'px';
        document.getElementById('mountain').style.top = ''+ysize*20/685+'px';
        document.getElementById('cloud').style.height = ''+0.5*ysize+'px';
        
        // miscellanous
        document.getElementById('mountain').style.top = ''+ysize*20/685+'px';
        if(ysize < 700) document.getElementById('mountain').style.top = (730-ysize)*0.6+'px';


        /* ferrisWheel */
        // scaling
        var ferrisScaleX = Math.max(0.4,0.7*xsize/1368);
        var ferrisScaleY = Math.max(0.4,0.7*ysize/685);
        var ferrisScale = Math.min(ferrisScaleX, ferrisScaleY);
        
        // position
        var ferrisPosX = 900*xsize/1368;
        var ferrisPosY = 320*ysize/685;
        document.getElementById('ferris').style.transform='scale('+ferrisScale+','+ferrisScale+')';
        document.getElementById('ferris').style.top = ''+ferrisPosY+'px';
        document.getElementById('ferris').style.left = ''+ferrisPosX+'px';
        
        
        /* tents */
        document.getElementById('tent1').style.top = ''+ysize*318/685+'px';
        document.getElementById('tent2').style.top = ''+ysize*338/685+'px';

        if(xsize <1150) {
            document.getElementById('tent1').style.left = '108px';
            document.getElementById('tent2').style.left = '0px';
        }
        else if(xsize < 900) {
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


        /* Guitar Guy */
        // scaling
        if(xsize < 1200) {
            var guyScaleX = Math.max(0.5, xsize/1368);
            var guyScaleY = Math.max(0.4, ysize/685);
            document.getElementById('guitarguy').style.transform = 'scale('+guyScaleX+','+guyScaleY+')';
        }
        // position
        document.getElementById('guitarguy').style.top = ''+ysize*385/685+'px';
        document.getElementById('guitarguy').style.left = ''+ysize*110/1368+'px';

        
        /* Music Control */
        // position
        document.getElementById('musicControl').style.top = ''+ysize*450/685+'px';
        document.getElementById('musicControl').style.left = ''+xsize*50/1368+'px';

        
        /* FirePlace */
        // position
        document.getElementById('fire').style.top = ''+ysize*260/685+'px';
        document.getElementById('fire').style.left = ''+xsize*130/1368+'px';


        /* Wooden Plank */
        // scaling
        var plankScaleX = 1;
        var plankScaleY = Math.min(1,Math.max(0.4, ysize/685));
        document.getElementById('plank').style.transform = 'rotate(5deg) scale('+plankScaleX+','+plankScaleY+')';
        
        // position
        document.getElementById('plank').style.left = ''+ xsize*610/1368 +'px';
        document.getElementById('plank').style.top = ''+ysize*308/685+'px';

        // Visibility
        if(xsize < 600) document.getElementById('plank').style.visibility='hidden';
        else document.getElementById('plank').style.visibility='visible';

        adaptMenu();
    }
    else { // portrait
        
        // size of device screen
        var xsize = window.screen.width;
        var ysize = window.screen.height;
        // alert(xsize+" :mobile: "+ysize);


        /* background */
        // width
        document.getElementById('cloud').style.width = ''+xsize+'px';
        document.getElementById('background').style.width = ''+xsize+'px';
        document.getElementById('mountain').style.width = ''+xsize+'px';

        // height
        document.getElementById('background').style.height = ''+ysize+'px';
        document.getElementById('mountain').style.height = ''+0.9*ysize+'px';
        document.getElementById('cloud').style.height = ''+0.5*ysize+'px';

        // miscellanous
        document.getElementById('mountain').style.top = ''+ysize*20/685+'px';
        if(ysize < 700) document.getElementById('mountain').style.top = (730-ysize)*0.6+'px';


        /* ferrisWheel */

        document.getElementById('ferris').style.width = '200px';
        document.getElementById('ferris').style.height = '200px';
        // scaling
        var ferrisScaleX = Math.max(0.3,1.4*xsize/1368);
        var ferrisScaleY = Math.max(0.3,1.4*ysize/685);
        var ferrisScale = Math.min(ferrisScaleX, ferrisScaleY);
        
        // position
        var ferrisPosX = xsize*0.5;
        var ferrisPosY = ysize*0.6;
        document.getElementById('ferris').style.transform='scale('+ferrisScale+','+ferrisScale+')';
        document.getElementById('ferris').style.top = ''+ferrisPosY+'px';
        document.getElementById('ferris').style.left = ''+ferrisPosX+'px';
        

        /* tents */
        // scaling
        var tentScaleX = Math.max(0.4,2*xsize/1368);
        var tentScaleY = Math.max(0.4,2*ysize/685);
        var tentScale = Math.min(tentScaleX, tentScaleY);
        document.getElementById('tent1').style.top = ''+ysize*338/685+'px';
        document.getElementById('tent2').style.top = ''+ysize*358/685+'px';

        document.getElementById('tent1').style.left = '108px';
        document.getElementById('tent2').style.left = '0px';
        document.getElementById('tent1').style.transform = 'scale('+tentScale+','+tentScale+')';
        document.getElementById('tent2').style.transform = 'scale('+tentScale+','+tentScale+')';

        
        /* Wooden Plank */
        // scaling
        var plankScaleX = 1;
        var plankScaleY = Math.max(0.4, 0.6*ysize/685);
        document.getElementById('plank').style.transform = 'rotate(5deg) scale('+plankScaleX+','+plankScaleY+')';
        
        document.getElementById('plank').style.left = '0%';
        document.getElementById('plank').style.top = ''+0.37*ysize+'px';
        document.getElementById('plank').style.zIndex = '0';


        /* Guitar Guy */
        // scaling
        var guyScaleX = Math.max(0.4, xsize/600);
        var guyScaleY = Math.max(0.4, ysize/685);
        var guyScale = Math.min(guyScaleX, guyScaleY);
        document.getElementById('guitarguy').style.transform = 'scale('+guyScale+','+guyScale+')';
        // position
        document.getElementById('guitarguy').style.top = ''+0.7*ysize+'px';
        document.getElementById('guitarguy').style.left = '30%';

        
        /* Music Control */
        // scaling
        var musicControlScaleX = Math.max(0.5, xsize/1368);
        var musicControlScaleY = Math.max(0.5, ysize/685);
        var musicControlScale = Math.min(musicControlScaleX, musicControlScaleY);
        document.getElementById('musicControl').style.transform = 'scale('+musicControlScale+','+musicControlScale+')';
        // position
        document.getElementById('musicControl').style.top = ''+0.75*ysize+'px';
        document.getElementById('musicControl').style.left = '25%';

        
        /* FirePlace */
        // position
        document.getElementById('fire').style.top = ysize*0.7 - 120 +'px';
        document.getElementById('fire').style.left = '40%';
        //scaling
        var fireScaleX = Math.max(0.2, xsize/1368);
        var fireScaleY = Math.max(0.2, ysize/685);
        var fireScale = Math.min(fireScaleX, fireScaleY);
        document.getElementById('fire').style.transform = 'scale('+fireScale+','+fireScale+')';
    
        adaptMenu();
    }

};

window.addEventListener("resize", resizer);