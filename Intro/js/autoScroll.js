// 자동 스크롤 기능 - autoScroll_mobile.js

/// 모바일 여부 코드 ///
let mob = 0; //0-모바일 아님, 1-모바일
if($(window).width() < 800) mob = 1;
console.log("모바일여부:"+mob);

///// 전역변수구역 ///////////////////
// 현재 페이지 번호
let pno = 0;
// 전체 페이지 개수(상수로 변경불가!)
const totnum = 5;
// 광스크롤막기(0-허용,1-불허용)
let psts = 0;
/////////////////////////////////////

$(function () { /// jQB ////////////////////////


    /////////////// 자동스크롤 구현 ////////////////////
    // 사용메서드: on(이벤트명, 함수) 
    // -> 이벤트를 띄어쓰기로 여러개 쓰면 여러이벤트가 적용됨!
    $(document).on("mousewheel DOMMouseScroll",
        function (e) { //e-이벤트 전달변수

            // 모바일일때 기능막기
            if(mob) return;

            ////// 광스크롤막기 /////////////
            if (psts) return; //돌아가!
            psts = 1; //불허용상태변경!
            setTimeout(() => {
                psts = 0;
            }, 1200);
            // 1.2초애니시간후 허용상태변경 //


            // e.preventDefault();
            // document에 대한 기본기능 막기가 안되므로
            // 스크롤바를 안보이게 overflow:hidden 설정하여
            // 기본 스크롤이 안되도록 코딩하여 대체한다!


            //////////////////////////////
            // 1. 마우스휠 방향 알아내기!///
            //////////////////////////////

            // e변수로 들어오는 이벤트전달값으로 알아낸다!
            e = window.event || e;
            // 이벤트 전달값이 window오리저널 이벤트가 유효하면
            // 사용할 수 있도록 보완코드를 작성해야한다!
            // 변수 = 경우1 || 경우2;
            // 변수에 경우1과 경우2 중 true(유효한것)이 먼저할당됨!

            /* 
                [ 마우스휠 방향을 알아내기 위한 값 -> wheelDelta ]
                - 휠델타란? 마우스의 이벤트에 따라 발생하는
                    이벤트 횟수 및 방향, 이동거리 등의 정보를 제공함
                - ie, chrome 브라우저 공용
                - opera 브라우저는 detail을 사용함
            */
            let delta = e.detail ? e.detail : e.wheelDelta;
            // delta변수에 유효한 설정이 적용되어 할당된다!
            // 조건연산자(삼항연산자) -> 비?집:놀이동산;

            // console.log("휠델타정보:" + delta);
            // 방향 테스트 결과: 
            // 마이너스 -> 아랫쪽스크롤
            // 플러스 -> 윗쪽스크롤
            // 예외) 파이어폭스는 반대방향임!!!

            ///////////////////////////////////////////
            ///// 파이어폭스 일때 델타값 반대로 하기 /////
            // 방법:
            // JS의 내장함수 test() 를 사용하여
            // navigator.userAgent -> 현재 브라우저 정보를 읽어옴
            // "Firefox"라는 정보가 있으면 test() 에서 true리턴함
            // 그래서 if문 안으로 들어가서 처리함(반대부호처리!)

            // // console.log("브라우저정보:"+navigator.userAgent);
            // // console.log("정보여부:"+
            // (/Firefox/i.test(navigator.userAgent)));

            /* 
                [ test() 정규식 메서드 ]
                정규식.test(값) -> 값에 정규식 문자가 있으면 true

                [ 간단한 정규식 표현기호 ]
                1. 정규식 내용은 따옴표를 쓰지 않고 슬래쉬를 사용함
                2. 모든 패턴 문자열을 찾을때는 g라는 플래그문자를 씀
                3. 대소문자 구분없이 찾을때는 i라는 플래그문자를 씀
                예) /,/g 
                    -> 모든 콤마를 찾아라!
                    /firefox/i 
                    -> 대소문자 관계없이 "firefox"문자를 찾아라!
            */

            //// 파이어폭스 브라이우저 이면 델타값 부호를 반대로 한다!!!
            if (/Firefox/i.test(navigator.userAgent)) {
                delta = -delta; // 변수앞에 마이너스는 부호반대!
            } ///////// 파이어폭스여부 if문 /////////////


            //////////////////////////////////////////////
            // 2. 마우스휠 방향에 따라 페이지번호 증감하기!//
            //////////////////////////////////////////////

            if (delta < 0) { // -120 아랫방향 스크롤(다음페이지)
                pno++;
                if (pno === totnum) pno = totnum - 1;
                // 마지막페이지에 고정하기!
            } ////// if ///////////
            else { // 120 윗방향 스크롤(이전페이지)
                pno--;
                if (pno === -1) pno = 0;
                // 첫페이지에 고정하기!
            } /////// else ////////

            // console.log("페이지번호:" + pno);

            //////////////////////////////////////////////
            // 3. 이동할 페이지(.page)의 위치값 알아내기 ///
            //////////////////////////////////////////////

            // 방법: .page의 순서로 위치를 알아냄!
            // let pos = $(".page").eq(pno).offset().top;
            // offset().top 은 현재 선택요소의 top위치값

            ////////////////////////////////////////////////////
            // 새로운 페이지 위치값 : 윈도우 높이값 * 페이지순번 //
            let pos = $(window).height() * pno;
            ///////////////////////////////////////////////////

            // // console.log("이동위치:" + pos);

            //////////////////////////////////////////////
            // 4. 실제 이동위치로 스크롤 애니메이션 하기 ////
            //////////////////////////////////////////////

            $("html,body").stop().animate({
                scrollTop: pos + "px"
            }, 1200, "easeOutQuint");
            
            // 페이지 이동과 동시에 pageAction 호출! 등장액션
            pageAction();

            ///////////////////////////////////////////////
            // 5. 페이지번호(pno)에 맞는 GNB 메뉴 변경하기 //
            ///////////////////////////////////////////////
            // 변경대상: .gnb li, .indic li
            $(".gnb li").eq(pno).addClass("on")
                .siblings().removeClass("on");
            $(".indic li").eq(pno).addClass("on")
                .siblings().removeClass("on");
            // 선택된 li 이외의 li형제들 class="on"제거하기



        }); //////////// 자동스크롤 /////////////////////////
    ///////////////////////////////////////////////////


}); //////////////// jQB /////////////////////


function pageAction() {

    // 함수호출여부확인
    console.log("페이지액션!" + pno);

    // $('body').attr('class', '_curr_page' + pno);

    ////  페이지 글자등장하기 /////
    if (pno === 1) {

        // 글자를 순서대로 등장시킴
        // each() 메서드사용!
        $(".txts>li").each(function (idx, ele) {
            // idx - 순번, ele - 요소자신(this와 동일)
            // delay(순번*100) -> 시간이 0,100,200,...순으로 셋팅
            $(ele).delay(idx * 100)
                .animate({ //나타나면서 원래위치로!
                    top: "0",
                    left: "0",
                    opacity: "1"
                }, 600, "easeInExpo");


        }); ////////// each /////////////////

    } //////// if ///////////////////////


   


} ////////// pageAction 함수 ////////////////////////////
///////////////////////////////////////////////////////