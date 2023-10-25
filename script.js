song1 = "";
song2 = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    capture = createCapture(VIDEO);
    capture.hide();

    poseNet = ml5.poseNet(capture , modeLoaded);
    poseNet.on("pose" , gotPoses);
}

function modeLoaded(){
    console.log("Pose Net is intitalized");
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        console.log(" Left Wrist X = " + LeftWristX + " Left Wrist Y = " + LeftWristY);

        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log(" Right Wrist X = " + RightWristX + "Right Wrist Y = " + RightWristY);
    }
}

function draw() {
    image(capture, 0, 0, 600, 500);
}

function play(){
    music.play();
}
