class VigenereCipheringMachine {
	constructor (mode = true) {
		this.direct_mode = mode;
	}
	_init (message, key) {
		if(!message || !key) throw new Error('Not all params entered!');

		if (key.length >= message.length) {
			key = key.slice(0, message.length);
		} else {			
			while (message.length > key.length) {
				key +=key;				
			}
			key = key.slice(0, message.length);
		}
		this.key = key.toUpperCase();
		this.message = message.toUpperCase();
		this.result = '';
		this.lag = 0;
	}
	
	_is_letter(index) {		
		if(this.message.codePointAt(index) < 65 || this.message.codePointAt(index) > 90) {
			this.result += this.message[index];			
			this.lag --;																	 
			return false;
		} else {return true;}
	}

  encrypt(message, key) {
		this._init(message, key);
		for (let i = 0; i < this.message.length; i++){
			if(!this._is_letter(i)) continue;
			let encPos = this.key.codePointAt(i + this.lag) + (this.message.codePointAt(i) - 65);		
			encPos > 90 ? encPos -= 26 : encPos;		
			this.result += String.fromCodePoint(encPos);
		}
		if(this.direct_mode) {
			return this.result;
		} else {
			return this.result.split('').reverse().join('');
		}
  }

  decrypt(message, key) {
    this._init(message, key);
		for (let i = 0; i < this.message.length; i++){
			if(!this._is_letter(i)) continue;
			let decPos = 65 + (this.message.codePointAt(i) - this.key.codePointAt(i + this.lag));		
			decPos < 65 ? decPos += 26 : decPos;		
			this.result += String.fromCodePoint(decPos);
		}
		if(this.direct_mode) {
			return this.result;
		} else {
			return this.result.split('').reverse().join('');
		}
  }
}

module.exports = VigenereCipheringMachine;
