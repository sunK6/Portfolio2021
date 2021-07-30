// 탐앤탐스 메인페이지 JS - main.js

// 제이쿼리 코드블록1 : 메인배너 ///////////////////////////////////////
$(function(){ // jQB1 ///////////////////////////////////////////////

    let chgVid = seq => {
        $(".vid_cover").fadeOut(300);
        $(".btn_play").fadeOut(300);

        let url='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fErdM4MjgBE?autoplay=1" allow="autoplay"></iframe>';

        if(seq) url='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TBP18nabm4Y?autoplay=1" allow="autoplay"></iframe>';
        

        $(".ifr").html(url);
    };//////// chgVid //////////


    $(".btn_play").click(function(){
        chgVid(0);
    }); ////////// click ///////////


    $(".vid-img a").click(function(e){
        e.preventDefault();

        let idx = $(this).parent().index();
        console.log(idx);

        chgVid(idx);
    });//////////// clcik ///////////

    // 1. 메인배너 기능구현 ////
    // 대상1: 슬라이드박스 .slide li
    var sld = $(".slide li");
    // 대상2: 블릿박스 .indic li
    var indic = $(".indic li");
    // 슬라이드 순번변수 (슬라이드 순번 === 블릿순번)
    var snum = 0;

    /*/////////////////////////////////////////////////////////// 
        함수명: goSlide
        기능: 슬라이드 이동 및 블릿변경
    *////////////////////////////////////////////////////////////
    // 할당형 익명함수!
    var goSlide = function(){
        // 1. 확인
        // console.log("슬라이드함수");

        // 2. 해당순번 li 슬라이드에 클래스 "on"넣기(나머지는 빼기)
        sld.eq(snum).addClass("on").siblings().removeClass("on");
        // eq() 메서드 - 컬렉션집합요소의 순번을 선택하는 메서드
        // eq(n) - n은 0부터 순서를 센다.
        // eq는 sequence라는 단어에서 온 것임
        

        // 3. 블릿 순번 이미지 변경하기 자스에선 setAttribute(속성명,값)
        indic.eq(snum) // 해당순번 블릿 li
        .find("img").attr("src","./asset/images/ico_pm_55_on.png")
        // find() 메서드 : 하위 자손요소 중 특정요소 찾기
        // attr(속성명,값) : 선택요소의 속성값 변경하기
        .parents("li").siblings() 
        //부모요소 중 li로 올라가서 다른형제 li를 선택
        // parent() 하나위 직계부모로 이동
        // parents(특정요소) 조상들 중 특정요소로 이동
        .find("img").attr("src","./asset/images/ico_pm_55_off.png");

       

    }; ////////////// goSlide함수 ///////////////////////////////
    /////////////////////////////////////////////////////////////

     // 광클금지상태변수(버튼클릭시 사용)
     let prot = 0;// 0-허용, 1-불허용

    // 1-1. 오른쪽 버튼 클릭시 다음배너 나오기
    // 대상: .rb
    $(".rb").click(function(){

        // 광클금지설정 /////////////////////
        if(prot) return;//값이 1이면 돌아가!
        prot = 1;//불허용
        setTimeout(() => {
            prot = 0;
        }, 800);
        // 0.8초후 허용! ///////////////////

        // 확인
        console.log("오른쪽이동!");

        // 자동실행 지우기!
        clearAuto();

        // 1. ★슬라이드 순번증가★ /////////////////////////////
        snum++;
        if(snum === sld.length) snum = 0;
        // 한계수체크: 슬라이드 개수와 같아지면 처음으로!
        console.log("슬라이드개수:"+sld.length);
        console.log("슬라이드번호:"+snum);
        
        // 2. 슬라이드 이동함수 호출!
        goSlide();
        

    });/////////// click /////////////////////////
    // 1-2. 왼쪽 버튼 클릭시 이전배너 나오기
    // 대상: .lb
    $(".lb").click(function(){

        // 광클금지설정 /////////////////////
        if(prot) return;//값이 1이면 돌아가!
        prot = 1;//불허용
        setTimeout(() => {
            prot = 0;
        }, 800);
        // 0.8초후 허용! ///////////////////

        // 확인
        console.log("왼쪽이동!");
        // 자동실행 지우기!
        clearAuto();

        // 1. ★슬라이드 순번감소★ /////////////////////////////
        snum--;
        if(snum === -1) snum = sld.length-1;//개수-1=마지막순번
        // 한계수체크: 슬라이드 마지막순번으로!
        console.log("슬라이드개수:"+sld.length);
        console.log("슬라이드번호:"+snum);

        // 2. 슬라이드 이동함수 호출!
        goSlide();
        

    });/////////// click /////////////////////////

    // 1-3. 블릿 li클릭시 해당순번의 슬라이드 변경 및 블릿변경하기
    // 대상: .indic li -> 변수 indic에 할당!
    indic.click(function(){
        
        // 광클금지설정 /////////////////////
        if(prot) return;//값이 1이면 돌아가!
        prot = 1;//불허용
        setTimeout(() => {
            prot = 0;
        }, 800);
        // 0.8초후 허용! ///////////////////

        // 자동실행 지우기!
        clearAuto();
        
        // 1. 클릭된 li순번 확인
        var idx = $(this).index();
        // index() 메서드 - 선택된 요소의 형제들 중 순번을 리턴함! 
        console.log("블릿li순번:"+idx);
        // 2. 클릭된 순번을 슬라이드 순번 변수 snum에 넣는다!
        snum = idx;
        // 3. 슬라이드 이동함수 호출!
        goSlide();
    }); ///////////// click ////////////////////


    // 인터발용 변수
    var autoI;
    /*/////////////////////////////////////////////////////// 
        함수명: autoSlide
        기능: 슬라이드 자동호출 셋팅
    *////////////////////////////////////////////////////////
    var autoSlide = function(){
        // 1. 확인
        // console.log("자동호출!");

        // 2. 인터발셋팅(3초간격)
        // 인터발함수는 변수에 넣어야 지울 수 있으므로 할당함!
        autoI = setInterval(function(){

            // 2-1. 기존snum 값 1씩증가
            snum++;

            // 2-2. 한계수 체크(다시 처음으로)
            if(snum===sld.length) snum = 0;

            // 2-3. 슬라이드 함수 호출!
            goSlide();

        },3000); ////// 인터발함수 /////////


    }; /////////// autoSlide함수 ///////////////////////////
    ////////////////////////////////////////////////////////

    // 최초 인터발실행함수 호출은 할당된 함수 아래에서 함!(중요!)
    autoSlide();



    // 타임아웃용 변수
    var autoT;
    /*/////////////////////////////////////////////////////// 
        함수명: clearAuto
        기능: 슬라이드 자동호출 인터발지우기
    *////////////////////////////////////////////////////////
    var clearAuto = function(){
        // 1. 확인
        console.log("인터발지우기!");

        // 2. 인터발지우기
        clearInterval(autoI);
        // clearInterval(인터발할당변수) - 인터발호출 멈추기!

        // 3. 실행쓰나미 방지를 위해 타임아웃 지우기!
        clearTimeout(autoT);

        // 3. 일정시간 후 다시 인터발호출하기
        // setTimeout의 실행쓰나미방지를 위해 변수에 할당함!
        // 실행전에 지워서 항상 마지막 하나만 남게해야한다!
        autoT = setTimeout(autoSlide,5000);//5초 후    


    }; /////////// clearAuto함수 ///////////////////////////
    ////////////////////////////////////////////////////////

    // .notic top값으로 인터발넣기
    let notic = $(".notic");
    setInterval(() => {
        notic.animate({top:"-100%"},600,function(){
            let first = notic.find("li").first();
            $(this).append(first).css({top:"0"});
        }); /////// animate /////////////////////
    }, 3000); ///////// 인터발 함수 //////////////////////////

    // .notic 에 y축으로 드래그
    notic.draggable({
        axis: "y"
    }); //////// draggable ////




});/////// jQB1 ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

$(function(){ ////////// jQB2 //////////////////////////////


    


}); ///////////////// jQB2 ////////////////////////////////////

