function setup() {
  createCanvas(600, 800);
}
function draw() {
  background(0,0,0);
  
    
  //legs
  fill(178,168,166);
  noStroke();
  ellipse(200,390,45, 280);
  ellipse(260,390,45, 280);
  
  //hands
  fill(178,168,166);
  noStroke();
  ellipse(120,320,40, 200);
  ellipse(350,320,40, 200);
  
  
  //body
  fill(178,168,166);
  noStroke();
  ellipse(230,300,250,150);
  noStroke();
  ellipse(230,345,220,120);
  ellipse(230,390,160,70);
  
  fill(255, 255, 255);
  noStroke();
  ellipse(230,340, 20, 50);
  fill(255, 255, 255);
  noStroke();
  ellipse(230,340, 150, 20)
  //head
  fill(255,255,255);
  //fill(168,168,166);
  //stroke(255,255,255)
  strokeWeight(2);
  ellipse(230,190,100,210);
  ellipse(230,180,130,190);
  //eyes
  fill(0,0,0);
  noStroke();
  ellipse(200,170,45, 100);
  ellipse(260, 170,45, 100);
  //shine
  
  //mouth
  fill(0, 0, 0);
  ellipse(230, 250, 25, 10)
  //legs
  
  fill(168,168,166);
  stroke(255,255,255)
  strokeWeight(2);
  line(195,150,210, 190);
  line(250,150,270, 190);
  line(190,160,198, 180);
  line(248,160,258, 180);

  //legshine
  fill(255,255,255);
  ellipse(200,480, 2,5);
  ellipse(260,480, 2,5);
}
