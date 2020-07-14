// 全局
;$(function(){
    // 页面滚动条
    $('html').niceScroll({
        cursorcolor: "#1179ad",
        cursorborder: "none",
        preventmultitouchscrolling: true,
        horizrailenabled: false,
        oneaxismousemode: "auto"
    });

    // 选项卡
    $('.p-tab-card').tab();
});


//主体框架页面
$(function(){
    // 左侧菜单美化滚动条
    $('.page-frame .menu-list-side').niceScroll({
        cursorcolor: "#76e6ff",
        cursorborder: "none"
    });

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


// 地图分析里面的浮层
$(function(){
    //刷新，选择DMA滚动容器
    $('.page-dtfx .i-refresh .list-wrap').niceScroll({
        cursorcolor: "#76e6ff",
        cursorborder: "none"
    });

    // 点击今日告警显示tab
    $('.page-dtfx .i-map-aside .btn-tab').on('click',function(){
        $('.page-dtfx .i-map-aside .p-tab-card').show();
        $(this).hide();
    });

    // 隐藏tab  i-map-aside-iframe  折叠的尺寸520*80   展开的尺寸520*403
    $('.page-dtfx .i-map-aside .p-tab-card .btn-up').on('click',function(){
        $(this).parents('.p-tab-card').hide();
        $('.page-dtfx .i-map-aside .btn-tab').show();
    });

    // tab里面的滚动条
    $('.page-dtfx .i-map-aside .p-warning-list, .page-dtfx .i-map-aside .nice-wrap').niceScroll({
        cursorcolor: "#76e6ff",
        cursorborder: "none"
    });

    // 图例
    $('.page-dtfx .i-legend .btn').toggle(function(){
        $(this).siblings('dl').show();
    },function(){
        $(this).siblings('dl').hide();
    });

    //七日流量预警
    $('.page-dtfx .i-btn-llyj').toggle(function() {
        $('.page-dtfx .i-llyj-box').show();
    }, function() {
        $('.page-dtfx .i-llyj-box').hide();
    });
});


// 经营总览页面
$(function(){
    // 自定义KPI弹窗
    $('.page-jyzl').on('click', '.btn-custom', function(){
        layer.open({
            type: 1,
            skin: 'p-pop',
            area: '700px',
            title: 'KPI指标自定义',
            content: $('.page-jyzl .pop-custom-kpi'),
            btn: ['确定'],
            btnAlign: 'c'
        });
    });
});


//实时监控-三维
$(function(){
    // 点击今日告警显示tab
    $('.page-real-time-sw .i-map-aside .btn-switch').toggle(function(event) {
        event.stopPropagation();
        $('.page-real-time-sw .i-map-aside .p-tab-card').show(50);
    }, function(event) {
        event.stopPropagation();
        $('.page-real-time-sw .i-map-aside .p-tab-card').hide(50);
    });
    $('.page-real-time-sw').on('click',function(){
        $('.page-real-time-sw .i-map-aside .p-tab-card').hide(50);
    });

    // tab里面的滚动条
    $('.page-real-time-sw .i-map-aside .p-warning-list, .page-real-time-sw .i-map-aside .nice-wrap').niceScroll({
        cursorcolor: "#76e6ff",
        cursorborder: "none"
    });
});


// 实时监控左右
$(function(){
    // 表格滚动条
    $('.page-jkzy .table-wrap').niceScroll({
        cursorcolor: "#1179ad",
        cursorborder: "none",
        mousescrollstep: 40,
        preventmultitouchscrolling: true,
        oneaxismousemode: false
    });

    $('.page-jkzy .dl-wrap').niceScroll({
        cursorcolor: "#1179ad",
        cursorborder: "none",
        mousescrollstep: 40,
        preventmultitouchscrolling: true,
        oneaxismousemode: false
    });
});














/* 某某 开始 ****************/
/**************** 某某 结束 */


