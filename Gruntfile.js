
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9998, // custom port
                    base: 'app/', // current directory for 'index.html'
                    keepalive: true, // keep the server alive indefinitely
                    }
                }
            }
		});
		grunt.loadNpmTasks('grunt-contrib-connect');
		grunt.registerTask('default');
    };
