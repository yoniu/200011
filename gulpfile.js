const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

gulp.task('minify', () => {
    return gulp.src(['./src/*.html', './src/*/*.html', './src/*/*/*.html'])
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
});

gulp.task('copy', (cb) => {
    gulp.src('./src/assets/css/*.css')
        .pipe(gulp.dest('dist/assets/css'));

    gulp.src('./src/assets/js/*.js')
        .pipe(gulp.dest('dist/assets/js'));
    cb();
});

gulp.task('bulid', gulp.series('minify', 'copy'));