module.exports = {
    options: {},
    vendor: {
        files: [{
           'dist/js/vendor/foundation.min.js': 'dist/js/vendor/foundation.js',
           'dist/js/vendor/modernizr.min.js': 'dist/js/vendor/modernizr.js',
           'dist/js/vendor/jquery.min.js': 'dist/js/vendor/jquery.js'
        }]
    },
    frontend: {
        files: [{
            'dist/js/app.min.js': 'dist/js/app.js'
        }]
    }
}
