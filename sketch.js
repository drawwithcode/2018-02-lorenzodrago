var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  smooth();
  angleMode(DEGREES);
  frameRate(60);
  noCursor();
  noFill();
}
var radius = 300;
var alpha, beta, lerpVar;
var deltaX=0;
var deltaY=0;
var mult1=0;
var mult2=2;
function draw() {

  background(10,30,40);
  stroke(255);
  strokeWeight(1);
  translate(windowWidth/2,windowHeight/2);
  /*if(mouseIsPressed){
    mult2=1;
    mult1=0;
  } else {
    mult2=3;
    mult1=0;
  }*/
  for (alpha=0; alpha<360; alpha=alpha+3) {
    deltaX=cos((frameCount*2+alpha*7)%360)*15;
    deltaY=sin((frameCount*2+alpha*7)%360)*15;
    beta=(alpha+frameCount*mult2)%360;

    if(beta<=180) {
      lerpVar=beta/180;
    } else {
      lerpVar=(360-beta)/180;
    }
    stroke(lerpColor(color(200,30,255), color(255,200,30), lerpVar));
    //fill(lerpColor(color(200,30,255,10), color(255,200,30,10), lerpVar));
    //line(mouseX-windowWidth/2,mouseY-windowHeight/2,cos(alpha)*radius+deltaX,sin(alpha)*radius+deltaY);
    bezier(mouseX-windowWidth/2, mouseY-windowHeight/2,
     (cos(alpha)*radius/2+deltaX+mouseX-windowWidth/2)*.92, (sin(alpha)*radius/2+deltaY+mouseY-windowHeight/2)*.92,
     (cos(alpha)*radius+deltaX)*.6,(sin(alpha)*radius+deltaY)*.6, cos(alpha)*radius+deltaX,sin(alpha)*radius+deltaY);
  }


}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
