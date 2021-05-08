var tom1 , tom2 , tom3;
var jerry1 , jerry2 , jerry3;
var together;
var bg;


function preload() {
   
    tom1 = loadAnimation("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");

    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3 = loadAnimation("images/mouse4.png");

    bg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    
   tom = createSprite(870,600);
   tom.addAnimation("tomsleeping" , tom1);
   tom.scale = 0.2;

   jerry = createSprite(870,600);
   jerry.addAnimation("jerrystanding" , jerry1);
   jerry.scale = 0.15;

   

}

function draw() {

    background(bg);

if(tom.x - jerry.x < tom.width/2 + jerry.width/2){
        
tom.velocityX = 0;
tom.addAnimation("tom last image" , tom3);
tom.x = 300;
tom.scale = 0.2;
tom.changeAnimation("tom last image");

jerry.addAnimation("jerry last image",jerry3);
jerry.scale = 0.15;
jerry.changeAnimation("jerry last image");

 }


    drawSprites();
}


function keyPressed(){

 if(keyDown === RIGHT_ARROW){

tom.velocityX = 5;
tom.addAnimation("tomRunning",tom2);
tom.changeAnimation(tom2);

jerry.addAnimation("jerryTeasing",jerry2);
jerry.changeAnimation(jerry2);


 }

}
