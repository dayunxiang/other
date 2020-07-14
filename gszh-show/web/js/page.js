/* 函数节流 开始 ****************/
function throttle( fn, delay )
{
    var timer = null;
    return function()
           {
               clearTimeout( timer );
               timer = setTimeout( function(){
                   fn.apply( this, arguments );
               }, delay || 1 );
           }
}
/**************** 函数节流 结束 */


// 窗口大小发生改变，刷新页面
window.onresize = throttle( function(){
    window.location.reload();
},500);



//获取URL参数
function getParams()
{
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if(url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}



// 计算分页
function paging(data, singPage, getPage)
{
    // data是数据，数据格式为数组
    // singPage表示一页多少条，
    // getPage表示要获取第几页


    if(!data instanceof Array)
    {
        alert('要传递数组形式的数据类型');
        return false;
    }

    if( (typeof singPage != typeof 3) || (1 > singPage) || (Math.floor(singPage) != singPage) )
    {
        alert('分页数必须是数字，且为整数!');
        return false;
    }

    if( (getPage > Math.ceil(data / singPage)) || (getPage < 1) )
    {
        alert('获取页数不合法');
        return false;
    }

    // 分页数量超过总条数 则一共就只有一页
    if( data.length < singPage )
    {
        return data;
    }

    var startIndex = singPage * (getPage - 1);
    var endIndex   = Math.min(singPage * getPage -1,data.length -1);
    var arr        = [];

    for(;startIndex <= endIndex; startIndex++)
    {
        arr.push(data[startIndex]);
    }

    return arr;
}


