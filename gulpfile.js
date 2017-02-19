'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
	
gulp.task("concatScripts", function(){

	return gulp.src([
		'node_modules/angular/angular.js',
		'node_modules/jquery/dist/jquery.js',
		'public/js/main.js'
	])
	.pipe(concat("app.js"))
	.pipe(gulp.dest("public/js"));

});

gulp.task("minifyScripts", ["concatScripts"], function(){
	return gulp.src("public/js/app.js")
 	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('public/js'));
});

gulp.task("build", ['minifyScripts']);

gulp.task("hello", function(){
	console.log("Hello!");
});

gulp.task("default", ['build']);
