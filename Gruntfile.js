module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      distCode: {
        files: []
      }
    },
    nwjs: {
      options: {
        version: 'v0.12.3',
        buildDir: './out', 
        platforms: ['win32', 'win64', 'linux64', 'osx64']
      },
			src: './app/**/*' 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-nw-builder');
  grunt.registerTask('default', ['uglify', 'nwjs']);
};

