const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,300),20,"red","A",true);
let B = new Point(new Vector2d(500,400),20,"blue","B",true);
let C = new Point(new Vector2d(250,500),20,"yellow","C",true);

let vector = new Vector2d(1,1);
let rad = new Vector2d(1,1);

let grid = new Grid();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  grid.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);
  vector.dx = B.position.dx - A.position.dx;
  vector.dy =B.position.dy - A.position.dy;

  rad.dx = C.position.dx - A.position.dx;
  rad.dy = C.position.dy - A.position.dy;

  vector.draw(context,A.position,1);
  rad.draw(context,A.position,1);
}

animate();
