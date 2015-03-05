var gulp,
    browserify,
    transform,
    babelify,
    rename,
    jasmine,
    reporters,
    config;

gulp       = require('gulp');
browserify = require('browserify');
transform  = require('vinyl-transform');
babelify   = require('babelify');
rename     = require('gulp-rename');
jasmine    = require('gulp-jasmine');
reporters  = require('jasmine-reporters');
config     = require('../config').spec;

gulp.task('spec', ['clean-spec'], function() {
    var browserifyThis;

    browserifyThis = transform(function(fileName) {
        return browserify(fileName)
            .transform(babelify
                .configure({
                    ignore: 'node_modules'
                }))
            .bundle();
    });

    return gulp.src(config.src)
        .pipe(browserifyThis)
        .pipe(rename(config.outputName))
        .pipe(gulp.dest(config.dest))
        .pipe(jasmine({
            reporter: new reporters.TerminalReporter(config.reporter)
        }));
});
