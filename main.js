prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    hight:300,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function captureImage(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="transfer_img" src= "'+data_uri+'"/>';
    });
}

console.log('ml5 version ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/w3WvzaoIS/model.json',modelLoaded);

function modelLoaded(){
    console.log(" Model is loaded ");
}

function check(){
    picture = document.getElementById("transfer_img");
    classifier.classify(picture, gotResult);
}

function gotResult(error, results) {
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
    }
}