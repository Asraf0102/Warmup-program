/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. */

function lessThan100(num1, num2) {
	if (num1 + num2 < 100) {
		return true
	} else {
		return false
	}
}
let value = lessThan100(52, 20)
console.log(value)
///Your code Ends here

/*
Lines For TestCase

lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(50, 50);
*/