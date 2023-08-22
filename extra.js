var twoSum = function (a, t) {
	let n = a.length;

	let val_index_map = {}; // store previous value vs index

	for (let i = 0; i < n; i++) {
		let curr = a[i];
		let prev = t - curr;
		if (prev in val_index_map) {
			let prev_index = val_index_map[prev];
			return [prev_index, i];
		}
		val_index_map[curr] = i;
	}
	return [-1, -1];
};

// console.log(twoSum([4, 9, 7, 5, 5, 4, 6], 15));

// const test = () => {
// 	let obj = { 8: 6, val2: 6 };
// 	console.log(obj);
// 	let prev = 8;

// 	if (prev in obj) {
// 		return true;
// 	}
// 	return false;
// };

// console.log(test());

const twoSumAdvance = (nums, target) => {
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
};

console.log(twoSumAdvance([4, 9, 7, 5, 5, 4, 6], 15));
