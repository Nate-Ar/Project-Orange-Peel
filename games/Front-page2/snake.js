/*
Create by Learn Web Developement
Youtube channel : https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA
*/
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

let starter = false;

function startering() {
    starter = true;
    setInterval(draw,10)
}
// create the unit
const box = 32;

// load images

let xs = 17;
let ys = 15;

const ground = new Image();
ground.src = "img/ground3.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";


// create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 11 * box
};

// create the food

let food = {
    x : Math.floor(Math.random()*xs+1) * box,
    y : Math.floor(Math.random()*ys+3) * box
}

// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 | key == 65 && d != "RIGHT"){
        // left.play();
        d = "LEFT";
    }else if(key == 38 | key == 87 && d != "DOWN"){
        d = "UP";
        // up.play();
    }else if(key == 39 | key == 68 && d != "LEFT"){
        d = "RIGHT";
        // right.play();
    }else if(key == 40 | key == 83 && d != "UP"){
        d = "DOWN";
        // down.play();
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}



// draw everything to the canvas

function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "red" : "green";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "green";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        // eat.play();
        food = {
            x : Math.floor(Math.random()*xs+1) * box,
            y : Math.floor(Math.random()*ys+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 18*box || collision(newHead,snake)){
        clearInterval(game);
        // dead.play();
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
    // console.log(snakeX/box + 'snakeX')
    // console.log(snakeY/box + 'snakeY')
    // auto snake
    if (starter === true) {
        //first Quarter
        if (snakeY === 11 * box && snakeX === 9 * box){d = 'RIGHT'}
        if (snakeY === 11 * box && snakeX === 17 * box){d = 'DOWN'}
        if (snakeY === 12 * box && snakeX === 17 * box){d = 'LEFT'}
        if (snakeY === 12 * box && snakeX === 10 * box){d = 'DOWN'}
        if (snakeY === 13 * box && snakeX === 10 * box){d = 'RIGHT'}
        if (snakeY === 13 * box && snakeX === 17 * box){d = 'DOWN'}
        if (snakeY === 14 * box && snakeX === 17 * box){d = 'LEFT'}
        if (snakeY === 14 * box && snakeX === 10 * box){d = 'DOWN'}
        if (snakeY === 15 * box && snakeX === 10 * box){d = 'RIGHT'}
        if (snakeY === 15 * box && snakeX === 17 * box){d = 'DOWN'}
        if (snakeY === 16 * box && snakeX === 17 * box){d = 'LEFT'}
        if (snakeY === 16 * box && snakeX === 10 * box){d = 'DOWN'}
        if (snakeY === 17 * box && snakeX === 10 * box){d = 'RIGHT'}
        if (snakeY === 17 * box && snakeX === 17 * box){d = 'DOWN'}
        if (snakeY === 18 * box && snakeX === 17 * box){d = 'LEFT'}
        //second Quarter
        if (snakeY === 18 * box && snakeX === 9 * box){d = 'UP'}
        if (snakeY === 12 * box && snakeX === 9 * box){d = 'LEFT'}
        if (snakeY === 12 * box && snakeX === 8 * box){d = 'DOWN'}
        if (snakeY === 18 * box && snakeX === 8 * box){d = 'LEFT'}
        if (snakeY === 18 * box && snakeX === 7 * box){d = 'UP'}
        if (snakeY === 12 * box && snakeX === 7 * box){d = 'LEFT'}
        if (snakeY === 12 * box && snakeX === 6 * box){d = 'DOWN'}
        if (snakeY === 18 * box && snakeX === 6 * box){d = 'LEFT'}
        if (snakeY === 18 * box && snakeX === 5 * box){d = 'UP'}
        if (snakeY === 12 * box && snakeX === 5 * box){d = 'LEFT'}
        if (snakeY === 12 * box && snakeX === 4 * box){d = 'DOWN'}
        if (snakeY === 18 * box && snakeX === 4 * box){d = 'LEFT'}
        if (snakeY === 18 * box && snakeX === 3 * box){d = 'UP'}
        if (snakeY === 12 * box && snakeX === 3 * box){d = 'LEFT'}
        if (snakeY === 12 * box && snakeX === 2 * box){d = 'DOWN'}
        if (snakeY === 18 * box && snakeX === 2 * box){d = 'LEFT'}
        if (snakeY === 18 * box && snakeX === 1 * box){d = 'UP'}
        //third Quarter
        if (snakeY === 3 * box && snakeX === 1 * box){d = 'RIGHT'}
        if (snakeY === 3 * box && snakeX === 2 * box){d = 'DOWN'}
        if (snakeY === 11 * box && snakeX === 2 * box){d = 'RIGHT'}
        if (snakeY === 11 * box && snakeX === 3 * box){d = 'UP'}
        if (snakeY === 3 * box && snakeX === 3 * box){d = 'RIGHT'}
        if (snakeY === 3 * box && snakeX === 4 * box){d = 'DOWN'}
        if (snakeY === 11 * box && snakeX === 4 * box){d = 'RIGHT'}
        if (snakeY === 11 * box && snakeX === 5 * box){d = 'UP'}
        if (snakeY === 3 * box && snakeX === 5 * box){d = 'RIGHT'}
        if (snakeY === 3 * box && snakeX === 6 * box){d = 'DOWN'}
        if (snakeY === 11 * box && snakeX === 6 * box){d = 'RIGHT'}
        if (snakeY === 11 * box && snakeX === 7 * box){d = 'UP'}
        if (snakeY === 3 * box && snakeX === 7 * box){d = 'RIGHT'}
        //Fourth Quarter
        if (snakeY === 3 * box && snakeX === 17 * box){d = 'DOWN'}
        if (snakeY === 4 * box && snakeX === 17 * box){d = 'LEFT'}
        if (snakeY === 4 * box && snakeX === 8 * box){d = 'DOWN'}
        if (snakeY === 5 * box && snakeX === 8 * box){d = 'RIGHT'}
        if (snakeY === 5 * box && snakeX === 17 * box){d = 'DOWN'}
        if (snakeY === 6 * box && snakeX === 17 * box){d = 'LEFT'}
        if (snakeY === 6 * box && snakeX === 8 * box){d = 'DOWN'}
        if (snakeY === 7 * box && snakeX === 8 * box){d = 'RIGHT'}
        if (snakeY === 7 * box && snakeX === 17 * box){d = 'DOWN'}
        if (snakeY === 8 * box && snakeX === 17 * box){d = 'LEFT'}
        if (snakeY === 8 * box && snakeX === 8 * box){d = 'DOWN'}
        if (snakeY === 9 * box && snakeX === 8 * box){d = 'RIGHT'}
        if (snakeY === 9 * box && snakeX === 17 * box){d = 'DOWN'}
        if (snakeY === 10 * box && snakeX === 17 * box){d = 'LEFT'}
        if (snakeY === 10 * box && snakeX === 8 * box){d = 'DOWN'}
        if (snakeY === 11 * box && snakeX === 8 * box){d = 'RIGHT'}
    }

}

// call draw function every 100 ms

let game = setInterval(draw,95);


















