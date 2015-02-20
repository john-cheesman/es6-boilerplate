module.exports = {
    scripts: {
        entry: './src/js/index.js',
        src: './src/js/**/*.js',
        dest: './web/js',
        fileName: 'scripts.js'
    },
    clean: {
        paths: [
            './web/js'
        ]
    },
    browserSync: {
        server: {
            baseDir: './web'
        }
    }
};
