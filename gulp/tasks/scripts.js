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
    browserify(config.browserify)
        .transform(babelify)
        .require(
            config.entry,
            {
                entry: true
            }
        )
        .bundle()
        .pipe(source(config.fileName))
        .pipe(gulp.dest(config.dest));
});
