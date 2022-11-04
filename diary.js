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
                <button id="del" class="del">X</button> 
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

/* add.addEventListener('click',function (){
    listarr.unshift({
         date:date.value,
         week:week.value,
         weather:weather.value,
         content:content.value
    })
    render();
}) */

/* 
let time =new Date();
let nowdate = new Date().getDate();
let nowday = new Date().getDay();
let nowyear = new Date().getFullYear();
let nowmonth = new Date().getMonth(); 

if(nowday == 0){
        nowday = "日";
    }else if(nowday==1){
        nowday = "一";
    }
    else if(nowday==2){
        nowday = "二";
    }else if(nowday==3){
        nowday = "三";
    }
    else if(nowday==4){
        nowday = "四";
    }
    else if(nowday==5){
        nowday = "五";
    }
    else if(nowday==6){
        nowday = "六";
    }
nowmonth+=1;
let YWDate = String(nowyear)+'-'+String(nowmonth)+'-'+String(nowdate);

console.log(YWDate,nowday,);
// v-blind:單向輸出 簡寫 :  v-model:雙向輸出-->使用在表單上  簡寫 v-model=""


const vm = new Vue({
    el:'.Full',  //el選擇 div  的id或class
    data:{       //儲存數據
        nowday:nowday,
        nowdate:YWDate, 
        addclick:0,

    },
    methods:{   //函數
        del(){
            if (this.addclick > 0){
                this.addclick--;
            }
        },
        addplus(){
            this.addclick++;
        }

    },
    computed:{      //計算 get&set        

    },
    watch:{
        addclick:{
            handler(newvalue,oldvalue){
                console.log(addclick,newvalue,oldvalue);
            }
        }
    }
})  */

/* del.addEventListener('click',function (){
    listarr.splice(listarr.length-1,1,)
    render() 
}) */


/* 
*
**
***
****
let a = ''

for( let i = 4 ; i >= 1 ; i--){
        a+='*';
        console.log(a);
    '\n';
} */