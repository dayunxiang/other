;
// 函数节流
function throttle(fn,delay)
{
    var timer = null;

    return function(){
       clearTimeout(timer);
       timer = setTimeout(function(){
           fn.apply(this,arguments);
       }, delay || 500 );
   }
}
//调用演示
// window.onresize = throttle( function(){
//     console.log( "666666" );
// });