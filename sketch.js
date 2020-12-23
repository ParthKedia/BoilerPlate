const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box;
var j;
var anything;

function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  box = new Box(300,200,50,20);
  j = new Box(200,100,30,30);

  console.log(box)

  anything = new Ground();
}

function draw() {
  background(0,0,0);  
  Engine.update(myEngine);
  
  
  box.display();
  j.display();

  anything.show();

}

