type oddOneDigit = 1 | 3 | 5 | 7 | 9;
// oddOneDigit is a type it can only be 1,3,5,7,9

const number : oddOneDigit = 3;

// const num : oddOneDigit = 8; // Will give error

console.log(number);

type str = string | string[]; // can be string or an array of string