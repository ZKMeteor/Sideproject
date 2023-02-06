Vue.config.productionTip = false;

/* $(document).ready(function(){
    $(body).on(finction(){

    })
}) */

let year = new Date().getFullYear();

const footer = new Vue({
    el:'.footer',
    data:{
        year,
    }
})


