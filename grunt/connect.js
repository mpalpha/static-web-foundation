// Live Reload
var livereloadSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
    mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = {
    options: {
        port: 9090,
        hostname: 'localhost' // change this to '0.0.0.0' to access the server from outside
    },
    livereload: {
        options: {
            middleware: function(connect) {
                return [
                    livereloadSnippet,
                    mountFolder(connect, 'dist')
                ];
            }
        }
    },
    dist: {
        options: {
            middleware: function(connect) {
                return [
                    mountFolder(connect, 'dist')
                ];
            }
        }
    }
}
