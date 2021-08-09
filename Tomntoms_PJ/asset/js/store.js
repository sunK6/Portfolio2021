// 탐앤탐스 서브 페이지 JS - sub.js


let smenu = {
    "푸드": [{
            "ktit": '스크램블 에그 샌드위치<span class="new">NEW</span>',
            "etit": "scrambled egg sandwich"
        },
        {
            "ktit": '스크램블 에그 프렌치 토스트<span class="new">NEW</span>',
            "etit": "Scrambled Egg French Toast"
        },
        {
            "ktit": '플레인 크로플<span class="new">NEW</span>',
            "etit": "Plain Croiffle"
        },
        {
            "ktit": '아이스크림 크로플<span class="new">NEW</span>',
            "etit": "Ice cream croiffle"
        },
        {
            "ktit": '다크초코 크로플<span class="new">NEW</span>',
            "etit": "Dark Chocolate Croiffle"
        },
        {
            "ktit": '블루베리 크림치즈 크로플<span class="new">NEW</span>',
            "etit": "Blueberry Cream Cheese Croiffle"
        },
        {
            "ktit": '딸기 크림치즈 크로플<span class="new">NEW</span>',
            "etit": "Strawberry Cream Cheese Croiffle"
        },
        {
            "ktit": '트로피칼 샤베트 빙수',
            "etit": "Tropical Sherbet ice flakes"
        },
        {
            "ktit": '마카롱 녹차 빙수',
            "etit": "Macaron green tea Ice flakes"
        },
        {
            "ktit": '옛날 달고나 빙수',
            "etit": "dalgona Ice flakes"
        },
        {
            "ktit": '고르곤졸라 피자 L',
            "etit": "Gorgonzola Pizza"
        },
        {
            "ktit": '고르곤졸라 피자',
            "etit": "Gorgonzola Pizza"
        },
        {
            "ktit": '디아블로 피자 L',
            "etit": "Diablo Pizza"
        },
        {
            "ktit": '디아블로 피자',
            "etit": "Diablo Pizza"
        },
        {
            "ktit": '베이컨 크림 파스타<span class="new">NEW</span>',
            "etit": "Bacon Cream Pasta"
        },
        {
            "ktit": '쉬림프 로제 파스타<span class="new">NEW</span>',
            "etit": "Shrimp Roze Pasta"
        },
        {
            "ktit": '미트 토마토 파스타<span class="new">NEW</span>',
            "etit": "Meat Tomato Pasta"
        },
        {
            "ktit": '페퍼로니 프레즐',
            "etit": "Pepperoni Pretzel"
        },
        {
            "ktit": '불고기 프레즐',
            "etit": "Bulgogi Pretzel"
        },
        {
            "ktit": '고구마 크림치즈 프레즐',
            "etit": "Sweet Potato Cream Cheese Pretzel"
        },
        {
            "ktit": '콘 샐러드 프레즐',
            "etit": "Corn Salad Pretzel"
        },
        {
            "ktit": '할라피뇨 도그 프레즐',
            "etit": "Jalapenos Dog Pretzel"
        },
        {
            "ktit": '핫 스위트 치킨 프레즐',
            "etit": "Hot Sweet Chicken Pretzel"
        },
        {
            "ktit": '또띠아(L)',
            "etit": "Tortilla Pizza"
        }
    ],

    "음료": [{
            "ktit": '코코넛 워터<span class="new">NEW</span>',
            "etit": "scrambled egg sandwich"
        },
        {
            "ktit": '블루파인 샤베트',
            "etit": "Blue fine Sherbet"
        },
        {
            "ktit": '망고패션 샤베트<span class="new">NEW</span>',
            "etit": "Mango Fashion Sherbet"
        },
        {
            "ktit": '메론코코샤베트<span class="new">NEW</span>',
            "etit": "Melon Coco Sherbet"
        },
        {
            "ktit": '와인 샤베트<span class="new">NEW</span>',
            "etit": "Wine sherbet"
        },
        {
            "ktit": '버터스카치라떼<span class="new">NEW</span>',
            "etit": "Butterscotch Latte"
        },
        {
            "ktit": '그린티라떼 콜드브루<span class="new">NEW</span>',
            "etit": "Green Tea Latte Cold Brew"
        },
        {
            "ktit": '탄산 콜드브루 (가당)<span class="new">NEW</span>',
            "etit": "Sparkling Cold Brew (sweet)"
        },
        {
            "ktit": '탄산 콜드브루 (무가당)<span class="new">NEW</span>',
            "etit": "Sparkling Cold Brew"
        },
        {
            "ktit": '키위 바나나 스무디',
            "etit": "KIWI BANANA SMOOTHI"
        },
        {
            "ktit": '딸기 바나나 스무디<span class="new">NEW</span>',
            "etit": "STRAWBERRY BANANAN SMOOTHI"
        },
        {
            "ktit": '마시는요거트(아보카도)<span class="new">NEW</span>',
            "etit": "Drinking Yogurt(Avocado)"
        },
        {
            "ktit": '아이스 콘라떼',
            "etit": "Corn Latte"
        },
        {
            "ktit": '콘라떼',
            "etit": "Corn Latte"
        },
        {
            "ktit": '망고패션 콜라겐 요거트스무디',
            "etit": "Mango-Passion Fruit Collagen Yogurt Smoothie"
        },
        {
            "ktit": '석류 콜라겐 요거트스무디',
            "etit": "Pomegranate Collagen Yogurt Smoothie"
        },
        {
            "ktit": '콜라겐 요거트스무디',
            "etit": "Collagen Yogurt Smoothie"
        },
        {
            "ktit": '딸기 요거트 쉐이크',
            "etit": "Strawberry Yogurt Shake"
        },
        {
            "ktit": '망고 요거트 쉐이크',
            "etit": "Mango Yogurt Shake"
        },
        {
            "ktit": '국내산 딸기주스',
            "etit": "Strawberry Juice"
        },
        {
            "ktit": '곡성 멜론 스무디',
            "etit": "Gokseong melon Smoothie"
        },
        {
            "ktit": '아이스 카페 아메리카노',
            "etit": "Iced Americano"
        },
        {
            "ktit": '흑당 단호박 라떼',
            "etit": "Black sugar sweet pumpkin latte"
        },
        {
            "ktit": '아이스 카페라떼',
            "etit": "Iced Café Latte"
        }
    ],
    "MD": [{
            "ktit": '핸드드립 포트 (350ml)',
            "etit": "Hand Drip Pot (350ml)"
        },
        {
            "ktit": '탐탐 스토조 텀블러 카키 (473ml)',
            "etit": "TOM N TOMS x STOJO TUMBLER (473ml)"
        },
        {
            "ktit": '탐탐 스토조 텀블러 버건디 (473ml)',
            "etit": "TOM N TOMS x STOJO TUMBLER (473ml)"
        },
        {
            "ktit": '탐탐 스토조 텀블러 크림옐로우 (473ml)',
            "etit": "TOM N TOMS x STOJO TUMBLER (473ml)"
        },
        {
            "ktit": '탐탐 스토조 텀블러 인디핑크 (473ml)',
            "etit": "TOM N TOMS x STOJO TUMBLER (473ml)"
        },
        {
            "ktit": '티요 콜라겐 요거트 파우더 (50g x 7ea)',
            "etit": "Collagen Yogurt Powder (50g x 7ea)"
        },
        {
            "ktit": '아이스티 복숭아 (14g x 30p)',
            "etit": "Iced Tea Peach (14g x 30p)"
        },
        {
            "ktit": '방탄커피 빠다커피 (230ml)',
            "etit": "Butter Coffee (230ml)"
        },
        {
            "ktit": '블랙 그레인 라떼 에브리데이 (80g x 10ea)',
            "etit": "Black Grain Latte Everyday (80g x 10ea)"
        },
        {
            "ktit": '콜라겐 빠져커피 (2g x 30p)',
            "etit": "Collagen Coffee (2g x 30p)"
        },
        {
            "ktit": '액상커피 마일드 블렌드 세트<span class="new">NEW</span>',
            "etit": "Portion Coffee Set"
        },
        {
            "ktit": '드립커피 & 티 세트<span class="new">NEW</span>',
            "etit": "Drip Coffee & Tea Set"
        },
        {
            "ktit": '시그니처 드립커피 세트<span class="new">NEW</span>',
            "etit": "Signature Drip Coffee Set"
        },
        {
            "ktit": '페니하우스 & 텀블러 세트<span class="new">NEW</span>',
            "etit": "Penny House & Tumbler Set"
        },
        {
            "ktit": '머그 텀블러 블랙 (300ml)<span class="new">NEW</span>',
            "etit": "Mug Tumbler Black (300ml)"
        },
        {
            "ktit": '머그 텀블러 화이트 (300ml)<span class="new">NEW</span>',
            "etit": "Mug Tumbler White (300ml)"
        },
        {
            "ktit": '머그 텀블러 레드 (300ml)<span class="new">NEW</span>',
            "etit": "Mug Tumbler Red (300ml)"
        },
        {
            "ktit": '머그 텀블러 (300ml)<span class="new">NEW</span>',
            "etit": "Mug Tumbler (300ml)"
        },
        {
            "ktit": '쏘우 텀블러 ver.2 블랙 (350ml)<span class="new">NEW</span>',
            "etit": "Sow Tumbler ver.2 Black (350ml)"
        },
        {
            "ktit": '쏘우 텀블러 ver.2 화이트 (350ml)<span class="new">NEW</span>',
            "etit": "Sow Tumbler ver.2 White (350ml)"
        },
        {
            "ktit": '쏘우 텀블러 ver.2 레드 (350ml)<span class="new">NEW</span>',
            "etit": "Sow Tumbler ver.2 Red (350ml)"
        },
        {
            "ktit": '쏘우 텀블러 ver.2 (350ml)<span class="new">NEW</span>',
            "etit": "Sow Tumbler ver.2 (350ml)"
        },
        {
            "ktit": '와이드 텀블러 ver.2 블루 그린 (500ml)<span class="new">NEW</span>',
            "etit": "Wide Tumbler ver.2 Blue Green(500ml)"
        },
        {
            "ktit": '와이드 텀블러 ver.2 머스타드 옐로우 (500ml)<span class="new">NEW</span>',
            "etit": "Wide Tumbler ver.2 Mustard Yellow(500ml)"
        },

    ]
}; //////////// smenu /////////////


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