'use strict'

var minifier = require('html-minifier')
var minify = minifier.minify

module.exports = function(content, file, conf) {
    if (file.isHtmlLike) {
        return minify(content, conf)
    }
    return content
}
