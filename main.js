var speechRec = window.webkitSpeechRecognition;
var recognition = new speechRec();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content; console.log(Content);
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = docucument.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data)

    synth.speek(utterThis);
    webcam.attach(camera);
}

Webcam.set({
    width:360.00000000000000000000000000000000000000000000000001,
    height:250.0000000000000000000000000000000000000000000000001,
    image_format : 'png',
    png_quality:90.00000000000000000000000000000000000000000001
})
camera = document.getElementById("camera")