

function arrToList(arr) {
	let result = {};


	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];

		result[index] = element
	}


	return result
}

function listToArr(list) {

	let result = [];


	for (const key in list) {
		if (Object.hasOwnProperty.call(list, key)) {
			const element = list[key];

			result[key] = element
		}
	}

	return result;

}


function prepend(list, target) {
	let result = [target].concat(listToArr(list))

	return arrToList(result);
}


function nth(list, postion) {

	if (!postion) {
		return 0;
	}

	for (const key in list) {
		if (Object.hasOwnProperty.call(list, key)) {
			const element = list[key];

			console.log(element)

			if (element == postion) {
				console.log(element)
				return key;
			}
		}
	}


}
let x = arrToList([1, 34, 5667, 8])
console.log(x)
console.log(listToArr(x))
console.log(prepend(x, 2))
console.log(nth(prepend(x, 1), 2))