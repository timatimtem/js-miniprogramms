


function chicken() {
	return egg();
}

function egg() {
	return chicken();
}

console.log(chicken() + " Came first");