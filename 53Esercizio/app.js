$(document).ready(init);
function init(){
    $('.entry').hover(showMenu, overMenu);
    $('.entry').click(clickMenu);
    $(document).click(closeAll);
}
function showMenu(){
    me = $(this); 
    var menu = me.find('.menu');
    $('.entry').removeClass('active');
    me.addClass('active');
    menu.addClass('hide');     
}
function overMenu(){
    me = $(this); 
    var menu = me.find('.menu');
    menu.addClass('hide');
}
function clickMenu(){
    var me=$(this);
    me.toggleClass('active');
    me.find('.menu').toggleClass('hide');
}
function closeAll(){
    var me = $(this);
    if(!me.hasClass('entry')){
        $('.entry').removeClass('active');
        $('.entry').find('.menu').addClass('hide');

    }
}