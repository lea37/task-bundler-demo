const browsersync = require('browser-sync').create()

function browsersyncServe(cb) {
  browsersync.init({
      host: "0.0.0.0", // you can pass your IP as host for mobile development
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