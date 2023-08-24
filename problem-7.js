/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * Range of Positive number is 2147483647
 * Range of Nagative number is -2147483648
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
	let isNegative = false;
	if (x < 0) {
		isNegative = true;
		x *= -1;
	}

	let reverseX = parseInt(String(x).split('').reverse().join(''));
	if (isNegative) {
		reverseX *= -1;
		if (Math.pow(-2, 31) > reverseX) return 0;
		return reverseX;
	}
	if (reverseX > Math.pow(2, 31) - 1) return 0;
	return reverseX;
};
console.log(reverse(998765689));
