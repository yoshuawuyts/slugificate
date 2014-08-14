# slugificate
[![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Slugify a string, removing all non-word characters and replacing them with a
character. Defaults to a hypen, but any character can be used.

## Installation
```bash
$ npm i --save slugificate
```

## Overview
```js
var slugify = require('slugificate');

var someString = 'Dogs are larger than Cats, sometimes';

var newString = slugify(someString);
//=> 'dogs-are-larger-than-cats-sometimes'

var newerString = slugify(someString, '+');
//=> 'dogs+are+larger+than+cats+sometimes'
```

## License
[MIT](https://tldrlegal.com/license/mit-license) © [Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/slugificate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/slugificate
[travis-image]: https://img.shields.io/travis/yoshuawuyts/slugificate.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/slugificate
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/slugificate.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/slugificate?branch=master
