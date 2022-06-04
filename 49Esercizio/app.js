// init();
// function init(){
//     var hamburger = $('.hamburger-menu');
//     open(hamburger);
//     close(hamburger);
// }
// function open(text){
//     $('.fa-bars').click(function (){text.show();});
// }
// function close(text){
//     $('.close').click(function (){text.hide();});
// } 
// VERSIONE TOGGLE
init();
function init(){
    var buttons = $('.header-right > a, .hamburger-menu > a')
    buttons.click(toggleMenu);
}
function toggleMenu(){
    $('.hamburger-menu').toggle();
}
// function show(text){
//     text.show();
// }
// function close(text){
//     text.hide();
// } 
