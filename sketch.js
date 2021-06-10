const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1, b2, b3;
var bike1, bike2, bike3;
var backimage;
var background;
var distance = 0;
var allPlayers;
var form, game, player;
var playerCount;
var gameState = 0;
var bike;
var bikeAtEnd = 0;
var xVel, yVel;
var xSet;
var passedFinish;

function preload() {
  groundimage = loadImage("images/ground.jpg")
  backimage = loadImage("images/track.jpg")
  bike1 = loadImage("images/bike1.png")
  bike2 = loadImage("images/bike2.png")
  bike3 = loadImage("images/bike3.png")
}

function setup() {

  createCanvas(displayWidth + 400, displayHeight + 15);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {

  background("green");

  Engine.update(engine);


  if (playerCount === 3) {
    game.update(1)
  }
  if (gameState === 1) {
    game.play();
  }
  if (bikeAtEnd === 3) {
    game.update(2);
  }
  if (gameState === 2 && bikeAtEnd === 3) {
    console.log("gameended")
  }

}