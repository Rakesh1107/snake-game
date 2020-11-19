import {expandSnake, onSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

let food = getRandomFoodPosition();
const expansionRate = 1;

export function update() {
	if(onSnake(food)) {
		expandSnake(expansionRate);
		food=getRandomFoodPosition();
	}
}

export function draw(gameBoard) {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add('food');
	gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
	let newPosition;
	while(newPosition == null || onSnake(newPosition)) {
		newPosition = randomGridPosition();
	}
	return newPosition;
}