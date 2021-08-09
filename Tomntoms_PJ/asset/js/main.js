// 탐앤탐스 메인페이지 JS - main.js

// 제이쿼리 코드블록1 : 메인배너 ///////////////////////////////////////
$(function () { // jQB1 ///////////////////////////////////////////////

  ////////////////////////////////////
  /////// 비디오 재생 ///////////////
  //////////////////////////////////
  
  let chgVid = seq => {
    $(".vid_cover").fadeOut(300);
    $(".btn_play").fadeOut(300);

    let url = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fErdM4MjgBE?autoplay=1" allow="autoplay"></iframe>';

    if (seq) url = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TBP18nabm4Y?autoplay=1" allow="autoplay"></iframe>';

    $(".ifr").html(url);

  }; //////// chgVid //////////


  $(".btn_play").click(function () {
    chgVid(0);
  }); ////////// click ///////////


  $(".vid-img a").click(function (e) {
    e.preventDefault();

    let idx = $(this).parent().index();
    console.log(idx);

    chgVid(idx);
  }); //////////// clcik ///////////



  ////////////////////////////////////////
  // 배너에 스와이퍼 플러그인 적용하기 ///
  ///////////////////////////////////////

  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      // disableOnInteraction 
      // - 건드린 후 멈춤 true / 다시 작동은 false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); //////// swiper ///////////////


  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      // disableOnInteraction 
      // - 건드린 후 멈춤 true / 다시 작동은 false
    },
  });



}); /////// jQB1 ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

$(function () { ////////// jQB2 //////////////////////////////

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



}); ///////////////// jQB2 ////////////////////////////////////