const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let car = new Image();
car.src = 'car.png';
car.position = new Vector2d(0,0);
car.velocity = new Vector2d(7,0);

car.position.dy = height - car.height

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  car.position.add(car.velocity)
  context.drawImage(car, car.position.dx,car.position.dy);
  clamp()
}

animate();

function clamp(){
  if(car.position.dx > width){
    car.position.dx = -car.width;
  }
}
