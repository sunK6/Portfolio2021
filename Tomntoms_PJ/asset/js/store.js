// 탐앤탐스 서브 페이지 JS - sub.js

$(function () { // jQB ///////////////////////////////




    $(".menu-list").each(function (idx, ele) {
        // console.log("순번"+idx);
        $(ele).find("a")
            .prepend('<img src="images/1/event/' + (idx + 1) + '.jpg" alt="이벤트">');

    }); /////////// each /////////////////




    $(".page li").click(function(e){
        e.preventDefault();
        $(this).addClass("on").siblings().removeClass("on");
    });
    
  


}); ////////////// jQB ////////////////////////////