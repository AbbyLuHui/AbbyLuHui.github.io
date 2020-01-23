function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  rectMode(CORNER);
  fill(206,255,244);
  rect(0, 0, map(hour(), 0, 24, 0, 395), 400);
  fill(255,169,150);
  rect(0, 0, 400, map(minute(), 0, 60, 0, 395));
  fill(0);
  strokeWeight(5);
  line(30, 0, 30, 80);
  triangle(25, 80, 35, 80, 30, 90);
  textSize(32);
  text('M', 50, 60);
  line(0, 370, 80, 370);
  triangle(90, 370, 80, 365, 80, 375);
  text("H", 100, 380);

  fill(map(second(),0,60,0,200));
  rectMode(CENTER);
  translate(200, 200);
  translate(p5.Vector.fromAngle(map(second(),0,60,0,2*PI), 100));
  circle(0,0,30);
  translate(0,0);
}
