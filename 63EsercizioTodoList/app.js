function initVue(){
    new Vue({
        el: '#app',
        data: {
            taskList : [
                ' Lavare i Panni',
                ' Meeting Aziendale',
                ' Chiamata con Carla'
            ],
            newTask : ''
        },
        methods: {
            addTask: function(){
                if(this.newTask.length >0){
                    this.taskList.push(` ${this.newTask.charAt(0).toUpperCase()+this.newTask.slice(1)}`);
                    this.newTask = '';
                }
            },
            removeTask: function(index){
                console.log(this.taskList[index]);
                this.taskList.splice(this.index, 1);
            }

        }
    });
}
function init(){
    initVue();
}
document.addEventListener('DOMContentLoaded',init);