song1 = "";
song2 = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;
ScoreLeftWrist = 0;
songStatus = "";


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

        ScoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("ScoreLeftWrist = " + ScoreLeftWrist);

        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        console.log(" Left Wrist X = " + LeftWristX + " Left Wrist Y = " + LeftWristY);

        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log(" Right Wrist X = " + RightWristX + "Right Wrist Y = " + RightWristY);
    }
    // Write code for fetching the score of the left wrist, and assign the score of the left wrist to its respective variable which you have defined in point 1.
}

function draw() {
    image(capture, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("FF0000");

    if(ScoreLeftWrist > 0.2){
        circle(LeftWristX , LeftWristY , 20);
        song2.stop();

        if(song1 = false){
            song1.play();
        }
    }
}

function play(){
    music.play();
}


/*Define a variable to store the score of the left wrist at the beginning of the main.js file, and set the value as 0.
Define a variable with an empty string value at the beginning of the main.js file. This variable will be used to hold the status of the song files which are supposed to be played when the left wrist is in front of the webcam. Status of the song file refers to whether or not the song is playing.
Inside gotPoses() function:
Write code for fetching the score of the left wrist, and assign the score of the left wrist to its respective variable which you have defined in point 1.

Inside p5.js draw() function:
Add code for setting the color and border color for the circle.
Remember you have loaded 2 songs in p5.js preload() function, so let’s consider - playing song1 when the left wrist is shown in front of the webcam and playing song2 when the right wrist is shown in front of the webcam.
So first add code for getting the status of song1 (song1 will be played when left wrist is shown). To get the status of any song p5.js has a function - isPlaying() function.
Syntax of isPlaying() function - song_variable.isPlaying() - this will give either true(song is playing) or false(song is stopped).
Add code for getting the status of song1(song1 will be played when left wrist is shown) and store in a variable which you have defined in point 2.
Add a “if condition” to check that if the score of the left wrist is greater than 0.2 then.
Inside this “if condition”:
Add code for drawing a circle on x and y coordinates of the left wrist.
Stop song2 playing(song2 will be played when the right wrist is shown). To stop a song p5.js has a function stop() function. Syntax of song_variable.stop().
Add a “if condition” to check that the variable which is holding the status of song1 is equal to false(song is stopped).
If yes then write code for playing song1(song1 will be played when left wrist is shown).
Remember in project no.126 you had defined a heading tag with an id as “song”, and the purpose of this heading tag was to hold the song name. So Add code for updating this heading tag with the name of song1 (song1 will be played when left wrist is shown).*/