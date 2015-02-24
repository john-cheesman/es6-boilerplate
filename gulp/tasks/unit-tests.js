var gulp,
    jasmine,
    reporters,
    config;

gulp      = require('gulp');
jasmine   = require('gulp-jasmine');
reporters = require('jasmine-reporters');
config    = require('../config').unitTests;

gulp.task('unit-tests', function() {
    gulp.src(config.src)
        .pipe(jasmine({
            reporter: new reporters.TerminalReporter()
        }));
});
