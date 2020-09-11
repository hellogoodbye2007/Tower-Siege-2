const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, dodimg, chain;
function preload(){
  dodimg=loadImage("dodecagon for throwing at blocks.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  //ground
  nilam=new Ground(length/2,height-5,length,10);
  stand=new Ground(601,250,137.5,10);
  stand.isStatic=true;
  box1=new Box(562.5,345-12.5-100,25,25);
  box2=new Box(600-12.5,345-12.5-100,25,25);
  box3=new Box(612.5,345-12.5-100,25,25);
  box4=new Box(637.5,345-12.5-100,25,25);
  box5=new Box(575,307.5-100,25,25);
  box6=new Box(600,307.5-100,25,25);
  box7=new Box(625,307.5-100,25,25);
  box8=new Box(587.5,307.5-25-100,25,25);
  box9=new Box(612.5,307.5-25-100,25,25);
  box10=new Box(600,257.5-100,25,25);
  var options={
    isStatic:false
  }
  dodecagon=Matter.Bodies.circle(100,200,15,options);
  World.add(world,dodecagon);
  chain=new SlingShot(dodecagon,{x:100,y:200});
}

function draw() {
  Engine.update(engine);
  imageMode(CENTER);
  rectMode(CENTER);
  background(0); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display(); 
  stand.display();
  push();
  translate(dodecagon.position.x,dodecagon.position.y)
  rotate(dodecagon.angle)
  image(dodimg,0,0,30,30);
  pop();
  drawSprites();
  chain.display();
}
function mouseReleased(){
  chain.fly();
}
function mouseDragged(){
  Matter.Body.setPosition(dodecagon,{x:mouseX,y:mouseY});
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(dodecagon,{x:100,y:200});
    Matter.Body.setVelocity(dodecagon,{x:0,y:0});
    chain.attach(dodecagon);
  }
}