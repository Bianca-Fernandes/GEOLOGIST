const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, plane2, plane3, stone, rubber, iron, something1, something2, something3, something4, something5, something6, something7, something8, something9, something10;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    plane2 = new Plane(1200,300,20,600);
    plane3 = new Plane(0, 300, 20, 600);
    hammer = new Hammer(10,100);
    stone = new Stone(400, 550, 50, 50);
    rubber = new Rubber(800, 550, 70);
    iron = new Iron(600, 550, 100, 100);
    something1 = new Something(1000, 550, 10);
    something2 = new Something(1010, 550, 10);
    something3 = new Something(1020, 550, 10);
    something4 = new Something(1030, 550, 10);
    something5 = new Something(1040, 550, 10);
    something6 = new Something(1000, 500, 10);
    something7 = new Something(1010, 500, 10);
    something8 = new Something(1020, 500, 10);
    something9 = new Something(1030, 500, 10);
    something10 = new Something(1040, 500, 10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    plane2.display();
    plane3.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron.display();
    something1.display();
    something2.display();
    something3.display();
    something4.display();
    something5.display();
    something6.display();
    something7.display();
    something8.display();
    something9.display();
    something10.display();
}