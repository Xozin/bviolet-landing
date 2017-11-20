var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    pug    = require('gulp-pug'),
    fs = require('fs'),
    path = './';

gulp.task('sass-watch', function() {
    gulp.watch(path + 'sass/*.scss', ['sass']);
});

gulp.task('pug-watch', function() {
    gulp.watch(path + 'pug/*.pug', ['pug']);
    gulp.watch(path + 'pug/includes/*.pug', ['pug']);

});

gulp.task('sass', function() {
    gulp.src(path + 'sass/styles.scss')
        .pipe(sass({sourceComments: 'normal'}))
        .pipe(gulp.dest(path + 'result/css/'));
});
// var config = require('./pug/variables.json');
gulp.task('pug', function buildHTML() {
    // console.log(JSON.parse( fs.readFileSync('./pug/variables.json', { encoding: 'utf8' })));
    return gulp.src(path + 'pug/*.pug')
        .pipe(pug({
            'pretty' : true
            // 'locals' : config
            // 'data' : JSON.parse( fs.readFileSync('./pug/variables.json', { encoding: 'utf8' }) )
        }))
        .pipe(gulp.dest(path + 'result/'))
});



gulp.task('default', ['sass', 'pug', 'sass-watch', 'pug-watch']);