



function preload(){
  //pre-load images
 jaxonrunning=loadAnimation("Runner-1.png","Runner-2.png")
 pathimage=loadImage("path.png")

}


function setup(){
  createCanvas(400,400);
 
//create ground
path=createSprite(200,200,400,400)
path.addImage("path",pathimage)
path.y=path.height/2;
path.velocityY=4
path.scale=1.2



//create sprites here
 jaxon=createSprite(200,280)
 jaxon.addAnimation("running",jaxonrunning)
 jaxon.scale=0.1;

//create invisible boundaries
invisibleboundary1=createSprite(0,200,60,500)
invisibleboundary1.visible=false

invisibleboundary2=createSprite(400,200,40,500)
invisibleboundary2.visible=false
}

function draw(){
 background(220)





if(path.y>400){
path.y= height / 2;
}







 jaxon.x=World.mouseX;


jaxon.collide(invisibleboundary1);
jaxon.collide(invisibleboundary2);


drawSprites();
}
