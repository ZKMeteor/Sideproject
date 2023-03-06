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
      targetElement.classList.add('animate__fadeInDown');
      targetElement.style.opacity='1'
    }else{
        targetElement.classList.remove('animate__fadeInDown');
        targetElement.style.opacity='0'
    }
  });


let year = new Date().getFullYear();

const footer = new Vue({
    el:'.footer',
    data:{
        year,
    }
})


