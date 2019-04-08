const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

gulp.task('pug', () => {
    return gulp.src('src/dev/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('src/dist/'))
    .pipe(browserSync.stream());
});

gulp.task('sass', () => {
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/dev/scss/*.scss'
    ])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('src/dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js'
    ])
    .pipe(gulp.dest('src/dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass', 'pug'], () => {
    browserSync.init({
        server: './src/dist'
    });
    gulp.watch([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/dev/scss/*.scss',
        'src/dev/views/**/*.pug'
    ], ['sass', 'pug']);
    gulp.watch('src/dist/*.html').on('change', browserSync.reload);
});

gulp.task('fa', () =>{
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/dist/css'));
});

gulp.task('fonts', () =>{
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/dist/fonts'));
});

gulp.task('default', ['js', 'serve', 'fa', 'fonts']);