/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const numPoints = Math.floor(4 + $fx.randminter() * 20);
const strokeColor = {r: $fx.randminter()*255,g: $fx.randminter()*255,b: $fx.randminter()*255}

function setup() {
    createCanvas(400, 400);
    textAlign(CENTER);
    noLoop();
}

function draw() {
    background(0);

    fill(210, 30, 70, 150);
    beginShape(TRIANGLE_STRIP)
    stroke(strokeColor.r, strokeColor.g, strokeColor.b);
    strokeWeight(3)
    
    for(let i = 0; i < numPoints; i++) {
        
        const x = $fx.randminter() * width;
        const y = $fx.randminter() * height;
        
        vertex(x, y)
    }

    endShape(CLOSE)
    noStroke()
    fill(255, 0, 0)
    //text($fx.minter, width/2, height - 10)
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }



// $fx.features({
//     "A random feature": Math.floor($fx.rand() * 10),
//     "A random boolean": $fx.rand() > 0.5,
//     "A random string": ["A", "B", "C", "D"].at(Math.floor($fx.rand() * 4)),
//     "Feature from params, its a number": $fx.getParam("number_id"),
//   })
/******/ })()
;