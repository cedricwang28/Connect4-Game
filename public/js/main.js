$(function () {
    
    let socket = io();

    let srcImg;
    
    $(document).click(function(){
        socket.emit('input',{
            item: clickedItem,
            flag: srcImg
        });
    });

    

    socket.on('identity',(data)=>{
    
        if(data==0){
            $('.identity').html('Player1: Canada');
            srcImg = './img/canada.png';
        }
        if(data==1){
            $('.identity').html('Player2: USA');
            srcImg = './img/usa.png';
        }

        if(data>1){
            $('.identity').html(data);
            document.addEventListener('click',function(){
                return false;
            },true);
        }
    });

    socket.on('sync',(data)=>{
        $('.item').eq(data.item-1).find('img').attr('src',data.flag);
    });
    
    socket.on('syncWin',(data)=>{
        $('.notice').html(data);
    });

    
    
    
    
    
    
    
    
    
    

    
    let [ifOverCol1, ifOverCol2, ifOverCol3, ifOverCol4, ifOverCol5, ifOverCol6, ifOverCol7] = [0, 0, 0, 0, 0, 0, 0];
    let clickedItem = 0;
    let countConnect = 0;
    let whoWin;

    $('.col1').hover(function () {
        ifOverCol1 = 1;
        $('.colHead1').find('img').attr("src", srcImg);

    }, function () {
        ifOverCol1 = 0;
        $('.colHead1').find('img').attr("src", "");

    });
    $(".col1").on("click", function () {

        if (ifOverCol1) {
            if (!$('.item36').find('img').attr('src')) {
                $('.item36').find('img').attr('src', srcImg);
                clickedItem = 36;
            } else if (!$('.item29').find('img').attr('src')) {
                $('.item29').find('img').attr('src', srcImg);
                clickedItem = 29;
            } else if (!$('.item22').find('img').attr('src')) {
                $('.item22').find('img').attr('src', srcImg);
                clickedItem = 22;
            } else if (!$('.item15').find('img').attr('src')) {
                $('.item15').find('img').attr('src', srcImg);
                clickedItem = 15;
            } else if (!$('.item8').find('img').attr('src')) {
                $('.item8').find('img').attr('src', srcImg);
                clickedItem = 8;
            } else {
                $('.item1').find('img').attr('src', srcImg);
                clickedItem = 1;
            }

        }
        checkVertical(clickedItem);
        checkHorizontal(clickedItem);
        checkForward(clickedItem);
        checkBackward(clickedItem);
    });



    $('.col2').hover(function () {
        ifOverCol2 = 1;
        $('.colHead2').find('img').attr("src", srcImg);
    }, function () {
        ifOverCol2 = 0;
        $('.colHead2').find('img').attr("src", "");
    });
    $(".col2").on("click", function () {
        if (ifOverCol2) {
            if (!$('.item37').find('img').attr('src')) {
                $('.item37').find('img').attr('src', srcImg);
                clickedItem = 37;
            } else if (!$('.item30').find('img').attr('src')) {
                $('.item30').find('img').attr('src', srcImg);
                clickedItem = 30;
            } else if (!$('.item23').find('img').attr('src')) {
                $('.item23').find('img').attr('src', srcImg);
                clickedItem = 23;
            } else if (!$('.item16').find('img').attr('src')) {
                $('.item16').find('img').attr('src', srcImg);
                clickedItem = 16;
            } else if (!$('.item9').find('img').attr('src')) {
                $('.item9').find('img').attr('src', srcImg);
                clickedItem = 9;
            } else {
                $('.item2').find('img').attr('src', srcImg);
                clickedItem = 2;
            }
        }
        checkVertical(clickedItem);
        checkHorizontal(clickedItem);
        checkForward(clickedItem);
        checkBackward(clickedItem);
    });



    $('.col3').hover(function () {
        ifOverCol3 = 1;
        $('.colHead3').find('img').attr("src", srcImg);
    }, function () {
        ifOverCol3 = 0;
        $('.colHead3').find('img').attr("src", "");
    });
    $(".col3").on("click", function () {
        if (ifOverCol3) {
            if (!$('.item38').find('img').attr('src')) {
                $('.item38').find('img').attr('src', srcImg);
                clickedItem = 38;
            } else if (!$('.item31').find('img').attr('src')) {
                $('.item31').find('img').attr('src', srcImg);
                clickedItem = 31;
            } else if (!$('.item24').find('img').attr('src')) {
                $('.item24').find('img').attr('src', srcImg);
                clickedItem = 24;
            } else if (!$('.item17').find('img').attr('src')) {
                $('.item17').find('img').attr('src', srcImg);
                clickedItem = 17;
            } else if (!$('.item10').find('img').attr('src')) {
                $('.item10').find('img').attr('src', srcImg);
                clickedItem = 10;
            } else {
                $('.item3').find('img').attr('src', srcImg);
                clickedItem = 3;
            }
        }
        checkVertical(clickedItem);
        checkHorizontal(clickedItem);
        checkForward(clickedItem);
        checkBackward(clickedItem);
    });


    $('.col4').hover(function () {
        ifOverCol4 = 1;
        $('.colHead4').find('img').attr("src", srcImg);
    }, function () {
        ifOverCol4 = 0;
        $('.colHead4').find('img').attr("src", "");
    });
    $(".col4").on("click", function () {
        if (ifOverCol4) {
            if (!$('.item39').find('img').attr('src')) {
                $('.item39').find('img').attr('src', srcImg);
                clickedItem = 39;
            } else if (!$('.item32').find('img').attr('src')) {
                $('.item32').find('img').attr('src', srcImg);
                clickedItem = 32;
            } else if (!$('.item25').find('img').attr('src')) {
                $('.item25').find('img').attr('src', srcImg);
                clickedItem = 25;
            } else if (!$('.item18').find('img').attr('src')) {
                $('.item18').find('img').attr('src', srcImg);
                clickedItem = 18;
            } else if (!$('.item11').find('img').attr('src')) {
                $('.item11').find('img').attr('src', srcImg);
                clickedItem = 11;
            } else {
                $('.item4').find('img').attr('src', srcImg);
                clickedItem = 4;
            }
        }
        checkVertical(clickedItem);
        checkHorizontal(clickedItem);
        checkForward(clickedItem);
        checkBackward(clickedItem);
    });


    $('.col5').hover(function () {
        ifOverCol5 = 1;
        $('.colHead5').find('img').attr("src", srcImg);
    }, function () {
        ifOverCol5 = 0;
        $('.colHead5').find('img').attr("src", "");
    });
    $(".col5").on("click", function () {
        if (ifOverCol5) {
            if (!$('.item40').find('img').attr('src')) {
                $('.item40').find('img').attr('src', srcImg);
                clickedItem = 40;
            } else if (!$('.item33').find('img').attr('src')) {
                $('.item33').find('img').attr('src', srcImg);
                clickedItem = 33;
            } else if (!$('.item26').find('img').attr('src')) {
                $('.item26').find('img').attr('src', srcImg);
                clickedItem = 26;
            } else if (!$('.item19').find('img').attr('src')) {
                $('.item19').find('img').attr('src', srcImg);
                clickedItem = 19;
            } else if (!$('.item12').find('img').attr('src')) {
                $('.item12').find('img').attr('src', srcImg);
                clickedItem = 12;
            } else {
                $('.item5').find('img').attr('src', srcImg);
                clickedItem = 5;
            }
        }
        checkVertical(clickedItem);
        checkHorizontal(clickedItem);
        checkForward(clickedItem);
        checkBackward(clickedItem);
    });

    $('.col6').hover(function () {
        ifOverCol6 = 1;
        $('.colHead6').find('img').attr("src", srcImg);
    }, function () {
        ifOverCol6 = 0;
        $('.colHead6').find('img').attr("src", "");
    });
    $(".col6").on("click", function () {
        if (ifOverCol6) {
            if (!$('.item41').find('img').attr('src')) {
                $('.item41').find('img').attr('src', srcImg);
                clickedItem = 41;
            } else if (!$('.item34').find('img').attr('src')) {
                $('.item34').find('img').attr('src', srcImg);
                clickedItem = 34;
            } else if (!$('.item27').find('img').attr('src')) {
                $('.item27').find('img').attr('src', srcImg);
                clickedItem = 27;
            } else if (!$('.item20').find('img').attr('src')) {
                $('.item20').find('img').attr('src', srcImg);
                clickedItem = 20;
            } else if (!$('.item13').find('img').attr('src')) {
                $('.item13').find('img').attr('src', srcImg);
                clickedItem = 13;
            } else {
                $('.item6').find('img').attr('src', srcImg);
                clickedItem = 6;
            }
        }
        checkVertical(clickedItem);
        checkHorizontal(clickedItem);
        checkForward(clickedItem);
        checkBackward(clickedItem);
    });

    $('.col7').hover(function () {
        ifOverCol7 = 1;
        $('.colHead7').find('img').attr("src", srcImg);
    }, function () {
        ifOverCol7 = 0;
        $('.colHead7').find('img').attr("src", "");
    });
    $(".col7").on("click", function () {
        if (ifOverCol7) {
            if (!$('.item42').find('img').attr('src')) {
                $('.item42').find('img').attr('src', srcImg);
                clickedItem = 42;
            } else if (!$('.item35').find('img').attr('src')) {
                $('.item35').find('img').attr('src', srcImg);
                clickedItem = 35;
            } else if (!$('.item28').find('img').attr('src')) {
                $('.item28').find('img').attr('src', srcImg);
                clickedItem = 28;
            } else if (!$('.item21').find('img').attr('src')) {
                $('.item21').find('img').attr('src', srcImg);
                clickedItem = 21;
            } else if (!$('.item14').find('img').attr('src')) {
                $('.item14').find('img').attr('src', srcImg);
                clickedItem = 14;
            } else {
                $('.item7').find('img').attr('src', srcImg);
                clickedItem = 7;
            }
        }
        checkVertical(clickedItem);
        checkHorizontal(clickedItem);
        checkForward(clickedItem);
        checkBackward(clickedItem);
    });



    function checkHorizontal(itemNum) {

        countConnect = 1;
        $('.item').eq(itemNum-1).addClass('showConnection');

        if ($('.item').eq(itemNum).attr('num') % 7 != 1 &&
            $('.item').eq(itemNum).find('img').attr('src')==srcImg) {

            countConnect = 2;
            $('.item').eq(itemNum).addClass('showConnection');

            if ($('.item').eq(itemNum + 1).attr('num') % 7 != 1 &&
                $('.item').eq(itemNum + 1).find('img').attr('src')==srcImg) {

                countConnect = 3;
                $('.item').eq(itemNum+1).addClass('showConnection');

                if ($('.item').eq(itemNum + 2).attr('num') % 7 != 1 &&
                    $('.item').eq(itemNum + 2).find('img').attr('src')==srcImg) {

                    countConnect = 4;
                    $('.item').eq(itemNum+2).addClass('showConnection');

                }else if($('.item').eq(itemNum - 2).attr('num') % 7 != 0 &&
                $('.item').eq(itemNum - 2).find('img').attr('src')==srcImg){

                    countConnect = 4;
                    $('.item').eq(itemNum-2).addClass('showConnection');

                }

            } else if ($('.item').eq(itemNum - 2).attr('num') % 7 != 0 &&
                $('.item').eq(itemNum - 2).find('img').attr('src')==srcImg) {

                countConnect = 3;
                $('.item').eq(itemNum-2).addClass('showConnection');

                if ($('.item').eq(itemNum - 3).attr('num') % 7 != 0 &&
                    $('.item').eq(itemNum - 3).find('img').attr('src')==srcImg) {

                    countConnect = 4;
                    $('.item').eq(itemNum-3).addClass('showConnection');
                }
            }

        } else if ($('.item').eq(itemNum - 2).attr('num') % 7 != 0 &&
            $('.item').eq(itemNum - 2).find('img').attr('src')==srcImg) {

            countConnect = 2;
            $('.item').eq(itemNum-2).addClass('showConnection');

            if ($('.item').eq(itemNum - 3).attr('num') % 7 != 0 &&
                $('.item').eq(itemNum - 3).find('img').attr('src')==srcImg) {

                countConnect = 3;
                $('.item').eq(itemNum-3).addClass('showConnection');

                if ($('.item').eq(itemNum - 4).attr('num') % 7 != 0 &&
                    $('.item').eq(itemNum - 4).find('img').attr('src')==srcImg) {

                    countConnect = 4;
                    $('.item').eq(itemNum-4).addClass('showConnection');

                }
            }
        }



        if (countConnect == 4) {
            setTimeout(function () {
                if(srcImg == './img/canada.png'){
                    whoWin = 'Canada Wins !';
                    $('.notice').html(whoWin);
                }else{
                    whoWin = 'USA Wins !';
                    $('.notice').html(whoWin);
                }

                socket.emit('winInfo',whoWin);
                $('.showConnection').css("background-color","yellow")
            }, 100);

        }

    }



    function checkVertical(itemNum) {

        countConnect = 1;

        if ($('.item').eq(itemNum+6).attr('num') <=42 &&
            $('.item').eq(itemNum+6).find('img').attr('src')==srcImg) {
            countConnect = 2;
            if ($('.item').eq(itemNum + 13).attr('num') <=42 &&
                $('.item').eq(itemNum + 13).find('img').attr('src')==srcImg) {
                countConnect = 3;
                if ($('.item').eq(itemNum + 20).attr('num') <=42 &&
                    $('.item').eq(itemNum + 20).find('img').attr('src')==srcImg) {
                    countConnect = 4;
                }

            } 

        }



        if (countConnect == 4) {
            setTimeout(function () {
                if(srcImg == './img/canada.png'){
                    whoWin = 'Canada Wins !';
                    $('.notice').html(whoWin);
                }else{
                    whoWin = 'USA Wins !';
                    $('.notice').html(whoWin);
                }

                socket.emit('winInfo',whoWin);
            }, 100);

        }

    }



    function checkForward(itemNum) {

        countConnect = 1;

        if ($('.item').eq(itemNum+5).attr('num') % 7 != 0 &&
            $('.item').eq(itemNum+5).find('img').attr('src')==srcImg) {
            countConnect = 2;
            if ($('.item').eq(itemNum + 11).attr('num') % 7 != 0 &&
                $('.item').eq(itemNum + 11).find('img').attr('src')==srcImg) {
                countConnect = 3;
                if ($('.item').eq(itemNum + 17).attr('num') % 7 != 0 &&
                    $('.item').eq(itemNum + 17).find('img').attr('src')==srcImg) {
                    countConnect = 4;
                }else if($('.item').eq(itemNum - 7).attr('num') % 7 != 1 &&
                $('.item').eq(itemNum - 7).find('img').attr('src')==srcImg){
                    countConnect = 4;
                }

            } else if ($('.item').eq(itemNum - 7).attr('num') % 7 != 1 &&
            $('.item').eq(itemNum - 7).find('img').attr('src')==srcImg) {
                countConnect = 3;
                if ($('.item').eq(itemNum - 13).attr('num') % 7 != 1 &&
                $('.item').eq(itemNum - 13).find('img').attr('src')==srcImg) {
                    countConnect = 4;
                }
            }

        } else if ($('.item').eq(itemNum - 7).attr('num') % 7 != 1 &&
            $('.item').eq(itemNum - 7).find('img').attr('src')==srcImg) {
            countConnect = 2;
            if ($('.item').eq(itemNum - 13).attr('num') % 7 != 1 &&
                $('.item').eq(itemNum - 13).find('img').attr('src')==srcImg) {
                countConnect = 3;
                if ($('.item').eq(itemNum - 19).attr('num') % 7 != 1 &&
                    $('.item').eq(itemNum - 19).find('img').attr('src')==srcImg) {
                    countConnect = 4;
                }
            }
        }



        if (countConnect == 4) {
            setTimeout(function () {
                if(srcImg == './img/canada.png'){
                    $('.notice').html('Canada Wins !');
                }else{
                    $('.notice').html('USA Wins !');
                }
            }, 100);

        }

    }



    function checkBackward(itemNum) {

        countConnect = 1;

        if ($('.item').eq(itemNum+7).attr('num') % 7 != 1 &&
            $('.item').eq(itemNum+7).find('img').attr('src')==srcImg) {
            countConnect = 2;
            if ($('.item').eq(itemNum + 15).attr('num') % 7 != 1 &&
                $('.item').eq(itemNum + 15).find('img').attr('src')==srcImg) {
                countConnect = 3;
                if ($('.item').eq(itemNum + 23).attr('num') % 7 != 1 &&
                    $('.item').eq(itemNum + 23).find('img').attr('src')==srcImg) {
                    countConnect = 4;
                }else if($('.item').eq(itemNum - 9).attr('num') % 7 != 0 &&
                $('.item').eq(itemNum - 9).find('img').attr('src')==srcImg){
                    countConnect = 4;
                }

            } else if ($('.item').eq(itemNum - 9).attr('num') % 7 != 0 &&
            $('.item').eq(itemNum - 9).find('img').attr('src')==srcImg) {
                countConnect = 3;
                if ($('.item').eq(itemNum - 17).attr('num') % 7 != 0 &&
                $('.item').eq(itemNum - 17).find('img').attr('src')==srcImg) {
                    countConnect = 4;
                }
            }

        } else if ($('.item').eq(itemNum - 9).attr('num') % 7 != 0 &&
            $('.item').eq(itemNum - 9).find('img').attr('src')==srcImg) {
            countConnect = 2;
            if ($('.item').eq(itemNum - 17).attr('num') % 7 != 0 &&
                $('.item').eq(itemNum - 17).find('img').attr('src')==srcImg) {
                countConnect = 3;
                if ($('.item').eq(itemNum - 25).attr('num') % 7 != 0 &&
                    $('.item').eq(itemNum - 25).find('img').attr('src')==srcImg) {
                    countConnect = 4;
                }
            }
        }



        if (countConnect == 4) {
            setTimeout(function () {
                if(srcImg == './img/canada.png'){
                    $('.notice').html('Canada Wins !');
                }else{
                    $('.notice').html('USA Wins !');
                }
            }, 100);

        }

    }




    




});