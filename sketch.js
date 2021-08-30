const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, hour;


function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);
if(hour>=12){
    text("Time: "+ hour%12 + " PM",50,100)

}
else if(hour==0){
    text("Time: 12 AM ",50,100)


}
else{
    text("Time: "+ hour%12 + " AM",50,100)

}

    // write code to display time in correct format here


}
async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    console.log(datetime+"  " +hour);

    if(hour>=04 && hour<06){
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<08){
        bg = "sunrise2.png";
    }else if(hour>=23 && hour<0){
        bg = "sunset10.png";
    }else if(hour>=08 && hour<10){
        bg = "sunrise3.png";
    }else if(hour>=10 && hour<12){
            bg = "sunrise4.png";
    }else if(hour>=06 && hour<17){
                bg = "sunrise2.png";
    }else{
        bg = "sunset12.png";
    }
backgroundImg = loadImage(bg);

} 