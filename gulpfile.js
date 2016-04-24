// var React = require('react');
// var jquery = require('jquery');
// var _ = require('underscore');
// window.React = React;
// window.jquery = jquery;
// window._ = _;

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('default', function () {
    var bundler = watchify(browserify({
        entries: [
            './app/public/javascripts/components/main-page/main-page.js',
            './app/public/javascripts/components/navbar/navbar.js'
        ],
        transform: [reactify],
        extensions: ['.js', '.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('app/public/javascripts/build/application.js'))
            .pipe(gulp.dest('./'));
    }

    build();
    bundler.on('update', build);
});
