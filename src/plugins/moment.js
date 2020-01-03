
//安装插件的三个步骤
//1.定义一个对象
var getNowFormatDate = {};

//2.为这个对象增加一个install方法 有两个参数
//参数1:vue 根组件 参数2:代表的在安装插件的时候,use传递的第二个参数
getNowFormatDate.install = function(Vue){
     //2.1只需要在vue.prototype原型上面增加相应大方法或者属性,则以后在vue实例对象里面可以调用该方法
     Vue.prototype.getNowFormatDate = function() {
        var date = new Date();
        var seperator1 = ".";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
      };
}
//3.导出这个对象
export default getNowFormatDate