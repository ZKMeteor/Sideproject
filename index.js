const title1 = document.getElementById('pic1');
const top1 = document.getElementById('top-2-1');


$(‘#top1‘).click(function(){
    $(‘html,body’).animate({scrollTop:$(‘#pic1‘).offset().top}, 500);
    }); //代表一個完整的執行區塊

$(‘#top-2-3‘).click(function(){
    $(‘html,body’).animate({scrollTop:$(‘#about‘).offset().top}, 500);
    }); //代表一個完整的執行區塊