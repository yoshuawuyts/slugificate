/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var should = require('should');
var slugify = require('./index');

/**
 * Test
 */

describe('slugificate', function () {
  it('should catch errors', function () {
    slugify.bind(null, 123).should.throw('Content should be a string');
    slugify.bind(null, 'hello').should.not.throw('Content should be a string');
  });
  it('should replace spaces with dashes', function () {
    var someString = 'dogs are larger than cats';
    slugify(someString).should.eql('dogs-are-larger-than-cats');
  });
  it('should lowercase letters', function () {
    var someString = 'Dogs are larger than Cats';
    slugify(someString).should.eql('dogs-are-larger-than-cats');
  });
  it('should remove symbols', function () {
    var someString = 'dogs, are? larger. than--cats';
    slugify(someString).should.eql('dogs-are-larger-than-cats');
  });
});