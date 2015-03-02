var gulp,
    del,
    config;

gulp   = require('gulp');
del    = require('del');
config = require('../config').clean;

gulp.task('clean-scripts', function(cb) {
    del(config.scripts, cb);
});

gulp.task('clean-spec', function(cb) {
    del(config.spec, cb);
});
