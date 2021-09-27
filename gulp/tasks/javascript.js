const { src, dest } = require('gulp')
const browserify    = require('browserify')
const babelify      = require('babelify')
const source        = require('vinyl-source-stream')
const notify        = require("gulp-notify")
const uglify        = require('gulp-uglify')
const stripDebug    = require('gulp-strip-debug')

function jsBundle(cb) {
  return browserify('src/js/index.js')
    .transform(babelify, { presets: ['@babel/preset-env'], plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread'], sourceMapsAbsolute: true })
    .bundle()
    .on('error', notify.onError(function (error) {
        return "JS: " + error.message;
    }))
    .pipe(source('index.js'))
    .pipe(dest('dist'));
  cb();
}

function jsMinify(cb) {
  return src('dist/index.js')
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(dest('dist'));
  cb();
}

exports.jsBundle = jsBundle;
exports.jsMinify = jsMinify;