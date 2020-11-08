
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrained = Matter.Constraint;

var constrained1;
var ball;

function preload()
{
	
}

function setup() {

	var canvas = createCanvas(1200,400);
    engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(600,100,500,20)

    ball= new Ball(200,200,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  ground.display();
  ball.display();
 
}



