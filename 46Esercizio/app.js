// Campo minato
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100-16) volte di inserire un numero alla volta,
// sempre compreso tra 1 e 100. L'utente non può inserire più volte lo stesso numero. Se il 
// numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua  chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile 
// di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente
// ha inserito un numero consentito.
// BONUS
// all'inizio il software chiede anche il livello di difficoltà come segue:
// difficoltà 1 => 50
// difficoltà 2 => 80
// difficoltà 3 => 100
function campominato(){
    function difficult(){
        do{
        input = parseInt(prompt('seleziona la difficoltà tra: 1, 2, 3'));
        if(input == 1){
            return 50;
        }else if(input == 2){
            return 80;
        }else if(input == 3){
            return 100;
        }else{
            alert('Valore non valido');
        }
        }
        while(input!==1 || input!==2 || input!=3)
    }
    var diff = difficult();
    var mine = forbidden(diff);
    function forbidden(max){
        var forbiddenNumber = [];
        while(forbiddenNumber.length < 16){
            x = Math.floor(Math.random()*max) +1;
            if(!forbiddenNumber.includes(x)){
                forbiddenNumber.push(x);
            }
        }
        console.log(forbiddenNumber);
        return forbiddenNumber;
    }
    game(mine,diff);
    function game(mine,max){
        alreadyPut = [];
        while(alreadyPut.length < max - mine.length){
            choice = parseInt(prompt('Inserisci il numero'));
            if(mine.includes(choice)){
                console.log('HAI PERSO');
                break;
            }else{
                if(alreadyPut.includes(choice)){
                    console.log('Numero già inserito!');
                }else if (!alreadyPut.includes(choice) && choice >=1 && choice <= max){
                    console.log('Bravo! Continua così: hai inserito: ' + choice);
                    alreadyPut.push(choice);
                    console.log(alreadyPut,alreadyPut);
                }else{
                    alert('Valore non valido');
                }
            }
        }
        if(!mine.includes(choice)){
        console.log('Hai vinto! Hai inserito consecutivamente ' + alreadyPut.length + ' numeri corretti!');
        }
            
    
        }
    }
campominato();