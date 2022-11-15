function sumOfArray(arr) {
	let result = 0;
	for (const
		value in arr) {
		if (Object.hasOwnProperty.call(arr,
			value)) {
			const element = arr[
				value
			];

			result += element;
		}
	}
	return result;
}

console.log(sumOfArray(sum(1, 10)))

function sum(start, end, step) {

	let result = [start];

	while (start < end) {

		if (step) {
			start += step;
			result.push(start);
			continue
		}
		start++;
		result.push(start);
	}

	return result;

}

console.log(sum(2, 1))
console.log(sum(2, 3))
console.log(sum(2, 7))
console.log(sum(2, 10))
console.log(sum(2, 10, 2))







// console.log(sumOfRange(1, 3, 4, 5, 6))
// console.log(sumOfRange(1, 3, 4, 5))
// console.log(sumOfRange(1, 3, 4))
// console.log(sumOfRange(1, 3))
// console.log(sumOfRange(1))

