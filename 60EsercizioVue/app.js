function init(){
    new Vue({
        el: '#app',
        data: {
            'firstImg':true,
            'limit' : 20,
            'value' : 0,
            'inc' : 0
        },
        methods: {
            flipImg: function (){
                this.firstImg = !this.firstImg;
            },
            addNumber: function(){
                this.limit += 2;
            },
            flipValue: function(){
                this.value= this.value == 0 ? 1 : 0;
            },
            increaseFirstNumber: function(){
                this.inc+=2;
            }

        
    }});
}
document.addEventListener('DOMContentLoaded',init);
// Ternario: assegnazione condizionata
// let x = true;
// let z = x? 1 : -1
// let x = true;
// if(x){
//     var z = 1;
// }else{
//     var
// }