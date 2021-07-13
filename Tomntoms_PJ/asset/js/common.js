

$(function(){ /////// jQB /////////////////////////////

    // .gnb>li 마우스 오버시 fadeIn/fadeOut
    $(".gnb>li").hover(
        function(){ // over
            $(".gnb_sub",this).stop().fadeIn(200);
        },
        function(){ // out
            $(".gnb_sub",this).stop().fadeOut(200);
        }); //////// hover ///////////

}); ////////////// jQB /////////////////////////////////