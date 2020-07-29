
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ball;
var ground

function preload(){

	
}

function setup() {

	createCanvas(1350,600);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(750,593,3000,20);
	ball=new Ball(100,100,35,35);
	dustbin=new Dustbin(1050,572);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");

  ground.display();
  ball.display();
  dustbin.display();  
  
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

}

}

