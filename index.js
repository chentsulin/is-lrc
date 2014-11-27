module.exports = function(str) {
  if (/\[(\d{2,})\:(\d{2})(?:\.(\d{2}))?\]/g.test(str)) {
    return true;
  };

  return false;
};