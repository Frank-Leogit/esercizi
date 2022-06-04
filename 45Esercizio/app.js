// // Funzione per verificare se la parola è palindroma

// var palindromWord = prompt("Inserisci la parola");
// function palindrom(word){
//     var length = word.length;
//         for(var i = 0; i <= Math.floor(length/2)-1; i++ ){
//             if(word[i] === word[length-1-i]){
//             }else{ 
//                 return ('La parola non è palindroma');
//             }
//             return ('La parola è palindroma');
//     }
// }
// palindrom(palindromWord);
// document.getElementById('maintitle').innerHTML = palindrom(palindromWord);
// L’utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto


function check(bool1,bool2){
    if(bool1.checked){
        choice = true;
        return choice;
    }
    else if(bool2.checked){
        choice = false;
        return choice;
    }
    else{
        alert('Scegli pari o dispari');
    }
    }


function randomSum(){
    var num1 = Math.floor(Math.random()*5+1);
    var num2 = Math.floor(Math.random()*5+1);
    var sum = num1+num2;
    return sum;
}

function evenOdd(scelta,sum){
    if(sum % 2 == 0 && scelta == true || sum % 2 != 0 && scelta == false){
        return ('Hai vinto!')
    }else{
        return ('Hai perso')
    }

}
var start=document.getElementById('mybutton');
start.addEventListener('click',function(){
    var even=document.getElementById('even');
    var odd=document.getElementById('odd');
    var choose = check(even,odd);
    somma = randomSum();
    console.log(choose,somma);
    console.log(evenOdd(choose, somma));

})


