/**
 * Directions
 * given a string, return a new string with the reversed
 *
 * Exampple
 * reverse('apple') -> 'leppa'
 * reverse('hello') -> 'olleh'
 */

function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

module.exports = reverse;
