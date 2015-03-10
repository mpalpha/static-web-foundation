module.exports = function(grunt){
    grunt.registerTask('watchcontexthelper', function(target) {
        return {
            'gruntfile': function() {
                console.log('Spawning a child process for complete rebuild...');
                var child;

                var showDone = function() {
                    console.log('Done');
                }

                if (grunt.watchcontext === 'production') {
                    child = grunt.util.spawn({
                        grunt: true,
                        args: ['production']
                    }, showDone);
                } else {
                    child = grunt.util.spawn({
                        grunt: true,
                        args: ['development']
                    }, showDone);
                }
                child.stdout.pipe(process.stdout);
                child.stderr.pipe(process.stderr);
            },
            'js': function() {
                (grunt.watchcontext === 'production') ?
                grunt.task.run(['clean:js', 'copy:js', 'concat', 'uglify', 'clean:devjs']):
                    grunt.task.run(['clean:js', 'copy:js', 'concat']);
            },
            'img': function() {
                (grunt.watchcontext === 'production') ?
                grunt.task.run(['clean:img', 'copy:img']):
                    grunt.task.run(['clean:img', 'copy:img']);
            },
            'html': function() {
                (grunt.watchcontext === 'production') ?
                grunt.task.run(['clean:html', 'copy:html', 'assemble:production']):
                    grunt.task.run(['clean:html', 'copy:html', 'assemble:development']);
            },
            'sass': function() {
                (grunt.watchcontext === 'production') ?
                grunt.task.run(['clean:css', 'sass:dev', 'clean:devcss']):
                    grunt.task.run(['clean:css', 'sass:dev']);
            }
        }[target]();
    });
}