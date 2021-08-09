$(function () { /////// jQB /////////////////////////////
    // scroll
    function scrollHeader(){
        var sct = $(window).scrollTop(); 

        if(sct == 0){
            $('body').removeClass('header--on');
        }else{
            $('body').addClass('header--on');
        }

        $(window).on('scroll', function(){
            var sct = $(window).scrollTop();
            // 조건문
            // 현재 스크롤 위치가 0 일때 바디에 클래스 제거
            // 현재 스크롤 위치가 0 보다 크면 클래스 추가

            if(sct == 0){
                $('body').removeClass('header--on');
            }else{
                $('body').addClass('header--on');
            }
        });
    }
    scrollHeader();


    // .gnb>li 마우스 오버시 fadeIn/fadeOut
    $(".gnb>li").hover(
        function () { // over
            $(".gnb_sub", this).stop().fadeIn(200);
        },
        function () { // out
            $(".gnb_sub", this).stop().fadeOut(200);
        }); //////// hover ///////////

    // .hamb 클릭시 .mobx와 .nav_bg에 class="on" 넣기, 
    //              body에 overflowY:"hidden"
    $(".hamb").click(function () {
        $(".mobx").addClass("on");
        $(".nav_bg").addClass("on");
        $("body").css({
            overflowY: "hidden"
        });
    }); ////////// click ///////////////

    // .close클릭시 .mobx/.nav_bg class="on"빼기,
    //              body에 overflowY:"auto"
    $(".close").click(function () {
        $(".mobx").removeClass("on");
        $(".nav_bg").removeClass("on");
        $("body").css({
            overflowY: "auto"
        });
    }); //////// click ////////////

    // 서브메뉴전체 숨기기  //
    $(".mgnb_sub").hide();

   
    // 상위 메뉴(.mgnb li) 클릭 시 하위메뉴 보이기(slideDown) //
    $(".mgnb li").click(function () {


        ///// slideDown상태이면 css변경
        if ($(".mgnb_sub", this).css("display") === "none") {
          $(this).css({
               backgroundColor: "#572a31"
           });
           $(this).children("a").css({
               color: "#fff"
           });
       } /////////  if  //////////////
       // 안보일때(slideUp상태일때)
       else { 
            // css지우기
           $(this).attr("style", "");
           $(this).children("a").attr("style", "");
           
       } ////////// else /////////////

   $(".mgnb_sub", this).slideToggle(400)
       // 부모로 올라가서 li다른 형제들
       .parent().siblings()
       // 속성에서 style지우고
       .attr("style", "")
       // 하위의 서브메뉴 접고
       .find(".mgnb_sub").slideUp(400)
       // 전에 있는 형제 a요소의 style 지운다!
       .prev().attr("style", "");


}); ///////////// click ///////////


}); ////////////// jQB /////////////////////////////////