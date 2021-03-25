const {src, dest, series, watch} = require('gulp')
const pug = require('gulp-pug')
const scss = require('gulp-sass')
const rigger = require('gulp-rigger')
const webp = require('gulp-webp')
const del = require('del')
const { sync, init, reload } = require('browser-sync').create()

function layout() {
  return src([
    './src/**/*.pug', 
    '!src/**/_*.pug'
  ])
    .pipe(pug())
    .pipe(dest('./public'))
}

function style() {
  return src([
    './src/**/*.scss', 
    '!src/**/_*.scss'
  ])
    .pipe(scss())
    .pipe(dest('./public'))
}

function script() {
  return src([
    './src/**/*.js',
    '!src/**/_*.js'
  ])
    .pipe(rigger())
    .pipe(dest('./public'))
}

function convertAssets() {
  return src([
    './src/**/*.wp.jpg',
    './sec/**/*.wp.png'
  ])
    .pipe(webp())
    .pipe(dest('./public'))
}

function transfer() {
  return src([
    './src/**/*.cnt.*'
  ])
    .pipe(dest('./public'))
}

function clear() {
  return del([
    './public/**/*.html', 
    './public/**/*.css', 
    './public/**/*.js', 
    '!public/**/_*.*'
  ])
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
exports.wp_convert = convertAssets
exports.transfer = transfer
exports.clear = clear
exports.clear_all = clearAll

exports.build = series(clear, transfer, convertAssets, layout, script, style)
exports.assets = series(clearAll, transfer, convertAssets)
exports.dev = series(clear, layout, script, style, serve)