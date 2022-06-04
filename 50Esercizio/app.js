function init(){
    var target = $('#target');
    target.text(10);
    click(target);
    var target2 = $('#target2');
    target2.text(10);
    click2(target2);
    
    
}
init();
function changeColorRandom(){
        var rand = '#' + (0+ Math.floor(Math.random()*16777215)).toString(16);
        $('#circle').css('background-color',rand);
        console.log(rand);
      
};
function click(target){
    var value = parseInt(target.text());
    $('#circle').css('width','100px');
    var width = parseInt($('#circle').css('width'));
    $('#b1').click(function(){
        value -= 1;
        width -= 20;
        $('#circle').css('width', width);
        changeColorRandom();
        target.text(value);
        if(value < 0){
            alert('Non puoi andare al di sotto di 0!');
            target.text(0);
        }});
    $('#b2').click(function(){
        value += 1;
        width += 20;
        $('#circle').css('width', width);
        changeColorRandom();
        target.text(value);
        if(value > 20){
            alert('Non puoi andare oltre il 20!');
            target.text(20);
    }});
}
function click2(target2){
    var value = parseInt(target2.text());
    $('#circle').css('height','100px');
    var height = parseInt($('#circle').css('height'));
    $('#b3').click(function(){
        value -= 1;
        height -= 20;
        $('#circle').css('height', height);
        target2.text(value);
        changeColorRandom();
        if(value < 0){
            alert('Non puoi andare al di sotto di 0!');
            target2.text(0);
        }});
    $('#b4').click(function(){
        value += 1;
        height += 20;
        $('#circle').css('height', height);
        target2.text(value);
        changeColorRandom();
        if(value > 20){
            alert('Non puoi andare oltre il 20!');
            target2.text(20);
    }});
}