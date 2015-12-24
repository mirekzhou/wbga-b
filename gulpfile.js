'use strict';

// gulp and gulp plugins
var gulp         = require('gulp');
var clean        = require('gulp-clean');
var cssmin       = require('gulp-minify-css');
var htmlmin      = require('gulp-minify-html');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var replace      = require('gulp-batch-replace');
var rename       = require('gulp-rename');
var shell        = require('gulp-shell');
var spritesmith  = require('gulp.spritesmith');
var gutil        = require('gulp-util');
var concat       = require('gulp-concat');
var addsrc       = require('gulp-add-src');
var gulpif       = require('gulp-if');
var watch        = require('gulp-watch');
var sass         = require('gulp-sass');
var flatten      = require('gulp-flatten');
var htmlReplace  = require('gulp-html-replace');

var src_js_lib_path     = 'src/lib/js/';
var src_css_lib_path    = 'src/lib/css/';
var src_scss_path       = 'src/scss/';
var build_html_path     = 'build/html/';
var build_js_path       = 'build/js/';
var build_css_path      = 'build/css/';

gulp.task('default', function () {
    var gulpTasks = Object.keys(gulp.tasks);
    var colors    = gutil.colors;
    var log       = gutil.log;

    colors.enabled = true;
    colors.supportsColor = true;

    log(colors.cyan('-- All Tasks --'));
    for (var i = 0; i < gulpTasks.length; i++) {
        log('*  ', colors.green(gulpTasks[i]));
    }
});

gulp.task('clean', function(){
    return  gulp.src([src_js_lib_path, src_css_lib_path, 'build/*'], {read: false})
                .pipe(clean());
});

gulp.task('prepare', ['clean'], function () {
    gulp.src([
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/datatables/media/css/jquery.dataTables.min.css',
        './bower_components/datetimepicker/jquery.datetimepicker.css'
        ])
        .pipe(gulp.dest(src_css_lib_path));

    gulp.src([
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/jquery.lazyload/jquery.lazyload.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/i18next/i18next.js',
            './bower_components/jquery-placeholder/jquery.placeholder.js',
            './bower_components/datatables/media/js/jquery.dataTables.js',
            './bower_components/datetimepicker/jquery.datetimepicker.js',
            './bower_components/html5shiv/dist/html5shiv.min.js',
            './bower_components/respond/dest/respond.min.js',
            './bower_components/highcharts/lib/highcharts.js'
        ])
        .pipe(gulp.dest(src_js_lib_path));

    return gulp.src([
            './bower_components/jquery-1.9.1/jquery.min.js'
        ])
        .pipe(rename('jquery.1.9.1.min.js'))
        .pipe(gulp.dest(src_js_lib_path));
});

gulp.task('build-login', function(){
    gulp.src([
            'src/lib/js/jquery.min.js',
            'src/lib/js/bootstrap.min.js',
            'src/lib/js/i18next.js',
            'src/lib/js/jquery.placeholder.js',
            'src/js/util/util.js',
            'src/js/login.js'
        ])
        .pipe(concat('login.min.js'))
        .pipe(gulp.dest('build/js'));

    gulp.src([
            'src/scss/mixins.scss',
            'src/scss/reset.scss',
            'src/scss/login.scss'
        ])
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('login.min.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/html/login.html')
        .pipe(htmlReplace({
            'css': '../css/login.min.css',
            'js': '../js/login.min.js'
        }))
        .pipe(gulp.dest(build_html_path));
});

gulp.task('build-backend', function(){
    gulp.src([
            'src/lib/js/jquery.min.js',
            'src/lib/js/i18next.js',
            'src/lib/js/jquery.placeholder.js',
            'src/lib/js/jquery.dataTables.js',
            'src/lib/js/jquery.datetimepicker.js',
            'src/lib/js/highcharts.js',
            'src/js/util/util.js',
            'src/js/modules/*.js',
            'src/js/backend.js'
        ])
        .pipe(concat('backend.min.js'))
        .pipe(gulp.dest('build/js'));

    gulp.src([
            'src/scss/mixins.scss',
            'src/scss/reset.scss',
            'src/scss/modules/*.scss',
            'src/scss/datatables.scss',
            'src/scss/backend.scss'
        ])
        .pipe(sass())
        .pipe(flatten())
        .pipe(addsrc.prepend(['src/lib/css/jquery.dataTables.min.css', 'src/lib/css/jquery.datetimepicker.css']))
        .pipe(concat('backend.min.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/html/backend.html')
        .pipe(htmlReplace({
            'css': '../css/backend.min.css',
            'js': '../js/backend.min.js'
        }))
        .pipe(gulp.dest(build_html_path));
});

gulp.task('build-share', function () {
    gulp.src([
            'src/lib/js/jquery.1.9.1.min.js',
            'src/lib/js/html5shiv.min.js',
            'src/lib/js/respond.min.js'
        ])
        .pipe(concat('lowie.min.js'))
        .pipe(gulp.dest('build/js'));

    gulp.src(['src/data/i18n/*.json'])
        .pipe(gulp.dest('build/data/i18n/'));

    gulp.src(['src/img/*'])
        .pipe(gulp.dest('build/img/'));
});

gulp.task('build', function(){
    gulp.start('build-share', 'build-login', 'build-backend');
});

gulp.task('watch', function(){
    gulp.watch('src/html/*', ['build']);
    gulp.watch(['src/js/**/*.js'], ['build']);
    gulp.watch(['src/scss/**/*.scss'], ['build']);
    gulp.watch('src/img/*', ['build']);
    gulp.watch('src/data/i18n/*', ['build']);
});


gulp.task('sprite', function () {
    // Generate our spritesheet
    var spriteData = gulp.src([
            'src/img/arrow_2.png',
            'src/img/arrow_d.png',
            'src/img/connection.png',
            'src/img/defaultAvatar.png',
            'src/img/kaka2.png',
            'src/img/l-arrow.png',
            'src/img/l.png',
            'src/img/l2.png',
            'src/img/linkedin.png',
            'src/img/logo.png',
            'src/img/low_cost.png',
            'src/img/low_risk.png',
            'src/img/mail.png',
            'src/img/ok.png',
            'src/img/otms2.png',
            'src/img/quick_return.png',
            'src/img/r-arrow.png',
            'src/img/r.png',
            'src/img/r.png',
            'src/img/r2.png',
            'src/img/security.png',
            'src/img/user_experience.png',
            'src/img/wechat.png',
            'src/img/weibo.png'
        ]).pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));

    // Pipe image stream through image optimizer and onto disk
    spriteData.img
        .pipe(imagemin())
        .pipe(gulp.dest('build/css/'));

    // Pipe CSS stream through CSS optimizer and onto disk
    spriteData.css
        .pipe(gulp.dest('build/css/'));
});
