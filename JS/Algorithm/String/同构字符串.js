/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if(s === t || s === '') return true;
  for(let i = 0; i < s.length - 1; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false;
  }
  return true;
};