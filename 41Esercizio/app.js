// element = document.getElementById('title');
// myButton.addEventListener('click', function(){

//     if(element.className != 'underline'){
//         element.className = 'underline';
//     }else{
//         element.className += ' red-text';
//     }

// })
// var myButton = document.getElementById('my-button');
// myButton.addEventListener('click', function(){
//     rnd = Math.floor(Math.random()*100)+1);
//     alert(rnd);
// })
// Creare un programma che chieda nome e genere e stampi
// il nome con il colore blu o rosa in base al sesso
// var nome = prompt ("Dimmi il tuo nome");
// var genere = prompt ('Dimmi il tuo genere');
// var myh1 = document.getElementById('title');
// myh1.innerHTML = 'Ciao ' + nome + ', il tuo sesso è ' + genere;
// if(genere == 'maschio'){
//     myh1.className = ' blue-text';
// }else if(genere == femmina){
//     myh1.className = ' pink-text';
// }
//Acquisire un numero dall'utente
// e stamparlo nell'h1 all'interno dell'h1
// colorare poi il numero di verde se pari 
// e rosso se dispari
// var num = parseInt(prompt('Inserisci un numero'));
// myNum = document.getElementById('title') 
// myNum.innerHTML = num;
// if(num % 2 == 0){
//     myNum.className = ' green-text';
// }
// else{
//     myNum.className = 'red-text';
// }
// Generare 10 numeri casuali da stampare in h1
// di classe pari o dispari all'interno del tag row
for(i=0; i<10; i++){
var num = Math.floor((Math.random()*100)+1);
var myNum = document.getElementById('row');

if(num % 2 == 0){
    myNum.innerHTML += '<h1 class="green-text">' + num + '</h1>';
    
}
else{
    myNum.innerHTML += '<h1 class="red-text">' + num + '</h1>';
}
}