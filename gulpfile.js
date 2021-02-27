const {src, dest, series, watch} = require('gulp')
const pug = require('gulp-pug')
const scss = require('gulp-sass')
const rigger = require('gulp-rigger')
const del = require('del')
const { sync, init, reload } = require('browser-sync').create()

function layout() {
  return src('./src/**.pug')
    .pipe(pug())
    .pipe(dest('./public'))
}

function style() {
  return src('./src/scss/**.scss')
    .pipe(scss())
    .pipe(dest('./public/assets/stylesheet'))
}

function script() {
  return src('./src/scripts/**.js')
    .pipe(rigger())
    .pipe(dest('./public/assets'))
}

function clear() {
  return del(['./public', '!public/assets', '!public/assets/images', '!public/assets/images/**', '!public/assets/fonts', '!public/assets/fonts/**'])
}

function clearAll() {
  return del(['./public'])
}

function serve() {
  init({
    server: './public'
  })

  watch('././src/**/**.pug', series(layout)).on('change', reload)
  watch('././src/scripts/**/**.js', series(script)).on('change', reload)
  watch('././src/scss/**/**.scss', series(style)).on('change', reload)
}

exports.layout = layout
exports.script = script
exports.style = style
exports.clear = clear
exports.clear_all = clearAll

exports.build = series(clear, layout, script, style)
exports.dev = series(clear, layout, script, style, serve)