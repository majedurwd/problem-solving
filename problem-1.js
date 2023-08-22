/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		let remaining = target - nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			if (remaining === nums[j]) return [i, j];
		}
	}
	return 'Invalid Array';
}
console.log(twoSum([54, 87, 90, 52, 76, 12, 45, 36, 52, 76, 45, 87, 88], 142));
