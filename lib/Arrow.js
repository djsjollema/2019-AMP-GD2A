class Arrow {
  constructor() {


  }

  draw(context){
    let shaftHeight = 20;
    let shaftWidth = 100;
    let arrowHeight = 40;
    let arrowWidth = 40;

    context.fillStyle = "white";

    context.save();
    context.translate(canvas.width/2,canvas.height/2)

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,shaftHeight/2);
    context.lineTo(shaftWidth,shaftHeight/2);
    context.lineTo(shaftWidth,arrowHeight/2);
    context.lineTo(shaftWidth + arrowWidth,0);
    context.lineTo(shaftWidth,-arrowHeight/2);
    context.lineTo(shaftWidth,-shaftHeight/2);
    context.lineTo(0,-shaftHeight/2);
    context.closePath();
    context.stroke();
    context.fill();

    context.restore();
  }
}
