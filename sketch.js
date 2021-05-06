
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

 
var paper,groundobg,box1,box2,box3,paperImg,dustbin_img

function preload()
{
	dustbin_img=loadImage("dustbingreen.png")
  paperImg=loadImage("paper.png")
}

function setup(){
	createCanvas(1600,700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	
 paper= new Paper(500,20,51)
 

groundobg=new Ground(800,670,1600,20)
dustbinObj=new dustbin(1200,650);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  



  paper.display()
 groundobg.display()
 dustbinObj.display();

 
}

function keyPressed(){

  if(keyCode===32){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-75})
    
      }
}



