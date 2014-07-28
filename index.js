/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Slugify a string.
 *
 * @param {String} content
 * @return {String}
 * @api public
 */

module.exports = function(content) {
  assert('string' == typeof content, 'Content should be a string');
  return content.replace(/(\W+)/g, '-').toLowerCase();
}