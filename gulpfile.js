var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
//var cleancss = require('gulp-clean-css');
//var csscomb = require('gulp-csscomb');

var autoprefix = require('autoprefix');
var cssnano = require('cssnano');

gulp.task('watch', function() {
  gulp.watch('./**/*.scss', ['build']);
});

gulp.task('build', function() {
  var processors = [
    autoprefix({browsers: ['last 2 version']}),
    cssnano({
      sourcemap: true
    })
  ];

  return gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    //.pipe(csscomb())
    //.pipe(cleancss())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['build']);
