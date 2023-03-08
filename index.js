Vue.config.productionTip = false;

window.addEventListener('scroll', function() {
    // 取得目標元素的位置
    var targetElement = document.getElementById('title2');
    var targetPosition = targetElement.getBoundingClientRect().top;
    
    // 取得當前捲軸的位置
    var scrollPosition = /* window.innerHeight-600 + */ window.scrollY;
    
    // 當捲軸滾動到目標元素的位置時，執行特效的程式碼
    if (scrollPosition > targetPosition) {
      // 在這裡加入特效的程式碼
/*       targetElement.classList.remove('animate__rotateOutUpLeft'); */
      targetElement.classList.add('animate__fadeInDown');
      targetElement.style.opacity='1'
    }else{
        targetElement.classList.remove('animate__fadeInDown');
/*         targetElement.classList.add('animate__rotateOutUpLeft'); */
        targetElement.style.opacity='0'
    }
  });


// 初始化变量 changeskin
var changeskin = true;

// 使用 setInterval() 函数每隔 5 秒执行一次更改背景颜色的代码
setInterval(() => {
  var nav = document.querySelector('.nav');
  var nav2a = document.querySelectorAll('.nav-2 a');
  var title3 = document.querySelector('.title3');
  var project = document.querySelector('.project');
  // 根据 changeskin 的状态来更改背景颜色
  if (changeskin) {
    nav.style.backgroundColor = 'black';
    nav2a.forEach(a=>{
      a.style.color = 'red';
    })
    title3.style.backgroundColor = 'black';
    project.style.color = 'red';
  } else {
    nav.style.backgroundColor = 'white';
    nav2a.forEach(a=>{
      a.style.color = '#0d6efd';
    })
    title3.style.backgroundColor = 'white';
    project.style.color = 'purple';
  }
  
  changeskin = !changeskin; // 反转状态
}, 6000);

let year = new Date().getFullYear();

const footer = new Vue({
    el:'.footer',
    data:{
        year,
    }
})


