var gulp,
    del,
    config;

gulp   = require('gulp');
del    = require('del');
config = require('../config').clean;

gulp.task('clean', function() {
    del(config.paths);
});
