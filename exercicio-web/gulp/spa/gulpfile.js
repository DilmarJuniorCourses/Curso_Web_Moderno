const {series, parallel} = require('gulp')
const gulp = require('gulp')

 const {appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/app')
 const {depsCSS, depsFONT} = require('./gulpTasks/deps')
 const {monitoraArquivos, servidor} = require('./gulpTasks/servidor')

 module.exports.default = series(
                                parallel(
                                        series(appHTML, appCSS, appJS, appIMG),
                                        series(depsCSS, depsFONT)
                                    ),
                                    servidor, monitoraArquivos)
