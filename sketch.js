const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;

var snow=[]
var maxSnow=80

function preload (){
  bg=loadImage("snow3.jpg")
}

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(800,400);


}

function draw() {
  Engine.update(engine)
  background(bg);  

  if (frameCount%5===0){
    snow.push(new Snow(i<snow.length(random(0,800)),30,30));

  }

  for(var i=0;i<maxSnow;i++){
    snow[i].display();
  }
 
}
