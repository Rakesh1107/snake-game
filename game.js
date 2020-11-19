import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersect} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';


let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
let gameOver = false;

function main(currentTime) {
	if(gameOver) {
		if(confirm('You lost. Press OK to restart.')) {
			window.location = 'index.html';
		} 
		return;

	}
	window.requestAnimationFrame(main);
	const secSinceLastRender = (currentTime - lastRenderTime) /1000;
	if(secSinceLastRender < 1 / snakeSpeed) return;
	console.log('Render');
	lastRenderTime = currentTime;
	update();
	draw();
}

window.requestAnimationFrame(main);

function update() {
	updateSnake();
	updateFood();
	checkDeath();
}

function draw() {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
	drawFood(gameBoard);
}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersect();
}