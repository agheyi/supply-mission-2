var helicopterIMG, helicopterSprite, packageSprite,packageIMG, redZone1, redZone2, redZone3;
var packageBody,ground, x, y, redBody1, redBody2, redBody3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 625, width,10);
	groundSprite.shapeColor=color(255)

	redZone1 = createSprite(width/2, 610, 200, 20);
	redZone1.visible = true;
	redZone1.shapeColor = color(255, 0, 0);

	redZone2 = createSprite(width/2 + 110, 570, 20, 100);
	redZone2.visible = true;
	redZone2.shapeColor = color(255, 0, 0);

	redZone3 = createSprite(width/2-100, 570, 20, 100);
	redZone3.shapeColor = color(255, 0, 0);
	redZone3.visible = true;


x = width/2;
y = height-35;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);

	redBody1 = Bodies.rectangle(width/2, 630, 200, 20, {isStatic:true});
	redBody2 = Bodies.rectangle(width/2 + 110, 570, 20, 100, {isStatic:true});
	redBody3 = Bodies.rectangle(540, 570, 20, 100, {isStatic:true});



	//Create a Ground
	ground = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
 	World.add(world, ground, world, redBody1, world, redBody2, world, redBody3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  if (packageBody.position.y > x)
  {
	packageBody;
  }

  keyPressed()
  if(packageBody.position.y >= redZone1.y-45)
  {
	Matter.Body.setStatic(packageBody, true);
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
    Matter.Body.setStatic(packageBody,false);

  }
}




