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

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
