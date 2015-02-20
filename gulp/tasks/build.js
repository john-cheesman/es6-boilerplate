var gulp,
    sequence;

gulp     = require('gulp');
sequence = require('run-sequence');

gulp.task('build', function() {
    sequence('clean', 'scripts');
});
