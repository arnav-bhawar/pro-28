
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sling,ball1;
var box1,box2,box3,box4,box6,box7,box8,box9;
var ground,ground2;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;




  box1 = new Obstacles(200,210,30,30);
  box2 = new Obstacles(230,210,30,30);
  box3 = new Obstacles(260,210,30,30);
  box4 = new Obstacles(220,240,30,30);
  box5 = new Obstacles(250,240,30,30);
  box6 = new Obstacles(410,420,30,30);
  box7 = new Obstacles(440,420,30,30);
  box8 = new Obstacles(470,420,30,30);
  box9 = new Obstacles(500,420,30,30);








  ball1 = new Ball(200,10);
  sling = new Sling(ball1.body,{x:200, y:50});
  ground = new Ground(100,200,100,10);
  ground2 = new Ground(400,410,400,30);




}

function draw(){
background("black");
Engine.update(engine);


sling.display();   
ball1.display();
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();








}


function fly(){
  this.sling.bodyA = null;
}

function attach(body){
  this.sling.bodyA = body;

}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keycode===32){
      slingShot.attach(bird.body);
  }
}

