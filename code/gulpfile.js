var gulp     = require('gulp'),
    coffee   = require('gulp-coffee'),
    compress = require('gulp-yuicompressor'),
    concat   = require('gulp-concat'),
    replace  = require('gulp-html-replace'),
    shell    = require('gulp-shell');

gulp.task('coffee', function () {
    gulp.src('./coffee/*.coffee').pipe(coffee()).pipe(gulp.dest('js'));
});

gulp.task('server', shell.task(['python -m SimpleHTTPServer 8090']));

gulp.task('watch', function () {
    gulp.watch('./coffee/*.coffee', ['coffee']);
});

gulp.task('default', ['coffee', 'server', 'watch']);

gulp.task('build', function () {
    gulp.src('js/*.js')
        .pipe(compress({ type: 'js' }))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/js'));
    gulp.src('html/index.html')
        .pipe(replace({
            'js': 'js/app.min.js'
        }))
        .pipe(gulp.dest('build'));
});
