module.exports = function transform(arr) {	
	if (!Array.isArray(arr)) throw new Error('It is not an array');
	let a = [];
	for (let i = 0; i < arr.length; i++) {
		switch(arr[i]) {
			case '--discard-next':
				i++;
				break;
			case '--discard-prev':
				a.pop();
				break;
			case '--double-next':
				if (arr[i+1] !== undefined) a.push(arr[i+1]);
				break;
			case '--double-prev':
				if (arr[i-1] !== undefined) a.push(arr[i-1]);
				break;
			default:
				a.push(arr[i]);
		}
	}
	return a;
};
