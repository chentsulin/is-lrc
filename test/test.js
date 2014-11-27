'use strict';
var assert = require('assert');
var isLrc = require('../');
var fs = require('fs');

it('should detect LRC if it has format : [mm:ss.xx]', function() {
  assert(isLrc('[00:12.00]Naku Penda Piya-Naku Taka Piya-Mpenziwe'));
  assert(isLrc('[01:15.30]Some more lyrics ...'));
  assert(isLrc('[10:12.10]第一行歌词'));
  assert(isLrc('[00:17.20]F: 第二行歌词'));
});

it('should not be LRC if it has incorrect format : [mm:ss.xx]', function() {
  assert( ! isLrc('[0x:12.00]Naku Penda Piya-Naku Taka Piya-Mpenziwe'));
  assert( ! isLrc('[10:122.10]Some more lyrics ...'));
  assert( ! isLrc('[00:17.2000]F: Some more lyrics ...'));
});

it('should detect LRC if it contains any of the standard LRC tags', function() {
  assert(isLrc('[ti:Let\'s Twist Again]'));
  assert(isLrc('[ar:Chubby Checker oppure  Beatles, The]'));
  assert(isLrc('[au:Written by Kal Mann / Dave Appell, 1961]'));
  assert(isLrc('[al:Hits Of The 60\'s - Vol. 2 – Oldies]'));
  assert(isLrc('[length: 2:23]'));
  assert(isLrc('[offset: +60]'));
  assert(isLrc('[by: chentsulin]'));
  assert(isLrc('[re:player]'));
  assert(isLrc('[ve:v0.1.0]'));
});

it('should not be LRC if it dose not contain standard LRC tags', function() {
  assert( ! isLrc('[tt:Let\'s Twist Again]'));
  assert( ! isLrc('[z:Chubby Checker oppure  Beatles, The]'));
});

it('should detect LRC if file is standard LRC format', function() {
  assert(isLrc(fs.readFileSync(__dirname + '/sources/test.lrc')));
});

it('should not be LRC if file is other format', function() {
  assert( ! isLrc(fs.readFileSync(__dirname + '/sources/test.html')));
  assert( ! isLrc(fs.readFileSync(__dirname + '/sources/test.json')));
  assert( ! isLrc(fs.readFileSync(__dirname + '/sources/test.xml')));
});
