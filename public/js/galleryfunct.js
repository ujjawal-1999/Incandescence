var $window = $(window);
var $elem = $(".example");
var $elem1 = $("#carousel-example-generic");
var $elem2 = $(".clown");

function get_images(folder){
  var names=[];
  $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    if(val.split('/').length - 1>2){
                        $("#hell").append(val);
                        names.push(val);
                    }
                } 
            });
        }
    });
}
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
      string1="image/"+myval+"/"+m[i]+".jpg"
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
    $('<div class="example enterleft"><div class="clip"><div class="film eve" id="'+id1+'"><img src="image/'+id1+'.jpg"></div></div><div class="clip"><div class="film eve" id="'+id2+'"><img src="image/'+id2+'.jpg"></div></div><div class="clip"><div class="film eve" id="'+id3+'"><img src="image/'+id3+'.jpg"></div></div></div>').appendTo('.cover');
  }
  if(move==="right"){
    $('<div class="example enterright"><div class="clip"><div class="film eve" id="'+id1+'"><img src="image/'+id1+'.jpg"></div></div><div class="clip"><div class="film eve" id="'+id2+'"><img src="image/'+id2+'.jpg"></div></div><div class="clip"><div class="film eve" id="'+id3+'"><img src="image/'+id3+'.jpg"></div></div></div>').appendTo('.cover');
  }
  setTimeout(function(){rem();}, 900);
}


$(document).ready(function(){
  var values={
    "carpediem": ["1","2","3"],
    "deprador": ["1","2","3"],
    "glitterati": ["1","2","3"],
    "Indie": ["1","2","3"],
    "intro+history": ["1"],
    "kavisanmilla":["1","2","3"],
    "mr nits":["1"],
    "nataraj":["1","2","3"],
    "nits mun":["1","2"],
    "prom night":["1","2"],
    "razzmatazz":["1","2"],
    "sokratik":["1","2"],
    "thundermarch":["1","2","3"],
    "what the food":["1"]
  }
  /*var events=["Nirvana","Glitterati","Thundermarch","Carpedieum","NITSMun"];
  for(var i=0;i<events.length;i++){
    val_list= get_images("images/"+events[i]);
    values[events[i]]=val_list;
  }*/
  
  showstuff(values["carpediem"],"carpediem");

  $('.cover').on('click', '.eve', function() {
    var myval = this.id;
    showstuff(values[myval],myval); 
  });

  var lclick=0, rclick=0;

  $("#left").click(function(){
    lclick++;
    lclick%=5;
    $(".example").removeClass("enterleft");
    $(".example").removeClass("enterright");
    $(".example").addClass("exitleft");
    if(lclick===0){
      setTimeout(
        function() 
        {
          testfn("left","carpediem","deprador","glitterati")
        }, 100);
    }
    if(lclick===1){
      setTimeout(
        function() 
        {
          testfn("left","Indie","intro+history","kavisanmillan")
        }, 100);
    }
    if(lclick===2){
      setTimeout(
        function() 
        {
          testfn("left","mr nits","nataraj","nits mun")
        }, 100);
    }
    if(lclick===3){
      setTimeout(
        function() 
        {
          testfn("left","prom night","razzmatazz","sokratik")
        }, 100);
    }
    if(lclick===4){
      setTimeout(
        function() 
        {
          testfn("left","thundermarch","what the food","")
        }, 100);
    }

  }); 

  $("#right").click(function(){
    rclick++;
    rclick%=5;
    $(".example").removeClass("enterright");
    $(".example").removeClass("enterleft");
    $(".example").addClass("exitright");
    if(rclick===0){
      setTimeout(
        function() 
        {
          testfn("right","carpediem","deprador","glitterati")
        }, 100);
    }
    if(rclick===1){
      setTimeout(
        function() 
        {
          testfn("right","indie","intro+history","kavisanmillan")
        }, 100);
    }
    if(rclick===2){
      setTimeout(
        function() 
        {
          testfn("right","mr nits","nataraj","nits mun")
        }, 100);
    }
    if(rclick===3){
      setTimeout(
        function() 
        {
          testfn("right","prom night","razzmatazz","sokratik")
        }, 100);
    }
    if(rclick===4){
      setTimeout(
        function() 
        {
          testfn("right","thundermarch","what the food","")
        }, 100);
    }


  }); 

  var folder = "images/";

  $.ajax({
      url : folder,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                  $("#fileNames").append( "<img src='"+ folder + val +"'>" );
              } 
          });
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



