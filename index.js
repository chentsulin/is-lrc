'use strict';

var tags = {
  title: 'ti',
  artist: 'ar',
  author: 'au',
  album: 'al',
  length: 'length',
  offset: 'offset',
  by: 'by',
  resource: 're',
  version: 've'
};

module.exports = function(str) {
  if (/\[(\d{2,})\:(\d{2})(?:\.(\d{2}))?\]/g.test(str)) {
    return true;
  }
  for (var key in tags) {
    if ((new RegExp('\\[' + tags[key] + ':([^\\]]*)\\]', 'i')).test(str)) {
      return true;
    }
  }
  return false;
};