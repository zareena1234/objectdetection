img="";
status="";
objects=[];



function preload()
{
img=loadImage("dog_cat.jpg");
}


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
objectDetector=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded(){
console.log("model has loaded");
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
console.log(error);
}

else{
console.log(results);
objects=results;
}
}

 function draw()
 {
image(img, 0,0,600,500);
if(status != "")
{
for(i=0;i<objects.length;i++)
{
document.getElementById("status").innerHTML="status:object detected";
stroke("#FF0000");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x, objects[i].y);
noFill();
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

}


}
 }

