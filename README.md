# is-lrc

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Quality][codeclimate-image]][codeclimate-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Check if a string is [LRC format][lrc-format]

## Install

```sh
$ npm install is-lrc
```

## Usage

```js
var isLrc = require('is-lrc');

isLrc('[01:15.30]Some more lyrics ...');
//=> true

isLrc('[ti:Gangnam Style]');
//=> true

isLrc('<div></div>');
//=> false

isLrc('↑ ↑ ↓ ↓ ← → ← → B A');
//=> false
```

## License
MIT © [C. T. Lin](https://github.com/chentsulin)

[npm-image]: https://img.shields.io/npm/v/is-lrc.svg?style=flat-square
[npm-url]: https://npmjs.org/package/is-lrc
[travis-image]: https://travis-ci.org/chentsulin/is-lrc.svg
[travis-url]: https://travis-ci.org/chentsulin/is-lrc
[codeclimate-image]: https://img.shields.io/codeclimate/github/chentsulin/is-lrc.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/chentsulin/is-lrc
[coveralls-image]: https://img.shields.io/coveralls/chentsulin/is-lrc.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chentsulin/is-lrc
[david_img]: https://img.shields.io/david/chentsulin/is-lrc.svg
[david_site]: https://david-dm.org/chentsulin/is-lrc
[lrc-format]: http://en.wikipedia.org/wiki/LRC_(file_format)
