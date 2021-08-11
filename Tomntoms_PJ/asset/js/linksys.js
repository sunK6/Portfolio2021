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
          url = "community.html?"
        }
        else if(nm=="TOM N TOMS"){
          url = "tomntoms.html?"
        }
        // else {
        //   url = "index.html";
        // }


  
        // 3. 상세페이지로 이동하기
        location.href = url;
  
      }); /////////// click /////////////////////
  

}); //////////////////// jQB ///////////////////////////////////////