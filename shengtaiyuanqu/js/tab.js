/* 选项卡定义 开始 ****************/
;+function( $ )
{
    $.fn.tab = function( options )
    {
        return $(this).each( function(){

            var _this = $( this ),
                oDefaultOptions =
                {
                    "tabNavClass"    : ".tab-nav",     //头部类名
                    "tabConClass"    : ".tab-con",     //内容类名
                    "activeClass"    : "active",       //当前状态类名
                    "disableClass"   : "disable",      //禁用类名
                    "event"          : "click",        //选项卡事件触发类型
                    "init"           : null,           //初始化函数
                    "callBack"       : null            //回调函数
                };

            oDefaultOptions = $.extend( oDefaultOptions, options || {} );

            // 触发前 初始化 只执行一次
            if( oDefaultOptions.init )
            {
                oDefaultOptions.init();
            }

            _this.on( oDefaultOptions.event, oDefaultOptions.tabNavClass, function(event){
                event.stopPropagation();
                if( $( this ).hasClass( oDefaultOptions.disableClass ) )
                {
                    return false;
                }

                var nIndex = $( this ).index();

                $( this ).addClass( oDefaultOptions.activeClass )
                         .siblings( oDefaultOptions.tabNavClass ).removeClass( oDefaultOptions.activeClass );

                _this.find( oDefaultOptions.tabConClass ).removeClass( oDefaultOptions.activeClass )
                     .eq( nIndex ).addClass(oDefaultOptions.activeClass);

                // 触发后 回调
                if( oDefaultOptions.callBack )
                {
                    oDefaultOptions.callBack({
                        dom:_this,
                        index:nIndex
                    });
                }
            } );
        } );
    }
}( jQuery );
/**************** 选项卡定义 结束 */

