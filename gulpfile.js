var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');

gulp.task('default', ['style','watch']);

gulp.task('style', function() {
	return sass('public/css/style.scss')
		.pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
	gulp.watch('public/css/style.scss', ['style']);
});

