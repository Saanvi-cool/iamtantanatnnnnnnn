
nose_x = "";
nose_y = "";
leftWrist_x = "";
rightWrist_x = "";
size = "";

function setup() {
    canvas = createCanvas(550, 500);
    canvas.position(580, 120)
    webcam = createCapture(VIDEO);
    webcam.size(550, 500);
    posenet = ml5.poseNet(webcam, modelLoaded);
    posenet.on("pose", GetResults);
    background("white");
}

function draw() {
    background("white");
    fill("black");
    textSize(size);
    text("You",100,200);

}

function modelLoaded() {
    console.log("Model Loaded Succesfully!! :/")
}

function GetResults(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;
        size = Math.floor(leftWrist_x - rightWrist_x);
    }

}