export class Mathy {
  public denominator: Number;
  public answer: Number;

  constructor(d: Number) {
    this.answer = 0;
    this.denominator = d;
  }

  getDenominator() {
    return this.denominator;
  }

  getAnswer() {
    return this.answer;
  }
}

