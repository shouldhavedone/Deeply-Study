/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let slen = s.length, tlen = t.length;
  let i = j = 0;
  while(i < slen && j < tlen) {
    if(s[i] === t[j]) i++;
    j++;
  }
  return i === slen;
};


let s = "abc", t = "ahbgdc"
console.log(isSubsequence(s, t))