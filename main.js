function setup(){
    canvas=createCanvas(600, 500);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded);

    video=createCapture(VIDEO);
    video.size(550, 500);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}

function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Peter', 50, 400)
}