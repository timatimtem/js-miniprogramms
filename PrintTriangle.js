function makeTriangle(depth) {
	var line = "";

	for (var i = 1; i <= depth; i++) {
		for (var j = 1; j <= i; j++) {
			line += "#";
		}
		line += "\n";
	}


	return line + "\n";
}

console.log(makeTriangle(7))