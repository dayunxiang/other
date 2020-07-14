var COLORS = {
  '0': '#ffffff',
  '1': '#000000',
  '2': '#10e6ec',
  '3': '#134cce',
  '4': '#543d99',
  '5': '#d94d4c',
  '6': '#60bf68',
  '7': '#999999'
};


// 函数节流
var throttle = function (fn, delay) {
  var timer = null;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
      fn.apply(this, arguments);
    }, delay || 50);
  }
}


// 获取屏幕信息
var getScreenInfo = function () {
  return {
    screenWidth: window.screen.width,
    windowInnerWidth: window.innerWidth,
    windowInnerHeight: window.innerHeight
  };
};


// 检测屏幕信息
var testScreenInfo = function () {
  // 分辨率低于1920
  if (getScreenInfo().screenWidth < 1920) {
    layer.msg( '您当前的屏幕分辨率低于【1920*1080】，建议使用【1920*1080】的分辨率', {time: 7000, area: '450px'});
  }

  // 网页可视区域低于1920
  if (getScreenInfo().windowInnerWidth < 1920 || getScreenInfo().windowInnerHeight < 1080) {
    layer.msg( '当前浏览器屏幕宽度小于【1920*1080】，建议按下【F11】键使浏览器全屏后再使用！', {time: 7000, area: '650px'});
  }
};


// 浏览器窗口大小发生变化
window.onresize = throttle(function () {
  testScreenInfo();
});


// 阻止鼠标右键菜单
document.oncontextmenu = function (events) {
  return false;
};


// 数字滑动效果
var swiperNumber = function (opts) {
  var i = 0;

  for(i = 0; i < String(opts.number).length; i++) {
    var numberString = String(opts.number).charAt(i);
    var y = -parseInt(numberString) * opts.numberImgHeight;
    var targetNumber = opts.numberDom.find('i').eq(i);

    if(opts.numberDom.find('i').length <= i) {
      opts.numberDom.append('<i></i>');
    }
    targetNumber.animate({
      backgroundPosition: '(0 ' + String(y) + 'px)'
    });
  }
}

// 网页运行时 就开始检测屏幕信息
$(function () {
  testScreenInfo();
});

