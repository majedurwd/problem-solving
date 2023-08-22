/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
	const len = nums.length;
	let val_index_map = {};

	for (let i = 0; i < len; i++) {
		let curr = nums[i];
		let prev = target - curr;
		if (prev in val_index_map) {
			let prev_index = val_index_map[prev];
			return [prev_index, i];
		}
		val_index_map[curr] = i;
	}
	return [-1, -1];
}
console.log(twoSum([54, 87, 90, 52, 76, 12, 45, 36, 52, 76, 45, 87, 88], 142));
