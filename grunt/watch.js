module.exports = {
    options: {
        livereload: true,
        interrupt: true
    },
    gruntfile: {
        files: ['grunt/*.js', './*.js'],
        tasks: ['watchcontexthelper:gruntfile'],
        options: {
			nospawn: true
        }
    },
    sass: {
        files: ['app/scss/**/*.scss'],
        tasks: ['watchcontexthelper:sass'],
        options: {
			nospawn: true
        }
    },
    js: {
        files: ['app/js/**/*.js'],
        tasks: ['watchcontexthelper:js'],
        options: {
			nospawn: true
        }
    },
    img: {
        files: ['app/img/**/*'],
        tasks: ['watchcontexthelper:img'],
        options: {
			nospawn: true
        }
    },
    html: {
        files: ['app/html/**/*.hbs'],
        tasks: ['watchcontexthelper:html'],
        options: {
			nospawn: true
        }
    }
}
