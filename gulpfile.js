'use strict'

/* ***************************** Dependencies ********************************/

const $ = require('gulp-load-plugins')()
const bs = require('browser-sync')
const del = require('del')
const gulp = require('gulp')
const statilConfig = require('./statil')

/* ******************************** Globals **********************************/

const src = {
  docHtml: 'docs/html/**/*',
  docStyles: 'docs/styles/**/*.scss',
  docStylesMain: 'docs/styles/docs.scss',
  docFonts: 'node_modules/font-awesome/fonts/**/*',
  libStylesDir: 'scss',
}

const out = {
  docRoot: 'gh-pages',
  docStyles: 'gh-pages/styles',
  docFonts: 'gh-pages/fonts',
}

function noop () {}

/* ********************************* Tasks ***********************************/

/* --------------------------------- Clear ---------------------------------- */

gulp.task('docs:clear', () => (
  // Skips dotfiles like `.git` and `.gitignore`
  del(out.docRoot + '/*').catch(noop)
))

/* --------------------------------- HTML -----------------------------------*/

gulp.task('docs:html:build', () => (
  gulp.src(src.docHtml)
    .pipe($.statil(statilConfig))
    .pipe(gulp.dest(out.docRoot))
))

gulp.task('docs:html:watch', () => {
  $.watch(src.docHtml, gulp.series('docs:html:build'))
})

/* -------------------------------- Styles ----------------------------------*/

gulp.task('docs:styles:build', () => (
  gulp.src(src.docStylesMain)
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.cleanCss({
      keepSpecialComments: 0,
      aggressiveMerging: false,
      advanced: false,
      compatibility: {properties: {colors: false}}
    }))
    .pipe(gulp.dest(out.docStyles))
))

gulp.task('docs:styles:watch', () => {
  $.watch([src.docStyles, src.libStylesDir], gulp.series('docs:styles:build'))
})

/* -------------------------------- Fonts -----------------------------------*/

gulp.task('docs:fonts:build', () => (
  gulp.src(src.docFonts).pipe(gulp.dest(out.docFonts))
))

gulp.task('docs:fonts:watch', () => {
  $.watch(src.docFonts, gulp.series('docs:fonts:build'))
})

/* -------------------------------- Server ----------------------------------*/

gulp.task('docs:server', () => (
  bs.init({
    startPath: '/stylebox/',
    server: {
      baseDir: 'gh-pages',
      middleware: [
        (req, res, next) => {
          req.url = req.url.replace(/^\/stylebox\//, '').replace(/^[/]*/, '/')
          next()
        }
      ]
    },
    port: 36463,
    files: 'gh-pages',
    open: false,
    online: false,
    ui: false,
    ghostMode: false,
    notify: false
  })
))

/* -------------------------------- Default ---------------------------------*/

gulp.task('docs:buildup', gulp.parallel(
  'docs:html:build',
  'docs:styles:build',
  'docs:fonts:build'
))

gulp.task('docs:watch', gulp.parallel(
  'docs:html:watch',
  'docs:styles:watch',
  'docs:fonts:watch'
))

gulp.task('docs:build', gulp.series(
  'docs:clear',
  'docs:buildup'
))

gulp.task('default', gulp.series(
  'docs:build',
  gulp.parallel('docs:watch', 'docs:server')
))
