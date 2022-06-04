// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il
// giocatore sia per il computer. Stabilire il
// vincitore, in base a chi fa il punteggio più alto.
// var numPl = Math.floor(Math.random()*6);
// var numCpu = Math.floor(Math.random()*6);
// if(numCpu>numPl){
//     document.getElementById("mainTitle").innerHTML = "Il computer ha vinto!";
// }else if(numCpu<numPl){
//     document.getElementById("mainTitle").innerHTML = "Il giocatore ha vinto!";
// }else{
//     document.getElementById("mainTitle").innerHTML = "Pareggio!";
// }
// console.log("numPl", numPl,"numCpu", numCpu);
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può può accedere,
// stampa un messaggio appropriato;
// var mailList = ["gianfranco.leotta@gmail.com", "leotta.gianfranco@gmail.com",
//                 "gianfranco-leotta@outlook.it", "gian_leo@hotmail.it", 
//                 "carlorossi@libero.it", "rossialberto@yahoo.it", 
//                 "amanda@tiscali.com", "alice.drak@webmail.it", 
//                 "defa-mon@alice.it", "roberto-cecco@aruba.it"];
// var mail = prompt("Inserisci la mail e verifica l'accesso");
// var finded = false;
// console.log(mailList);
// for(var i=0; i<mailList.length; i++){
//     if (mail === mailList[i]){
//         finded = true;
//         break;
//     }
// }
// if(finded){
//     document.getElementById("mainTitle").innerHTML = "Accesso consentito";

// }else{
//     document.getElementById("mainTitle").innerHTML = "Accesso negato";

// }
// L'utente inserisce due numeri in successione con due prompt. Il software stampa il maggiore;
// var primoNumero = parseInt(prompt("Inserisci il primo numero"));
// var secondoNumero = parseInt(prompt("Inserisci il secondo numero"));
// if (primoNumero>secondoNumero){
//     document.getElementById("mainText").innerHTML = "Il numero maggiore è il " + primoNumero;
// }else if (primoNumero<secondoNumero){
//     document.getElementById("mainText").innerHTML = "Il numero maggiore è il " + secondoNumero;
// }
// var arr = [];

// for(var i=0; i<6; i++){
//     var number = parseInt(prompt("Inserisci il numero " + (i+1)));
//     if (number % 2 !== 0){
//         arr.push(number);   
//     }
// }
// console.log(arr);
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi "Fizz" al posto del numero e per
// i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 5 che di 3 stampi "FizzBuzz";
// var arr = [];
// for(i=1; i<101; i++)
// {
//     arr.push(i);
//     if(i % 5 ==0){
//         arr[i]= "Buzz";
//     }
//     if(i % 3 ==0){
//         if(i % 5 ==0){
//             arr[i]= "FizzBuzz";
//         }else{

//             arr[i]= "Fizz";
//         }
//     }
// }
// console.log(arr);

// 5 giocatori lanciano i dadi. Il programma verifica chi tira il dado più alto

// var arr = [];
// for(var i = 0; i < 5; i++ ){
//     var rand = Math.floor(Math.random() * 6) + 1;
//     arr.push(rand);
    
// }
// console.log(arr);
// // Verifica valore più alto


// var max = 0;
// var saveIndex;
// for(var i = 0; i < 5; i++){
//     if(arr[i]>max){
//         saveIndex = i;        
//         max = arr[i];
//     }
// }
// console.log("Il giocatore vincitore è il numero " + (saveIndex+1));
// Refactoring
// esercizio precedente concentrato in un solo ciclo for
var saveIndex;
var max = 0;
for(var i = 0;i < 5; i++ ){
    var element = Math.floor(Math.random()*6 +1);
    console.log("elemento " + (i+1) + " : " + element);
    if(element > max){
        saveIndex = i;
        max = element;
    }
}
console.log("Il giocatore vincente è il numero: " + (saveIndex+1))