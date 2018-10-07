# JAVASCRIPT ALGORITHMS

- String Reversal
- Palindromes
- Interger Reversal
- MaxChars
- The Classic FizzBuzz
- Array Chunking
- Anagrams
- Sentence Capitalization
- Printing Stps
- Two Sided Steps - Pyramids
- Find The Vowels
- Enter the Matrix Spiral
- Runtime Complexity
- Runtime Complexity in Practice - Fibonacci
- The Queue
- Underwater Queue Weaving
- Stack 'Em Up With Stacks
- Two Become One
- Linked Lists
- Find the Midpoint
- Circular Lists
- Step Back From the Tail
- Buillding a Tree
- Tree Width with Level Width
- Binary Search Trees
- Validating a Binary Search Tree
- Back to Javascript Event
- Sorting With BubbleSort
- Sort By Selection
- Ack, MergeSort

```
// install jest to global
npm install jest -g

// run test
jest folder-name/test.js --watch
```

## String Reversal

```
// solution #1
function reverse(str) {
  // normal version
  // const arr = str.split('');
  // arr.reverse();
  // return arr.join('');

  // short version
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
```
