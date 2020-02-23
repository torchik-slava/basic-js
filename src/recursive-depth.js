module.exports = class DepthCalculator {
	constructor () {
		this.depth = 1;
		this.stack = 0;
	}	
  calculateDepth(arr) {
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {        
				this.depth++;   
        this.stack++;
				this.calculateDepth(arr.flat());
        break;
			}          
		}
    if (this.stack === 0) {
			let result = this.depth;	
			this.depth = 1;
			return result;
		} else {
			this.stack--;
		}
	}
};