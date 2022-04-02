const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const ttf2woff = require('gulp-ttf2woff')
const ttf2woff2 = require('gulp-ttf2woff2')
const del = require('del');
const tinypng = require('gulp-tinypng-compress')

function fonts() {
  src('./src/fonts/**.ttf')
    .pipe(ttf2woff())
    .pipe(dest('./app/fonts/'))
  return src('./src/fonts/**.ttf')
    .pipe(ttf2woff2())
    .pipe(dest('./app/fonts/'))

}

function styles() {
  return src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./app/css/'))
    .pipe(browserSync.stream())
}

function htmlInclude() {
  return src(['./src/index.html'])
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest('./app'))
    .pipe(browserSync.stream())
}

function imgToApp() {
  return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg','./src/img/**.svg'])
    .pipe(dest('./app/img'))
}

function clean() {
  return del(['app/*'])
}

function tinyPng() {
  return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg'])
    // .pipe(tinypng({
    //   key: 'JS9MWwCflHycV1FDcSlkjZ8GGjTfttNw',
    //   log: true
    // }))
    .pipe(dest('./app/img'))
}

function scripts(){
  return src('./src/js/main.js')
  .pipe(dest('./app/js'))
  .pipe(browserSync.stream())
}
function normalizeToApp(){
  return src('./src/normalize/normalize.css')
  .pipe(dest('./app/normalize'))
}

function swiper(){
  return src('./src/swiper/**')
  .pipe(dest('./app/swiper'))
  .pipe(browserSync.stream())
}

function simplebar(){
  return src('./src/simplebar/**')
  .pipe(dest('./app/simplebar'))
}

function inputMsk(){
  return src('./src/formMask/inputmask.min.js')
  .pipe(dest('./app/formMask'))
}
function formValidate(){
  return src('./src/formValidate/just-validate.min.js')
  .pipe(dest('./app/formValidate'))
}

function watchFiles() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
  watch('./src/scss/**/*.scss', styles);
  watch('./src/partials/*.html', htmlInclude);
  watch('./src/index.html', htmlInclude);
  watch('./src/img/**.jpg', imgToApp);
  watch('./src/img/**.png', imgToApp);
  watch('./src/img/**.jpeg', imgToApp);
  watch('./src/img/**.svg', imgToApp);
  watch('./src/fonts/**.ttf', fonts);
  watch('./src/js/*.js', scripts);
  watch('./src/swiper/swiper.css', swiper);
  watch('./src/formMask/inputmask.min.js', inputMsk);
  watch('./src/formValidate/just-validate.min.js', formValidate);
}

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileinclude = htmlInclude;
exports.tinyPng = tinyPng;
exports.normalizeToApp = normalizeToApp;
exports.swiper = swiper;
exports.simplebar = simplebar;
exports.inputMsk = inputMsk;
exports.formValidate = formValidate;

exports.default = series(clean, parallel(htmlInclude, fonts,tinyPng,imgToApp), styles,normalizeToApp,swiper,simplebar,inputMsk,formValidate, scripts,watchFiles)