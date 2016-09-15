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
                'sources/function-plot/*.js',
                'sources/functions/*.js',
                'sources/simplify/*.js',
                'sources/calculus/*.js',
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
    grunt.registerTask('app', ['uglify:app']);
};
