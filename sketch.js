var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
//var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4,car5;

var track, car1_img, car2_img, car3_img, car4_img,car5_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  car5_img = loadImage("images/car1.png")
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 5){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    player.Y=player.Y-0.5
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
