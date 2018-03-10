var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifycss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin');

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

// Scripts Task
// Scripts Uglifies
gulp.task('scripts', function() {
	gulp.src('js/*.js')
	.pipe(uglify())
	.on('error', errorLog)
	.pipe(gulp.dest('build/js'));
});

// Styles Task
// Styles Uglifies
gulp.task('styles', function() {
	gulp.src('scss/*.scss')
	.pipe(sass({
		style: 'compressed'
	}))
	.on('error', errorLog)
	.pipe(prefix('last 2 versions'))
	.pipe(minifycss())
	.pipe(gulp.dest('build/css'));
});

// Images Task
// Compress Images
gulp.task('image', function() {
	gulp.src('img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'));
});

// Watch Task
// Watch files
gulp.task('watch', function() {

	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/*.scss', ['styles']);
});

gulp.task('default', ['scripts','styles','watch']);	
