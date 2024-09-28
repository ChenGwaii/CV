var s = skrollr.init()
$(window).scroll(function(evt){
  if($(window).scrollTop()>0){
    $(".nav").addClass("color")
  }else{
    $(".nav").removeClass("color")
  }
})


// $(".left").hover(function(evt){
//   if($(".left").hover()){
//     $(".container").addClass("kk")}else{
//     $(".container").removeClass("kk")
//   }
// })

//LeftHover

$(".left").hover(function(){
  $("img.mid").css("opacity","0.3");
  }, function(){
  $("img.mid").css("opacity","1");
});

$(".left").hover(function(){
  $("img.right").css("opacity","0.3");
  }, function(){
  $("img.right").css("opacity","1");
});



$(".left").hover(function(){
  $(".left").css("cursor", "pointer");
  }, function(){
  $(".left").css("cursor", "pointer");
});

$(".left").hover(function(){
  $("img.left").css("border", "6px solid #3B529F");
  }, function(){
  $("img.left").css("border", "6px solid #E5E0D7");
});

$(".left").hover(function(){
  $(".blue1").css("background-color", "#3B529F");
  }, function(){
  $(".blue1").css("background-color", "#E5E0D7");
});

$(".left").hover(function(){
  $(".textLeft").css("display", "block");
  }, function(){
  $(".textLeft").css("display", "none");
});
$(".left").click(function(){
  $("section#kkf").css("display", "block");
});



//MidHover


$(".mid").hover(function(){
  $("img.left").css("opacity","0.3");
  }, function(){
  $("img.left").css("opacity","1");
});

$(".mid").hover(function(){
  $("img.right").css("opacity","0.3");
  }, function(){
  $("img.right").css("opacity","1");
});

$(".mid").hover(function(){
  $(".mid").css("cursor", "pointer");
  }, function(){
  $(".mid").css("cursor", "pointer");
});

$(".mid").hover(function(){
  $("img.mid").css("border", "6px solid #3B529F");
  }, function(){
  $("img.mid").css("border", "6px solid #E5E0D7");
});

$(".mid").hover(function(){
  $(".blue2").css("background-color", "#3B529F");
  }, function(){
  $(".blue2").css("background-color", "#E5E0D7");
});

$(".mid").hover(function(){
  $(".textMid").css("display", "block");
  }, function(){
  $(".textMid").css("display", "none");
});
$(".mid").click(function(){
  $("section#watson").css("display", "block");
});



//RightHover


$(".right").hover(function(){
  $("img.mid").css("opacity","0.3");
  }, function(){
  $("img.mid").css("opacity","1");
});

$(".right").hover(function(){
  $("img.left").css("opacity","0.3");
  }, function(){
  $("img.left").css("opacity","1");
});

$(".right").hover(function(){
  $(".right").css("cursor", "pointer");
  }, function(){
  $(".right").css("cursor", "pointer");
});

$(".right").hover(function(){
  $("img.right").css("border", "6px solid #3B529F");
  }, function(){
  $("img.right").css("border", "6px solid #E5E0D7");
});

$(".right").hover(function(){
  $(".blue3").css("background-color", "#3B529F");
  }, function(){
  $(".blue3").css("background-color", "#E5E0D7");
});

$(".right").hover(function(){
  $(".textRight").css("display", "block");
  }, function(){
  $(".textRight").css("display", "none");
});

$(".right").click(function(){
  $("section#charlie").css("display", "block");
});



// ////////////
// $(".topLine").click(function(){
//   $("section#kkf").css("display", "none");
//   $("section#watson").css("display", "none");
//   $("section#charlie").css("display", "none");
// });




// $( ".left" ).hover(
//   function() {
//     $( this ).addClass( "hover" );
//   }, function() {
//     $( this ).removeClass( "hover" );
//   }
// );




//LLeftHover

$(".lleft").click(function(){
  $("img.mmid").css("transform", "translateX(-100%)");
  $("img.rright").css("transform", "translateX(-100%)");
  $("img.lleft").css("transform", "translateX(-100%)");
  $("h3.lf").css("display", "none");
  $("h3.md").css("display", "block");
  $("h3.rt").css("display", "none");
  $(".tx.a").css("display", "none");
  $(".tx.b").css("display", "block");
  $(".tx.c").css("display", "none");
});


