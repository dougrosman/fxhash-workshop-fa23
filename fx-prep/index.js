// A demo sketch to test out fx(hash). The outputs of this sketch are unique to each address

const numPoints = Math.floor(4 + $fx.randminter() * 20);
const strokeColor = {r: $fx.randminter()*255,g: $fx.randminter()*255,b: $fx.randminter()*255}

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.id("my-canvas");
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
}