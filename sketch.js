var database;
var gameState = 0;
var playerCount, game, player, backgroundImg, form;
var allPlayers;
var distance = 0;
var canvas;
var car1, car2, car3, car4;
var cars;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(displayWidth - 50,displayHeight - 70);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
  if(playerCount === 4){
    game.updateState(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
    drawSprites();
  
}
