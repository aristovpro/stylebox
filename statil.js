'use strict'

const pt = require('path')
const marked = require('marked')

/*
 * Markdown config
 */

marked.setOptions({
  smartypants: true,
})

/*
 * Statil config
 */

module.exports = {
  imports: {
    url (path) {
      return pt.join(pt.dirname(path), pt.parse(path).name)
    }
  },
  ignorePaths: path => (
    /^partials/.test(path)
  ),
  rename: '$&/index.html',
  renameExcept: ['index.html'],
  pipeline: [
    (content, path) => {
      if (pt.extname(path) === '.md') {
        return marked(content)
      }
    }
  ]
}
