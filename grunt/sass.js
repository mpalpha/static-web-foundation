module.exports = {
    options: {
        includePaths: [
            'bower_components/foundation/scss'
        ]
    },
    prod: {
        files: {
            'dist/css/main.min.css': 'app/scss/main.scss'
        }
    },
    dev: {
        options: {
            sourceComments: 'map',
            outputStyle: 'extended',
            sourceMap: true
        },
        files: {
            'dist/css/main.css': 'app/scss/main.scss'
        }
    }
}
