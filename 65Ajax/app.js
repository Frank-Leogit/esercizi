document.addEventListener('DOMContentLoaded',init);
function init(){
    for (let i = 0; i < 10; i++) {
        mailGenerate();
        
    }
}
function mailGenerate(){
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        method: 'GET',
        success: function(data){
            
            const list = $('#mail-list');
            let mail = data.response;
            list.append(`<div>${mail}</div>`);

    },
    error: function(){
        console.log('error');
    }
})}