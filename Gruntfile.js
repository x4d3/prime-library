module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		clean : [ "target" ],
		copy : {
			dev : {
				files : [ {
					expand : true,
					cwd : 'www/',
					src : [ '**' ],
					dest : 'target/'
				}, {
					src : 'src/prime-library.js',
					dest : 'target/prime-library.js',
				} ]
			}
		},
		qunit : {
			files : [ 'tests/**/*test.html' ]
		},
		jshint : {
			files : [ 'Gruntfile.js', 'src/prime-library.js' ],
			options : {
				// options here to override JSHint defaults
				globals : {
					jQuery : true,
					console : true,
					module : true,
					Fraction : true
				}
			}
		},
		uglify : {
			options : {
				banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>  <%= pkg.homepage %> */'
			},
			dist : {
				files : {
					'target/prime-library.min.js' : [ 'target/prime-library.js' ]
				}
			}
		},
		yuidoc : {
			compile : {
				name : '<%= pkg.name %>',
				description : '<%= pkg.description %>',
				version : '<%= pkg.version %>',
				url : '<%= pkg.homepage %>',
				options : {
					paths : 'src',
					outdir : 'target/docs/',
					themedir : "yuidoc-theme",
					helpers : [ "yuidoc-theme/helpers/helpers.js" ]
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.registerTask('test', [ 'jshint', 'qunit' ]);
	grunt.registerTask('default', [ 'test', 'clean', 'copy', 'uglify', 'yuidoc' ]);
};