 $(document).ready(function(){
     $(".toggle-btn").click(function(){
       $(".nav-items").toggleClass("show");
     });
     
   });
   $(document).ready(function(){
   $(".headding-1").click(function(){
    $(".content-1").toggleClass("now");
  });
  $(".headding-2").click(function(){
    $(".content-2").toggleClass("now");
  });
  $(".headding-3").click(function(){
    $(".content-3").toggleClass("now");
  });
  });


  AOS.init();
  var swiper = new Swiper(".customSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
     
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

    }, 
        
  });


  $(document).ready(function(){
  $(".drop-down").click(function(){
    $(".dropdown-content").toggleClass("nowYourTime");
  });

  $(".dropdown-2").click(function(){
    $(".drop-content-2").toggleClass("nowTime");
  });
});