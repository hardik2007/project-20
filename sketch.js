var car,car1,car2;
var wall;
var speed;
var weight;
var deformation=0.5*weight*speed*speed/22509
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 250, 50, 20);
  car1=createSprite(50, 200, 50, 20);
  car2=createSprite(50,150,50, 20);
 
  wall=createSprite(1500,200,60,height/2);

  speed=(55,90);
  weight=(400,1500);

}

function draw() {
  background(255,255,255); 
  car.velocityX=speed; 
  car1.velocityX=speed; 
  car2.velocityX=speed;
  
  if(car.isTouching(wall)){
    car.velocityX=0
      }
  if(car1.isTouching(wall)){
    car1.velocityX=0
  }
  if(car2.isTouching(wall)){
    car2.velocityX=0
  }
  if(deformation>180){
    car.shapeColor=255,0,0
  }
  drawSprites();
}