/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 === str2) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false
  }
};

gcdOfStrings("AB", "AB");
