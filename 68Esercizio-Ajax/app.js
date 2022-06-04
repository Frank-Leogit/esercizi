// attraverso una chimata ajax all'API di boolean 
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// utilizzando Vue, stampiamo a schermo una card per ogni album 
// BONUS creare una select con tutti  i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd 
//BONUS 2 ordinare i dischi per anno di uscita  
document.addEventListener('DOMContentLoaded',init)
function init(){
    initVue();
    // initJquery();
}
function initVue(){
    new Vue({
        el: '#app',
        data: {
            album: [],
            selectedGenre: '',
            filteredAlbums: []

        },
        methods: {
            filteredItems() {
                return this.album.filter((item) => {
                    return item.genre.includes(this.selectedGenre);
                  });
                }
        },
        mounted() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(data => {
                this.album = data.data.response})
                .catch(()=> console.log('error'))
        

        }




    })


}
// function initJquery(){
//     $.ajax({
//         url: " https://flynn.boolean.careers/exercises/api/array/music",
//         method: 'GET',
//         success: function (data){
//            const album = data.response;
//            console.log(album);
//            for (let i = 0; i < album.length; i++) {
//                $('.row').append(`
//                <div class="box">
//                <div>${album[i].author}</div>
//                <div>${album[i].genre}</div>
//                <img src="${album[i].poster}" width = 50px height = 50px>
//                <div>${album[i].title}</div>
//                <div>${album[i].year}</div>
//                </div>`)
               
//            }
            
//         },
//         error: function(){console.log('error');}
//     })
// }