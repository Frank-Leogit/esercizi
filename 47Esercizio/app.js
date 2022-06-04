// TIMING FUNCTIONS
// var clock;
// function delay(){
//     clock = setInterval(display,3000);
//     console.log(clock);
// }
// function display(){
//     alert('hello');
//     clearInterval(clock);
// }
// delay();


// ES1
// var comment = "L' item è stato eliminato";
// var item = document.getElementById('title');
// item.addEventListener('click',hideText);

// function hideText(){
//     item.style.display= "none";
//     console.log(comment);
//     setTimeout(hideComment, 3000);
// }
// function hideComment(){
//     comment= '';
// }


// ES2
// var value = 0;
// var cookTime = parseInt(prompt('Inserisci il tempo di cottura'));
// clock = setInterval(time, 1000);
// function time(){
//     value += 1;
//     timer = document.getElementById('title');
//     timer.innerHTML = value;
//     if(value == cookTime){
//         clearInterval(clock);
//         timer.innerHTML = 'La pasta è pronta!';
// }
// }



//ES3

// var value = 10;
// clock = setInterval(time, 1000);

// function time(){
//     value -= 1;
//     element = document.getElementById('title');
//     element.innerHTML = value;
//     if(value<1){
//         element.innerHTML = 'Buon Anno!';
//         clearInterval(clock);
//     }
// }



// ES4

// function random(){
//     x = Math.floor(Math.random()*100)+1;
//     return x;
// }
// function getRandomValues(){
//     var randNumb = [];
//     while(randNumb.length < 5){
//         var rand = random();
//         if(!randNumb.includes(rand)){
//             randNumb.push(random());
//         }}
//         return randNumb;
//     }
//     function init(){
//         var rndArr = getRandomValues();
//         alert('Memorizza i seguenti numeri: ' + rndArr);
//         setTimeout(function(){
//             var userNumb = [];
//             userNumb = delay();
//             check(userNumb, rndArr);
//         }, 5000);
//     }


//     init();
    
//     function askNumber(){ 
//     var userNumb = [];
//     for(var i=0 ; i<5 ; i++){
//         choice = parseInt(prompt('Inserisci il numero ' + (i+1)));
//         if(!userNumb.includes(choice)){
//             userNumb.push(choice);
//         }
//     }
//     return userNumb;
// }

// function delay(){
//     userNumber = askNumber();
//     return userNumber;
// }
// function check(userArray,randomArray){
//     var correctValues = [];
//     for(var i=0; i<5; i++){
//         var x = userArray[i];
//         var y= randomArray[i];
//         if(x == y){
//             console.log('Bravo! hai memorizzato il numero '+ (i+1));
//             correctValues.push(y);
//         }
//     }
//     console.log('Sei riuscito a memorizzare ' + correctValues.length + ' numeri: '+ correctValues);
// }

