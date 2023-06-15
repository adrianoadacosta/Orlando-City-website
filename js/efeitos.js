$(document).ready(function(){

    $("#input-search").on("focus",function(){
       $("li.search").addClass("ativo");
    }).on("blur",function(){
      $("li.search").removeClass("ativo");
    });

      $(".thumbnails").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        nav: true,
        navText: ["Anterior", "Próximo"],
        responsive:{
          0:{
            items: 1
          },
          480:{
            items: 3
          },
          1000:{
            items: 4
          },
       },
     });
  });


