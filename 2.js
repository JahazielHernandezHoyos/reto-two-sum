// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false


/**
 * @param {number} num
 * @return {boolean}
 */
let num = 16;
let num2 = 14;
let num3 = 1;
let num4 = 9;

var isPerfectSquare = function(num) {
    let i = 1;
    while(i * i < num) {
        i++;
    }
    return i * i === num;
};

isPerfectSquare(num);
isPerfectSquare(num2);
isPerfectSquare(num3);
isPerfectSquare(num4);

