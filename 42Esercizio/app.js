// Introduce la possibilità di selezionare le checkbox non solo dai 
// riquadri ma cliccando su tutto lo spazio disponibile
var lis = document.getElementsByTagName('li');
for(var i=0; i<lis.length; i++){
    var li= lis[i];
    li.addEventListener('click', function(){

        var clickedLi = this;
        var clickedLiChildrens = clickedLi.children;
        var clickedCheckbox = clickedLiChildrens[0];
        clickedCheckbox.checked = !clickedCheckbox.checked;
        console.log(clickedLi);
        
        
        
    });
}
// Generazione pulsante di calcolo
var priceBtn = document.getElementById('calculate');
priceBtn.addEventListener('click', function(){
// Prende il contenuto dell'input burgername
    var burgerName = document.getElementById('burger-name').value;
//  Verifica che il campo nome panino non sia vuoto. se non lo è,
//  richiama i valori delle checkbox tramite classe e verifica se ogni checkbox è selezionata.
//  Per ogni checkbox selezionata introduce il prezzo e lo somma al prezzo iniziale 
    if (burgerName.length < 1){
        alert('Prego inserire nome panino')
    }else{
        var finalPrice = 10;
        var checkboxs = document.getElementsByClassName('ingred');
        for( var i = 0; i < checkboxs.length; i++){
            var checkbox = checkboxs[i];
            var isChecked = checkbox.checked;
            var price = parseInt(checkbox.dataset.price);
            
            if(isChecked){
                finalPrice += price;
            }
        }
// Introduce l'array di coupon e verifica che quello inserito dall'utente 
// combaci, applicando lo sconto.
        var coupons = [
            '123456ABCDEF',
            '59478HUIDDIK',
            '86921UTVDNIO',
        ];
        var finded = false;
        var burgerCoupon = document.getElementById('burger-coupon').value;
        // REFACTORING
        // if(coupons.includes(burgerCoupon)){
        //     finalPrice -= 0.2 * finalPrice;
        // }
        for(var i=0; i<coupons.length; i++){
            var coupon = coupons[i];
            if(burgerCoupon == coupon){
                finded = true;
            }
        }
        if(finded){
            finalPrice -= 0.2 * finalPrice;
        }

// Stampa a schermo l'importo del prezzo 
        var spanprice = document.getElementById('price');
        spanprice.innerHTML = finalPrice
    }







})