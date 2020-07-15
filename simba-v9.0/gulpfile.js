/**
* 插件价绍：
* gulp-concat               合并文件,可以用这个改名字
* browser-sync              自动刷新，静态服务
* gulp-load-plugins         自动加载gulp插件
* gulp-autoprefixer         设置浏览器版本自动处理浏览器前缀
* gulp-uglify               压缩js文件
* gulp-csso                 压缩优化css
* gulp-sass                 编译sass
* gulp-sourcemaps           生层map文件
* gulp-clean                删除文件
* gulp-sequence             让任务顺序执行 【这个插件没有使用】
* gulp-htmlmin              压缩页面的html 【这个插件没有使用】
* gulp-jshint               校验js语法     依赖 jshint

* 项目初建时环境：
* node: 6.11.2
* npm:  3.10.10
* npm install --save-dev gulp gulp-concat browser-sync gulp-load-plugins
* npm install --save-dev gulp-autoprefixer gulp-uglify gulp-csso gulp-sass
* npm install --save-dev gulp-sourcemaps gulp-clean jshint gulp-jshint

* https://github.com/qiaodaima
*/



//配置信息
var CONFIG = {
    path: {
        src     : './src/',
        build   : './build/',
        html    : 'html/',
        sass    : 'sass/',
        css     : 'css/',
        scripts : 'scripts/',
        widget  : 'widget/',
        images  : 'images/'
    },
    cssLink: [
        './src/sass/main.scss',
    ],
    scriptSrc: [
        './src/scripts/tab.js',
        './src/scripts/throttle.js',
        './src/scripts/public.js'
    ]
};



/**
* 以【gulp】开头的组件 在安装后已经自动加载，无须再引入，
* 当使用【gulp-rename】和【gulp-ruby-sass】这两个插件的时候，
* 就可以使用【$.rename】和【$.rubySass】来代替了,
* 也就是原始插件名【去掉gulp-前缀】，改成【$.】，之后再转换为驼峰命名。
*/
var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();



/**
    1.编译sass并生成map文件
    2.css自动添加浏览器私有前缀
    3.优化css
*/
gulp.task('sass', ['cleanCss'], function(){
    return gulp.src(CONFIG.cssLink)
               .pipe($.sourcemaps.init())
               .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
               .pipe($.autoprefixer({
                    // http://browserl.ist   可以在这个页面输入查询参数
                    // ● last 2 versions: 主流浏览器的最新两个版本
                    // ● last 1 Chrome versions: 谷歌浏览器的最新版本
                    // ● last 2 Explorer versions: IE的最新两个版本
                    // ● last 3 Safari versions: 苹果浏览器最新三个版本
                    // ● Firefox >= 20: 火狐浏览器的版本大于或等于20
                    // ● iOS 7: IOS7版本
                    // ● Firefox ESR: 最新ESR版本的火狐
                    // ● > 5%: 全球统计有超过5%的使用率
                    browsers: [
                        'last 3 Explorer versions',
                        'last 10 Chrome versions',
                        'last 10 Firefox versions',
                        'last 10 Opera versions'
                    ],
                    cascade: true,
                    remove: true
               }))
               .pipe($.csso())
               .pipe($.concat('all.min.css'))
               .pipe($.sourcemaps.write('./'))
               .pipe(gulp.dest(CONFIG.path.build + CONFIG.path.css))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanCss', function(){
    return gulp.src(CONFIG.path.build + CONFIG.path.css)
               .pipe($.clean());
});
gulp.watch(CONFIG.path.src + CONFIG.path.sass + '*.scss', ['sass']);



/**
    1.过滤模板.html页面
    2.原封不动的复制一份，
*/
gulp.task('html', ['cleanHtml'], function(){
    return gulp.src([CONFIG.path.src + CONFIG.path.html + '**/*', '!' + CONFIG.path.src + CONFIG.path.html + '**/**/模板.html'])
               .pipe(gulp.dest(CONFIG.path.build + CONFIG.path.html))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanHtml', function(){
    return gulp.src(CONFIG.path.build + CONFIG.path.html)
               .pipe($.clean());
});
gulp.watch([CONFIG.path.src + CONFIG.path.html + '**/*', '!' + CONFIG.path.src + CONFIG.path.html + '**/**/模板.html'], ['html']);



/**
    1.校验script内的脚本语法问题
    2.将script内的脚本全部合并成一个，
    3.压缩并生成map文件
*/
gulp.task('scripts', ['cleanScripts'], function(){
    return gulp.src(CONFIG.scriptSrc)
               .pipe($.sourcemaps.init())
               // .pipe($.jshint())
               // .pipe($.jshint.reporter('default'))
               .pipe($.concat('all.min.js'))
               .pipe($.uglify({
                    mangle: false, // 是否修改变量名，默认为 true
                    compress: false // 是否完全压缩，默认为 true
               }))
               .pipe($.sourcemaps.write('./'))
               .pipe(gulp.dest(CONFIG.path.build + CONFIG.path.scripts))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanScripts', function(){
    return gulp.src(CONFIG.path.build + CONFIG.path.scripts)
               .pipe($.clean());
});
gulp.watch(CONFIG.scriptSrc, ['scripts']);



/**
    1.images文件夹不做处理，原封不动的复制一份
    2.后期会增加处理雪碧图以及图片压缩
*/
gulp.task('images', ['cleanImages'], function(){
    return gulp.src(CONFIG.path.src + CONFIG.path.images + '**/*')
               .pipe(gulp.dest(CONFIG.path.build + CONFIG.path.images))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanImages', function(){
    return gulp.src(CONFIG.path.build + CONFIG.path.images)
               .pipe($.clean());
});
gulp.watch(CONFIG.path.src + CONFIG.path.images + '**/*', ['images']);



/**
    widget文件夹直接复制过去，
    目前暂时没想到更好的解决方式
*/
gulp.task('widget', ['cleanWidget'], function(){
    return gulp.src(CONFIG.path.src + CONFIG.path.widget + '**/*')
               .pipe(gulp.dest(CONFIG.path.build + CONFIG.path.widget))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanWidget', function(){
    return gulp.src(CONFIG.path.build + CONFIG.path.widget)
               .pipe($.clean());
});
gulp.watch(CONFIG.path.src + CONFIG.path.images + '**/*', ['widget']);



/**
    默认任务
*/
gulp.task('clean', function(){
    return gulp.src(CONFIG.path.build)
               .pipe($.clean());
});
gulp.task('ready', ['html', 'sass', 'images', 'widget', 'scripts'], function(){
    return browserSync.init({
        server: {
            baseDir: CONFIG.path.build
        }
    });
});
gulp.task('default', ['clean'], function(){
    gulp.start('ready');
});
