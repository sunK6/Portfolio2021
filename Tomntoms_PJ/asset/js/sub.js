// 탐앤탐스 서브 페이지 JS - sub.js

///// 각 서브별 데이터 셋팅하기 /////
let sinfo = {
    "menu": {
        "제목": "MENU",
        // "메뉴": ["전체", "트렌드", "아이템", "피플", "화보"],
        "경로": "menu"
        
    },
    "EVENT": {
        "제목": "EVENT",
        // "메뉴": ["전체", "트렌드", "아이템", "헬스", "피플"],
        "경로": "EVENT"
        
    },
    "store": {
        "제목": "STORE",
        // "메뉴": ["전체", "여행", "음식", "문화", "인테리어", "키즈", "테크"],
        "경로": "store"
    },
    "service": {
        "제목": "SERVICE",
        // "메뉴": "없음",
        "경로": "service"
    },
    "community": {
        "제목": "COMMUNITY",
        // "메뉴": "없음",
        "경로": "community"
    },
    "tom n toms": {
        "제목": "TOM N TOMS",
        // "메뉴": "없음",
        "경로": "tom n toms"
    }
}; ////////// sinfo ////////////////

let smenu = {
    "푸드":
    [{"ktit":'스크램블 에그 샌드위치<span class="new">NEW</span>',"etit":"scrambled egg sandwich"},
    {"ktit":'스크램블 에그 프렌치 토스트<span class="new">NEW</span>',"etit":"Scrambled Egg French Toast"},
    {"ktit":'플레인 크로플<span class="new">NEW</span>',"etit":"Plain Croiffle"},
    {"ktit":'아이스크림 크로플<span class="new">NEW</span>',"etit":"Ice cream croiffle"},
    {"ktit":'다크초코 크로플<span class="new">NEW</span>',"etit":"Dark Chocolate Croiffle"},
    {"ktit":'블루베리 크림치즈 크로플<span class="new">NEW</span>',"etit":"Blueberry Cream Cheese Croiffle"},
    {"ktit":'딸기 크림치즈 크로플<span class="new">NEW</span>',"etit":"Strawberry Cream Cheese Croiffle"},
    {"ktit":'트로피칼 샤베트 빙수',"etit":"Tropical Sherbet ice flakes"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"},
    {"ktit":'블루파인 샤베트<span class="new">NEW</span>',"etit":"Blue fine Sherbet"}],

    "음료":[]
};//////////// smenu /////////////



// Get방식으로 넘어온 값 받기! //////////////////////
let pm = location.href;

if (pm.indexOf("?") === -1) {
    location.href = "index.html"; //첫페이지로 돌아가!
} ///////////////////// if //////////////////////////

// 물음표와 이퀄로 잘라서 값만 가져온다!
pm = pm.split("?")[1].split("=")[1];

console.log(pm);

// URL 주소 정보 변경하여 감추기!!! ////
// history.pushState(데이터,타이틀,URL)
// -> 이미 호출된 URL주소를 변경해 주는 JS메서드
// - 전달값인 데이터나 타이틀이 없는 경우 null(빈값)로 넘긴다
// - 세번째 전달값에 원하는 페이지이름을 써준다!
// - 실제로 변경된 URL로 이동하지는 않고 URL표시만 변경함!
// - URL을 사용자들에게 숨기는 목적으로 사용함!
// - URL 사용시 /(슬래쉬)를 사용한 경로를 쓰면 안됨!    

history.pushState(null, null, pm);


$(function () { // jQB ///////////////////////////////

    // 1. 제목넣기
    $(".stit").text(sinfo[pm]["제목"]);
   

    // 2. LNB 넣기
    // let lnb = sinfo[pm]["메뉴"]; // 배열값
    // console.log(lnb !== "없음");
    // // 메뉴가 "없음"이 아닐때 셋팅함
    // if (lnb !== "없음") {

    //     // 메뉴 html만들기
    //     let mht = "";
    //     mht += '<ul>';
    //     // 메뉴배열값 만큼 돌기 -> for of문!
    //     for (let x of lnb) {

    //         mht += '<li><a href="#">' + x + '</a></li>';

    //     } //////// for of 문 ///////////
    //     mht += '</ul>';

    //     // console.log(mht);

    //     // LNB메뉴 박스요소에 html넣기
    //     $(".lnb").html(mht);


    // } ////////////////// if ////////////////////////

    // 3. 컨텐츠 박스 배경이미지 넣기
    // 대상: .pbx
    // 사용메서드: each()
    // $(".pbx").each(function (idx, ele) {

    //     // console.log(idx);


    //     // 이미지이름의 번호만들기 변수
    //     let n1 = 1; // 앞순서 3개는 1
    //     if (idx >= 3) n1 = 2; // 뒷순서 3개는 2로 변경!
    //     let n2 = idx + 1; // 앞순서 3개는 순서대로 1,2,3
    //     if (idx >= 3) n2 = idx - 2; // 뒷순서도 1,2,3만들기4

    //     console.log("cont" + n1 + "-" + n2 + "a.jpg");

    //     ///////// 각 박스요소에 배경넣기 //////////////
    //     // ele 변수는 this 키워드와 같음!
    //     $(ele).css({
    //         backgroundImage: "url(images/" +
    //             sinfo[pm]["경로"] +
    //             "/cont" + n1 + "-" + n2 + "a.jpg)"
    //     }); /////////// css /////////////

    //     // 4. 컨텐츠박스에 타이틀 넣기
    //     $(ele).find("h2").html(sinfo[pm]["타이틀"][idx]);

    // }); ////////////// each ////////////////////


    $(".menu-list").each(function(idx,ele){
        // console.log("순번"+idx);
        $(ele).find("a")
        .prepend('<img src="images/1/bev/'+(idx+1)+'.jpg" alt="메뉴">');
    }); /////////// each /////////////////

    $(".mtab a").click(function(e){
        e.preventDefault();

        let txt = $(this).text();
        console.log(txt);

        if(txt=="푸드"){
            $(".menu-list").each(function(idx,ele){
                // console.log("순번"+idx);
                $(ele).find("a>img")
                .attr("src","images/1/food/"+(idx+1)+".jpg");

                $(ele).find(".txt").html(smenu[txt][idx]["ktit"]);
                $(ele).find(".s-txt").text(smenu[txt][idx]["etit"]);








            }); /////////// each /////////////////
        
        } //////// if ////////////

    }); ///////////// click /////////////////


}); ////////////// jQB ////////////////////////////






// 모바일여부를 체크하는 변수에 코드발급하기!!!
// mob값이 0이면 DT, 1이면 모바일
let mob = 0;
let chksz = () => {
    if ($(window).width() <= 500) mob = 1;
    else mob = 0;
    console.log("모바일여부:" + mob);
}; //// chksz함수 /////////////
chksz(); //함수실행 

// 화면의 크기가 변경될때 / 모바일 오리엔테이션변경(방향변경)시
// resize() 메서드 - 화면크기가 변할때 사용
$(window).resize(chksz);

$(function () { //////// jQB //////////////////

    //// 햄버거 버튼을 클릭하면 전체메뉴 보이기 ///
    // 이벤트 대상: .hbtn
    // 이벤트 종류: click
    // 변경 대상: .mobx
    // 변경 내용: 슬라이드 되면서 보이기/숨기기(토글)

    let hv = "100vh"; // 높이값을 보이는 화면에 채움!
    let ov = "auto"; // 내용이 넘치면 스크롤 생성(y축)

    $(".hbtn").click(function () {
        //console.log("보여줘!");

        // 1. 변경대상을 슬라이드 다운/업한다!
        $("#mobx").stop().slideToggle(300, "easeOutQuint");

        // 2. #top 전체 박스에 스크롤 생기거나 숨기기
        $("#top").css({
            height: hv, // 최초엔 "100vh"값 들어감
            overflow: ov // 최초엔 "auto"값 들어감
        });

        // 두가지 값이 전환되도록 값 변경하기!
        hv === "100vh" ? hv = "auto" : hv = "100vh";
        ov === "auto" ? ov = "visible" : ov = "auto";
        // 비?집:놀이동산; -> 3항연산자(조건연산자)


    }); ////////////// click /////////////////////////

    //// 검색 버튼을 클릭하면 검색창 보이기 ///
    // 이벤트 대상: .sbtn
    // 이벤트 종류: click
    // 변경 대상: .mos
    // 변경 내용: 슬라이드 되면서 보이기/숨기기(토글)
    $(".sbtn").click(function () {
        //console.log("검색해!");

        // 1. 변경대상을 슬라이드 보이기/숨기기
        $(".mos").stop().slideToggle(300, "easeOutQuint");

    }); /////////// click //////////////////////

    //// 스크롤 액션 대상 변수 ///////
    // 1.위로가기 버튼
    let tbtn = $(".tbtn");
    // 2.위로가기 버튼 등장액션 상태변수
    let tsts = 0; //0-액션전, 1-액션후
    //////////////////////////////////
    // 3.상단영역요소
    let tbx = $("#top");
    // 4.GNB박스 위치값
    let gnbpos = $(".gnb").offset().top;
    console.log("GNB위치값:" + gnbpos);
    // 5.상단영역 클래스 적용여부 상태변수
    let gnbsts = 0; //0-액션전, 1-액션후


    //////////////////////////////////////////////////
    //////////////// 스크롤 액션 //////////////////////
    //////////////////////////////////////////////////
    // 이벤트 종류: scroll
    // 이벤트 대상: window (전체스크롤)
    // 사용 메서드: scroll() 메서드
    $(window).scroll(function () {

        // 1. 스크롤바 위치값-> 제일중요!!!
        let scTop = $(this).scrollTop();
        // console.log("스위:"+scTop);

        // 2. 각 스크롤 액션 처리하기 //////////

        // 2-1. 위로 이동버튼 처리 ////////////
        if (scTop > 300 && tsts === 0) { // 기준값 아래일때

            tsts = 1; //상태값 변경(한번만 실행!)
            // console.log("나야나!");

            // 탑버튼 보이기
            tbtn.fadeIn(300);

        } ////// if /////////////
        else if (scTop <= 300 && tsts === 1) { // 기준값 위일때

            tsts = 0; //상태값 변경(한번만 실행!)
            // console.log("너야너!");

            // 탑버튼 숨기기
            tbtn.fadeOut(300);

        } ////// else if ////////////////

        /////// 모바일이 아닐때만 실행!!! //////
        // 2-2. 상단영역 메뉴처리 //////////////
        // 방법: .gnb메뉴 top위치값을 기준하여 
        // #top에 .on을 줘서 미리셋팅된 디자인을 적용한다!!!
        if (scTop >= gnbpos && gnbsts === 0 && mob === 0) {

            gnbsts = 1; //한번만실행!
            // console.log("바꿔!");

            // 상단영역에 class넣기
            tbx.addClass("on");

        } /////// if /////////////////////
        else if (scTop < gnbpos && gnbsts === 1 && mob === 0) {

            gnbsts = 0; //한번만실행!
            // console.log("복귀!");

            // 상단영역에 class제거
            tbx.removeClass("on");

        } /////// if /////////////////////


    }); ////////////////// scroll ////////////////////
    //////////////////////////////////////////////////

    //// 탑버튼 클릭시 페이지 상단 이동 애니메이션 하기 ///
    tbtn.click(function (e) {

        e.preventDefault(); // 기본이동막기

        // 상단영역class미리제거
        // 이유: 스크롤 애니메이션을 자연스럽게 상단처리
        tbx.removeClass("on");

        // 스크롤 애니메이션 //
        $("html,body").animate({
            scrollTop: "0"
        }, 1000, "easeOutCubic");

    }); ////////// click /////////////


    //// 모바일일때 화면전환(가로/세로)시 
    //// 상단영역 #top에 .on 빼기
    // $(window).resize(function(){
    //     tbx.removeClass("on");
    // });//////////// resize ///////////
    //-> 리사이즈는 모바일에서 스와이프시 작동하는 경우가
    // 많으므로 되도록 사용에 주의해야한다!!!




}); ///////////////// jQB ///////////////////