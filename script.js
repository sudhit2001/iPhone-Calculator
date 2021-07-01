function inst(n){
    if($(".value").text()=='0' && n!='.'){
        $(".value").text('');
    }
    $(".value").text( $('.value').text()+n );
    if($('.value').text().length>6){
        $('.value').css({"font-size":"5.5em"});
    }
    if($('.value').text().length>9){
        $('.value').css("font-size","4.5em");
        $('.no').addClass("a");
    }
}
function eql(){
    $('.value').text(eval($(".value").text()));
}
function clr(){
    $(".value").text('0');
    $('.no').removeClass('a');
    $('.value').css("font-size","7.5em");
}