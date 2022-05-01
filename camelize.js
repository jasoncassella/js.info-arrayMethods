function camelize(str) {
	const array = str.split('-');

	// fix for vedor prefixes
	const newArray = array.filter(n => n);

	const capitalized = capitalizeWords(newArray);
	const lowercaseFirstLetter = capitalized[0].toLowerCase();
	capitalized.shift();
	capitalized.unshift(lowercaseFirstLetter);
	return capitalized.join('');
}

function capitalizeWords(arr) {
	return arr.map(element => {
		return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
	});
}

console.log(camelize('background-color')); // 'backgroundColor'
console.log(camelize('list-style-image')); // 'listStyleImage'
console.log(camelize('-webkit-transition')); // 'WebkitTransition'
