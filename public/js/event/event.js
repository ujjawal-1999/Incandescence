// Get the modal
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var modal = new Array();
var btn = new Array();
var span = new Array();
for (let i = 1; i <= 16; i++) {
    modal.push(document.getElementById("myModal" + i));
    btn.push(document.getElementById("myBtn" + i));
    span.push(document.getElementById("close" + i));
    btn[i - 1].onclick = function() {
        $('.container').attr('data-aos', '#');
        modal[i - 1].classList.add("animateToCenter");
        modal[i - 1].style.display = "block";
    }
    span[i - 1].onclick = function() {
        modal[i - 1].classList.remove("animateToCenter");
        modal[i - 1].style.display = "none";
        var x = document.querySelectorAll(".time .container");
        console.log(x.length);
        for (let j = 1; j <= 16; j++) {
            if (j % 2 == 1) {
                x[j - 1].setAttribute('data-aos', 'fade-right');
            } else {
                x[j - 1].setAttribute('data-aos', 'fade-left');
            }
        }
    }
}


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