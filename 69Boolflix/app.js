document.addEventListener('DOMContentLoaded',init)
function init(){
    initVue();
}
function initVue() {
    new Vue({
        el: '#app',
        data: {
            movies: [],
            series: [],
            query: '',
            image: 'https://image.tmdb.org/t/p/w342',
            active: false
            
        },
        methods: {
            search: function(){
                const params = {
                    params: {
                        'api_key': 'e6ad8e614678068d75a6fa7b7217143c',
                        'language': 'it-IT',
                        'query': this.query
                    }
                }
                axios.get('https://api.themoviedb.org/3/search/movie',params)
                .then(data =>{
                    this.movies = data.data.results;
                    console.log(this.movies);     
                })
                .catch(()=> console.log('error'))
                axios.get('https://api.themoviedb.org/3/search/tv',params)
                .then(data =>{
                    this.series = data.data.results;
                    console.log(this.series);     
                })
                .catch(()=> console.log('error'))
                
            },
            imageClass: function(lang){
                if(lang == 'en'){
                    lang = 'united-kingdom';
                }
                if(lang == 'ja'){
                    lang = 'jp';
                }
                if(lang == 'ko'){
                    lang = 'kr';
                }
                return 'flag flag-' + lang
            },
            
            }
        })
    }