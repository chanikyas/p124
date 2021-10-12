function setup(){
canvas = createCanvas(500, 500)
canvas.position(560, 90)
video = createCapture(VIDEO)
video.size(500, 500)


poseNet = ml5.poseNet(video , modeloded)
poseNet.on('pose' , gotposes)

}

function modeloded(){
    console.log("poseNet is loded")
}

function gotposes(results){
    if(results.length > 0)
    {
console.log(results);
    }
}
