const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(200,200),15,"red","A",true);
let B = new Point(new Vector2d(900,600),15,"red","B",true);
let l = new LinearFunction(0,0);
let C = new Point(new Vector2d(400,400),15,"yellow","C",true);
let m = new LinearFunction(0,0);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);
  l.defineLineWithTwoPoints(A,B);
  l.draw(context);
  m.slope = - 1/l.slope;

  m.draw(context);

  A.draw(context);
  B.draw(context);

  C.draw(context);
}

animate();
