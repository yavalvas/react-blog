var gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var babel = require('babelify');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
//
// gulp.task('sass', function() {
//     return gulp.src('./sass/**/*.scss')
//         .pipe(sass.sync().on('error', sass.logError))
//         .pipe(gulp.dest('./app/public/stylesheets'));
// });



gulp.task('default', function () {
    var bundler = watchify(browserify({
        entries: [
            './app/public/javascripts/components/main-page/main-page.js'
            // './app/public/javascripts/components/navbar/navbar.js'
        ],
        // transform: [reactify],
        extensions: ['.js', '.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }).transform(babel.configure({presets: ["es2015", "react"],
        plugins: [
            "transform-es2015-modules-commonjs",
            "transform-react-jsx",
            "transform-es2015-arrow-functions"
    ]})));

    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('app/public/javascripts/build/application.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./'));
    }

    build();
    bundler.on('update', build);
});
