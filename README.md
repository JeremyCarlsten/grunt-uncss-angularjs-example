grunt-uncss-angular-example
===========================

[![Build Status](https://travis-ci.org/JeremyCarlsten/grunt-uncss-angular-example.svg?branch=master)](https://travis-ci.org/JeremyCarlsten/grunt-uncss-angular-example)

An example of grunt-uncss with AngularJs.



Grunt-uncss plugin configuration:

```
    ...
    uncss:{
      dist:{
        files:{
          'dist/styles/tidy.css' : ['app/index.html']
        }
      }
    },
    ...
```

where it's wired up in the build task: 

```
...
  grunt.registerTask('build', [
    'clean:dist',
    'bowerInstall',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin',
    'uncss'
  ]);
  ...
```

