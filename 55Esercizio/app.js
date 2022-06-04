
$(document).ready(init);
function init(){
    // keyEventTest();
    // zucchine();
    // reverse();
    // mergeArray();
    arrPortion();
}
function keyEventTest(){
    var input = $('#text');
    input.keyup(function(){
        var str = input.val();
        var lng = str.length;
        if(lng>3){
            str = str.slice(0, -1);
        }
        input.val(str);
    });
    input.keydown(function(){
        var str = input.val();
        var lng = str.length;
        if(lng>3){
            str = str.slice(0, -1);
        }
        input.val(str);
    });
    input.keypress(function(event){
        console.log(event.which);
        if(event.keyCode == 13)
        var str = $('#text').val();
        $('h1').text(str);
    })
}
function zucchine(){
   var arr = [ { 'varietà': 'da orto' , 'peso': '200grammi' , 'lunghezza': '20cm'},
            { 'varietà': 'da orto' , 'peso': '150grammi' , 'lunghezza': '18cm'},
            { 'varietà': 'da orto' , 'peso': '130grammi' , 'lunghezza': '23cm'},
            { 'varietà': 'da orto' , 'peso': '175grammi' , 'lunghezza': '21cm'},
            { 'varietà': 'da orto' , 'peso': '185grammi' , 'lunghezza': '22cm'},
            { 'varietà': 'da orto' , 'peso': '159grammi' , 'lunghezza': '18cm'},
            { 'varietà': 'da orto' , 'peso': '167grammi' , 'lunghezza': '24cm'},
            { 'varietà': 'da orto' , 'peso': '163grammi' , 'lunghezza': '19cm'},
            { 'varietà': 'da orto' , 'peso': '158grammi' , 'lunghezza': '20cm'},
            { 'varietà': 'da orto' , 'peso': '209grammi' , 'lunghezza': '25cm'}];
            var arrShort = [];
            var arrLong = []
            for(var i=0; i<arr.length; i++){
                if((parseInt(arr[i].lunghezza)) < 22){
                    arrShort.push(arr[i]);
                }else{
                    
                    arrLong.push(arr[i]);
                }
            }
            console.log('zucchine superiori a 22 cm: ', arrLong);
            console.log('zucchine inferiori a 22 cm: ', arrShort);
            console.log(sommaPeso(arrLong),sommaPeso(arrShort));
            
                
            
            // var peso = 0;
            // var lunghezza = 0;
            // for(var i=0 ; i<arr.length; i++){
            //     peso+= parseInt(arr[i].peso);
            //     lunghezza+= parseInt(arr[i].lunghezza);
            // }
            // console.log('il peso complessivo delle zucchine è di: '+ peso +' grammi');
            // console.log('la lunghezza complessiva delle zucchine è di: '+ lunghezza +' cm');
        }
function sommaPeso(arr){
    var peso = 0;
    for(var i =0; i<arr.length;i++){
        peso+= parseInt(arr[i].peso);
    } 
    return peso;
}
function reverse(string){
    arr = prompt('Dimmi la parola');
    // word = [];
    // for(var i=arr.length-1; i>=0; i--){
    //     word[arr.length -i -1]=arr[i];
    // }
    // console.log(word.join(''));
    word2 = '';
    for(var i=0; i<arr.length; i++){
        word2 = arr[i] + word2;
    }
    console.log(word2);
}
function mergeArray(){
    arr1= ['1','2','3','4'];
    arr2= ['a','b','c'];
    arr3=[];
    var lng = arr1.length;
    if(arr2.length>arr1.length){
        lng = arr2.length;
    }
    for(var i=0; i < lng ;i++){
        if(i<arr1.length){
            arr3.push(arr1[i])
        }
        if(i<arr2.length){
            arr3.push(arr2[i])
        }
    }
    console.log(arr3);
}
function arrPortion(){
    var arr = [0,1,2,3,4,5,6,7,8,9];
    var b = Math.floor((Math.random()*arr.length)+1);
    var a = Math.floor(Math.random()*b);
    console.log(arr.length, b, a);
    var diff = b - a;
    var part = [];
    for(var i=0; i<diff; i++){
        part.push(arr[a+i]);
    }
    console.log(part);

}

