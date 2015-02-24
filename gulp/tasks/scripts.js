var gulp,
    browserify,
    babelify,
    source,
    config;

gulp       = require('gulp');
browserify = require('browserify');
babelify   = require('babelify');
source     = require('vinyl-source-stream');
config     = require('../config').scripts;

gulp.task('scripts', function() {
    function browserifyThis(bundleConfig) {
        return browserify({
            debug: config.browserify.debug,
            entries: bundleConfig.entry
        })
            .bundle()
            .pipe(source(bundleConfig.fileName))
            .pipe(gulp.dest(bundleConfig.dest));
    }

    config.bundleConfigs.forEach(browserifyThis);
});
