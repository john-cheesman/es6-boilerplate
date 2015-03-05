var gulp,
    browserify,
    transform,
    babelify,
    uglify,
    rename,
    config;

gulp       = require('gulp');
browserify = require('browserify');
transform  = require('vinyl-transform');
babelify   = require('babelify');
uglify     = require('gulp-uglify');
rename     = require('gulp-rename');
config     = require('../config').scripts;

gulp.task('scripts', ['clean-scripts'], function() {
    var browserifyThis;

    browserifyThis = transform(function(filename) {
        return browserify(filename)
            .transform(babelify
                .configure({
                    ignore: 'node_modules'
                }))
            .bundle();
    });

    return gulp.src(config.src)
        .pipe(browserifyThis)
        .pipe(uglify())
        .pipe(rename(config.outputName))
        .pipe(gulp.dest(config.dest));
});
