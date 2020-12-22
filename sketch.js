const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,
block9,block10,block11,block12,block13,block14,block15,block16
var player;
var ground1,ground2,ground3;
var sling;
var img;

functin preload(){
    img = loadImage("polygon.png")
}

function setup(){
    createCanvas(1500,600)
    engine = Engine.create()
    world = engine.world


    block1 = new Block(600,260,30,40)
    block2 = new Block(570,260,30,40)
    block3 = new Block(540,260,30,40)
    block4 = new Block(630,260,30,40)
    block5 = new Block(660,260,30,40)
    block6 = new Block(555,260,30,40)
    block7 = new Block(615,260,30,40)
    block8 = new Block(645,260,30,40)
    block9 = new Block(600,260,30,40)

    ground1 = new Ground(600,285,200,10)
    ground2 = new Ground(570,285,200,10)
    ground3 = new Ground(700,285,200,10)


    block10 = new Block(900,260,30,40)
    block11 = new Block(930,260,30,40)
    block12 = new Block(450,260,30,40)

    block13 = new Block(369,195,30,40)
    block14 = new Block(390,195,30,40)
    block15 = new Block(420,195,30,40)

    block16 = new Block(390,155,30,40)

    player = new player(50,200,30,30)
    sling = Slingshot(this.polygon,{x:150, y:160})

}

function draw(){
    background("blue")
    Engine.update(engine);

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

    slingshot.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition( {x: mouseX , y: mouseY});
}
}

function mouseRealeased(){
    slingshot.fly();
}