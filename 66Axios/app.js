document.addEventListener('DOMContentLoaded',init)
function init(){
    initVue();
}
function initVue(){
    new Vue({
        el: '#app',
        data:{
            emails: []
        } ,
        mounted(){
            for (let i = 0; i < 10; i++) {
                         
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(data => {
                    const email = data.data.response;
                    this.emails.push(email);
                })
                .catch(()=> console.log('error'))
            }
        }
    })
}