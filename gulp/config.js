module.exports = {
    scripts: {
        src: './src/js/**/*.js',
        browserify: {
            debug: true
        },
        bundleConfigs: [
            {
                entry: './src/js/index.js',
                dest: './web/js',
                fileName: 'scripts.js'
            },
            {
                entry: './test/unit-test-specs.js',
                dest: './test',
                fileName: 'unit-tests.js'
            }
        ]
    },
    clean: {
        paths: [
            './web/js',
            './tests/units-tests.js'
        ]
    },
    browserSync: {
        server: {
            baseDir: './web'
        }
    },
    unitTests: {
        src: './test/unit-tests.js',
        reporter: {
            verbosity: 3
        }
    }
};
