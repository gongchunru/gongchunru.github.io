// var gulp = require('gulp'),
//     uglify = require('gulp-uglify'), // 压缩js文件
//     sass = require('gulp-sass'), // 编译sass
//     cleanCSS = require('gulp-clean-css'), // 压缩css文件
//     rename = require('gulp-rename'); // 文件重命名
// var browserSync = require('browser-sync').create();


// gulp.task('scripts', function(){
//     gulp.src('dev/js/index.js')
//         .pipe(uglify())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('assets/js'))
// });

// gulp.task('sass', function(){
//     gulp.src('dev/sass/app.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('dev/sass'))
//         .pipe(cleanCSS())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('assets/css'));
// });

// gulp.task('watch', function(){
//     gulp.watch('dev/sass/*.scss', ['sass']);
//     gulp.watch('dev/js/*.js', ['scripts']);
// });

// function browserSyncReload(done) {
//     browserSync.reload();
//     done();
// }

// gulp.task('default', gulp.series('sass', gulp.series('scripts',gulp.parallel('watch'))));

var gulp = require('gulp');
var sass = require('gulp-sass');
// var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cp = require('child_process');
// var flatten = require('gulp-flatten');
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
// var source = require('vinyl-source-stream');
// var concatjs = require('gulp-concat');
var cleanCSS = require('gulp-clean-css'); // 压缩css文件
var browserSync = require('browser-sync').create();

var paths = {
    styles: {
        src: 'dev/sass/app.scss',
        dest: 'dev/css',
        destsecond: 'assets/css'
    },
    scripts: {
        src: 'dev/js/index.js',
        dest: 'assets/js',
        destsecond: 'js'
    }
};

function jekyllBuild() {
    return cp.spawn(jekyll, ['build'], { stdio: 'inherit' })
}

function style() {
    return gulp.src(paths.styles.src)
        .pipe(sass({
            includePaths: ['sass'],
            outputStyle: 'expanded',
            onError: browserSync.notify
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest(paths.styles.destsecond));

        //         .pipe(sass())
//         .pipe(gulp.dest('dev/sass'))
//         .pipe(cleanCSS())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('assets/css'));
}

function js() {
    return gulp.src([
        // './node_modules/jquery/dist/jquery.min.js',
        // './node_modules/popper.js/dist/umd/popper.min.js',
        // './node_modules/bootstrap/dist/js/bootstrap.min.js',
        // './node_modules/jquery-match-height/dist/jquery.matchHeight-min.js',
        paths.scripts.src
    ])
        .pipe(uglify())
        // .pipe(concatjs('app.bundle.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.reload({ stream: true }))
}

function browserSyncServe(done) {
    browserSync.init({
        server: {
            baseDir: "_site"
        }
    })
    done();
}

function browserSyncReload(done) {
    browserSync.reload();
    done();
}

function watch() {
    gulp.watch(paths.styles.src, style)
    gulp.watch(paths.scripts.src, js)
    gulp.watch(
        [
            '*.html',
            '_layouts/*.html',
            '_posts/*',
            '_data/*',
            '_includes/*'
        ],
        gulp.series(jekyllBuild, browserSyncReload));
}

gulp.task('default', gulp.parallel(jekyllBuild, browserSyncServe, watch))
