Webcam.set({
    width : 300,
    height : 300,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('camera');

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '">';
    });
}
console.log("ml5version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7bzjBZ8XK/model.json", modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded!");
}