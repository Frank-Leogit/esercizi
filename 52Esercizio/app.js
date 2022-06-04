$(document).ready(init);
function init(){
//     test();
// }
// function test(){
//     var btns = $('.btn');
//     btns.each(function(){
//         $(this).prepend('prova');
//     })
//     for(var i = 0; i<btns.length; i++){
//         var btn = btns[i];
//         $(btn).append('prova');
//     }
// boxcount = parseInt(prompt('dimmi il numero di quadrati'));
boxGenerator(boxcount);
$('.box').find('span').each(function(){
    $(this).text(getRandomValues(1,100));
});
$('.box').click(function(){
    bool = $(this).find('span').is(':visible');
    if(bool){
        $(this).css('display','none');
    }
    else{
    if($(this).find('span').text() % 2 == 0 ){
    $(this).addClass('green');
    }else{
    $(this).addClass('red');
}}
$(this).find('span').toggle();
})
}
function getRandomValues(min, max){
    var rnd = min + Math.floor(Math.random()*(max-min+1));
    return rnd;
}
function boxGenerator(boxcount){
    for( var i = 0; i<boxcount; i++){
    $('.row').append('<div class="box"><span style="display:none"></span></div>');
}}

