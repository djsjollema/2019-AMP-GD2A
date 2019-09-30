class LinearFunction {
  constructor(slope,intercept) {
    this.slope = slope;
    this.intercept = intercept;
  }

  y(x){
    return x * this.slope + this.intercept;
  }

  defineLineWithTwoPoints(A,B){
    this.slope = (B.position.dy-A.position.dy)/(B.position.dx-A.position.dx);
    this.intercept = A.position.dy - A.position.dx * this.slope;
  }

  intersection(m){
    let ans = {};
    ans.x = (m.intercept-this.intercept)/(this.slope- m.slope);
    ans.y = this.y(ans.x);
    return ans;
  }

  draw(context){
    context.beginPath();
    context.lineWidth  = 2;
    context.strokeStyle = "rgba(0,0,255,1)";
    context.moveTo(0,this.y(0));
    context.lineTo(width,this.y(width));
    context.closePath()
    context.stroke();
  }
}
