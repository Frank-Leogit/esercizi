var eta = prompt("Inserisci la tua età(minore di 60 anni): ");
var year = 2021;
var etaNumber = parseInt(eta);
var sum = year + 60 - eta;
document.getElementById("mainTitle").innerHTML = "Quando avrai 60 anni saremo nell'anno " + sum;
console.log(eta, year, etaNumber, sum);
