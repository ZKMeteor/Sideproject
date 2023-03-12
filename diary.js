const date = document.getElementById('date')
const week = document.getElementById('week')
const weather = document.getElementById('weather')
const content = document.getElementById('content')
const del = document.getElementById('del')
const add = document.getElementById('add')
const list = document.getElementById('list')

const listarr = []

function render(){
    let html = ''
    listarr.forEach(function(arry){
        html +=`
        <div id="arr">
            <div id = flex>                
                <span>${arry.date}</span>
                <span>星期:${arry.week}</span>
                <span>天氣:${arry.weather}</span>
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


/* *
**
***
****
let a = ''

for( let i = 4 ; i >= 1 ; i--){
    a +='*' ;
    console.log(a);
}
 */
