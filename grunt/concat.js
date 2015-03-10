module.exports = {
    foundation: {
        src: [
            'bower_components/**/foundation.js',
            'bower_components/**/foundation/foundation.abide.js',
            'bower_components/**/foundation/foundation.accordion.js',
            'bower_components/**/foundation/foundation.alert.js',
            'bower_components/**/foundation/foundation.clearing.js',
            'bower_components/**/foundation/foundation.cookie.js',
            'bower_components/**/foundation/foundation.dropdown.js',
            'bower_components/**/foundation/foundation.equalizer.js',
            'bower_components/**/foundation/foundation.forms.js',
            'bower_components/**/foundation/foundation.interchange.js',
            'bower_components/**/foundation/foundation.joyride.js',
            'bower_components/**/foundation/foundation.magellan.js',
            'bower_components/**/foundation/foundation.offcanvas.js',
            'bower_components/**/foundation/foundation.orbit.js',
            'bower_components/**/foundation/foundation.placeholder.js',
            'bower_components/**/foundation/foundation.reveal.js',
            'bower_components/**/foundation/foundation.section.js',
            'bower_components/**/foundation/foundation.slider.js',
            'bower_components/**/foundation/foundation.tab.js',
            'bower_components/**/foundation/foundation.tooltips.js',
            'bower_components/**/foundation/foundation.topbar.js',
        ],
        dest: 'app/js/vendor/foundation.js'
    },
    js: {
        src: [
            'app/js/app/**/*.js',
        ],
        dest: 'dist/js/app.js'
    }
}
