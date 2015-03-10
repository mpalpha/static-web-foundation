module.exports = {
    options: {
        data: 'app/html/data/*.{json,yml}',
        partials: 'app/html/partials/**/*.hbs'
    },
    development: {
        options: {
            production: false
        },
        files: [{
            expand: true,
            cwd: 'app/html/pages/',
            src: ['**/*.hbs'],
            dest: 'dist/'
        }]
    },
    production: {
        options: {
            production: true
        },
        files: [{
            expand: true,
            cwd: 'app/html/pages/',
            src: ['**/*.hbs'],
            dest: 'dist/'
        }]
    }
}
