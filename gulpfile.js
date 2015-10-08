'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 



gulp.task('browser-sync', function() {
    browserSync.init({
	
        server: {
            baseDir: "./"
        }
    });
gulp.watch('./scss/**/*.scss', ['sass']);
gulp.watch(["*.html","css/*.css","js/*.js"]).on('change', browserSync.reload);
});


gulp.task('default', function(){
	console.log('~-_-+=* Specify a gulp task (type \'gulp TASKNAME\' ) *=+-_-~');
});
