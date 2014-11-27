# is-lrc [![Build Status](https://travis-ci.org/chentsulin/is-lrc.svg)](https://travis-ci.org/chentsulin/is-lrc)

> Check if a string is LRC

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
MIT © [Chen-Tsu Lin](https://github.com/chentsulin)