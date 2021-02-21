const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground;
 

function setup() {

  var canvas=createCanvas(400,400);
 
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:false
  }
 ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
 
}

function draw() {
  background("skyblue");  
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,200);
  drawSprites();

}