let playerX = 200;
let playerY = 350;
let targetX = 150;
let targetY = 50;

let enemyX = 300;
let enemyY = 200;

let playerRadius = 10;
let targetSpeed = 1;
let score = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  drawBackground('🧙‍♂️');
}

function draw() {
  if(targetX >= playerX - playerRadius && targetX <= playerX + playerRadius && targetY >= playerY - playerRadius && targetY <= playerY + playerRadius)   {
    score = score + 1;
    targetSpeed = score;
    console.log('your score is', score);
    targetX = Math.random() * width;
    targetY = Math.random() * height;
      }
  
  text('🐙', targetX, targetY);  
  text('🐳', playerX, playerY);
  text('💀', enemyX, enemyY);
  
  targetX = targetX + getMovementAmount();
  targetY = targetY + getMovementAmount();
  
  enemyX = enemyX + getMovementAmount();
  enemyY = enemyY + getMovementAmount();
  
  if(keyIsDown(LEFT_ARROW) == true) {
    playerX = playerX - 5;
  }
  if(keyIsDown(RIGHT_ARROW) == true) {
    playerX = playerX + 5;
  }
  if(keyIsDown(UP_ARROW) == true) {
    playerY = playerY - 5;
  }
  if(keyIsDown(DOWN_ARROW) == true) {
    playerY = playerY + 5;
  }
}

function mouseClicked() {
  drawBackground('🧙‍♂️');
}

function drawBackground(backgroundText) {
  background('white');
  
  for(let count = 1; count < 1000; count = count + 1) {
    text(backgroundText, Math.random() * width, Math.random() * height);
  }
}

function getMovementAmount() {
  let randomNumber = Math.random();
  
  if(randomNumber > 0.5) {
//     // move right
    return Math.random() * targetSpeed;
  } else {
//     // move left
  return Math.random() * targetSpeed * -1;
  }
}