class LinearFunction {
  constructor(slope,intercept) {
    this.slope = slope;
    this.intercept = intercept;
  }

  y(x){
    return x * this.slope + this.intercept;
  }

  defineLineWithTwoPoints(A,B){
    this.slope = (B.y-A.y)/(B.x-A.x);
    this.intercept = A.y - A.x * this.slope;
  }
}
