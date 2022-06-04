// Creare due tag div con due id diversi.
// un div avrà il testo colorato di rosso mentre l'altro di verde.
// Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari
// e in verde i numeri pari
var numbers = [15, 20, 1, 3, 22];
for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        document.getElementById("green").innerHTML += "<br>" + numbers[i] + "<br>";
    }else{
        document.getElementById("red").innerHTML += "<br>" + numbers[i] + "<br>";
    }
}