var speed = 10;
var desc=1;
var x = 200;
var y = 0;


var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', -1);
}

function draw(){
  background(255);
  stroke(0);
  strokeWeight(4);
  fill("red");
  ellipse(x, y, 200, 200);
  if(x > width - 100){
    speed = -10;
    
  }
  else if (x < 100){
    speed = 10;
    
  }
  if (y > height){
    desc--;
  }
  else if (y < 100){
    desc++;
  }
  
  
  
  x += speed;
  y += desc; 



}