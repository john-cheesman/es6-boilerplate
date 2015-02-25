var gulp,
    browserify,
    transform,
    rename,
    config;

gulp       = require('gulp');
browserify = require('browserify');
transform  = require('vinyl-transform');
rename     = require('gulp-rename');
config     = require('../config').scripts;

gulp.task('scripts', ['clean-scripts'], function() {
    var browserifyThis;

    browserifyThis = transform(function(filename) {
        return browserify(filename, config.browserify)
            .bundle();
    });

    console.log(browserifyThis);

    return gulp.src(config.src)
        .pipe(browserifyThis)
        .pipe(rename(config.outputName))
        .pipe(gulp.dest(config.dest));
});
