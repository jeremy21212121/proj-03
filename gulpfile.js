
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var promise = require('es6-promise').polyfill();
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
    .pipe(gulp.dest('./css'));
});
 



gulp.task('browser-sync', function() {
    browserSync.init({
	
        server: {
            baseDir: "./"
        }
    });
gulp.watch('./scss/**/*.scss', ['sass']);
gulp.watch(["*.html","css/*.css","js/**/*.js"]).on('change', browserSync.reload);
});


gulp.task('default', function(){
	console.log('~-_-+=* Specify a gulp task (type \'gulp TASKNAME\' ) *=+-_-~');
});
