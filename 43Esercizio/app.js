// Esercitazione guidata
var generaBtn = document.getElementById("genera");
var annullaBtn = document.getElementById("annulla");
var price = 0.21;
var costoTotale = 0;

generaBtn.addEventListener('click',function(){
    // console.log("ho cliccato sul pulsante genera");
    var name = document.getElementById('name').value;
    console.log(name);
    var distanza = parseInt(document.getElementById('distance').value);
    console.log(distanza);
    var eta = document.getElementById('eta').value;
    console.log(eta);

    if(name != '' && distanza > 0 && eta != ''){
        
        costoTotale = distanza * price;
    //   blocco else if applicazione sconto
    if(eta == 1){
        console.log("minorenne", eta);
        var discount = 0.8;
        costoTotale *= discount;

    }else if (eta == 3){
        console.log("over 65", eta);
        var discount = 0.6;
        costoTotale *= discount;
    }}
    else{
        console.log('nah');
    }
    document.getElementById('costo-totale').innerHTML = costoTotale;
    var cp = Math.ceil(Math.random() * (100000-90000) + 90000); 
    document.getElementById('codice').innerHTML = cp;
});

// annullaBtn.addEventListener('click',function(){
//     console.log("ho cliccato sul pulsante annulla")
// })
