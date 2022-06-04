// Creare uno slider di immagini

function init(){
    $('.next').click(nextClick);
    $('.prev').click(prevClick);
}
$(document).ready(init);
function nextClick(){
    var activeImg= $('img.active, i.active');
    var nextImg = activeImg.next('img,i');
    if(activeImg.hasClass('last')){
        nextImg = $('img.first, i.first');
    }
    activeImg.removeClass('active');
    nextImg.addClass('active');
}
function prevClick(){
    var activeImg= $('img.active, i.active');
    var prevImg = activeImg.prev('img,i');
    if(activeImg.hasClass('first')){
        prevImg = $('img.last, i.last');
    }
    activeImg.removeClass('active');
    prevImg.addClass('active');
}


