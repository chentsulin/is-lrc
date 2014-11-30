# is-lrc [![Build Status](https://travis-ci.org/chentsulin/is-lrc.svg)](https://travis-ci.org/chentsulin/is-lrc)

> Check if a string is [LRC format][1]

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

  [1]: http://en.wikipedia.org/wiki/LRC_(file_format)
