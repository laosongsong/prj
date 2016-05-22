var gulp = require('gulp');
gulp.task('copy-index', function(){
	gulp.src('index.html').pipe(gulp.dest('dist/'))
});

gulp.task('default', ['copy-index'], function(){
	console.log('任务完成！');
})
