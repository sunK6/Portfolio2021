// 탐앤탐스 메인페이지 JS - main.js

$(function(){
    $(".mtab li").click(function(){
        $(this).addClass("on")
        .siblings().removeClass("on");
    });
});