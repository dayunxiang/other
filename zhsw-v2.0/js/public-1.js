/*
    如有疑问可联系作者：674059309@qq.com
    http://www.qiaodaima.me
*/


$(function(){
    /* 弹窗 开始 ****************/
    $.fn.pop = function(options)
    {
        var _this = $(this),
            oDefaultOptions = {
                "init"       : null,
                "callBack"   : null
            };

        oDefaultOptions = $.extend( oDefaultOptions, options || {} );

        // 显示遮罩层和相对应的弹窗
        _this.parents('body').find('.pop-mask').show();
        // $('.pop-mask').show();
        _this.show();

        var nWindowHeight = $(window).height();
        _this.css("height","auto");
        _this.find('.pp-contain').css("height","auto");


        if( _this.find('.pp-contain').innerHeight() > nWindowHeight -120 )
        {
            _this.find('.pp-contain').innerHeight( nWindowHeight -120 );
            _this.find('.pp-contain').niceScroll({
                cursorcolor: "#ccc",
                mousescrollstep: 40,
                oneaxismousemode: "auto"
            });
        }

        var nPopHeight = _this.find('.pp-title').outerHeight() +
                 _this.find('.pp-contain').outerHeight() +
                 _this.find('.pp-edit').outerHeight();

        _this.height( nPopHeight );

        // 初始化操作
        if( oDefaultOptions.init )
        {
            oDefaultOptions.init();
        }

        // 关闭弹窗
        _this.on('click','.btn-close, .btn-cancel',function(){
            _this.hide();
            _this.parents('body').find('.pop-mask').hide();
        });

        // 回调
        if( oDefaultOptions.callBack )
        {
            oDefaultOptions.callBack();
        }

        window.onresize = throttle( function(){

            var nWindowHeight = $(window).height();
            _this.css("height","auto");
            _this.find('.pp-contain').css("height","auto");

            if (_this.find('.pp-contain').innerHeight() > nWindowHeight - 120)
            {
                _this.find('.pp-contain').innerHeight(nWindowHeight - 120);
                _this.find('.pp-contain').niceScroll({
                    cursorcolor: "#ccc",
                    mousescrollstep: 40,
                    oneaxismousemode: "auto"
                });
            }

            var nPopHeight = _this.find('.pp-title').outerHeight() +
                _this.find('.pp-contain').outerHeight() +
                _this.find('.pp-edit').outerHeight();

            _this.height(nPopHeight);
        });
    }
    /**************** 弹窗 结束 */


    /* 选项卡定义 开始 ****************/
    $.fn.tab = function(options)
    {
        var _this = $(this),
            oDefaultOptions = {
                "navWrap"         : ".nav-wrap",
                "conWrap"         : ".con-wrap",
                "tabNav"          : ".tab-nav",
                "tabCon"          : ".tab-con",
                "activeClassName" : "active",
                "event"           : "click",
                "callBack"        : null
            };

        oDefaultOptions = $.extend( oDefaultOptions, options || {} );

        _this.find(oDefaultOptions.tabNav).on(oDefaultOptions.event,function(){
            var nIndex = $(this).index();
            $(this).addClass( oDefaultOptions.activeClassName ).siblings().removeClass( oDefaultOptions.activeClassName )
                   .parents( oDefaultOptions.navWrap ).siblings( oDefaultOptions.conWrap )
                   .find( oDefaultOptions.tabCon ).removeClass( oDefaultOptions.activeClassName ).eq( nIndex ).addClass(oDefaultOptions.activeClassName);

            if( oDefaultOptions.callBack )
            {
                oDefaultOptions.callBack( $(this) );
            }

        });
    }
    /**************** 选项卡定义 结束 */


    /* 表单 单选 全选 开始 **************/
    $.fn.checkGroup = function( options )
    {
        // 默认参数配置
        var oDefaultOptions = {
            "allCheckboxName"       : ".all-checkbox",//全选 选择器名称
            "singleCheckboxName"    : ".single-checkbox",//单选 选择器名称
            "checkClassName"        : "checked", //被选中的标识
            "callBack"              : null //回调函数
        };

        // 如果传递了参数，则使用传递后的参数值
        oDefaultOptions  = $.extend( oDefaultOptions, options || {} );

        // 链式调用
        return $(this).each( function(){

            var _this        = $(this);
            var $cheakAll    = _this.find( oDefaultOptions.allCheckboxName );
            var $checkSingle = _this.find( oDefaultOptions.singleCheckboxName );

            //执行初始化操作，即 如果标识为选中，则给相应的表单赋值
            //如果全选按钮一开始就标识为选中，择所有的表单都标识为选中
            if( $cheakAll.length == 1 && $cheakAll.hasClass( oDefaultOptions.checkClassName ) )
            {
                $cheakAll.find('input').prop('checked',true);
                $checkSingle.addClass( oDefaultOptions.checkClassName ).find('input').prop('checked',true);
            }
            //如果单选按钮一开始就全部标识为选中，择所有的表单都标识为选中
            else if( $checkSingle.length > 0 && $checkSingle.filter( '.' + oDefaultOptions.checkClassName ).length == $checkSingle.length )
            {
                $cheakAll.addClass( oDefaultOptions.checkClassName ).find('input').prop('checked',true);
                $checkSingle.find('input').prop('checked',true);
            }
            // 若干个单选按钮标识被选中
            else if( $checkSingle.filter( '.' + oDefaultOptions.checkClassName ).length )
            {
                $checkSingle.filter( '.' + oDefaultOptions.checkClassName ).find('input').prop('checked',true);
            }

            // 全选按钮点击事件
            $cheakAll.on('click',function(){

                if( $(this).find('input').prop('checked') )
                {
                    $(this).addClass( oDefaultOptions.checkClassName );
                    $checkSingle.addClass( oDefaultOptions.checkClassName ).find('input').prop('checked',true);
                }
                else
                {
                    $(this).removeClass( oDefaultOptions.checkClassName );
                    $checkSingle.removeClass( oDefaultOptions.checkClassName ).find('input').prop('checked',false);
                }

                //回调函数
                if( oDefaultOptions.callBack )
                {
                    oDefaultOptions.callBack();
                }
            });

            //单选按钮点击事件
            $checkSingle.on('click',function(){

                var isCheckAll = true;

                if( $(this).find('input').prop('checked') )
                {
                    $(this).addClass( oDefaultOptions.checkClassName );
                    $checkSingle.each(function(){
                        if( !$(this).find('input').prop('checked') )
                            isCheckAll = false;
                    });
                    if( isCheckAll )
                        $cheakAll.addClass( oDefaultOptions.checkClassName ).find('input').prop('checked',true);
                }
                else
                {
                    $(this).removeClass( oDefaultOptions.checkClassName );
                    $cheakAll.removeClass( oDefaultOptions.checkClassName ).find('input').prop('checked',false);
                }

                //回调函数
                if( oDefaultOptions.callBack )
                {
                    oDefaultOptions.callBack();
                }
            });
        } );
    }
    /************** 表单 单选 全选 结束 */


    /* 提示兼容 开始 **************/
    $('input, textarea').placeholder();
    /************** 提示兼容 结束 */
});

