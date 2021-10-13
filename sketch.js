var canvas;
var music;
var edges
var box;
var surface1;
var surface2;
var surface3;
var surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    edges = createEdgeSprites();

    box = createSprite(400,300,50,50)
    box.shapeColor = "white"
    box.velocityX = (6) 
    box.velocityY = (7)

    surface1 = createSprite(100,560,185,25);
    surface1.shapeColor = "red"
    surface2 = createSprite(300,560,185,25);
    surface2.shapeColor = "blue"
    surface3 = createSprite(500,560,185,25);
    surface3.shapeColor = "black"
    surface4 = createSprite(700,560,185,25);
    surface4.shapeColor = "pink"


    //create 4 different surfaces

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(box.bounceOff(surface1)){
        box.shapeColor = "red"
       }
   
       if(box.bounceOff(surface2)){
           box.shapeColor = "blue"
           box.velocityX = 0;
           box.velocityY = 0; 
           music.stop();
          }
   
          if(box.bounceOff(surface3)){
           box.shapeColor = "black"
          }
   
          if(box.bounceOff(surface4)){
           box.shapeColor = "pink"
          }   

          box.bounceOff(edges);

    drawSprites();

    //add condition to check if box touching surface and make it box
}
