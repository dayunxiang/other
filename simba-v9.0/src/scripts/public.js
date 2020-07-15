$(function(){
    //美化滚动条
    $('body:not(.page-index)').niceScroll({
        cursorcolor: "#e1e1e1",
        cursorwidth: "6px",
        autohidemode:"leave",
        preservenativescrolling:false
    });

    // 网站侧边栏
    $('.p-side-bar').on('click', '.item', function(){
        // 被点击的元素类型
        var sType = $(this).data('type');

        switch(sType){
            // 回到网页顶部
            case 'toTop':
                $('html, body').animate({
                    scrollTop: $('html, body').offset().top
                }, 500);
                break;
        }
    });

    // 屏幕滚动到一定高度时候
    $(window).scroll(function(){
        if($(window).scrollTop() < 200)
        {
            $('.p-side-bar .to-top').fadeOut();
        }
        else{
            $('.p-side-bar .to-top').fadeIn();
        }
    });
});