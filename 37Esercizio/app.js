// Teoria Array
// var arr = [ 1, 2, 3, 4, 5,];
// console.log('arr',typeof arr, arr);
// arr.push("HELLO");
// console.log('arr',typeof arr, arr);
// console.log('arr[0]', typeof arr[0], arr[0]);
// console.log('arr[1]', typeof arr[1], arr[1]);
// console.log('arr[2]', typeof arr[2], arr[2]);
// console.log('arr[3]', typeof arr[3], arr[3]);
// console.log('arr[4]', typeof arr[4], arr[4]);
// console.log('arr[5]', typeof arr[5], arr[5]);
// console.log('arr[6]', typeof arr[6], arr[6]);
// arr.push("boh");
// console.log('arr',typeof arr, arr);
// arr[3] = 34;
// console.log('arr',typeof arr, arr);
// arr[6] = "serotonian";
// console.log('arr',typeof arr, arr);
// arr[1] = "bootstrap";
// console.log('arr',typeof arr, arr);
// arr[arr.length -1] = "ciao";
// console.log('arr', typeof arr, arr);

// ESERCIZIO
// Crea un array contenente 3 nomi.
// Chiedi un numero da 0 a 2 all'utente e stampa l'elemento dell'array corrispondente.
// var arrName = ["Carlo", "Antonio", "Bruno"];
// var index = parseInt(prompt("Inserisci un numero da 0 a 2"));
// document.getElementById("title").innerHTML = "Il nome scelto è " + arrName[index];

// Stampare un array di elementi da 1 a 1000;
// var arrOne = [];
// for(var i=0 ; i<1000; i++){
//     arrOne[i]=i+1;
//     console.log("arrOne[i]",arrOne[i]);
// }
// Stampare un array di elementi da 1000 a 1;
// var arrTwo = [];
// for(var i=999 ; i>=0; i--){
//     arrTwo[i]=i+1;
//     console.log("arrTwo[i]",arrTwo[i]); 
// }
// Crea un array di 5 nomi e stampali a schermo;
var arrName = ["Ada", "Alberto", "Ludovica", "Milo", "Gianfranco"];
for(i=0; i<arrName.length; i++){
    console.log("arrName[i]",arrName[i]);
}
// Crea un array di numeri e stampa solo i numeri dispari;
var arrNum = [1,2,3,4,5,6,7,8,9]
for(i=0; i<arrNum.length; i=i+2){
    console.log("arrNum[i]",arrNum[i]);
}
