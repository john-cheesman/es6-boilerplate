var gulp,
    sequence;

gulp     = require('gulp');
sequence = require('run-sequence');

gulp.task('tests', function() {
    sequence('unit-tests');
});
