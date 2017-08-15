
var gulp = require('gulp');
const sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');


gulp.task('sass', () =>
	sass('scss/style.scss')
		.on('error', sass.logError)
		.pipe(gulp.dest('css'))
);
    
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['sass','browser-sync'],function () {

    gulp.watch(['**/*.html'], browserSync.reload);
    gulp.watch(['css/**/*.css'], browserSync.reload);
    
    gulp.watch("scss/**/*.scss", ['sass']);
});
