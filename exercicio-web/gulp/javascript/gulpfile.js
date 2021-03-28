const {series} = require('gulp') //Series executa em serie as tasks
const gulp = require('gulp') //Gulp automatiza diversas tarefas
const uglify = require ('gulp-uglify') //Minifica os arquivos, elimando espaços e resumindo variaveis
const babel = require('gulp-babel') //Transforma o código js novo em um código suportado pela maioria dos browsers
const concat = require('gulp-concat')//Concatena dados e arquivos

function transformaJS(callBack) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
                comments: false,
                presets: ["env"] //coloca a versão mais nova possivel
        }))
        .pipe(uglify())
        .on('error', erro => console.log(erro))
        .pipe(concat('codigo.min.js')) //Concatenando o conteudo dos arquivos no arquivo codigo.min.js
        .pipe(gulp.dest('build'))
}

function fim (callBack){
    console.log('Fim da transformação !')
    return callBack()
}

exports.default = series(transformaJS, fim)
