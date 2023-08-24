/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height = []) {
	let totalWater = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			let waterHeight;
			let waterWeight;
			if (height[i] > height[j]) {
				waterHeight = height[j];
			} else {
				waterHeight = height[i];
			}
			waterWeight = j - i;
			let currentWater = waterHeight * waterWeight;
			if (totalWater < currentWater) {
				totalWater = currentWater;
			}
		}
	}
	return totalWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
