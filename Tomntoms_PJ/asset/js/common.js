$(function () { /////// jQB /////////////////////////////

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
        
        $(".mgnb_sub").slideToggle(400)
            .siblings().find(".mgnb_sub").slideUp(400);

    }); ///////////// click ///////////



}); ////////////// jQB /////////////////////////////////