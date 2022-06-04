function initVue(){
    new Vue ({
        el: '#app',
        data : {
            imgs:[
                'img/download1.jpg',
                'img/download2.jpg',
                'img/download3.jpg',
                'img/download4.jpg',
          ],
          activeIndex: 0,
        },
        methods : {
            nextImg: function(){
                this.activeIndex++;
                if(this.activeIndex > this.imgs.length-1){
                    this.activeIndex = 0;
                }
            },
            prevImg: function(){
                this.activeIndex--;
                if(this.activeIndex < 0){
                    this.activeIndex = this.imgs.length-1;
                }
            }
        },
        mounted(){
            setInterval(() => {
                this.nextImg();
            },3000);
        }
        
    });
}
function init(){
    initVue();
}
document.addEventListener('DOMContentLoaded', init);