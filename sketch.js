
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var b1,b2,b3,b4,b5,b6,b7;
var gRo,chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob(180,516,70);
	b2 = new Bob(250,516,70);
	b3 = new Bob(320,516,70);
	b4 = new Bob(390,516,70);
	b5 = new Bob(460,516,70);
	b6 = new Bob(530,516,70);
	b7 = new Bob(600,516,70);

	gRo = new ground(400,100,600,50);
	chain = new Chain(b1.body,gRo.body,-BobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(215);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  gRo.display();

  chain.display();


  drawSprites();

  
 
}



