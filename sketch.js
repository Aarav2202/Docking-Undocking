var bgImg,spacecraftImage,spaceshipImg,spacecraftImage1
var state="undocked";

function preload() {
  spacecraftImage= loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png");
  spaceshipImg= loadImage("iss.png")
  spacecraftImage1= loadAnimation("spacecraft1.png");
  bgImg= loadImage("spacebg.jpg")

}

function setup() {
  createCanvas(800,400);
  spaceship= createSprite(400, 200, 50, 50);
  spaceship.addImage(spaceshipImg);
  spacecraft= createSprite(400, 300, 50, 50);
  spacecraft.addAnimation("undocked", spacecraftImage)
  spacecraft.addAnimation("docked", spacecraftImage1)
  spacecraft.scale=0.2
}

function draw() {
  background(bgImg);
  
  if(state !=="docked"){
    if(keyDown("right")){
      spacecraft.x+=5;
    }
    if(keyDown("left")){
      spacecraft.x+=-5;
    }
    if(keyDown("up")){
      spacecraft.y+=-5;
    }
    if(keyDown("down")){
      spacecraft.y+=5
    }
    console.log(spacecraft.x)
    console.log(spacecraft.y)
    if(spacecraft.x ===335 && spacecraft === 295){
      state="docked";
    }
  }
else{
  spacecraft.changeAnimation("docked",spacecraftImage1)
  spacecraft.y=245
}
  drawSprites();
}