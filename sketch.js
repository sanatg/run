var athelete,athelete_Img;
var athelete2,athelete2_Img;
var atheleteArray = [];
var canvas;
var showCanvas = 0;
var ground1;
var ground2;
var ground3;
var groundArray = []; 
var form;
var player;
//var playButton;
//var greeting;
var input;
var input2;
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var obstacle7;
var obstacle8;
var obstacleArray = [];
var endgameObstacle;//make a full displayWidth invisible end game obstacle 
var database;
var picture1,picture1_Img;
var picture2,picture2_Img;
var showpicture =0;
var picture3,picture3_Img;
var picture4,picture4_Img;
var showpicture2 =0;
var playerDistance = 0;
var playerDistance2 = 0;
var allplayerDistance = [];
var gameOver = 0;
var gameStart = 0;
var gameOver2 = 0;
var gameStart2 = 0;

//this function is to load images
function preload()
{
    athelete_Img = loadImage("./athelete.png");
    athelete2_Img = loadImage("./athelete.png");
    picture1_Img = loadImage("./player1 out.png");
    picture2_Img = loadImage("./player2won.png");
    picture3_Img = loadImage("./player2 out.png");
    picture4_Img = loadImage("./player1won.png");
}
//This function is to setup the base canvas,the athelete sprite,ground sprite,obstacle sprite,resetButton and resetButton mousePressed function,input,playButton,playButton mousePressed function
function setup()
{  
    canvas = createCanvas(displayWidth +250,500);
    canvas.parent('canvas-div');
  //  canvas.show();
    database = firebase.database();
    form = new Form(); 
    player = new Player();
    athelete = createSprite(0,200,50,50);
    athelete.addImage(athelete_Img);
    athelete2 = createSprite(0,424,50,50);
    athelete2.addImage(athelete2_Img);
    picture1 = createSprite(400,100,20,20);
    picture1.addImage(picture1_Img);
    picture2 = createSprite(400,300,20,20);
    picture2.addImage(picture2_Img);
    picture3 = createSprite(400,300,20,20);
    picture3.addImage(picture3_Img);
    picture4 = createSprite(400,100,20,20);
    picture4.addImage(picture4_Img);
    ground1 = createSprite(0,50,displayWidth +1900,5);
    ground2 = createSprite(0,225,displayWidth +1900,5);
    ground3 = createSprite(0,450,displayWidth +1900,5);
   // resetButton = createButton("reset");
   // resetButton.mousePressed(resetPlayer);
    input = createInput("Name player1");
    input2 = createInput("Name player2");
   // playButton = createButton("play");
   // playButton.mousePressed(saveName);
   // greeting = createElement();
    obstacle1 = createSprite(300,200,10,50);
    obstacle2 = createSprite(700,200,10,50);
    obstacle3 = createSprite(1000,200,10,50);
    obstacle4 = createSprite(1300,200,10,50);
    obstacle5 = createSprite(300,430,10,50);
    obstacle6 = createSprite(700,430,10,50);
    obstacle7 = createSprite(1000,430,10,50);
    obstacle8 = createSprite(1300,430,10,50);
    endgameObstacle = createSprite(1550,100,10,displayHeight -55);

}
function draw(){
    form.display();
 
    if (showCanvas) {
    background("white");
    drawSprites();
    //console.log(firebase);
   // console.log(athelete.position.y);
//49
    text("Score pl1: "+playerDistance,50,40);
    text("Score pl2: "+playerDistance2,50,250);
    text("Use up arrow to go up and right arrow to move ",200,40);
    text("Use U key to go up and R key to move ",200,250);
  // text("score")  
    player.display();

    if(showpicture === 0)
    {
     picture1.visible = false;
     picture2.visible = false;
    }
    if(showpicture === 1)
    {
     picture1.visible = true;
     picture2.visible = true;
     gameOver2 = 1;
    }
    if(showpicture2 === 0)
    {
     picture3.visible = false;
     picture4.visible = false;
    }
    if(showpicture2 === 1)
    {
     picture3.visible = true;
     picture4.visible = true;
     gameOver = 1;
    }
    //this command is to not allow athelete to go further down than ground 
    athelete.collide(ground1);
    athelete.collide(ground2);
    athelete2.collide(ground2);
    athelete2.collide(ground3);
   //athelete.collide(obstacle1);
    atheleteArray.push(athelete);
    atheleteArray.push(athelete2);
    groundArray.push(ground1);
    groundArray.push(ground2);
    groundArray.push(ground3);
    obstacleArray.push(obstacle1);
    obstacleArray.push(obstacle2);
    obstacleArray.push(obstacle3);
    obstacleArray.push(obstacle4);
    allplayerDistance.push(playerDistance);
    allplayerDistance.push(playerDistance2);
    picture2.scale = 1.3;
    //console.log(athelete.position.x,' ',athelete.position.y);
   ground1.visible = false;
   endgameObstacle.visible = false;

 //  player1_out.visible = false; 
    //this command is to move athelete ahead with right arrow
    if(keyIsDown(RIGHT_ARROW) && !(gameOver) && (gameStart))
    {
        athelete.position.x = athelete.position.x+3;
        //keyCode = 0;
       playerDistance = playerDistance+3;
      // athelete2.position.x = athelete2.position.x+3;
      // playerDistance2  = playerDistance2+3;
    }
 //console.log(athelete.position.x);

    //this command is to move athelete up with up arrow
    if(keyIsDown(UP_ARROW) && !(gameOver) && (gameStart))
    {
        athelete.position.y = athelete.position.y-6;
       
    }
    if(athelete.collide(endgameObstacle))
    {
        console.log("PLAYER1 WONNN");
        //console.log("inside athelete.collide endgameObstacle");
        player.updateScore();
        gameOver = 1;
    }


    if(keyIsDown(82) && !(gameOver2) && (gameStart2))
    {
       athelete2.position.x = athelete2.position.x+3;
       playerDistance2  = playerDistance2+3;
      keyCode = 0;
    }
    if(keyIsDown(85) && !(gameOver2) && (gameStart2))
    {
        athelete2.position.y = athelete2.position.y-6;
       
    }
    if(athelete2.collide(endgameObstacle))
    {
        console.log("PLAYER2 WONN");
        //console.log("inside athelete.collide endgameObstacle");
        player.updateScore();
        gameOver2 = 1;
    }
  //  console.log(athelete.position.x,' ',athelete.position.y);
    //if athelete is collided with obstacle1
    if(athelete.collide(obstacle1) && !(gameOver))
    {
        console.log("game over");
        //console.log("inside athelete collide obstacle1");
        player.updateScore();
        gameOver = 1;
        showpicture = 1;

    }
    //if athelete is collided with obstacle2
    if(athelete.collide(obstacle2) && !(gameOver))
    {
        console.log("game over"); 
       // console.log("inside athelete collide obstacle2")
        player.updateScore();
        gameOver = 1;
        showpicture = 1;
    }
    //if athelete is collided with obstacle3
    if(athelete.collide(obstacle3) && !(gameOver))
    {
        console.log("game over");
        //console.log("inside athelete collide obstacle3");
        player.updateScore();
        gameOver = 1;
        showpicture = 1;
    }
    //if athelete is collided with obstacle4
    if(athelete.collide(obstacle4) && !(gameOver))
    {
        console.log("game over");
       // console.log("inside athelete collide obstacle4");
        player.updateScore();
        gameOver = 1;
        showpicture = 1;
    }
    if(athelete2.collide(obstacle5) && !(gameOver2))
    {
        console.log("game over");
        //console.log("inside athelete collide obstacle1");
        player.updateScore();
        gameOver2 = 1;
        showpicture2 = 1;

    }
    //if athelete is collided with obstacle2
    if(athelete2.collide(obstacle6) && !(gameOver2))
    {
        console.log("game over"); 
       // console.log("inside athelete collide obstacle2")
        player.updateScore();
        gameOver2 = 1;
        showpicture2 = 1;
    }
    //if athelete is collided with obstacle3
    if(athelete2.collide(obstacle7) && !(gameOver2))
    {
        console.log("game over");
        //console.log("inside athelete collide obstacle3");
        player.updateScore();
        gameOver2 = 1;
        showpicture2 = 1;
    }
    //if athelete is collided with obstacle4
    if(athelete2.collide(obstacle8) && !(gameOver2))
    {
        console.log("game over");
       // console.log("inside athelete collide obstacle4");
        player.updateScore();
        gameOver2 = 1;
        showpicture2 = 1;
    }
   //this command is for gravity of the athelete
    if(athelete.position.y>=50)
    {
     athelete.position.y = athelete.position.y+4;
    }
    if(athelete2.position.y>=50)
    {
     athelete2.position.y = athelete2.position.y+4;
    }
}
}
//this function is to reset the player to its original position 
//function resetPlayer(){
   // athelete.position.x = 0;
    //gameOver = 0;
    //playerDistance = 0;
//}


