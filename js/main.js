$(function () {
    let [ifOverCol1,ifOverCol2,ifOverCol3,ifOverCol4,ifOverCol5,ifOverCol6,ifOverCol7] = [0,0,0,0,0,0,0];

    $('.col1').hover(function () {
        ifOverCol1 = 1;
        $('.colHead1').find('img').attr("src", "./img/canada.png");
        
    }, function () {
        ifOverCol1 = 0;
        $('.colHead1').find('img').attr("src", "");
     
    });
    $(".col1").on("click", function () {
        if(ifOverCol1){
            if (!$('.item36').find('img').attr('src')) {
                $('.item36').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item29').find('img').attr('src')) {
                $('.item29').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item22').find('img').attr('src')) {
                $('.item22').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item15').find('img').attr('src')) {
                $('.item15').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item8').find('img').attr('src')) {
                $('.item8').find('img').attr('src', "./img/canada.png");
            } else {
                $('.item1').find('img').attr('src', "./img/canada.png");
            }
        }  
        
    });



    $('.col2').hover(function () {
        ifOverCol2 = 1;
        $('.colHead2').find('img').attr("src", "./img/canada.png");
    }, function () {
        ifOverCol2 = 0;
        $('.colHead2').find('img').attr("src", "");
    });
    $(".col2").on("click", function () {
        if(ifOverCol2){
            if (!$('.item37').find('img').attr('src')) {
                $('.item37').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item30').find('img').attr('src')) {
                $('.item30').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item23').find('img').attr('src')) {
                $('.item23').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item16').find('img').attr('src')) {
                $('.item16').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item9').find('img').attr('src')) {
                $('.item9').find('img').attr('src', "./img/canada.png");
            } else {
                $('.item2').find('img').attr('src', "./img/canada.png");
            }
        }   
    });



    $('.col3').hover(function () {
        ifOverCol3 = 1;
        $('.colHead3').find('img').attr("src", "./img/canada.png");
    }, function () {
        ifOverCol3 = 0;
        $('.colHead3').find('img').attr("src", "");
    });
    $(".col3").on("click", function () {
        if(ifOverCol3){
            if (!$('.item38').find('img').attr('src')) {
                $('.item38').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item31').find('img').attr('src')) {
                $('.item31').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item24').find('img').attr('src')) {
                $('.item24').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item17').find('img').attr('src')) {
                $('.item17').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item10').find('img').attr('src')) {
                $('.item10').find('img').attr('src', "./img/canada.png");
            } else {
                $('.item3').find('img').attr('src', "./img/canada.png");
            }
        }   
    });


    $('.col4').hover(function () {
        ifOverCol4 = 1;
        $('.colHead4').find('img').attr("src", "./img/canada.png");
    }, function () {
        ifOverCol4 = 0;
        $('.colHead4').find('img').attr("src", "");
    });
    $(".col4").on("click", function () {
        if(ifOverCol4){
            if (!$('.item39').find('img').attr('src')) {
                $('.item39').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item32').find('img').attr('src')) {
                $('.item32').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item25').find('img').attr('src')) {
                $('.item25').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item18').find('img').attr('src')) {
                $('.item18').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item11').find('img').attr('src')) {
                $('.item11').find('img').attr('src', "./img/canada.png");
            } else {
                $('.item4').find('img').attr('src', "./img/canada.png");
            }
        }   
    });

    $('.col5').hover(function () {
        ifOverCol5 = 1;
        $('.colHead5').find('img').attr("src", "./img/canada.png");
    }, function () {
        ifOverCol5 = 0;
        $('.colHead5').find('img').attr("src", "");
    });
    $(".col5").on("click", function () {
        if(ifOverCol5){
            if (!$('.item40').find('img').attr('src')) {
                $('.item40').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item33').find('img').attr('src')) {
                $('.item33').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item26').find('img').attr('src')) {
                $('.item26').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item19').find('img').attr('src')) {
                $('.item19').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item12').find('img').attr('src')) {
                $('.item12').find('img').attr('src', "./img/canada.png");
            } else {
                $('.item5').find('img').attr('src', "./img/canada.png");
            }
        }   
    });

    $('.col6').hover(function () {
        ifOverCol6 = 1;
        $('.colHead6').find('img').attr("src", "./img/canada.png");
    }, function () {
        ifOverCol6 = 0;
        $('.colHead6').find('img').attr("src", "");
    });
    $(".col6").on("click", function () {
        if(ifOverCol6){
            if (!$('.item41').find('img').attr('src')) {
                $('.item41').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item34').find('img').attr('src')) {
                $('.item34').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item27').find('img').attr('src')) {
                $('.item27').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item20').find('img').attr('src')) {
                $('.item20').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item13').find('img').attr('src')) {
                $('.item13').find('img').attr('src', "./img/canada.png");
            } else {
                $('.item6').find('img').attr('src', "./img/canada.png");
            }
        }   
    });

    $('.col7').hover(function () {
        ifOverCol7 = 1;
        $('.colHead7').find('img').attr("src", "./img/canada.png");
    }, function () {
        ifOverCol7 = 0;
        $('.colHead7').find('img').attr("src", "");
    });
    $(".col7").on("click", function () {
        if(ifOverCol7){
            if (!$('.item42').find('img').attr('src')) {
                $('.item42').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item35').find('img').attr('src')) {
                $('.item35').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item28').find('img').attr('src')) {
                $('.item28').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item21').find('img').attr('src')) {
                $('.item21').find('img').attr('src', "./img/canada.png");
            } else if (!$('.item14').find('img').attr('src')) {
                $('.item14').find('img').attr('src', "./img/canada.png");
            } else {
                $('.item7').find('img').attr('src', "./img/canada.png");
            }
        }   
    });












});