// Inserire la distanza da percorrere. Per ogni km il prezzo è di € 2,20.
// Inserire il numero di bagagli per un volo aereo
// Per un bagaglio c'è la maggiorazione del 10%
// da 2 a 4 bagagli è del 25%
// Per più di 4 bagagli è del 50%
var result = document.getElementById("price");
var km = parseInt(prompt("Inserire il numero di chilometri da percorrere: "));
var luggage = parseInt(prompt("Inserire il numero di bagagli da imbarcare: "));
var extraFee = 1.5;
var message = "Il costo totale del volo è di ";

if (luggage == 1){

    extraFee = 1.1;

}else if (luggage <= 4 && luggage >= 2){
        
    extraFee = 1.25;

}
var price = 2.2 * extraFee * km;

result.innerHTML =  message + price.toFixed(2) + " euro.";
    