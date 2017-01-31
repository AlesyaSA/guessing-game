class GuessingGame {
    constructor() {}

    setRange(min, max) { //this method accepts min and max value of range of number to guess
			//var a=(min+max);
			//alert (Math.round(a / 2)) ;
			this.min = min;
			this.max = max;
			



    }
    guess() {//this method returns solution candidate (you make an assumption based on range and previous assumptions)

this.a=(Math.round((this.min+this.max)/2));
		return this.a;
    }

    lower() {//this method is called if prev call of `guess()` returned number which is lower than answer

    this.max =this.a;

		return this.a;
    }

    greater() {//this method is called if prev call of `guess()` returned number which is greater than answer
      this.min = this.a;
			return this.a;

    }
}

module.exports = GuessingGame;
