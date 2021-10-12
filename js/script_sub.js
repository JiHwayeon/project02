

jQuery(document).ready(function($) {
    $('.loop').owlCarousel({
      center: true,
      items: 2,
      loop: true,
      margin: 30,
      responsive: {
        600: {
          items: 3
        }
      }
    });
    $('.nonloop').owlCarousel({
      center: true,
      items: 2,
      loop: false,
      margin: 30,
      responsive: {
        600: {
          items: 3
        }
      }
    });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      var swiper = new Swiper(".mySwiper01", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $(".open1").click(function(){
        //animate({css속성 : 값 }, 시간, 움직임방식, 콜백함수)
        //open1을 클릭하면 다음과 같은 일이 일어남
        //leftwrap 의 css속성중에 left값이 0
          $(".leftWrap").animate({"right":"0"},500,"swing");});
        
        $(".close1").click(function(){
          $(".leftWrap").animate({"right" : "-300px"}, 500);
        });



  });