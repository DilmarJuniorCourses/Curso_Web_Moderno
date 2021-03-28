const {series, parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass') //Converte código SASS em CSS
const uglifycss = require ('gulp-uglifycss')
const minifyhtml = require('gulp-minify-html') //Minifica html
const concat = require('gulp-concat')

function trasnformaCSS(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiaHTML(){
    return gulp.src('src/index.html')
        .pipe(minifyhtml({"comments":false}))
        .pipe(gulp.dest('build'))
}

exports.default = parallel(trasnformaCSS, copiaHTML)