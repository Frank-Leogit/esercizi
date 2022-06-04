var km = parseInt(prompt("Inserisci il numero di chilometri che vorresti percorrere:"));
var age = parseInt(prompt("Inserisci la tua età(hai uno sconto in base all'età!):"));
var discount = 1;
var message = document.getElementById("price");
if(age <= 18){
    
    discount = 0.8;
}else if(age >= 65){
    
    discount = 0.6;
}
console.log(discount, price);
var price = km * discount * 0.21;
message.innerHTML = "Il costo del tuo viaggio è di " + price + " euro.";
