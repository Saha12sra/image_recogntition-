Webcam.set({
    height: 330,
    width: 350,
img_format: 'png',
png_quality: 90
});
    
camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_img' src='"+data_uri+"'>"
    })
} 

Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7QLDV5U54/model.json',modelLoaded);
