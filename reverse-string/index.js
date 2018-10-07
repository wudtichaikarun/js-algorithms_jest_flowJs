/**
 * Directions
 * given a string, return a new string with the reversed
 *
 * Exampple
 * reverse('apple') -> 'leppa'
 * reverse('hello') -> 'olleh'
 */

// solution#1
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// solution#2
function reverse2(str) {
  let reversed = '';
  /**
   * note avoid syntax like this
   * for(var i=0; i<str.length; i++) {}
   */
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// solution#3
function reverse3(str) {
  // normal version
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // }, '');

  // short version
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = { reverse, reverse2, reverse3 };
