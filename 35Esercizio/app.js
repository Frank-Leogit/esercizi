var km = parseInt(prompt("Inserisci il numero di chilometri che vorresti percorrere:"));
var age = parseInt(prompt("Inserisci la tua età(hai uno sconto in base all'età!):"));
var price;
if(age <= 18){
    price = km * 0.8 * 0.21;
    document.getElementById("price").innerHTML = "Il costo del tuo viaggio è di " + price + " euro.";
}else if(age >= 65){
    price = km * 0.6 * 0.21;
    document.getElementById("price").innerHTML = "Il costo del tuo viaggio è di " + price + " euro.";
}else{
    price = km * 0.21;
    document.getElementById("price").innerHTML = "Il costo del tuo viaggio è di " + price + " euro.";
}
