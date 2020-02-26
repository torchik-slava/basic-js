module.exports = function repeater(str, options) {
	let result = '' + str,
	repeatTimes = options.repeatTimes,
	separator = options.separator || '+',
	addition = options.addition,         
	additionRepeatTimes = options.additionRepeatTimes,
	additionSeparator = options.additionSeparator || '|';	

	if(options.hasOwnProperty('addition')) result += addition; 
	
	while (additionRepeatTimes > 1) {
		result += additionSeparator + addition;
		additionRepeatTimes--;
	}
	
	if(repeatTimes>1) {
		let repeatPart = separator + result;
		while(repeatTimes>1) {
			result += repeatPart;
			repeatTimes--; 
		}
	}
	return result;
};
  