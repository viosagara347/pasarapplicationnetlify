"use strict";
// Konfigurasi
var gulp  = require('gulp');
var sass = require('gulp-sass');

// Task `default`
gulp.task('default', function(){
    console.log ('code untuk task default');
});

function browserSync(done) {
    browsersync.init({
      server: {
        baseDir: "./"
      },
      port: 3000
    });
    done();
  }