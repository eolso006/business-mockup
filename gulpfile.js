var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var rename = require('gulp-rename');

var sass = require('gulp-sass');

gulp.task('default', function () {
    console.log('hello dave');
});
var banner = '/* This is a generated file on ' + new Date() + '  */\n';

gulp.task('minify-css', function () {
    return gulp.src('styles/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(header(banner))
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({
            stream:true
        }));
});


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
});

gulp.task('sass', function(){
    return gulp.src('styles/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(header(banner))
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({
            stream:true
        }));
})

gulp.task('dev', ['browserSync'], function () {


    gulp.watch('*.html', browserSync.reload);
    gulp.watch('styles/**/*.css', ['minify-css']);
    gulp.watch('scripts/**/*.js', browserSync.reload);
    gulp.watch('styles/scss/**/*.scss', ['sass'])

});
