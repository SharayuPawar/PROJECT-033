var Img,Img2,Img3;
var Body1Img,Body2Img,Body3Img;
var createSprite;
var backgroundImg;



function preload(){
  backgroundImg = loadImage("snow3.jpg");
Body1Img = loadImage('WINTER=1.jpg');
Body2Img = loadImage('WINTER=2.jpg');
Body3Img = loadImage('WINTER=3.jpg')
}


function setup() {
  createCanvas(800,400);

  
  Img=createSprite(70,300,50,50);
	Img.addImage(Body1Img);
  Img.scale=0.5

  Img2=createSprite(750,350,40,40);
  Img2.addImage(Body2Img)
  Img2.scale=0.1;

  Img3=createSprite(400,300,40,40);
  Img3.addImage(Body3Img)
  Img3.scale=0.7;
	

}

function draw() {
  background(backgroundImg );

  textSize(20);
  fill("lightyellow");
  text("PRESS UP ARROW, LEFT ARROW,RIGHT ARROW",100,30);


  drawSprites();

  
}

function keyPressed(){
	if(keyCode===RIGHT_ARROW){
    Img.x=Img.x+50;
	}

  if(keyCode===UP_ARROW){
    Img2.y=Img2.y-50;
	}

  if(keyCode===LEFT_ARROW){
    Img3.x=Img3.x-5;
	}
}






