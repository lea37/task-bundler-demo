const { series, parallel }      = require('gulp')
const { clean }                 = require('./tasks/clean')
const { sassBundle, cssMinify } = require('./tasks/sass')
const { jsBundle, jsMinify }    = require('./tasks/javascript')
const { browsersyncServe } = require('./tasks/livereload')
const { watcher }               = require('./tasks/watch')


exports.default = series(sassBundle, jsBundle)
exports.watch = series(browsersyncServe, watcher)

if (process.env.NODE_ENV === 'production') {
  exports.build = series(
    clean,
    parallel(sassBundle, jsBundle),
    parallel(cssMinify, jsMinify)
  )
} else {
  exports.build = series(
    clean,
    parallel(sassBundle, jsBundle)
  )
}