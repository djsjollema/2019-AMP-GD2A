const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];
for (var i = 0; i < 10; i++) {
  let point = new DPoint(new Vector2d(i*10,200),new Vector2d(5,3),new Vector2d(0,1),20,"yellow","point");
  points.push(point);
}


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  for (var i = 0; i < points.length; i++) {
    points[i].update();
    points[i].draw(context);
    points[i].vel.draw(context,points[i].pos,10);
  }

}

animate();
