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
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');

gulp.task('index', function(){
  var assets = useref.assets();

  return gulp.src('site/*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('build'));
});


gulp.task('jshint', function() {
  return gulp.src('site/js/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('imagemin', function() {
  return gulp.src(['site/img/*', 'site/img/icons/*'])
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }]
    }));
});

gulp.task('sass', function() {
  return gulp.src('site/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('site/css'));
});

gulp.task('styles', function() {
  gulp.src('./site/css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('images', function() {
  gulp.src(['./site/img/*', './site/img/icons/*'])
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});

gulp.task('copystyles', function(){
  gulp.src(['build/css/main.css'])
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
  gulp.watch('site/js/*.js', ['jshint']);
  gulp.watch('site/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['jshint', 'sass', 'watch']);
gulp.task('build', ['jshint', 'sass', 'index', 'styles', 'images']);