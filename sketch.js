
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,bob1,bob2,bob3,bob4,bob5,chain1,chain2,chain3,chain4,chain5 
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


roof=new Roof(width/2,height/4,width/7,20); 
bob3=new Bob(width/2,height/4+500,40);
bob1=new Bob(width/2-80,height/4+500,40);
bob2=new Bob(width/2-40,height/4+500,40);
bob4=new Bob(width/2+40,height/4+500,40);
bob5=new Bob(width/2+80,height/4+500,40);

chain3=new Chain(bob3.body,roof.body,0,0)
chain1=new Chain(bob1.body,roof.body,-80,0)
chain2=new Chain(bob2.body,roof.body,-40,0)
chain4=new Chain(bob4.body,roof.body,+40,0)
chain5=new Chain(bob5.body,roof.body,+80,0)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  
  bob3.display();
  chain3.display();
  bob1.display();
  chain1.display();
  bob2.display();
  chain2.display();
  bob4.display();
  chain4.display();
  bob5.display();
  chain5.display();






  //drawSprites();
 
}
function keyPressed() {
   if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
     } }



