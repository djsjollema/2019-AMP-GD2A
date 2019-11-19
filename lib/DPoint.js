class DPoint {
  constructor(pos,vel,acc,radius,color,label) {
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
    this.radius = radius;
    this.color = color;
    this.label = label || "";
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    context.fillStyle = "black";
    context.font = "12px new courier";
    context.fillText(this.label, this.position.dx-20, this.position.dy-this.radius-10);
  }

}
