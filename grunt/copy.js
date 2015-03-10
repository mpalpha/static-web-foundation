module.exports = {
    bower: {
        files: [{
            expand: true,
            cwd: 'bower_components',
            src: [
                'modernizr/modernizr.js',
                'jquery/dist/jquery.js'
            ],
            dest: 'app/js/vendor/',
            filter: 'isFile',
            flatten: true
        }]
    },
    js: {
        files: [{
            expand: true,
            cwd: 'app/js/vendor/',
            src: '**/*',
            dest: 'dist/js/vendor/',
        }]
    },
    img: {
        files: [{
            expand: true,
            cwd: 'app/img/',
            src: '**/*',
            dest: 'dist/img/'
        }]
    },
    fonts: {
        files: [{
            expand: true,
            cwd: 'app/fonts/',
            src: '**/*',
            dest: 'dist/fonts/'
        }]
    },
    html: {
        files: [{
            expand: true,
            cwd: 'app/html/pages/',
            src: '**/*.html',
            dest: 'dist/'
        }]
    }
}
