class GuessingGame {
    constructor() {}

    setRange(min, max) { //this method accepts min and max value of range of number to guess
			this.min = min;
			this.max = max;
    }
    guess() {//this method returns solution candidate (you make an assumption based on range and previous assumptions)
			this.OurGuess=(Math.round((this.min+this.max)/2));//the middle
			return this.OurGuess;
    }
    lower() {//this method is called if prev call of `guess()` returned number which is lower than answer
    this.max =this.OurGuess;
    }
    greater() {//this method is called if prev call of `guess()` returned number which is greater than answer
      this.min = this.OurGuess;
	  }
}

module.exports = GuessingGame;
