function init(){
    // Stampare a schermo un messaggio
    // all’interno di un h1, utilizzando i data.
    // Bonus: Aggiungere un’immagine presa
    // anch’essa da un data

    new Vue ({
        el: '#app',
        data:{
            'message': 'Ciao, sono uno splendido paesaggio',
            'source': 'img/4.jpg'
        }
    })

    //     new Vue({
//     el: '#app',
//     data: {
//         'counter': 0
//     },
//     methods: {
//        increase: function(){
//            this.counter +=1;
//     },
//     decrease: function(){
//         this.counter -=1;
//  }
// }});
}
$(init);