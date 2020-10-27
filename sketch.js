const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18;
var block19,block20,block21,block22;
var block23,block24,block25;
var sling;
var box;
var polygon;

function preload(){
   //hexaimg=loadImage("hexa.jpg");
}
function setup() {
   var canvas = createCanvas(1000,600);
   engine = Engine.create();
   world = engine.world;

   //polygon=Bodies.circle(270,200,20,{isStatic:false});
   //World.add(world,polygon);
  // this.polygon.Visiblity=255;

// ground = new Ground(500,700,1000,5);
   stand1= new Ground(552,420,300,10);
   stand2= new Ground(860,300,150,10);

   block1=new Box(515,405,30,30);
   block2= new Box(532,405,30,30);
   block3= new Box(549,405,30,30);
   block4= new Box(566,405,30,30);
   block5= new Box(583,405,30,30);
   block6= new Box(600,405,30,30);
   block7= new Box(617,405,30,30);
   
   block8= new Box(532,390,30,30);
   block9= new Box(549,390,30,30);
   block10= new Box(566,390,30,30);
   block11= new Box(583,390,30,30);
   block12= new Box(600,390,30,30);
   
   block13= new Box(549,375,30,30);
   block14= new Box(566,375,30,30);
   block15= new Box(583,375,30,30);
   block16= new Box(566,405,30,30);
   
   block17= new Box(830,285,30,30);
   block18= new Box(845,285,30,30);
   block19= new Box(860,285,30,30);
   block20= new Box(875,285,30,30);
   block21= new Box(890,285,30,30);
   
   block22= new Box(845,270,30,30);
   block23= new Box(860,270,30,30);
   block24= new Box(875,270,30,30);
   block25= new Box(860,265,30,30);

   polygon=new Polygon(270,200,20);
   sling= new SlingShot(polygon.body,{x:250,y:225});
   box = new Ground(225,250,100,20);
}

function draw() {
  background("lightblue");  

   Engine.update(engine);

   stand1.display();
   stand2.display();

   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   
   block22.display();
   block23.display();
   block24.display();
   
   block25.display();
   
   polygon.display();
   sling.display();
   box.display();

  
  drawSprites();
}

function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
 }

function mouseReleased(){
   sling.fly();
 }

 
function keyPressed(){
   if(keyCode === 32){
      sling.attach(polygon.body);
   }
}
