// Funzioni
function randNum(){
    num = Math.floor(Math.random() * 10 +1);
    return num;
}

function pair(number){
    if(number%2==0){
        return('Il numero è pari')
    }else{
        return('Il numero è dispari')
    }
}
for(var i = 0; i<10; i++){
    var casual = randNum();
    console.log(casual);
    console.log(pair(casual));
}
