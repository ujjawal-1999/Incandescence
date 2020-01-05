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

function showstuff(m,myval) {
    $( ".carousel-inner" ).empty();
    $( ".carousel-indicators" ).empty();
    $('<h1>'+myval+'</h1>').appendTo('.carousel-inner');
    setTimeout(function(){for(var i=0 ; i< m.length ; i++) {
      string1="/image/"+myval+"/"+m[i]+".jpg"
      $('<div class="carousel-item"><img id="myimg" src="'+string1+'" class="d-block fadein"></div>').appendTo('.carousel-inner');
      $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
    }
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel-example-generic').carousel();}, 1000);
    
}

function rem(){
  $('.example:first').remove();
}

function testfn(move,id1,id2,id3) {
  if(move==="left"){ 
    $('<div class="example enterleft"><div class="clip"><div class="film eve" id="'+id1+'"><img src="images/'+id1+'.jpg"></div></div><div class="clip"><div class="film eve" id="'+id2+'"><img src="images/'+id2+'.jpg"></div></div><div class="clip"><div class="film eve" id="'+id3+'"><img src="images/'+id3+'.jpg"></div></div></div>').appendTo('.cover');
  }
  if(move==="right"){
    $('<div class="example enterright"><div class="clip"><div class="film eve" id="'+id1+'"><img src="images/'+id1+'.jpg"></div></div><div class="clip"><div class="film eve" id="'+id2+'"><img src="images/'+id2+'.jpg"></div></div><div class="clip"><div class="film eve" id="'+id3+'"><img src="images/'+id3+'.jpg"></div></div></div>').appendTo('.cover');
  }
  setTimeout(function(){rem();}, 900);
}


$(document).ready(function(){

  var values={
    "Nirvana": ["1","2","3"],
    "Glitterati": ["4","5","6"],
    "Thundermarch": ["7","8","9"],
    "Carpedieum": ["14","16","18"],
    "NITSMun": ["10","11","12"]
  }
  
  showstuff(values["Nirvana"],"Nirvana");

  $('.cover').on('click', '.eve', function() {
    var myval = this.id;
    showstuff(values[myval],myval); 
  });

  var lclick=0, rclick=0;

  $("#left").click(function(){
    lclick++;
    lclick%=2;
    $(".example").removeClass("enterleft");
    $(".example").removeClass("enterright");
    $(".example").addClass("exitleft");
    if(lclick===0){
      setTimeout(
        function() 
        {
          testfn("left","Nirvana","Glitterati","Thundermarch")
        }, 100);
    }
    if(lclick===1){
      setTimeout(
        function() 
        {
          testfn("left","NITSMun","Carpedieum","Nothing")
        }, 100);
    }

  }); 

  $("#right").click(function(){
    rclick++;
    rclick%=2;
    $(".example").removeClass("enterright");
    $(".example").removeClass("enterleft");
    $(".example").addClass("exitright");
    if(rclick===0){
      setTimeout(
        function() 
        {
          testfn("right","Nirvana","Glitterati","Thundermarch")
        }, 100);
    }
    if(rclick===1){
      setTimeout(
        function() 
        {
          testfn("right","NITSMun","Carpedieum","Nothing")
        }, 100);
    }

  }); 
  
    
});

$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.removeClass("opa");
        $elem.addClass("enterleft");
        
    }
});

$(document).on("scroll", function () {
    if (isScrolledIntoView($elem1, $window)) {
        $elem1.removeClass("opa");
        $elem1.addClass("fadein");
        $elem1.addClass("box");
        
    }
});

$(document).on("scroll", function () {
    if (isScrolledIntoView($elem2, $window)) {
        $elem2.removeClass("opa");
        $elem2.addClass("clownani");
        
    }
});



