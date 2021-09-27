const browsersync = require('browser-sync').create()

function browsersyncServe(cb) {
  browsersync.init({
      host: "192.168.1.74",
      open: true,
      port: 3000,
      server: {
        baseDir: './'
      }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

exports.browsersyncServe = browsersyncServe;
exports.browsersyncReload = browsersyncReload;