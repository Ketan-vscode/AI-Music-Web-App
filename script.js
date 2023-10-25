song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    capture = createCapture(VIDEO);
    capture.hide();
}

function draw() {
    image(capture, 0, 0, 600, 500);
}

function play(){
    music.play();
}