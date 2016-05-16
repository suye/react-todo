var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var livereload = require('gulp-livereload');
gulp.task("jsx",function(){
	browserify({
		entries: ["./app.jsx"],
		transform: [reactify]
	})
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest("./"))
});



gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./*.jsx', ['jsx']);
    gulp.watch('css/style.css',function(event){
    	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task("default",["jsx","watch"]);