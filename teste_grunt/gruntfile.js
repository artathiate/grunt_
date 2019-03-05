module.exports = function(grunt){
    grunt.initConfig({

        concat: {
          dist: {
            src: ['js/index.js', 'js/teste.js'],
            dest: 'js/min.js',
          },
        },

        uglify: {
            my_target: {
              files: {
                'js/min.js': ['js/min.js']
              }
            }
        },

        cssmin: {
            combine: {
              files: {
                'css/min.css': ['css/style.css', 'css/teste.css']
              }
            }
          }
    
    });
      

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default',['concat','uglify','cssmin']);
}