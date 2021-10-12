$(".open1").click(function(){
    //animate({css속성 : 값 }, 시간, 움직임방식, 콜백함수)
    //open1을 클릭하면 다음과 같은 일이 일어남
    //leftwrap 의 css속성중에 left값이 0
      $(".leftWrap").animate({"right":"0"},500,"swing");});
    
    $(".close1").click(function(){
      $(".leftWrap").animate({"right" : "-300px"}, 500);
    });

    $num = $('.my-card').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;
    
    if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
    } else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
    }
    
    $('.my-card').click(function() {
    $slide = $('.active').width();
    console.log($('.active').position().left);
    
    if ($(this).hasClass('next')) {
      $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
    } else if ($(this).hasClass('prev')) {
      $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
    }
    
    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');
    
    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
    });
    
    
    // Keyboard nav
    $('html body').keydown(function(e) {
    if (e.keyCode == 37) { // left
      $('.active').prev().trigger('click');
    }
    else if (e.keyCode == 39) { // right
      $('.active').next().trigger('click');
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
      var swiper = new Swiper(".mySwiper02", {
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
  
      $('ul.tabs > li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs > li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

    const tabList = document.querySelectorAll('.tab_menu .list li');
    
    for(var i = 0; i < tabList.length; i++){
      tabList[i].querySelector('.btn').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < tabList.length; j++){
          tabList[j].classList.remove('is_on');
        }
        this.parentNode.classList.add('is_on');
      });
    }  