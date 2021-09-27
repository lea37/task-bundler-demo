const del     = require('del')

function clean(cb) {
  return del('dist/*', { force: true })
  cb()
}

exports.clean = clean;
