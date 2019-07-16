'use strict'

/**
 * Dependencies
 */

const $                 = require('gulp-load-plugins')()
const bs                = require('browser-sync')
const cp                = require('child_process')
const del               = require('del')
const gulp              = require('gulp')
const {promises}        = require('fs')
const {compileTemplate} = require('statil')
const {md}              = require('./md')

/**
 * Globals
 */

const SRC_DOC_TEMPLATE_DIR   = 'docs/templates'
const SRC_DOC_TEMPLATE_FILES = 'docs/templates/**/*'
const SRC_DOC_STATIC_FILES = 'docs/static/**/*'
const SRC_DOC_STYLE_FILES  = 'docs/styles/**/*.scss'
const SRC_DOC_STYLE_ENTRY  = 'docs/styles/docs.scss'

const OUT_DOC_DIR          = 'gh-pages'

const COMMIT               = cp.execSync('git rev-parse --short HEAD').toString().trim()

const PAGES = [
  {
    md: 'index.md',
    template: 'index.html',
    lang: 'en',
  },
  {
    md: 'index_ru.md',
    template: 'index.html',
    outPath: 'ru',
    lang: 'ru',
  },
]

/**
 * Clear
 */

gulp.task('clear', () => (
  // Skips dotfiles like `.git` and `.gitignore`
  del(`${OUT_DOC_DIR}/*`).catch(console.error.bind(console))
))

/**
 * Static
 */

gulp.task('docs:static:copy', () => (
  gulp.src(SRC_DOC_STATIC_FILES).pipe(gulp.dest(OUT_DOC_DIR))
))

gulp.task('docs:static:watch', () => {
  $.watch(SRC_DOC_STATIC_FILES, gulp.series('docs:static:copy'))
})

/**
 * Templates
 */

gulp.task('docs:templates:build', async () => {
  for (const page of PAGES) {
    const mdInput = await promises.readFile(`${SRC_DOC_TEMPLATE_DIR}/${page.md}`, 'utf8')
    const mdOut = md(compileTemplate(mdInput)())

    const pageInput  = await promises.readFile(`${SRC_DOC_TEMPLATE_DIR}/${page.template}`, 'utf8')
    const pageOutput = compileTemplate(pageInput)({
      COMMIT,
      CONTENT: mdOut,
      LANG: page.lang,
    })

    const outPath = `${OUT_DOC_DIR}/${page.outPath || ''}`

    await promises.mkdir(outPath, {recursive: true})
    await promises.writeFile(`${outPath}/${page.template}`, pageOutput)
  }
})

gulp.task('docs:templates:watch', () => {
  $.watch(SRC_DOC_TEMPLATE_FILES, gulp.series('docs:templates:build'))
})

/**
 * Styles
 */

gulp.task('docs:styles:build', () => (
  gulp.src(SRC_DOC_STYLE_ENTRY)
    .pipe($.sass())
    .pipe($.autoprefixer())
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
  'docs:static:copy',
  'docs:templates:build',
  'docs:styles:build'
))

gulp.task('watch', gulp.parallel(
  'docs:static:watch',
  'docs:templates:watch',
  'docs:styles:watch',
  'docs:server'
))

gulp.task('build', gulp.series('clear', 'buildup'))

gulp.task('default', gulp.series('clear', 'buildup', 'watch'))
