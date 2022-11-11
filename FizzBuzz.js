let output = "";

for (let i = 1; i <= 100; i++) {


	if (i % 3 == 0) {

		if (i % 5 == 0) {
			output += 'FizzBuzz\n';
			continue
		}
		output += 'Fizz\n'
		continue
	}
	if (i % 5 == 0) {
		output += 'Buzz\n';
		continue

	}




	output += i + '\n';
}

console.log(output)