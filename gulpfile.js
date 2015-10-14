(function() {
  'use strict';

  var gulp = require('gulp');
  var mocha = require('gulp-mocha');

  gulp.task('default', ['unit-tests', 'watch']);

  gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['unit-tests']);
    gulp.watch('tests/**/*.spec.js', ['unit-tests']);
  });

  gulp.task('unit-tests', function() {
    return gulp.src(['tests/**/*.spec.js'],
      {read: false})
      .pipe(mocha(
        {
          reporter: 'spec' // 'landing' 'nyan' 'spec' 'dot' 'progress'
        }));
    /*
     https://github.com/sindresorhus/gulp-mocha

     If your test suite is not exiting it might be because you still have a lingering callback,
     most often caused by an open database connection.
     You should close this connection or do the following:

     .once('error', function () {
     process.exit(1);
     })
     .once('end', function () {
     process.exit();
     });

     */
  });
})();