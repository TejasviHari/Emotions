Webcam.set({
    width:300,
    height:300, 
     image_format:'png',
     png_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach("#webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("emotion-pic").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/soIzh-TxQ/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model loaded!!")
}


function check(){
    img=document.getElementById("captured_img");
    classifier.classify(img,gotResult); 

}

    function gotResult(error,results){
        if (error){
        console.error(error);

    }

    else{
        console.log(results);
       document.getElementById("emotion").innerHTML=results[0].label;
       document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);   
    }
}