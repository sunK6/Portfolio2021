// 탐앤탐스 서브 페이지 JS - sub.js




$(function () { // jQB ///////////////////////////////

    $(".menusec ol li").click(function(e){
        e.preventDefault();
        $(this).addClass("on").siblings().removeClass("on");
    }); //////// click //////////

}); ////////////// jQB ////////////////////////////