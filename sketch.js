const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer , plane,iron;
var stone,rubber;
var sand1,sand2,sand3,sand4,sand5,sand5,sand6,sand8,sand9,sand10;

function setup() {
var canvas =	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here. 
	hammer = new Hammer(10,100);
    plane= new Plane(600,height,1200,20);
    stone = new Stone(700,300,100,100);
    rubber = new Rubber(950,350,70);
    sand1 = new Sand(100,300,10);
    sand2 = new Sand(200,300,10);
    sand3 = new Sand(300,300,10);
    sand4 = new Sand(400,300,10);
    sand5 = new Sand(500,300,10);
    sand6 = new Sand(600,300,10);
    sand7 = new Sand(700,300,10);
    sand8 = new Sand(800,300,10);
    sand9 = new Sand(900,300,10);
    sand10 = new Sand(1000,300,10);
    iron = new Iron(400,300,90,100)

}



function draw() {

  background("lightblue");
  Engine.update(engine);
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
iron.display();

}



