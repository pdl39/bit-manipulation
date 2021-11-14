/* We can count the digits in an integer by dividing the integer by 10 until the integer becomes 0.
At each division by 10, the remainder corresponds to the place value of the integer.
e.g. 6735
6735 / 10 --> 673, remainder = 5
673 / 10 --> 67, remainder = 3
67 / 10 --> 6, remainder = 7
6 / 10 --> 0, remainder = 6

If we take the remainders, we have
6 7 3 5 --> 6735

Here, the # of divisions we do (4) corresponds to the # of digits of the integer.
*/

// #1: while loop division.
// T: O(n)
// S: O(1)
// where n = # of digits.

const countIntDigits1 = (int) => {
  let n = int; // retain pure function characteristic by keeping argument value unchanged.

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

// #1: log base 10. (Note: logarithm is not defined for negative numbers)
// T: O(1)
// S: O(1)
// IMPORTANT: # of digits for integer n = upper bound of log10(n)
const countIntDigits2 = (int) => {
  if (int === 0) return 1; // log(0) is infinity.

  const n = int;
  return Math.floor(Math.log10(n) + 1);
}

console.log(countIntDigits1(23478));
console.log(countIntDigits2(23478));
