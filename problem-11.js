/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height = []) {
	let totalWater = 0;
    let fPointer = 0;
	let lPointer = height.length - 1;
	while (fPointer < lPointer) {
		let waterHeigth =
			height[fPointer] < height[lPointer]
				? height[fPointer]
				: height[lPointer];
		let waterWeight = lPointer - fPointer;

		let currentWater = waterHeigth * waterWeight;

		totalWater =
			totalWater < currentWater
				? (totalWater = currentWater)
				: totalWater;

		height[fPointer] <= height[lPointer] ? fPointer++ : lPointer--;
	}
	return totalWater;
};




// beates 100%
// var maxArea = function(H) {
//     let ans = 0, i = 0, j = H.length-1
//     while (i < j) {
//         ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
//         H[i] <= H[j] ? i++ : j--
//     }
//     return ans
// };

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
