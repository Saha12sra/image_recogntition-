Webcam.set({
    height: 350,
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

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7QLDV5U54/model.json',modelLoaded);

function modelLoaded(){

    console.log("Model has loaded.");

}

function check(){
img=document.getElementById("capture_img");
    classifier.classify(img,gotResult);

}

function gotResult(error, results){
if(error){
    console.error(error);

}
else{
console.log(results);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_accuracy").innerHTML=(results[0].confidence.toFixed(2)*100);
}

}

