/*
We can convert an integer to binary by dividing the integer by 2 until the integer becomes 0.
At each division by 2, the remainder corresponds to the place value of the binary form of the integer.

e.g. 6735
6735 / 2 --> 3367, remainder = 1
3367 / 2 --> 1683, remainder = 1
1683 / 2 --> 841, remainder = 1
841 / 2 --> 420, remainder = 1
420 / 2 --> 210, remainder = 0
210 / 2 --> 105, remainder = 0
105 / 2 --> 52, remainder = 1
52 / 2 --> 26, remainder = 0
26 / 2 --> 13, remainder = 0
13 / 2 --> 6, remainder = 1
6 / 2 --> 3, remainder = 0
3 / 2 --> 1, remainder = 1
1 / 2 --> 0, remainder = 1

If we take the remainders:
binary(1101001001111) = decimal(6735)

Here, the # of divisions we do (13) corresponds to the # of bits for the integer.
*/

/* First, let's look at 2 algorithms to get the # of bits (binary) for an integer. */

// #1: Bit Shifting: Right Shift (>>).
// T: O(logn)
// S: O(1)
// where n = integer value

// IMPORTANT: n >> 1 = n / 2.

const countBits1 = (int) => { // Note: n >> k = n / (2^k)
  let n = int;

  let bitCount = 0;
  while (n > 0) {
    n >>= 1; // '>>=' is equivalent to 'n = n >> 1' or 'n /= 2'
    bitCount++;
  }
  return bitCount;
}

// #2: Bit Shifting: Left Shift (<<).
// T: O(logn)
// S: O(1)
// where n = integer value

// IMPORTANT: n << 1 = n * 2.
// 1 << 0 = 1 * (2^0) = 1
// 1 << 1 = 1 * (2^1) = 2
// 1 << 2 = 1 * (2^2) = 4
// 1 << 3 = 1 * (2^3) = 8

const countBits2 = (int) => { // Note: n << k = n * (2^k)
  let bitCount = 0;

  while ((1 << bitCount) <= int) { // since 1 << k = 1 * (2^k) = 2^k, when we have 2^k > int, our loop ends.
    bitCount++;
  }
  return bitCount;
}


// TEST
console.log(`Number of bits for ${6735}: `, countBits1(6735));
console.log(`Number of bits for ${23865}: `, countBits1(23865));
console.log(`Number of bits for ${16}: `, countBits1(16));

console.log('------------------');

console.log(`Number of bits for ${6735}: `, countBits2(6735));
console.log(`Number of bits for ${23865}: `, countBits2(23865));
console.log(`Number of bits for ${16}: `, (16));

console.log('------------------');


/* Now, let's look at an algorithm for outputing the binary number as an array of 'bits'. */

// T: O(logn)
// S: O(logn) --> the output array of binary bits requires # of slots corresponding to the # of bits for integer n, which is upper bounded by log2(n)
// where n = integer value

const decimalToBinary = (int) => {
  const bitCount = countBits2(int);
  const binaryNumArr = new Array(bitCount);

  let n = int;
  let i = bitCount - 1;
  while (n > 0) {
    binaryNumArr[i] = n % 2;
    n >>= 1; // equivalent to n /= 2
    i--;
  }

  return binaryNumArr;
}


// TEST
console.log(`Integer ${6735} in Binary: `, decimalToBinary(6735));
console.log(`Integer ${23865} in Binary: `, decimalToBinary(23865));
console.log(`Integer ${16} in Binary: `, decimalToBinary(16));

console.log(Math.log2(6735))
