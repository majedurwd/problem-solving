/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (list1, list2) => {
	function addNumbers(list = []) {
		return +list.join('');
	}
	let listAddition = addNumbers(list1) + addNumbers(list2);
	let result = String(listAddition)
		.split('')
		.map((x) => parseInt(x));
	return result.reverse();
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
