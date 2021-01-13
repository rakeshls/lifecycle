var baby,babyImage,virusImg;
var ladderImg,babyBottleImg,babyMilkImg,toyImg,babyToyImg,injectionImg,babyCryImg;
var milkGroup;
var gameState = "toddler";
var childImg ,bookImg,readingImg,ballImg,kickngImg;
var milkFlag = 0;
var toyFlag = 0;
var ladderFlag = 0;
var injectionFlag = 0;
var booksFlag = 0;
var sportsFlag = 0;
var x ;
var bg1,bg2;
var count = 0;
var gameState1 = "PLAY";
function preload(){
  babyImage = loadImage("Images/baby1.png");
  ladderImg = loadImage("Images/ladder.png");
  babyBottleImg = loadImage("Images/bottle.png");
  babyMilkImg = loadImage("Images/babyDrinkMilk.png");
 toyImg = loadImage("Images/toys.png");
 babyToyImg = loadImage("Images/happyToy.png");
 childImg = loadImage("Images/child.png");
 babyCryImg = loadImage("Images/cry.png");
 injectionImg = loadImage("Images/injection.png");
 bookImg = loadImage("Images/book.jpg");
 readingImg = loadImage("Images/readBook.png");
 bg1 = loadImage("Images/bg1.png");
 bg2 = loadImage("Images/floor.png");
ballImg = loadImage("Images/ball.png");
kickngImg = loadImage("Images/kickImg.png");
virusImg = loadImage("Images/virus.png");
} 
function setup(){
  createCanvas(displayWidth,displayHeight);
  x = width;
  baby = createSprite(20,height-100,30,10);
  baby.addImage(babyImage);
  milkGroup = new Group();
  toyGroup = new Group();
  ladderGroup = new Group();
  injectionsGroup = new Group();
  booksGroup = new Group();
  sportsGroup = new Group();
  virusGroup = new Group();
}
function draw(){
  //background("LightBlue");
  if(gameState1 === "PLAY"){
  if(keyDown(RIGHT_ARROW)){
    baby.x = baby.x+2;
  }
  if(keyDown(UP_ARROW)){
    baby.y = baby.y-4;
  }
  if(keyDown(DOWN_ARROW)){
    baby.y = baby.y+4;
  }
  if(gameState === "toddler"){
    background(bg2);
    virus();
    textSize(20);
    text("You can nurture children’s development using parenting strategies that suit their temperaments.",x,50);
     x = x-1;
    milks();
  if(milkGroup.isTouching(baby)){
    milkFlag = 1;
    baby.addImage(babyMilkImg);
    milkGroup.destroyEach();
    milkGroup.setVelocityXEach(0);
    }
  
  toys();
    if(toyGroup.isTouching(baby)){
      toyFlag = 1;
      baby.addImage(babyToyImg);
      toyGroup.destroyEach();
      toyGroup.setVelocityXEach(0);
      }
  ladders();
  if(ladderGroup.isTouching(baby)){
    ladderFlag = 1;
    ladderGroup.destroyEach();
    baby.addImage(childImg);
    gameState = "child";
  }
  injections();
  if(injectionsGroup.isTouching(baby)){
    injectionFlag = 1;
    injectionsGroup.destroyEach();
    baby.addImage(babyCryImg);
  }
    }
     if(virusGroup.isTouching(baby)){
       count = count + 1;
       virusGroup.destroyEach();
       console.log(count);
     }
     if(count >= 3){
       gameState1 = "END";
     }
    if(gameState === "child"){
      background(bg1);
      virus();
      books();
      if(booksGroup.isTouching(baby)){
        booksFlag = 1;
        booksGroup.destroyEach();
        baby.addImage(readingImg);
      }
      sports();
      if(sportsGroup.isTouching(baby)){
     sportsFlag = 1;
     sportsGroup.destroyEach();
     baby.addImage(kickngImg);
      }
    }
  }
  if (gameState1 === "END"){
    background("lightgreen")
    text("Be healthly !",200,200);
    toy
  }
  drawSprites();
}

function toys (){
  if(frameCount% 470 === 0 && toyFlag === 0){
var obstacle = createSprite(600,height-50,10,10);
obstacle.y = Math.round(random(100,height-100));
obstacle.velocityX = -3;
 obstacle.addImage(toyImg);
 obstacle.scale =0.5;
 toyGroup.add(obstacle);
  
}
  }
  function ladders  (){
    if(frameCount% 610 === 0 && ladderFlag === 0){
  var obstacle = createSprite(600,height-50,10,10);
  obstacle.y = Math.round(random(100,height-100));
  obstacle.velocityX = -3;
   obstacle.addImage(ladderImg);
   obstacle.scale =0.5;
   ladderGroup.add(obstacle);
    
  }
    }
function milks (){
  if(frameCount% 400 === 0 && milkFlag === 0){
var obstacle = createSprite(600,height-50,10,10);
obstacle.y = Math.round(random(100,height-100));
obstacle.velocityX = -3;
 obstacle.addImage(babyBottleImg);
 milkGroup.add(obstacle);
  
}

  }
function injections (){
  if(frameCount% 540 === 0 && injectionFlag === 0){
    var obstacle = createSprite(600,height-50,10,10);
    obstacle.scale = 0.3;
    obstacle.y = Math.round(random(100,height-100));
    obstacle.velocityX = -3;
     obstacle.addImage(injectionImg);
     injectionsGroup.add(obstacle);
}
}
function books(){
  if(frameCount % 400 === 0 && booksFlag === 0){
    var obstacle = createSprite(600,height-50,10,10);
    obstacle.scale = 0.5;
    obstacle.y = Math.round(random(100,height-100));
    obstacle.velocityX = -3;
     obstacle.addImage(bookImg);
     booksGroup.add(obstacle);
  }
}
function sports(){
  if(frameCount % 470 === 0 && sportsFlag === 0){
    var obstacle = createSprite(600,height-50,10,10);
    obstacle.scale = 0.5;
    obstacle.y = Math.round(random(100,height-100));
    obstacle.velocityX = -3;
     obstacle.addImage(ballImg);
     sportsGroup.add(obstacle);
  }
}
function virus(){
  if(frameCount % 250 === 0 ){
    var obstacle = createSprite(600,height-50,10,10);
    obstacle.scale = 0.5;
    obstacle.y = Math.round(random(100,height-100));
    obstacle.velocityX = -3;
     obstacle.addImage(virusImg);
     virusGroup.add(obstacle);
  }
}