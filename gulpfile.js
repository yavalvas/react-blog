var gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
// var babel = require('babelify');
var buffer = require('vinyl-buffer');

gulp.task('default', function () {
    var bundler = watchify(browserify({
        entries: [
            './app/public/javascripts/components/main-page/main-page.js'
            // './app/public/javascripts/components/navbar/navbar.js'
        ],
        transform: [reactify],
        extensions: ['.js', '.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }).transform("babelify", {presets: ["es2015"]}));

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
