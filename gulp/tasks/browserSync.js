var gulp,
    browserSync,
    config;

gulp        = require('gulp');
browserSync = require('browser-sync');
config      = require('../config').browserSync;

gulp.task('browserSync', function() {
    browserSync(config);
});
