var trex, trex_running;
var ground, groundimage;
function preload(){
  trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(90,140,10,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.7;
  edges=createEdgeSprites();

  ground=createSprite(200,190,400,10);
  ground.addImage(groundimage)
  ground.velocityX=-5
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(ground); 
  drawSprites();
}
