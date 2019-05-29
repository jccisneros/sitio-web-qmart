const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');

gulp.task('pug', () => {
    return gulp.src('src/dev/views/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('src/dist/'))
    .pipe(browserSync.stream());
});

gulp.task('sass', () => {
    return gulp.src([        
        'src/dev/scss/*.scss',
        'src/dev/scss/components/*.scss',
        'src/dev/scss/helpers/*.scss',
        'node_modules/izimodal/css/iziModal.min.css'
    ])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('src/dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src([        
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'node_modules/izimodal/js/iziModal.min.js'
    ])
    .pipe(gulp.dest('src/dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('img', () =>
    gulp.src('src/dev/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),            
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('src/dist/img'))
);

gulp.task('serve', ['sass', 'pug', 'img'], () => {
    browserSync.init({
        server: './src/dist'
    });
    gulp.watch([        
        'src/dev/scss/**/*.scss',
        'src/dev/views/**/*.pug',
        'src/dev/img/*'        
    ], ['img', 'sass',  'pug']);
    gulp.watch('src/dist/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);