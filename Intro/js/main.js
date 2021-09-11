// 인트로 사이트 메인 JS - main.js


$(function () { // jQB ////////////////////////


    // 메뉴 a요소 기본이동 막기!
    $(".gnb a,.indic a").click(function (e) {
        e.preventDefault();
    }); ////////////// click /////////////////////

    // gnb메뉴 ★클릭★시 해당 페이지 위치로 이동 애니메이션
    // 이벤트대상: .gnb li + .indic li
    // 변경대상: html,body
    $(".gnb li,.indic li").click(function (e) {



        //////// 광스크롤막기 /////////////////
        if (psts) return; //돌아가!
        psts = 1; //불허용상태변경
        setTimeout(() => {
            psts = 0;
        }, 1200);
        // 1.2초 애니시간 후 허용상태변경! //



        // 0. 클릭된 li순번 구해오기
        let idx = $(this).index();
        console.log("순번:" + idx);


        // 1. 하위a요소의 href값알아오기
        let idnm = $("a", this).attr("href");
        console.log("href값" + idnm);

        // 2. 아이디값에 해당하위 top값 위치구하기
        // top값을 구해서 스크롤 애니메이션 이동에 사용함
        let pos = $(idnm).offset().top;
        // offset() 메서드: 요소의 기본 셋팅 정보를 리턴함
        // - top, left, width, height 등을 알수있다!
        console.log("위치값:" + pos);

        // 3. 스크롤 애니메이션으로 페이지 이동하기
        // 세로스크롤 이동속성: scrollTop
        // 참고: 가로스크롤 이동속성: scrollLeft
        // 스크롤 이동대상: html,body
        // -> 범용브라우저에서 사용하는 스크롤대상
        $("html,body").animate({
            scrollTop: pos + "px"
        }, 1200, "easeOutQuint"); //// animate ////

        // 4. 클릭된 li에 class="on"넣기
        $(".gnb li").eq(idx).addClass("on").siblings().removeClass("on");
        $(".indic li").eq(idx).addClass("on").siblings().removeClass("on");
        // 다른 형제 li들 class="on" 지움

        // 6. li 순번과 pno와 일치하기!
        // 전역변수 페이지번호(pno)와 gnb메뉴 li순번과 같다!
        pno = idx;
        console.log("페이지번호:" + pno);



        pageAction();

    }); //////// click //////////////////////////////

    ///////////// 모바일 메뉴 클릭시 전체메뉴 보이기 //////////////////////

    // 이벤트대상 : #ham
    // 변경대상 : #ham , .mgnb
    // 변경내용 : 햄버거 버튼에 class="on" 넣기/빼기 -> toggleClass()  
    // + 모바일 전체메뉴 fadeIn/fadeOut -> fadeToggle()
    $("#ham").click(function () {
        // 1. 클릭된 햄버거 버튼에 클래스 넣기/빼기
        $(this).toggleClass("on")
        // 2. 모바일 전체메뉴 서서히 보이기/숨기기
        $(".mgnb").fadeToggle(600);
    }); //// click /////
    $(".mgnb li").click(function(){
        $("#ham").removeClass("on");
        $(".mgnb").hide();
    }); ///click//

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

}); //////////// jQB /////////////////////////