$(".lleft").hover(function(){
  $(".lleft").css("cursor", "pointer");
  }, function(){
  $(".lleft").css("cursor", "pointer");
});

$(".lleft").hover(function(){
  $("img.lleft").css("border", "8px solid #3B529F");
  }, function(){
  $("img.lleft").css("border", "8px solid #E5E0D7");
});

$(".lleft").hover(function(){
  $(".blue11").css("background-color", "#3B529F");
  }, function(){
  $(".blue11").css("background-color", "#E5E0D7");
});

$(".lleft").hover(function(){
  $(".dot.a").css("background-color", "#3B529F");
  }, function(){
  $(".dot.a").css("background-color", "#E5E0D7");
});



$(".lleft").hover(function(){
  $(".textLLeft").css("display", "block");
  }, function(){
  $(".textLLeft").css("display", "none");
});
// $(".left").click(function(){
//   $("section#kkf").css("display", "block");
// });



//MidHover


$(".mmid").click(function(){
  $("img.mmid").css("transform", "translateX(-200%)");
  $("img.rright").css("transform", "translateX(-200%)");
  $("img.lleft").css("transform", "translateX(-200%)");
  $("h3.lf").css("display", "none");
  $("h3.md").css("display", "none");
  $("h3.rt").css("display", "block");
  $(".tx.a").css("display", "none");
  $(".tx.b").css("display", "none");
  $(".tx.c").css("display", "block");
});

$(".mmid").hover(function(){
  $(".mmid").css("cursor", "pointer");
  }, function(){
  $(".mmid").css("cursor", "pointer");
});

$(".mmid").hover(function(){
  $("img.mmid").css("border", "8px solid #3B529F");
  }, function(){
  $("img.mmid").css("border", "8px solid #E5E0D7");
});

$(".mmid").hover(function(){
  $(".blue22").css("background-color", "#3B529F");
  }, function(){
  $(".blue22").css("background-color", "#E5E0D7");
});

$(".mmid").hover(function(){
  $(".dot.b").css("background-color", "#3B529F");
  }, function(){
  $(".dot.b").css("background-color", "#E5E0D7");
});

$(".mmid").hover(function(){
  $(".textMMid").css("display", "block");
  }, function(){
  $(".textMMid").css("display", "none");
});
$(".mmid").click(function(){
  $("section#watson").css("display", "block");
});



//RightHover


$(".rright").click(function(){
  $("img.mmid").css("transform", "translateX(0%)");
  $("img.rright").css("transform", "translateX(0%)");
  $("img.lleft").css("transform", "translateX(0%)");
  $("h3.lf").css("display", "block");
  $("h3.md").css("display", "none");
  $("h3.rt").css("display", "none");
  $(".tx.a").css("display", "block");
  $(".tx.b").css("display", "none");
  $(".tx.c").css("display", "none");
});


$(".rright").hover(function(){
  $(".rright").css("cursor", "pointer");
  }, function(){
  $(".rright").css("cursor", "pointer");
});

$(".rright").hover(function(){
  $("img.rright").css("border", "8px solid #3B529F");
  }, function(){
  $("img.rright").css("border", "8px solid #E5E0D7");
});

$(".rright").hover(function(){
  $(".blue33").css("background-color", "#3B529F");
  }, function(){
  $(".blue33").css("background-color", "#E5E0D7");
});

$(".rright").hover(function(){
  $(".dot.c").css("background-color", "#3B529F");
  }, function(){
  $(".dot.c").css("background-color", "#E5E0D7");
});

$(".rright").hover(function(){
  $(".textRRight").css("display", "block");
  }, function(){
  $(".textRRight").css("display", "none");
});

$(".rright").click(function(){
  $("section#charlie").css("display", "block");
});



//nav

$(".nav.nav-pills").hover(function(){
  $(".dropmenu").css("display", "block");
  }, function(){
  $(".dropmenu").css("display", "none");
});