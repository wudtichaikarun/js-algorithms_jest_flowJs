// @flow

// function foo(x: ?number): string {
//   if (x) {
//     return x;
//   }
//   return 'default string';
// }

function foo(str: string) {
  return str;
}

console.log(foo('romantic'));
