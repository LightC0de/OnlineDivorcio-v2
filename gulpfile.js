const 
    gulp = require('gulp'),
    pug = require('gulp-pug'),
    rename = require("gulp-rename"),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create()
    ;

gulp.task('pug', function buildHTML() {
    return gulp.src('./src/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(rename(function (path) {
            path.extname = ".html";
          }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {
    return gulp.src('./src/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename(function (path) {
            path.basename = "min." + path.basename;
        }))
        .pipe(gulp.dest('./dist/css'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('server', gulp.series('pug', 'sass', function() { 

    browserSync.init({
        server: "./dist"
    });
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('./src/css/*.scss', gulp.series('sass'));
    gulp.watch("dist/*.html").on('change', browserSync.reload);
    gulp.watch("dist/**/*.css").on('change', browserSync.reload);
    gulp.watch("dist/**/*.js").on('change', browserSync.reload);
}));
   
gulp.task('default', gulp.series('server'));