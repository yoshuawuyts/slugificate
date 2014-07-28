/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Exports.
 */

module.exports = slugificate;

/**
 * Slugify a string.
 *
 * @param {String} content
 * @param {String} symbol
 * @return {String}
 * @api public
 */

function slugificate(content, symbol) {
  assert('string' == typeof content, 'Content should be a string');
  assert('string' == typeof symbol || 'undefined' == typeof symbol, 'Symbol should be a string');
  symbol = symbol || '-'
  return content.replace(/(\W+)/g, symbol).toLowerCase();
}