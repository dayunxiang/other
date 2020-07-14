var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// 默认服务
gulp.task('default', ['browser-sync']);

// 监测文件变化
gulp.watch(['css/*.css','html/*.html','js/*.js','widget/**/*']).on('change', browserSync.reload);