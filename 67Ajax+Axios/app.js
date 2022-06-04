// attraverso vue&axios scaricare 10 numeri interi e produrre le box corrispondenti, colorando
// di verde nel caso pari e rosso nel caso dispari
  
document.addEventListener('DOMContentLoaded',init)
function init(){
    initVue();
}
function initVue(number){
    const items = parseInt(prompt("Quante box vuoi creare?"));
    new Vue({
        el: '#app',
        data: {
            numbers: [],
            sum: ''
        },
        mounted(){
                
                
                axios.get('https://flynn.boolean.careers/exercises/api/array/integers',
                {
                    params: {
                        min: 1,
                        max: 100,
                        items: items
                    }
                })
                .then(data => {
                    this.numbers = data.data.response;
                    this.sum = 0;
                    for (let i = 0; i < this.numbers.length; i++) {
                        this.sum = this.sum + this.numbers[i];
                        
                    }
                })
                .catch(()=> console.log('error'))
    }
        }
            


    )
}