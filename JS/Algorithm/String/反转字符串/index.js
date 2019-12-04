var reverseString = function(s) {
  var temp
  var size = s.length
  for(var i = 0; i < size/2; i++){
    temp = s[i]
    s[i] = s[size - i -1]
    s[size - i - 1] = temp
  }
}

var s = ["H","a","n","n","a","h"]
reverseString(s)
console.log(s)
