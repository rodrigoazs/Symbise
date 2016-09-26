module.exports = function (grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // cssmin: {
        //     sitecss: {
        //         options: {
        //             banner: '/* My minified css file */'
        //         },
        //         files: {
        //             'css/site.min.css': [
        //                 ]
        //         }
        //     }
        // },
        concat: {
            options: {
                banner: '/*\n' + // 6
                        ' * ' + '<%= pkg.name %>\n' + // 7
                        ' * ' + 'v<%= pkg.version %>\n' + // 8
                        ' * ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + // 9
                        ' **/\n'
            },
            lib: {
              src: [
              'sources/lib_header.js',
              'sources/functions/*.js',
              'sources/simplify/*.js',
              'sources/calculus/*.js',
              'sources/algebra/*.js',
              'sources/notation/*.js',
              'sources/parsing/*.js',
              'sources/lib_footer.js'
              ],
              dest: 'jsym.lib.js'
            },
            test: {
              src: [
              'sources/functions/*.js',
              'sources/simplify/*.js',
              'sources/calculus/*.js',
              'sources/algebra/*.js',
              'sources/notation/*.js',
              'sources/parsing/*.js',
              'sources/system.js'
              ],
              dest: 'app/www/js/jsym.app.js'
            }
        },
        uglify: {
            options: {
                compress: true,
                banner: '/*\n' + // 6
                        ' * ' + '<%= pkg.name %>\n' + // 7
                        ' * ' + 'v<%= pkg.version %>\n' + // 8
                        ' * ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + // 9
                        ' **/\n'
            },
            applib: {
                src: [
                'js/teste.js',
                ],
                dest: 'js/applib.js'
            },
            app: {
                src: [
                'sources/functions/*.js',
                'sources/simplify/*.js',
                'sources/calculus/*.js',
                'sources/algebra/*.js',
                'sources/notation/*.js',
                'sources/parsing/*.js',
                'sources/*.js'
                ],
                dest: 'app/www/js/jsym.app.min.js'
            }
        }
    });
    // Default task.
    grunt.registerTask('default', ['uglify']); //'cssmin'
    grunt.registerTask('lib', ['concat:lib']);
    grunt.registerTask('test', ['concat:test']);
    grunt.registerTask('app', ['uglify:app']);
};
