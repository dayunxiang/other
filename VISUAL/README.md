# 旗山云大数据中心-前端文档说明

> 
 - 由于 **Echarts 3.0** 地图下架，因此 引用 **Echarts 2.0**，后期变更请自行更改
 - 所有图表脚本仅供参考，并不作为实际开发所用，仅仅作用于前端界面效果展示
 - **目录结构说明** 不包含本项目所有文件，为方便演示，一些文件已剔除
 - 分辨率必须不能低于 **1920*1080**
 - **1920*1080** 分辨率需要全屏（按下F11），浏览器兼容性待定
 - 有问题直接问我吧 **QQ: 674059309**

 
## 目录结构说明

```
VISUAL
    ├─css 【此目录为sass编译后产出目录】
    │      allPage.css
    │      allPage.css.map
    │
    ├─html
    │      test.html     【如果需要写一些demo,可在此页面调试】
    │      首页.html
    │
    ├─images   【所有图片文件】
    │  ├─base  【一些基础图片文件】
    │  ├─icon  【一些图标】
    │  └─index 【首页的图片】
    ├─sass
    │      allPage.scss  【所有页面的样式】
    │      common.scss   【公共样式，类名以字母P打头，形如".p-icon-1"】
    │      mixin.scss    【sass声明混合】
    │      resetPc.scss  【基础重置样式】
    │
    ├─scripts 【脚本文件】
    │      common.js 【一些公共脚本，比如自己定义的一些函数】
    │      tab.js    【基于JQ封装的选项卡脚本】
    │
    └─widget 【第三方插件】
        └─jquery-1.11.1
                jquery.js
```

## 弹窗说明 [更多参数说明戳这里][1]
```
// 不要去修改弹窗的【宽高】
layer.open({
  type: 1,
  skin: 'dark', // 此参数必须加，且必须为dark
  move: false,
  anim: 0,
  title :'我是标题我是标题',
  content: $('#popupTabCard-2').html(),
  success: function (layero, index) {
    // 启用选项卡脚本
    $('.p-tab-card').tab();
  }
});

```

## 选项卡说明
```
<div class="p-tab-card">
  <div class="nav-wrap">
    <a class="tab-nav active" href="javascript:;">
      <span>激活项</span>
    </a>
    <a class="tab-nav disabled" href="javascript:;">
      <span>不能被点击</span>
    </a>
    <a class="tab-nav" href="javascript:;">
      <span>选项卡标题</span>
    </a>
  </div>
  <div class="con-wrap">
    <div class="tab-con active">内容区域1</div>

    <div class="tab-con">内容区域2</div>

    <div class="tab-con">内容区域3</div>
  </div>
</div>

<script>
  // 更多的参数和使用方法请查看源码
  $('.p-tab-card').tab({
    event: '选项卡事件触发类型，是要点击切换选项卡，还是要鼠标移入触发选项卡',
    init: function () {
      // 选项卡启用后触发的回调
    },
    callBack: function (opts) {
      // 选项卡每次点击后触发的回调
      // opts.dom 当前选项卡对象（JQ对象，非jsDOM对象）
      // opts.index 当前选项卡索引
    }
  });
</script>

```

## 百度图表说明

```
// 直接添加id属性，用于渲染百度图表，所有图表的宽度 和 高度 均已用css写好
<div id="echartId" class="echarts-wrap">百度图表</div> 
```
页面其他元素可能出现被百度图表遮盖现象，
可调整相关元素的**z-index**属性试试，若有必要，可让我修改**sass**样式，
所有百度图表的标题，请用图表的**titlt**参数来渲染，
如果有需要，可以让我单独写html标签来渲染

```
// 页面有些标签使用了style属性，仅是为了演示效果，实际开发中，记得把标签上的 style 属性删除，
<div class="p-map-point" style="position: absolute; left: 0; top: 0;">老龄化小区</div>
```


## 数字滑动效果说明
```
// 任何html标签都行（空标签，里面不要写任何东西），类名"swiper-number"
<strong class="swiper-number"></strong>

// 数字滑动效果
var sum = 1593;

// 这个函数不是必须的，仅仅是让函数立马执行一次（后面的函数需要3秒后才执行）
swiperNumber({
  number: sum,
  numberImgHeight: 58,
  numberDom: $('.swiper-number')
});

// 计时器，模拟数据变更
setInterval(function(){
  sum++;
  swiperNumber({
    number: sum,
    numberImgHeight: 58, // 这个是单个数字图片的高度，前端会写好
    numberDom: $('.swiper-number') // 触发容器
  });
}, 3000);
```


## 注意事项：

 - 弹窗里面的选项卡，务必在**弹窗的回调**里面进行启用选项卡脚本
 - 选项卡里面的轮播，务必在**选项卡的回调**里面启用轮播脚本
 - 由于元素的显示和隐藏是采用 `display:none || display:block ` 来控制的,因此在某些情况下会干扰js，所以**百度图表**、**轮播**、**选项卡**可能会出现异常状态，请务必在一些**回调里面来进行一些必要的初始化和重置操作**，选项卡已经尽可能的去避免这类问题，因此采用 `position: absolute; opacity: 0;` 来控制元素的显示和隐藏
 - [轮播插件的参数说明戳这里][2]
 - [zTree插件的参数说明戳这里][3]


  [1]: http://www.layui.com/doc/modules/layer.html
  [2]: http://2.swiper.com.cn/api/index.html
  [3]: http://www.treejs.cn/v3/demo.php#_101