const { watch, series } = require('gulp')
const { sassBundle }      = require('./sass')
const { jsBundle }        = require('./javascript')
const { browsersyncReload } = require('./livereload')

function watcher() {
  watch('*.html', browsersyncReload)
  watch(
    ['src/css/**/**/*.scss', 'src/js/**/*.js'],
    series(sassBundle, jsBundle, browsersyncReload));
}

exports.watcher = watcher;