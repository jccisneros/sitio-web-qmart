$(window).scroll(function() {
  var link = $("#link-1, #link-2, #link-3, #link-4, #link-5, #link-6");
  if ($("#menu").offset().top > 56) {            
    $("#menu").addClass("bg-light");        
    $("#menu").removeClass("bg-trasparency");    
    link.addClass("color-nav-link2");                               
    link.removeClass("color-nav-link");
    $("#menu").removeClass("menu-shadow");            
    $("#img-menu").removeClass("logo-menu");
    $("#img-menu").addClass("logo-small");
  } else {    
    $("#menu").removeClass("bg-light");                 
    $("#menu").addClass("bg-trasparency");                
    link.removeClass("color-nav-link2");              
    link.addClass("color-nav-link");                               
    $("#menu").addClass("menu-shadow");
    $("#img-menu").removeClass("logo-small");
    $("#img-menu").addClass("logo-menu");
  }                     
});