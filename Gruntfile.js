module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nodewebkit: {
            options: {
                build_dir: './builds',
                mac: false,
                win: false,
                linux32: true,
                linux64: false
            },
            src: ['./app.nw/**/*']
        },

        sass: {
            options: {
                includePaths: ['app.nw/components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'app.nw/css/app.css': 'app.nw/scss/app.scss'
                }
            }
        },

        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                files: 'app.nw/scss/**/*.scss',
                tasks: ['sass']
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass', 'nodewebkit']);
    grunt.registerTask('default', ['sass','watch']);

};