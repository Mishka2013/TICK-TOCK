function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
 background(255,255,255); 

translate(width/2,height/2);
rotate(-90);

hr = hour();
mn = minute();
sc = second();

scAngle = map(sc,0,60,0,360);
mnAngle = map(mn,0,60,0,360);
hrAngle = map(hr %12,0,12,0,360);


push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(mnAngle);
stroke(255,0,0);
strokeWeight(5);
line(0,0,100,0);
pop();

push();
rotate(hrAngle);
stroke(255,0,0);
strokeWeight(5);
line(0,0,100,0);
pop();

stroke(255,0,0);
strokeWeight(7);
noFill();
arc(0,0,280,280,0,scAngle);

stroke(0,255,0);
strokeWeight(7);
noFill();
arc(0,0,260,265,0,mnAngle);

stroke(0,0,255);
strokeWeight(7);
noFill();
arc(0,0,250,250,0,hrAngle);

noStroke();
fill(white);
ellipse(0,0,8,8);

if(hour()===12){
  alert("It's 12");
}


  drawSprites();
}