var gulp,
    sequence;

gulp     = require('gulp');
sequence = require('run-sequence');

gulp.task('default', function() {
    sequence('build', 'browserSync', 'watch');
});
