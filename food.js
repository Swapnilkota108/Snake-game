import {onSnake,expandSnake} from './snake.js';
import { getRandomGridPosition } from './grid.js';
let food = { x:10, y:1}
const expansionRate = 1;
export function update(){
if (onSnake(food)){
        expandSnake(expansionRate);
        food = getRandomFoodPosition();
}
}

export function draw(board){
        const foodEl = document.createElement('div');
        foodEl.style.gridRowStart = food.y;
        foodEl.style.gridColumnStart = food.x;
        foodEl.classList.add('food');
        board.appendChild(foodEl);
    }
    
function getRandomFoodPosition(){
    let newFoodPosition 
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = getRandomGridPosition()
    }
    return newFoodPosition;
}    