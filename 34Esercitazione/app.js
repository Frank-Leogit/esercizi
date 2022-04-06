// pari o dispari
var rnd = Math.floor(Math.random() * 100);
var resto = rnd % 2;
console.log(rnd, resto);
if (resto==0){
    document.getElementById("evenAndOdd").innerHTML = rnd + " Il numero è pari";
}
else {
    document.getElementById("evenAndOdd").innerHTML = rnd + " Il numero è dispari";
}
// Minuti rimanenti
var d = new Date();
var minutes = d.getMinutes();
var remain = 60 - minutes;
document.getElementById("minutes").innerHTML = "I minuti rimanenti per la fine dell'ora sono " + remain;
// Età maggiore
firstAge = prompt("Inserisci la prima età");
secondAge = prompt("Inserisci la seconda età");
console.log(firstAge, secondAge);
if(firstAge>secondAge){
    document.getElementById("age").innerHTML = "La prima persona è più vecchia della seconda persona";
}else if(firstAge<secondAge){
    document.getElementById("age").innerHTML = "La seconda persona è più vecchia della prima persona";
}else if(firstAge==secondAge){
    document.getElementById("age").innerHTML = "La prima e la seconda persona hanno la stessa età";   
}