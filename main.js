inputName="";

function setup()
{
    canvas=createCanvas(300 , 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300 , 300)
    video.hide();
}

function preload()
{
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", ModalLoaded);
   document.getElementById("status").innerHTML = "Status = Detecting Objects";
   document.getElementById("inputName").innerHTML;
}

function ModalLoaded(status1)
{
    console.log("Modal Loaded");
    status1=true;
}
