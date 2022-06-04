// Ciclo while
// var nomi = ["roberto","alcide", "alberto", "fabio"];
// for (var i = 0; i< nomi.length; i++){
//     console.log(nomi[i]);
// }
// // Traduzione in ciclo while
// var i = 0;
// while(i<nomi.length){
//     console.log(nomi[i]);
//     i++;
// }
// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana"
// della lista in cui il nuovo utente si trova.
// var arr = ["Rossi", "Gamberini", "Larini", "Arcidiacono", "Defano", "Drigo", "Leotta"];
// var cognome = prompt("Inserisci il cognome: ");
// arr.push(cognome);
// console.log(arr);
// arr.sort();
// console.log(arr);
// var i = 0;
// while(i < arr.length){
//     if(arr[i] == cognome){
//         break;
//     }
//     i++;
// }
// console.log("La posizione del cognome inserito è: " + (i+1));
// var names = ['Michele', 'Fabio', 'Roberto'];
// var lastNames = ['Forghieri', 'Papagni', 'Marazzini'];
// var fullNames = [];

// for(var i = 0; i < 5; i++){
//     fullNames[i] = names[Math.floor(Math.random() * names.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
// }
// console.log(fullNames); 

// var i = 0;
// while(i < 5){
//     fullNames[i] = names[Math.floor(Math.random() * names.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]; 
//     i++;
// }
// console.log(fullNames); 

// Creare due array che hanno un numero di elementi diversi. Aggiungi elementi
// casuali all'array  che ha meno elementi fino a quando non avrà lo stesso numero
// di elementi dell'altro; 
// var arr1 = [14, 7, 9, 0];
// var arr2 = [15];
// console.log(arr1.length,arr2.length);
// if(arr1.length == arr2.length){
//     console.log("Hai finito");

// }
// else if(arr1.length < arr2.length){
//     var i = 0;
//     while(i < arr2.length - arr1.length){
//         var element = prompt("Inserisci elemento");
//         arr1.push(element);

//     }
// }else{
//     var i = 0;
//     while(i < arr1.length - arr2.length){
//         var element = prompt("Inserisci elemento");
//         arr2.push(element);

//     }
// }
// console.log(arr1, arr2);
// var limit = parseInt(prompt("Inserire il valore limite: "));
// var sum = 0;
// while(sum<=limit){
// var element = parseInt(prompt("Inserire un valore: "));
// sum += element;
// }

