// useful fx(hash) functions and global variables
// more information here: https://www.fxhash.xyz/doc/artist/project-sdk#top-level-api-reference
/*
    // FUNCTIONS
    $fx.rand()          // generates a random number based on the transaction hash of the mint
    $fx.randminter()    // generates a random number based on the minter's wallet address

    $fx.rand.reset()    // resets the $fx.rand() function
    $fx.randminter.reset()  // restes the $fx.randminter() function

    // VARIABLES
    $fx.hash            // the hash of the mint transaction
    $fx.minter          // the wallet address of the minter
    $fx.iteration       // the iteration of the mint (starts at 1)

*/

const sp = new URLSearchParams(window.location.search)

function setup() {
    let cnv = createCanvas(400, 400);

    // uncomment this line for a fullscreen canvas
    // let cnv = createCanvas(windowWidth, windowHeight); 

    // assign an id selector to our canvas. this is important later for when fx(hash) captures a preview image of your sketch
    cnv.id("my-canvas");

    // comment this out if you don't want your code to loop
    noLoop(); 
}

function draw() {
    background(120);
}