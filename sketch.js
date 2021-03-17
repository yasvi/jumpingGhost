var climber,climberimage;
var door,doorimage;
var tower,towerimage;
var ghostjump,ghostjumpimage;
var ghoststand,ghoststandimage;
var PLAY =1;
var END = 0;
var gameState = PLAY;
var doorsgroup;
var climbersgroup;
var invisibleblocksgroup;
var spooky

function preload(){
ghoststand = loadImage("ghost-standing.png")  
towerimage = loadImage("tower.png")
doorimage = loadImage("door.png")
climberimage = loadImage("climber.png")
spooky = loadSound("spooky.wav")  
}


function setup(){
createCanvas (600,600);

tower = createSprite(300,300,600,600);
tower.addImage(towerimage);
tower.velocityY =1;
  
ghost = createSprite(200,200,20,20);
ghost.addImage(ghoststand);
ghost.scale = 0.4;

doorsgroup = new Group();
climbersgroup = new Group();
invisibleblocksgroup = new Group();
  
spooky.loop();
  
}

function draw(){
background (0);

//console.log(tower.y) 
  
if (gameState === PLAY){  
if(tower.y > 400) { 
  tower.y = 300;
  } 
  
 if(keyDown ("space")) {
   ghost.velocityY = -5;
 }
  
 ghost.velocityY =ghost.velocityY + 0.8    
  
if(keyDown ("left")){
   ghost.x = ghost.x -3;
 }
  
  if(keyDown ("right")) {
   ghost.x =ghost.x+ 3;
 } 
 spawndoors(); 
  
if(climbersgroup.isTouching(ghost)){
  ghost.velocityY = 0; 
}
  
 if(invisibleblocksgroup.isTouching(ghost)|| ghost.y>600){
  gameState = 0; 
} 
 
  
  
drawSprites();
}

if(gameState === 0) {
fill("yellow")
textSize(50)  
text("GAME OVER ",200,300)  
}  
}

function spawndoors (){
if(frameCount%250===0){  
door = createSprite(200,-50)
door.addImage(doorimage)
door.velocityY = 1;  
  
door.x = Math.round(random(120,400));

door.depth = ghost.depth;
ghost.depth +=1;
 
climber = createSprite(200,10) 
climber.addImage(climberimage)
climber.velocityY = 1
climber.x = door.x ;

invisibleblock = createSprite (200,20)
invisibleblock.width = climber.width; 
invisibleblock.height = 2;
invisibleblock.velocityY = 1; 
invisibleblock.x = door.x;
invisibleblock.debug = false ;
invisibleblock.visible = false ;  
 
doorsgroup.add(door);
climbersgroup.add(climber);
invisibleblocksgroup.add(invisibleblock);  
}

}










