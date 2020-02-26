const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,300),20,"red","A",true);
let B = new Point(new Vector2d(500,400),20,"blue","B",true);

let grid = new Grid();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  grid.draw(context);
  A.draw(context);
  B.draw(context);
}

animate();
