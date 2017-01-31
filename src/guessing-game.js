class GuessingGame {
    constructor() {}

    setRange(min, max) { //this method accepts min and max value of range of number to guess
var a=(min+max);
alert (Math.round(a / 2)) ;
    }
    guess() {//this method returns solution candidate (you make an assumption based on range and previous assumptions)
    return a;
    }

    lower() {//this method is called if prev call of `guess()` returned number which is lower than answer
      max=a;
      return this;
    }

    greater() {//this method is called if prev call of `guess()` returned number which is greater than answer
      min=a;
      return this;
    }
}

module.exports = GuessingGame;