/* 滑块轮播 开始 ****************/
function swiper( autoWidth, setting)
{
    var aLiLength = [];//每一个li的宽度值
    var nUlWidth = 0;//ul的宽度为li占据宽度的总和
    var nViewFirstItemIndex = 0;//可视区域的第一个元素
    var nMaxMove = 0;//最大的移动距离
    var nMove = 0;//当前的移动距离
    var overLiIndex = 0;
    var _setting = $.extend({
                isNoSwiper : true
            }, setting), _autoWidth = autoWidth;
    if ($.isPlainObject(autoWidth)) {
        _setting = $.extend(_setting, autoWidth);
        _autoWidth = false;
    }
    if (!_autoWidth) {
        _autoWidth = 0.75;
    }


    //轮播初始化
    function swiperInit()
    {
        //判断是否有数据
        if( $('.t-swiper-wrap .ul-wrap li').length == 0 )
        {
            $('.t-swiper-wrap').hide();
            return false;
        }

        // 遍历每一个li的宽度值（包括外边距），记录在一个数组里面
        $('.t-swiper-wrap .ul-wrap li').each(function(){

            $(this).width( Math.ceil( $(this).width() ) );
            aLiLength.push( $(this).outerWidth(true) );
        });

        //设置可视区域的宽度
        $('.t-swiper-wrap .ul-wrap').width( function(){
            return ( $(this).parents('.t-tit-box').width() -
                   $(this).parents('.t-tit-box .t-swiper-wrap').siblings().outerWidth(true) )
                   * _autoWidth;
        } );

        // 计算出li的宽度总和（包括外边距），以及滚动容器可视区域的宽度值
        var isSetUlWrap = false;
        for( var i = 0; i < aLiLength.length; i++)
        {
            nUlWidth += aLiLength[i];

            // 让可视区域的宽度，刚好包裹整数个li,避免出现包不全的情况
            if( !isSetUlWrap && $('.t-swiper-wrap .ul-wrap').width() < nUlWidth )
            {
                $('.t-swiper-wrap .ul-wrap').width( nUlWidth );
                isSetUlWrap = true;
                overLiIndex = i;
                // console.log("超出起始下标：" + i);
            }
        }

        // 当li并不多的时候，超出元素就是最后一个了

        overLiIndex = overLiIndex ||aLiLength.length - 1;

        //实际元素并不多的时候
        if( !isSetUlWrap )
        {
            $('.t-swiper-wrap .ul-wrap').width( nUlWidth );
            $('.t-swiper-wrap .prev').hide();
            $('.t-swiper-wrap .next').hide();
        }

        if( _setting.isNoSwiper )
        {
            $('.t-swiper-wrap .ul-wrap li').each(function(index){
                if(index  > overLiIndex)
                    $(this).remove();
            });
            $('.t-swiper-wrap .prev').hide();
            $('.t-swiper-wrap .next').hide();
        }

        // 设置滚动容器可视区域的宽度值，以及ul的实际应有的宽度值并计算出滚动的最大极限
        $('.t-swiper-wrap .ul-wrap ul').width( nUlWidth + 10 );
        nMaxMove = $('.t-swiper-wrap .ul-wrap ul').width() - $('.t-swiper-wrap .ul-wrap').width();
    }

    swiperInit();

    // 左导航点击事件
    $('.t-swiper-wrap').on('click','.prev',function(){

        // 如果该按钮是不可被点击，则啥也不干
        if( $(this).hasClass('disabled') )
            return ;

        //另外一个按钮要成为可点击状态
        $('.t-swiper-wrap .next').removeClass('disabled');

        nMove = parseInt( $('.t-swiper-wrap .ul-wrap ul').css("marginLeft") ) + aLiLength[ --nViewFirstItemIndex ];
        if( nMove <= 0 )
            $('.t-swiper-wrap .ul-wrap ul').animate({marginLeft:nMove},100);
        else
        {
            $('.t-swiper-wrap .ul-wrap ul').animate({marginLeft:0},100);
            nViewFirstItemIndex = 0;
            $('.t-swiper-wrap .prev').addClass('disabled');
        }
    });

    // 右导航点击事件
    $('.t-swiper-wrap').on('click','.next',function(){

        // 如果该按钮是不可被点击，则啥也不干
        if( $(this).hasClass('disabled') )
            return ;

        //另外一个按钮要成为可点击状态
        $('.t-swiper-wrap .prev').removeClass('disabled');

        nMove = parseInt( $('.t-swiper-wrap .ul-wrap ul').css("marginLeft") ) - aLiLength[ nViewFirstItemIndex++ ];
        if( -nMove <= nMaxMove )
            $('.t-swiper-wrap .ul-wrap ul').animate({marginLeft:nMove},100);
        else
        {
            $('.t-swiper-wrap .ul-wrap ul').animate({marginLeft:-nMaxMove},100);
            nViewFirstItemIndex = aLiLength.length;
            $('.t-swiper-wrap .next').addClass('disabled');
        }
    });
}
/**************** 滑块轮播 结束 */

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
//调用演示
// window.onresize = throttle( function(){
//     console.log( "666666" );
// });
/**************** 函数节流 结束 */

