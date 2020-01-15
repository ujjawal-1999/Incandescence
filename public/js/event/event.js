// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");
var modal11 = document.getElementById("myModal11");
var modal12 = document.getElementById("myModal12");
var modal13 = document.getElementById("myModal13");
var modal14 = document.getElementById("myModal14");
var modal15 = document.getElementById("myModal15");
var modal16 = document.getElementById("myModal16");
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");
var btn10 = document.getElementById("myBtn10");
var btn11 = document.getElementById("myBtn11");
var btn12 = document.getElementById("myBtn12");
var btn13 = document.getElementById("myBtn13");
var btn14 = document.getElementById("myBtn14");
var btn15 = document.getElementById("myBtn15");
var btn16 = document.getElementById("myBtn16");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6");
var span7 = document.getElementById("close7");
var span8 = document.getElementById("close8");
var span9 = document.getElementById("close9");
var span10 = document.getElementById("close10");
var span11 = document.getElementById("close11");
var span12 = document.getElementById("close12");
var span13 = document.getElementById("close13");
var span14 = document.getElementById("close14");
var span15 = document.getElementById("close15");
var span16 = document.getElementById("close16");


// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
    modal6.style.display = "block";
}
btn7.onclick = function() {
    modal7.style.display = "block";
}
btn8.onclick = function() {
    modal8.style.display = "block";
}
btn9.onclick = function() {
    modal9.style.display = "block";
}
btn10.onclick = function() {
    modal10.style.display = "block";
}
btn11.onclick = function() {
    modal11.style.display = "block";
}
btn12.onclick = function() {
    modal12.style.display = "block";
}
btn13.onclick = function() {
    modal13.style.display = "block";
}
btn14.onclick = function() {
    modal14.style.display = "block";
}
btn15.onclick = function() {
    modal15.style.display = "block";
}
btn16.onclick = function() {
    modal16.style.display = "block";
}



//when user clicks x, close the module
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}
span6.onclick = function() {
    modal6.style.display = "none";
}
span7.onclick = function() {
    modal7.style.display = "none";
}
span8.onclick = function() {
    modal8.style.display = "none";
}
span9.onclick = function() {
    modal9.style.display = "none";
}
span10.onclick = function() {
    modal10.style.display = "none";
}
span11.onclick = function() {
    modal11.style.display = "none";
}
span12.onclick = function() {
    modal12.style.display = "none";
}
span13.onclick = function() {
    modal13.style.display = "none";
}
span14.onclick = function() {
    modal14.style.display = "none";
}
span15.onclick = function() {
    modal15.style.display = "none";
}
span16.onclick = function() {
    modal16.style.display = "none";
}

// modal background
AOS.init({
    offset: 120,
    duration: 800
});

function background() {
    var w = window.innerWidth,
        h = window.innerHeight,
        canvas = document.getElementById('bubble'),
        ctx = canvas.getContext('2d'),
        rate = 60,
        arc = 100,
        time,
        count,
        size = 7,
        speed = 20,
        lights = new Array,
        colors = ['#d59254', '#ffffff', '#1f2839', '#cf7693'];

    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);

    function init() {
        time = 0;
        count = 0;

        for (var i = 0; i < arc; i++) {
            lights[i] = {
                x: Math.ceil(Math.random() * w),
                y: Math.ceil(Math.random() * h),
                toX: Math.random() * 5 + 1,
                toY: Math.random() * 5 + 1,
                c: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * size
            }
        }
    }

    function bubble() {
        ctx.clearRect(0, 0, w, h);

        for (var i = 0; i < arc; i++) {
            var li = lights[i];

            ctx.beginPath();
            ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
            ctx.fillStyle = li.c;
            ctx.fill();

            li.x = li.x + li.toX * (time * 0.05);
            li.y = li.y + li.toY * (time * 0.05);

            if (li.x > w) {
                li.x = 0;
            }
            if (li.y > h) {
                li.y = 0;
            }
            if (li.x < 0) {
                li.x = w;
            }
            if (li.y < 0) {
                li.y = h;
            }
        }
        if (time < speed) {
            time++;
        }
        timerID = setTimeout(bubble, 1000 / rate);
    }
    init();
    bubble();

    var animation = 'easeOutCubic';
    delay = 60;

    $(document).on('click', '.button', function() {
        var i = 0;
        $('#bubble').fadeIn();

    });

    $(document).on('click', '.close', function() {
        var i = 0;
        $('#bubble').fadeOut();
    });
}