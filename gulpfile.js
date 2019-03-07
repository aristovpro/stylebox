'use strict'

/**
 * Dependencies
 */

const $                 = require('gulp-load-plugins')()
const bs                = require('browser-sync')
const cp                = require('child_process')
const fs                = require('fs')
const del               = require('del')
const gulp              = require('gulp')
const {promisify}       = require('util')
const {compileTemplate} = require('statil')
const {md}              = require('./md')


const readFile          = promisify(fs.readFile)
const writeFile         = promisify(fs.writeFile)

/**
 * Globals
 */

const SRC_DOC_HTML        = 'docs/templates/index.html'
const SRC_DOC_MD          = 'docs/templates/index.md'
const SRC_DOC_STYLE_FILES = 'docs/styles/**/*.scss'
const SRC_DOC_STYLE_ENTRY = 'docs/styles/docs.scss'

const OUT_DOC_DIR         = 'gh-pages'
const OUT_DOC_HTML_FILE   = 'gh-pages/index.html'

const COMMIT              = cp.execSync('git rev-parse --short HEAD').toString().trim()
const {version: VERSION}  = require('./package.json')

/**
 * Clear
 */

gulp.task('clear', () => (
  // Skips dotfiles like `.git` and `.gitignore`
  del(`${OUT_DOC_DIR}/*`).catch(console.error.bind(console))
))

/**
 * Templates
 */

gulp.task('docs:templates:build', async () => {
  const mdInput = await readFile(SRC_DOC_MD, 'utf8')
  const mdOut = md(compileTemplate(mdInput)({VERSION}))

  const htmlInput = await readFile(SRC_DOC_HTML, 'utf8')
  const htmlOut = compileTemplate(htmlInput)({COMMIT, content: mdOut})

  await writeFile(OUT_DOC_HTML_FILE, htmlOut)
})

gulp.task('docs:templates:watch', () => {
  $.watch(SRC_DOC_HTML, gulp.series('docs:templates:build'))
  $.watch(SRC_DOC_MD, gulp.series('docs:templates:build'))
})

/**
 * Styles
 */

gulp.task('docs:styles:build', () => (
  gulp.src(SRC_DOC_STYLE_ENTRY)
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['> 1%', 'IE >= 10', 'iOS 7'],
    }))
    .pipe($.cleanCss({
      keepSpecialComments: 0,
      aggressiveMerging: false,
      advanced: false,
      compatibility: {properties: {colors: false}},
    }))
    .pipe(gulp.dest(OUT_DOC_DIR))
))

gulp.task('docs:styles:watch', () => {
  $.watch(SRC_DOC_STYLE_FILES, gulp.series('docs:styles:build'))
})

/**
 * Server
 */

gulp.task('docs:server', () => (
  bs.init({
    startPath: '/stylebox/',
    server: {
      baseDir: 'gh-pages',
      middleware: [
        (req, res, next) => {
          req.url = req.url.replace(/^\/stylebox\//, '').replace(/^[/]*/, '/')
          next()
        },
      ],
    },
    port: 36463,
    files: 'gh-pages',
    open: false,
    online: false,
    ui: false,
    ghostMode: false,
    notify: false,
  })
))

/**
 * Default
 */

gulp.task('buildup', gulp.parallel(
  'docs:templates:build',
  'docs:styles:build'
))

gulp.task('watch', gulp.parallel(
  'docs:templates:watch',
  'docs:styles:watch',
  'docs:server'
))

gulp.task('build', gulp.series('clear', 'buildup'))

gulp.task('default', gulp.series('clear', 'buildup', 'watch'))
