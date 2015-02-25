module.exports = {
    scripts: {
        watch: './src/js/**/*.js',
        src: './src/js/index.js',
        dest: './web/js',
        outputName: 'scripts.js'
    },
    clean: {
        scripts: './web/js',
        spec: './spec/spec-tests.js'
    },
    browserSync: {
        server: {
            baseDir: './web'
        }
    },
    spec: {
        watch: './spec/**/*.js',
        src: './spec/spec.js',
        dest: './spec',
        reporter: {
            verbosity: 3
        },
        outputName: 'spec-tests.js'
    }
};
