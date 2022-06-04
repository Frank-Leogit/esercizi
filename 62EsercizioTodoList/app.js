function init(){
    initVue();
    
}
function initVue(){
    new Vue({
        el: '#app',
        data: {
            todos: [
                'elem1',
                'elem2',
                'elem3'
            ],
            newTodo: ''
        },
        methods: {
            clickNewTodo : function(){
                if(this.newTodo.length > 0){
                    this.todos.push(this.newTodo);
                    this.newTodo = '';
                }

            },
            deleteTodo : function(index){
                this.todos.splice(index, 1)
            }
        }
    })
}
document.addEventListener('DOMContentLoaded',init)