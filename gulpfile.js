var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var critical = require('critical');



gulp.task('jshint', function() {
  return gulp.src('site/js/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
  return gulp.src('site/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('site/css'));
});

gulp.task('html', function() {
  gulp.src('site/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});

gulp.task('scripts', function() {
  return browserify('./site/js/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function() {
  gulp.src('site/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('images', function() {
  gulp.src('site/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});

gulp.task('copystyles', function(){
  gulp.src(['build/css/styles.css'])
    .pipe(rename({
      basename: "site"
    }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('critical', ['build', 'copystyles'], function () {
  critical.generateInline({
    base: 'build/',
    src: 'index.html',
    styleTarget: 'css/styles.css',
    htmlTarget: 'index.html',
    width: 320,
    height: 480,
    minify: true
  });
});

gulp.task('watch', function() {
  gulp.watch('site/js/app.js', ['jshint']);
  gulp.watch('site/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['jshint', 'sass', 'watch']);
gulp.task('build', ['jshint', 'sass', 'html', 'scripts', 'styles', 'images']);