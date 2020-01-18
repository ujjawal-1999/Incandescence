var $window = $(window);
var $elem = $(".example");
var $elem1 = $("#carousel-example-generic");
var $elem2 = $(".clown");

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
function change_name(myval){
  if(myval==="Whatthefood"){return "What The Food"}
  if(myval==="Promnight"){return "Prom Night"}
  if(myval==="Mrnits"){return "Mr NITS"}
  if(myval==="Nitsmun"){return "NITS MUN"}
  if(myval==="Theend"){return "The End"}
  else{return myval}
}
function showstuff(m,myval) {

    var vali=change_name(myval);
    $( ".carousel-inner" ).empty();
    $( ".carousel-indicators" ).empty();
    $('<h1>'+vali+'</h1>').appendTo('.carousel-inner');
    setTimeout(function(){for(var i=0 ; i< m.length ; i++) {
      string1="image/gallery/"+myval+"/"+m[i]+".jpg";
      $('<div class="carousel-item"><img id="myimg" src="'+string1+'" class="d-block fadein"></div>').appendTo('.carousel-inner');
      $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
    }
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel-example-generic').carousel();}, 1000);
    
}

function scrolleffect(x){
  if(x.matches){
    $(document).on("scroll", function () {
        if (isScrolledIntoView($elem, $window)) {
            $elem.removeClass("opa");
            $elem.addClass("enterleft");
            
        }
    });
  }
  else{
    $elem.removeClass("opa");
    $elem.addClass("enterleft");
  }
}

var $elem4 = $(".popuptext");
function changepop(x){
  if(x.matches){}
  else{
    $elem4.addClass("popuptext");
    $elem4.addClass("popuptext1");
  }
}

function rem(){
  $('.example:first').remove();
}

function testfn(move,id1,id2,id3,x) {
  var nwid1=change_name(id1);
  var nwid2=change_name(id2);
  var nwid3=change_name(id3);
  if(x.matches){ 
    if(move==="left"){ 
      $('<div class="example enterleft"><div class="clip"><div class="film eve" id="'+id1+'"><img src="image/gallery/'+id1+'.jpg"><span class="popuptext" id="popup'+id1+'">'+nwid1+'</span></div></div><div class="clip"><div class="film eve" id="'+id2+'"><img src="image/gallery/'+id2+'.jpg"><span class="popuptext" id="popup'+id2+'">'+nwid2+'</span></div></div><div class="clip"><div class="film eve" id="'+id3+'"><img src="image/gallery/'+id3+'.jpg"><span class="popuptext" id="popup'+id3+'">'+nwid3+'</span></div></div></div>').appendTo('.cover');
    }
    if(move==="right"){
      $('<div class="example enterright"><div class="clip"><div class="film eve" id="'+id1+'"><img src="image/gallery/'+id1+'.jpg"><span class="popuptext" id="popup'+id1+'">'+nwid1+'</span></div></div><div class="clip"><div class="film eve" id="'+id2+'"><img src="image/gallery/'+id2+'.jpg"><span class="popuptext" id="popup'+id2+'">'+nwid2+'</span></div></div><div class="clip"><div class="film eve" id="'+id3+'"><img src="image/gallery/'+id3+'.jpg"><span class="popuptext" id="popup'+id3+'">'+nwid3+'</span></div></div></div>').appendTo('.cover');
    }
    setTimeout(function(){rem();}, 900);
  }
  else{
    if(move==="left"){ 
      $('<div class="example enterleft"><div class="clip"><div class="film eve" id="'+id1+'"><img src="image/gallery/'+id1+'.jpg"><span class="popuptext1" id="popup'+id1+'">'+nwid1+'</span></div></div><div class="clip"><div class="film eve" id="'+id2+'"><img src="image/gallery/'+id2+'.jpg"><span class="popuptext1" id="popup'+id2+'">'+nwid2+'</span></div></div><div class="clip"><div class="film eve" id="'+id3+'"><img src="image/gallery/'+id3+'.jpg"><span class="popuptext1" id="popup'+id3+'">'+nwid3+'</span></div></div></div>').appendTo('.cover');
    }
    if(move==="right"){
      $('<div class="example enterright"><div class="clip"><div class="film eve" id="'+id1+'"><img src="image/gallery/'+id1+'.jpg"><span class="popuptext1" id="popup'+id1+'">'+nwid1+'</span></div></div><div class="clip"><div class="film eve" id="'+id2+'"><img src="image/gallery/'+id2+'.jpg"><span class="popuptext1" id="popup'+id2+'">'+nwid2+'</span></div></div><div class="clip"><div class="film eve" id="'+id3+'"><img src="image/gallery/'+id3+'.jpg"><span class="popuptext1" id="popup'+id3+'">'+nwid3+'</span></div></div></div>').appendTo('.cover');
    }
    setTimeout(function(){rem();}, 900);
  }
}


$(document).ready(function(){
  var values={
    "Carpediem": ["1","2","3","4","5","6","7","8"],
    "Deprador": ["1","2","3","4","5","6","7","8","9"],
    "Glitterati": ["1","2","3","4","5","6","7","8"],
    "Indie": ["1","2","3","4","5"],
    "Nirvana": ["1","2","3","4","5"],
    "Kavisanmillan":["1","2","3","4","5","6","7","8"],
    "Mrnits":["1","2","3","4","5","6","7"],
    "Nataraj":["1","2","3","4","5","6","7","8","9"],
    "Nitsmun":["1","2","3","4","5","6"],
    "Promnight":["1","2","3","4","5","6","7","8"],
    "Razzmatazz":["1","2","3","4","5","6","7"],
    "Sokratik":["1","2","3","4","5"],
    "Thundermarch":["1","2","3","4","5","6"],
    "Whatthefood":["1","2","3","4","5"],
    "Theend":["1"]
  }
  /*var events=["Nirvana","Glitterati","Thundermarch","Carpedieum","NITSMun"];
  for(var i=0;i<events.length;i++){
    val_list= get_images("images/"+events[i]);
    values[events[i]]=val_list;
  }*/
  
  showstuff(values["Carpediem"],"Carpediem");

  $('.cover').on('click', '.eve', function() {
    $('#carousel-example-generic').carousel('dispose');
    var myval = this.id;
    $('#carousel-example-generic')[0].scrollIntoView({ block: 'end',  behavior: 'smooth' },true);
    showstuff(values[myval],myval); 
  });

  var lclick=0, rclick=0;

  var x = window.matchMedia("(min-width: 1000px)");
  scrolleffect(x);
  x.addListener(scrolleffect);
  changepop(x);
  x.addListener(changepop);


  $("#left").click(function(){
    if(rclick==0) rclick=5;
    lclick=rclick-1;
    rclick=lclick;
    $(".example").removeClass("enterleft");
    $(".example").removeClass("enterright");
    $(".example").addClass("exitleft");
    if(lclick===0){
      setTimeout(
        function() 
        {
          testfn("left","Carpediem","Deprador","Glitterati",x)
          x.addListener(testfn)
        }, 100);
    }
    if(lclick===1){
      setTimeout(
        function() 
        {
          testfn("left","Indie","Nirvana","Kavisanmillan",x)
          x.addListener(testfn)
        }, 100);
    }
    if(lclick===2){
      setTimeout(
        function() 
        {
          testfn("left","Mrnits","Nataraj","Nitsmun",x)
          x.addListener(testfn)
        }, 100);
    }
    if(lclick===3){
      setTimeout(
        function() 
        {
          testfn("left","Promnight","Razzmatazz","Sokratik",x)
          x.addListener(testfn)
        }, 100);
    }
    if(lclick===4){
      setTimeout(
        function() 
        {
          testfn("left","Thundermarch","Whatthefood","Theend",x)
          x.addListener(testfn)
        }, 100);
    }

  }); 

  $("#right").click(function(){
    if(lclick===4) lclick=-1;
    rclick=lclick+1;
    lclick=rclick;
    $(".example").removeClass("enterright");
    $(".example").removeClass("enterleft");
    $(".example").addClass("exitright");
    if(rclick===0){
      setTimeout(
        function() 
        {
          testfn("right","Carpediem","Deprador","Glitterati",x)
          x.addListener(testfn)
        }, 100);
    }
    if(rclick===1){
      setTimeout(
        function() 
        {
          testfn("right","Indie","Nirvana","Kavisanmillan",x)
          x.addListener(testfn)
        }, 100);
    }
    if(rclick===2){
      setTimeout(
        function() 
        {
          testfn("right","Mrnits","Nataraj","Nitsmun",x)
          x.addListener(testfn)
        }, 100);
    }
    if(rclick===3){
      setTimeout(
        function() 
        {
          testfn("right","Promnight","Razzmatazz","Sokratik",x)
          x.addListener(testfn)
        }, 100);
    }
    if(rclick===4){
      setTimeout(
        function() 
        {
          testfn("right","Thundermarch","Whatthefood","Theend",x)
          x.addListener(testfn)
        }, 100);
    }


  }); 

 

    
});




$(document).on("mouseenter", "#Carpediem", function(e) {
    $(this).find("#popupCarpediem").addClass("show");
});

$(document).on("mouseleave", "#Carpediem", function(e) {
    $(this).find("#popupCarpediem").removeClass("show");
});
$(document).on("mouseenter", "#Deprador", function(e) {
    $(this).find("#popupDeprador").addClass("show");
});

$(document).on("mouseleave", "#Deprador", function(e) {
    $(this).find("#popupDeprador").removeClass("show");
});
$(document).on("mouseenter", "#Glitterati", function(e) {
    $(this).find("#popupGlitterati").addClass("show");
});

$(document).on("mouseleave", "#Glitterati", function(e) {
    $(this).find("#popupGlitterati").removeClass("show");
});
$(document).on("mouseenter", "#Nitsmun", function(e) {
    $(this).find("#popupNitsmun").addClass("show");
});

$(document).on("mouseleave", "#Nitsmun", function(e) {
    $(this).find("#popupNitsmun").removeClass("show");
});
$(document).on("mouseenter", "#Promnight", function(e) {
    $(this).find("#popupPromnight").addClass("show");
});

$(document).on("mouseleave", "#Promnight", function(e) {
    $(this).find("#popupPromnight").removeClass("show");
});
$(document).on("mouseenter", "#Mrnits", function(e) {
    $(this).find("#popupMrnits").addClass("show");
});

$(document).on("mouseleave", "#Mrnits", function(e) {
    $(this).find("#popupMrnits").removeClass("show");
});
$(document).on("mouseenter", "#Thundermarch", function(e) {
    $(this).find("#popupThundermarch").addClass("show");
});

$(document).on("mouseleave", "#Thundermarch", function(e) {
    $(this).find("#popupThundermarch").removeClass("show");
});

$(document).on("mouseenter", "#Whatthefood", function(e) {
    $(this).find("#popupWhatthefood").addClass("show");
});
$(document).on("mouseleave", "#Whatthefood", function(e) {
    $(this).find("#popupWhatthefood").removeClass("show");
});

$(document).on("mouseenter", "#Sokratik", function(e) {
    $(this).find("#popupSokratik").addClass("show");
});

$(document).on("mouseleave", "#Sokratik", function(e) {
    $(this).find("#popupSokratik").removeClass("show");
});
$(document).on("mouseenter", "#Nataraj", function(e) {
    $(this).find("#popupNataraj").addClass("show");
});

$(document).on("mouseleave", "#Nataraj", function(e) {
    $(this).find("#popupNataraj").removeClass("show");
});
$(document).on("mouseenter", "#Indie", function(e) {
    $(this).find("#popupIndie").addClass("show");
});

$(document).on("mouseleave", "#Indie", function(e) {
    $(this).find("#popupIndie").removeClass("show");
});
$(document).on("mouseenter", "#Razzmatazz", function(e) {
    $(this).find("#popupRazzmatazz").addClass("show");
});

$(document).on("mouseleave", "#Razzmatazz", function(e) {
    $(this).find("#popupRazzmatazz").removeClass("show");
});

$(document).on("mouseenter", "#Nirvana", function(e) {
    $(this).find("#popupNirvana").addClass("show");
});

$(document).on("mouseleave", "#Nirvana", function(e) {
    $(this).find("#popupNirvana").removeClass("show");
});

$(document).on("mouseenter", "#Kavisanmillan", function(e) {
    $(this).find("#popupKavisanmillan").addClass("show");
});

$(document).on("mouseleave", "#Kavisanmillan", function(e) {
    $(this).find("#popupKavisanmillan").removeClass("show");
});

