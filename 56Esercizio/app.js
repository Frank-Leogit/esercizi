$(document).ready(init);
function init(){
    // bici();
    squadraCalcio();
    
}
function bici(){
//     Creare un array di oggetti: ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// const bikes = [{'name': 'Legnano','weight': 7.6},{'name': 'Bianchi','weight': 8.34},{'name': 'Trek','weight': 2.5}];
// let smallBike = { 'name': '', 'weight': Number.MAX_SAFE_INTEGER}
// for(let i=0; i<bikes.length;i++){
//     const bike = bikes[i];
//     const {weight} = bike;
//     if(weight<smallBike.weight){
//         smallBike=bike;
//     }
// }
// console.log('bici più leggera: ',smallBike);
// }
const bikes = [
    {'nome':'Trek','peso': 1.5},
    {'nome':'Ravezzani','peso': 0.3},
    {'nome':'Bahrain Merida','peso': 3.2}
];
let smallBike = {'nome':'','peso':Number.MAX_SAFE_INTEGER};
for(let i=0; i<bikes.length; i++){
    let {peso} = bikes[i];
    if(peso<smallBike.peso)
    {
        smallBike = bikes[i];
    }
}
console.log(smallBike);

}
function squadraCalcio(){
//     Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre
// saranno tutte settate a 0.
let arr = [{'nome':'','punti':0,'falli':0},
        {'nome':'','punti':0,'falli':0},
        {'nome':'','punti':0,'falli':0},
        {'nome':'','punti':0,'falli':0}];
for(let i = 0; i<arr.length; i++){
    arr[i].nome = prompt('Inserire nome squadra');
    // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti
    arr[i].punti = Math.floor(10 + Math.random()*10);
    arr[i].falli = Math.floor(10 + Math.random()*10);
}
console.log(arr);
const arrFoulsPoints = [];
for(let i =0; i<arr.length;i++){
    let {falli,punti}= arr[i];
    let obj={falli,punti};
    arrFoulsPoints.push(obj);

}
 console.log(arrFoulsPoints);

}














