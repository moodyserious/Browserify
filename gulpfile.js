var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    ngAnnotate = require('gulp-ng-annotate')
    browserifyAnntate = require('browserify-ngannotate'),
    LiveReload = require('gulp-connect'),
    browserify = require('browserify'),
    debowerify = require('debowerify'),
    source = require('vinyl-source-stream');


gulp.task('lint', function(){
    gulp.src(['development/js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
})

gulp.task('JS', function(){


    browserify({
        entries: ['development/js/app.js'],
        transform: [debowerify]
    })
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(gulp.dest('js/'));

})

gulp.task('default', ['lint', 'JS']);

