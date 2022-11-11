
function renderBoard(width, height) {

	let result = '';

	for (let j = 1; j <= height; j++) {
		if (j % 2 == 0) {
			for (let i = 1; i <= width; i++) {


				if (i % 2 == 0) {
					result += '#';
					continue
				}


				result += '.';

			}
		} else {
			for (let i = 1; i <= width; i++) {


				if (i % 2 != 0) {
					result += '#';
					continue
				}


				result += '.';

			}
		}



		result += '\n';
	}



	return result;



}

console.log(renderBoard(16, 8))