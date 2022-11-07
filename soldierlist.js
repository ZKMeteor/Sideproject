
const vm = new Vue({
   el:'.box',
   data:{
      user:{
         name:'',
         hai:'',
         wei:'',
         acc:'',
      }
   },
   methods:{
      tableToExcel(){
         //要匯出的json資料
         var jsonData = [
           {
             name:this.user.name,
             hai:this.user.hai,
             wei:this.user.wei,
             acc:this.user.acc
           },
           {

           },
         ]
         //列標題，逗號隔開，每一個逗號就是隔開一個單元格
         let str = `姓名,身高,體重,身分證號\n`;
         //增加\t為了不讓表格顯示科學計數法或者其他格式
         for(let i = 0 ; i < jsonData.length ; i++ ){
           for(let item in jsonData[i]){
               str+=`${jsonData[i][item] + '\t'},`;     
           }
           str+='\n';
         }
         //encodeURIComponent解決中文亂碼
         let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
         //通過建立a標籤實現
         var link = document.createElement("a");
         link.href = uri;
         //對下載的檔案命名
         link.download =  this.user.name+"資料表.csv";
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
       }
      
   },
});

/* document.getElementById('btn').addEventListener("click", tableToExcel); */

