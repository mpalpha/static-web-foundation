'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('./watchcontexthelper')(grunt);
    require('load-grunt-config')(grunt, {
        jitGrunt: true,
        sass: 'node-sass',
        // data passed into config.  Can use with <%= test %>
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });

    grunt.registerTask('default', function(target) {
        console.log('default');
        var _tasks = {
            'production': [
                'production',
                'connect:dist:keepalive',
                'open'
            ],
            'dist': [
                'development',
                'connect:dist:keepalive',
                'open'
            ],
            'base': [
                'development',
                'connect:livereload',
                'open',
                'watch',
            ]
        };
        if (target === 'production') {
            grunt.watchcontext = 'production';
        }
        return grunt.task.run(!!_tasks[target] ? _tasks[target] : _tasks['base']);
    });

    grunt.registerTask('production', [
        'clean:dist',
        'copy:bower',
        'concat:foundation',
        'concat:js',
        'sass:prod',
        'clean:devcss',
        'copy:img',
        'copy:fonts',
        'copy:js',
        'uglify',
        'clean:devjs',
        'copy:html',
        'assemble:production',
        'connect:dist:keepalive',
        'open'
    ]);

    grunt.registerTask('development', [
        'clean:dist',
        'copy:bower',
        'concat:foundation',
        'concat:js',
        'sass:dev',
        'copy:img',
        'copy:fonts',
        'copy:js',
        'copy:html',
        'assemble:development'
    ]);

    grunt.registerTask('dev', [
        'development'
    ]);
};
