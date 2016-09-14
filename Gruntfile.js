module.exports = function(grunt) {

	grunt.initConfig({

		uglify: {
			options: {
				mangle: false
			},

			my_target: {
				files: {
					'assets/js/app.min.js': ['assets/js/app.js']
				}
			}
		},

		less: {
			development: {
				options: {
					paths: ["assets/css"]
				},
				files: {
					"assets/css/bootstrap.css": "assets/less/bootstrap.less"
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'assets/css/bootstrap.min.css': ['assets/css/bootstrap.css']
				}
			}
		},

		watch: {
			dist: {
				files: [
					'index.php',
					'assets/js/**/*',
					'assets/less/**/*'
				],
				tasks: ['less'],
				options: {
					debounceDelay: 10,
					livereload: 35001
				}
			}
		}, // watch

		open: {
			server: {
				url: '192.168.25.160:80'
			}
		}

	});


	// Plugins do Grunt
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Minify CSS / JS / IMG
	grunt.registerTask('minify', ['uglify', 'cssmin']);

	// Tarefa para Watch
	grunt.registerTask('w', ['watch']);

};