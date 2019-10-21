module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'www/js',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: 'www/js',
                    rename: function(dst, src) {
                        return dst + '/' + src.replace('.js', '.min.js');
                    }
                }]
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'www/main.min.css': 'www/main.css'
                }
            }
        },
        watch: {
            js: {
                files: ['www/js/*.js', "!www/js/*.min.js"],
                tasks: ['uglify'],
            },
            css: {
                files: 'www/main.css',
                tasks: ['cssmin'],
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'uglify']);
    grunt.registerTask('watchme', ['watch']);
};
