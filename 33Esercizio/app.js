var firstName = prompt("Inserisci il tuo nome: ");
var lastName = prompt("Inserisci il tuo cognome: ");
var favColor = prompt("Inserisci il tuo colore preferito in inglese: ");
console.log(firstName, lastName, favColor);
document.getElementById("psw").innerHTML = "Il la tua password non molto sicura è: " + firstName + lastName + favColor;
document.getElementById("psw").style.color = favColor;