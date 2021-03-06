var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
order = require("gulp-order"),
sassmixins = require('gulp-sass-to-postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('static/sass/*.scss')
  .pipe(sass({ style: 'expanded' }))
  .pipe(sassmixins())
  .pipe(minifycss())
  .pipe(autoprefixer())
  .pipe(concat('main.min.css'))
  .pipe(gulp.dest('static/css'));
});

gulp.task('scripts', function() {
  return gulp.src('static/js/*.js')
    .pipe(order(['static/js/jquery.js','static/js/slick.js','static/js/script.js']))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('static/js'));
});

gulp.task('watch', function() {
  gulp.watch('static/sass/*.scss', ['styles']);
  //gulp.watch('static/js/*.js',['scripts']);
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});