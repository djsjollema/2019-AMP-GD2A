const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(new Vector2d(300,400),20,'yellow','1');

function animate(){
  requestAnimationFrame(animate);
  point.draw(context);
}

animate();
