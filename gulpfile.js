var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var connect= require('gulp-connect');

gulp.task('connect', function() {
	connect.server();

});


gulp.task('browser-sync', function() {
    browserSync.init({
	
        server: {
            baseDir: "./"
        }
    });
gulp.watch(["index.html","css/*.css","js/*.js"]).on('change', browserSync.reload);
});




gulp.task('js-min', function(){
    return gulp.src(['js/*.js'])
        .pipe(gp_concat('main.js'))
        .pipe(gulp.dest('js/main'))
        .pipe(gp_rename('main.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({keepBreaks:false}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function() {
	gulp.watch('js/*.js', ['js-min']);
	gulp.watch('css/*.css', ['minify-css']);
});

gulp.task('default', function(){
	console.log('~-_-+=* Specify a gulp task (type \'gulp TASKNAME\' ) *=+-_-~');
});
