
// module aliases
let boxes = [];
const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies;
// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
    element: document.getElementById('can'),
    engine: engine
});
// remove off screen
setInterval(offSecrren, 10);
function offSecrren(){
    try {

        for (w = 0; w < boxes.length; w++) {
            if (boxes[w].position.y <= 1) {
                boxes.splice(w, 1);
                World.remove(engine.world, [boxes[w]]);
                console.log('get poped');
                count--;
            }
        }
    }catch (err) {
        console.log('little problem but its ok now')
    }
}
// on mouse click add body
let count = 0;
const options = {
    friction: .8,
    restitution: .6,
    density: 1,
    render:{
        fillStyle: 'red',
        strokeStyle: 'blue',
        lineWidth: 3
    }
}
function mousePressed() {
    try {

        //spawn square
        if (square === true) {
            boxes.push(Bodies.rectangle(event.offsetX, event.offsetY, sizeX, sizeY,options));
        }
        if (cic === true) {
            boxes.push(Bodies.circle(event.offsetX, event.offsetY, rad,options));
        }
        if (poly === true) {
            boxes.push(Bodies.polygon(event.offsetX, event.offsetY, polysize, polyrad,options));
        }
        World.add(engine.world, [boxes[count]]);
        count = count + 1
    }catch (err) {
        
    }
}
// clear world
function clearworld(){
    World.clear(engine.world, ground);
    boxes = [];
    count = 0;
}
// choose shape
let cic = false;
let poly = false;
let square = true;
// user controls body size
let sizeX = 20;
let sizeY = 20;
let rad = 20;
let polyrad = 20;
let polysize = 5;
function sizes(){
    sizeX = document.getElementById('x').value;
    sizeY = document.getElementById('y').value;
    rad = document.getElementById('radi').value;
    polyrad = document.getElementById('radipoly').value;
    polysize = document.getElementById('sides').value;
}
// add boundaries
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true});
const sky = Bodies.rectangle(400, -30, 810, 60, { isStatic: true});
const leftwall = Bodies.rectangle(-30,280, 60, 600, { isStatic: true});
const rightwall = Bodies.rectangle(830,280, 60, 600, { isStatic: true});
// add all of the bodies to the world
World.add(engine.world, [rightwall,leftwall,sky,ground]);
// run the engine
Engine.run(engine);
// run the renderer
Render.run(render);