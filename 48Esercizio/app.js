// function addColorBlue(text){
//     text.addClass('text-blue');
// }


// function init(){

//     $('.mainTitle').click(function(){

//         $('.mainTitle').toggleClass('text-yellow');
//         $('#subtitle');
        
//     });
//     hoverDBLClick();

// }
// init();
// Creare un bottone che on hover aggiunga una
// classe che cambia il colore del testo e la toglie
// quando il mouse esce dal bottone.
// Con il doppio click cambio il testo in “cliccato”.
// Con un click solo non fa niente
// function hoverDBLClick(){
//     $('#subtitle').hover(function (){$(this).toggleClass('text-yellow')});
//     $('#subtitle').dblclick(function (){$('#subtitle').text('cliccato')});
// }
// Rendere visibile la scritta “Live Coding” dentro il
// cerchio arancione quando passo con il mouse
// sul cerchio
function init(){
    var circleText = $('#subtext');
    circleText.hide();
    hover(circleText);
}
function hover(text){
    $('.round').hover(function(){
        text.show();
    },function(){
        text.hide();
    });
}
init();

