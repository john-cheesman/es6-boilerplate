var gulp,
    config;

gulp   = require('gulp');
config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.scripts.watch, ['scripts']);
    gulp.watch(config.spec.watch, ['spec']);
});
