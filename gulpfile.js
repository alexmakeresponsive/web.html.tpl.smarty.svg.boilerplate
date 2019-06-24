const gulp          = require('gulp');
const del           = require('del');
const autoprefixer  = require('gulp-autoprefixer');
const cssnano       = require('gulp-cssnano');
const rename        = require("gulp-rename");
const concat        = require('gulp-concat');
const sass          = require('gulp-sass');
const uglify        = require('gulp-uglify');

const styleOutFileName  = 'common';
const scriptOutFileName = 'common';
const npmPathBootStrap  = './node_modules/bootstrap/scss/';


// css
gulp.task( 'css:remove', function() {
    return del(
        './source/styles/'+styleOutFileName+'.min.css'
    );
});
gulp.task('css:create', function () {
    return gulp.src(
            [
                './source/templates/grid.scss',
                npmPathBootStrap + '_functions.scss',
                npmPathBootStrap + '_variables.scss',
                npmPathBootStrap + 'mixins/_breakpoints.scss',
                npmPathBootStrap + 'mixins/_grid.scss',
                npmPathBootStrap + '_grid.scss',
                './source/templates/**/*.scss',
            ]
        )
        .pipe(concat(styleOutFileName+'.scss'))
        .pipe(sass())
        .pipe( autoprefixer({
            // browsers: ['last 2 versions'],
            // cascade: true
        }) )
        // .pipe( cssnano() )
        .pipe( rename({
            suffix: ".min",
            // basename: "common"
        }))
        .pipe(gulp.dest('./source/styles'));
});
// css

// js
gulp.task( 'js:remove', function() {
    return del(
        './source/scripts/'+scriptOutFileName+'.min.js'
    );
});
gulp.task('js:create', function () {
    return gulp.src(
            [
                './source/templates/**/*.js',
            ]
        )
        .pipe(concat(styleOutFileName+'.js'))
        .pipe( uglify() )
        .pipe( rename({
            suffix: ".min",
            // basename: "common"
        }))
        .pipe(gulp.dest('./source/scripts'));
});
// js

gulp.task( 'watch', function() {
    gulp.watch( './source/templates/**/*.scss', gulp.series('css:remove', 'css:create') );
    gulp.watch( './source/templates/**/*.js', gulp.series('js:remove', 'js:create') );
});

gulp.task('default', gulp.series(
    'css:remove',
    'css:create',
    'js:remove',
    'js:create',
    'watch',
));
