var gulp,
    browserify,
    transform,
    uglify,
    rename,
    config;

gulp       = require('gulp');
browserify = require('browserify');
transform  = require('vinyl-transform');
uglify     = require('gulp-uglify');
rename     = require('gulp-rename');
config     = require('../config').scripts;

gulp.task('scripts', ['clean-scripts'], function() {
    var browserifyThis;

    browserifyThis = transform(function(filename) {
        return browserify(filename)
            .bundle();
    });

    return gulp.src(config.src)
        .pipe(browserifyThis)
        .pipe(uglify())
        .pipe(rename(config.outputName))
        .pipe(gulp.dest(config.dest));
});
