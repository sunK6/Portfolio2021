// 보그 코리아 링크 시스템 JS -linksys.js //


$(function () { /////////// jQB /////////////////////////////////////

    //////// 신상품 li 클릭시 상세페이지 이동하기 ///////////
    $(".sub a,.msub a").click(function(e){

        // 1. 기본이동막기
        e.preventDefault();
  
        // 2. li의 클래스 정보 읽어오기
        let nm = $(this).text();
        console.log("넘길값:"+nm);

        let url;

        if(nm=="신메뉴"||nm=="음료"||nm=="푸드"||nm=="MD"){
          url = "menu.html?gno="+escape(nm);
        }
        else if(nm=="event"){
          url = "event.html"
        }
        else if(nm=="국내 매장 찾기"||nm=="글로벌 매장 찾기"){
          url = "store.html?gno="+escape(nm);
        }
        else if(nm=="가맹점 개설문의"||nm=="마이탐 멤버쉽"||nm=="제휴할인/기프트카드"||nm=="렌탈 서비스"||nm=="탐스 라이프 스토어"||nm=="아카데미"){
          url = "service.html"
        }
        else if(nm=="예술문화활동"||nm=="고객의 소리"||nm=="사회공헌활동"||nm=="온라인 커뮤니티"){
          url = "event.html"
        }
        else if(nm=="브랜드소개"||nm=="채용안내"||nm=="공지사항"||nm=="찾아오시는 길"){
          url = "store.html"
        }
        else {
          url = "index.html";
        }


  
        // 3. 상세페이지로 이동하기
        location.href = url;
  
      }); /////////// click /////////////////////
    $(".gnb>li>a").click(function(e){

        // 1. 기본이동막기
        e.preventDefault();
  
        // 2. li의 클래스 정보 읽어오기
        let nm = $(this).text();
        console.log("넘길값:"+nm);

        let url;

        if(nm=="MENU"){
          url = "menu.html?gno="+nm;
        }
        else if(nm=="EVENT"){
          url = "event.html?"
        }
        else if(nm=="STORE"){
          url = "store.html?"
        }
        else if(nm=="SERVICE"){
          url = "service.html?"
        }
        else if(nm=="COMMUNITY"){
          url = "event.html?"
        }
        else if(nm=="TOM N TOMS"){
          url = "store.html?"
        }
        
        // else {
        //   url = "index.html";
        // }


  
        // 3. 상세페이지로 이동하기
        location.href = url;
  
      }); /////////// click /////////////////////

      $(".item a").click(function(e){

        // e.preventDefault();

        
        let nm = $(this).text();
        console.log(nm);

        let url;

        if(nm=="버터스카치 라떼"){
          url = "menu.html?gno="+escape(nm);
        }

        location.href = url;

      }); //////// click ///////////
  

}); //////////////////// jQB ///////////////////////////////////////