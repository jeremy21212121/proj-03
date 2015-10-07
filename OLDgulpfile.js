var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress-js', function() {

    gulp.src('js/*.js') // What files do we want gulp to consume?
        .pipe(uglify()) // Call the uglify function on these files
        .pipe(gulp.dest('build/js')) // Where do we put the result?
});

gulp.task('say-hello', function(){
    console.log('Hello!');
});
