class GuessingGame {
    constructor() {}

    setRange(min, max) { //this method accepts min and max value of range of number to guess
			//var a=(min+max);
			//alert (Math.round(a / 2)) ;
			this.min = min;
			this.max = max;
			this.a=(Math.round((this.min+this.max)/2));



    }
    guess() {//this method returns solution candidate (you make an assumption based on range and previous assumptions)


		return this.a;
    }

    lower() {//this method is called if prev call of `guess()` returned number which is lower than answer

    this.max = a;
		return this.a;
    }

    greater() {//this method is called if prev call of `guess()` returned number which is greater than answer
      this.min = a;
			return this.a;

    }
}

module.exports = GuessingGame;
