Vue.config.productionTip = false;

let year = new Date().getFullYear();

const footer = new Vue({
el:'.footer',
data:{
    year:year,
}
})
