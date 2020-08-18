// 全局
;$(function(){
    // 页面滚动条
    // $('html').niceScroll({
    //     cursorcolor: "#1179ad",
    //     cursorborder: "none",
    //     preventmultitouchscrolling: true,
    //     horizrailenabled: true,
    //     oneaxismousemode: "auto"
    // });

    // $('.page-page1 ').niceScroll({
    //     cursorcolor: "#1179ad",
    //     cursorborder: "none",
    //     preventmultitouchscrolling: true,
    //     horizrailenabled: true,
    //     oneaxismousemode: "auto"
    // });

    // 选项卡
    $('.p-tab-card').tab();
});


//主体框架页面
$(function(){
    // 左侧菜单美化滚动条
    // $('.page-frame .menu-list-side').niceScroll({
    //     cursorcolor: "#76e6ff",
    //     cursorborder: "none"
    // });

    // 系统切换
    $('.page-frame').on('click', '.btn-switch-form', function(){
        layer.open({
            type: 1,
            skin: 'p-pop',
            area: '802px',
            title: '系统切换',
            title: false,
            content: $('.page-frame .system-switch')
        });
    });

    // tab更多菜单
    $('.page-frame .more-list').niceScroll({
        cursorcolor: "#76e6ff",
        cursorborder: "none",
        horizrailenabled: false
    });

    // 左侧菜单展开伸缩
    $('.page-frame .menu-list-wrap').on('click','.btn-menu-switch',function(){
        $(this).parent().toggleClass('fold');
    });
    $('.page-frame .menu-list-side').on('click','dt', function(){
        $(this).siblings('dd').slideToggle();
        $(this).parent('dl').addClass('curr')
               .siblings('dl').removeClass('curr').children('dd').slideUp();
        $(this).find('.iconfont.right').toggleClass('icon-arrow-top')
               .parents('dl').siblings('dl').find('.iconfont.right').removeClass('icon-arrow-top');
    });
    $('.page-frame .menu-list-side').on('click','li',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).parents('dl').siblings('dl').find('li').removeClass('active');
    });

    // 全屏按钮
    $(".page-frame .btn-full-page").on('click',function(){
        $('.page-frame .head-box').hide();
        $('.page-frame .menu-list-wrap').addClass('fold');
        $('.page-frame .body-box').css('top', '5px');
        $('.page-frame .menu-tab-wrap').hide();
        $(".page-frame .btn-reset-page").show();
    });

    // 恢复原样按钮
    $(".page-frame .btn-reset-page").on('click',function(){
        $('.page-frame .head-box').show();
        $('.page-frame .menu-list-wrap').removeClass('fold');
        $('.page-frame .body-box').css('top', '102px');
        $('.page-frame .menu-tab-wrap').show();
        $(".page-frame .btn-reset-page").hide();
    });
});
