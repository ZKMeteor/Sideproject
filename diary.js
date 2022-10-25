const date = document.getElementById('date')
const week = document.getElementById('week')
const weather = document.getElementById('weather')
const content = document.getElementById('content')
const del = document.getElementById('del')
const add = document.getElementById('add')
const list = document.getElementById('list')
const addclick = document.getElementById('addclick')
const listarr = []


function render(){
    let html = ''
    listarr.forEach(function(arry){
        html = html + `
        <div id="arr">
            <div id = flex>
                <span>${arry.date}</span>
                <span>星期:${arry.week}</span>
                <span>天氣:${arry.weather}</span>
                <button id="del" class="del" @click="del()">X</button> 
            </div>
                <p>${arry.content}<p>
                <hr>
        </div>
        `;

        date.value = '';
        week.value = nowday;
        weather.value = '';
        content.value = '';
    })
    list.innerHTML = html;



}

add.addEventListener('click',function (){
    listarr.unshift({
         date:date.value,
         week:week.value,
         weather:weather.value,
         content:content.value
    })
    render() 
})



/* del.addEventListener('click',function (){
    listarr.splice(listarr.length-1,1,)
    render() 
})
 */


