const gulp = require('gulp')
const {series, parallel} = require('gulp')

function Antes1(callBack){
    console.log('Task 1')
    return callBack()
}

function Antes2(callBack){
    console.log('Task 2')
    return callBack()
}

function Antes3(callBack){
    console.log('Task 2')
    return callBack()
}

function copiar(callBack){
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt')
        // .pipe(mudaTextoTal())
        // .pipe(colocaImagemDeTalForma())
        // .pipe(fazUmFundoPreto())
        .pipe(gulp.dest('pastaB'))
    return callBack()
}

function fim(callBack){
    console.log('task FIM')
    return callBack()
}

module.exports.default = series(parallel(Antes1, Antes2), Antes3, copiar, fim)
