
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var matrix;
let matrixA = [];

let num = 5;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

 
  for(let i=1;i<=300;i++)
  {matrixA[i] = new Matrix(random(5,800), random(-400,10), random(5,10),random(5,10));}

 
}

function draw() {
  background(0); 
  Engine.update(engine);

  //for(matrix = 1; matrix = 100; matrix++);

  //rd();
  
  for(let i = 1; i<= 300; i++){
 
  matrixA[i].display();
}
  

  drawSprites();
}