 leftX = 0;
 rightX = 0;
 difference = 0;

 function setup(){
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.position(10, 280);
   canvas = createCanvas(800, 300);
   canvas.position(330, 250);
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
 }
 function draw(){
  fill("black")
  background("yellow");
  text('Ajay V', 30, 200);
  textSize(difference);
  document.getElementById("nameTextSize").innerHTML = "The font size of my name will be - " + difference +"px"
 }
 function modelLoaded(){
     console.log("model loaded")
 }
 function gotPoses(results){
 if(results.length > 0){
     console.log(results);
     leftX = results[0].pose.leftWrist.x;
     rightX = results[0].pose.rightWrist.x;
     difference = floor(leftX - rightX);
     console.log("the X position of the left wrist is - " + leftX
      +"and the X position ofth the right wrist is - " + rightX +
      ". The Font size of my name will be - " + difference);
 }
 }