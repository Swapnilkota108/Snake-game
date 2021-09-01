 import {update as updateSnake, draw as drawSnake, snakeSpeed ,snakeHead1,eatenItself } from './snake.js'
 import {update as updateFood, draw as drawFood } from './food.js';
 import { collided } from './grid.js';
 const board = document.querySelector('.board');
 const snakeHead = document.querySelector('.snake-head');
 const food = document.querySelector('.food');
 let lastRenderTime = 0;
 let gameover = false;
 function main(currentTime){
     if(gameover){
        return alert('Game Over!');
     }
     let secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
     
     window.requestAnimationFrame(main);
     if(secondsSinceLastRender < 1/snakeSpeed ) return 
     lastRenderTime = currentTime;
    
     update();
     draw();

    
 }

 window.requestAnimationFrame(main);

 function update(){
 updateSnake();
 updateFood();
 gameOver();
 }

 function draw(){
     board.innerHTML = ' ';
 drawSnake(board);
 drawFood(board);
 }

 function gameOver(){
     gameover = collided(snakeHead1()) || eatenItself();
 }

